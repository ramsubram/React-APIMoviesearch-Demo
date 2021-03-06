/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Nav from './components/Nav';
import Contents from './components/Contents';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Showmore from './components/Showmore';

export interface IPost {
  Poster: string;
  imdbID: string;
  Title: string;
  Year: number;
  Search: string;
}

const App = () => {
  //Variables and methods
  let [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState<IPost>();
  const [search, setSearch] = useState<string>('');
  const [reverse, setReverse] = useState<boolean>(false);
  const [select, setSelect] = useState<number>(0);
  const [debounce, setDebounce] = useState<any>();

  const body = css`
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  `;

  const bounce = () => {
    if (debounce) clearTimeout(debounce);
    const time = setTimeout(() => {
      setPosts((posts = []));
      if (search?.length >= 4) {
        axios
          .get(`http://www.omdbapi.com/?s=${search}&apikey=15372cdf`)
          .then((response) => {
            setPosts(response.data.Search);
          });
      }
    }, 300);

    setDebounce(time);
  };

  useEffect(() => {
    //Question mark is checking if search is zero return false
    // if (search !== undefined && search !== null && search.length >= 4)
    // if(search && search.length >=4)
    bounce();
  }, [search]);

  const onSort = (field: string) => {
    if (!(posts?.length > 0)) return null;
    const sortPosts = [...posts];
    let sortedList = sortPosts.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      }
      if (b[field] > a[field]) {
        return 1;
      }
      return 0;
    });

    sortedList = reverse ? sortedList.reverse() : sortedList;
    // reverse == true ? false : true
    setReverse(!reverse);
    setPosts(sortedList);
  };

  const onClick = (item: IPost) => {
    setPost(item);
  };

  const close = () => {
    setPost(undefined);
  };

  //Key for escape
  const esc = (e: any) => {
    const input = document.getElementById('input');
    if (e.keyCode === 27) {
      close();
      input?.focus();
    }
  };

  // Key for enter
  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setPost(posts[select]);
    }

    // Key down
    if (e.keyCode === 40) {
      if (select < posts.length) {
        setSelect(select + 1);
        console.log('Down', select);
      }

      // Key up
    } else if (e.keyCode === 38) {
      if (select >= 0) {
        setSelect(select - 1);
      }

      console.log('Up', select);
    }
  };

  return (
    <div onKeyDown={esc} css={body} className="App">
      <header className="App-header"></header>
      <Nav />
      <Search value={search} onChange={setSearch} onKeyDown={onKeyDown} />
      <Contents
        setSelected={setSelect}
        onClick={onClick}
        onSort={onSort}
        contents={posts}
        selected={select}
      />
      <Showmore close={close} content={post} onKeyDown={esc} />

      {/* {JSON.stringify(posts)} */}
    </div>
  );
};

export default App;
