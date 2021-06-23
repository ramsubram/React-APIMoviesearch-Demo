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
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState<IPost>();
  const [search, setSearch] = useState<string>('');
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    //Question mark is checking if search is zero return false
    // if (search !== undefined && search !== null && search.length >= 4)
    // if(search && search.length >=4)
    if (search?.length >= 4) {
      axios
        .get(`http://www.omdbapi.com/?s=${search}&apikey=15372cdf`)
        .then((response) => {
          setPosts(response.data.Search);
        });
    }
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

  return (
    <div className="App">
      <header className="App-header"></header>
      <Nav title={['string', 'string2']} />
      <Search value={search} onChange={setSearch} />
      <Contents onClick={onClick} onSort={onSort} contents={posts} />
      <Showmore close={close} content={post} />

      {/* {JSON.stringify(posts)} */}
    </div>
  );
};

export default App;
