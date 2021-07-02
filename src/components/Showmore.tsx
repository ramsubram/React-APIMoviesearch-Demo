/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IPost } from '../App';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Details from './Details';
import { Skeleton } from '@material-ui/lab';

interface showProps {
  content?: IPost;
  close: Function;
  onKeyDown: (value: any) => void;
}

interface showDetails {
  details: string;
  Title: string;
  Plot: string;
  Year: number;
  Actors: string;
  Genre: string;
  Rated: string;
  Poster: string;
}

const Showmore = ({ content, close, onKeyDown }: showProps) => {
  const [details, setDetails] = useState<showDetails>();
  const domeNode: any = useRef();

  useEffect(() => {
    if (content) {
      axios
        .get(`http://www.omdbapi.com/?i=${content?.imdbID}&apikey=15372cdf`)
        .then((response) => {
          setDetails(response.data);
        });
    } else {
      setDetails(undefined);
    }
  }, [content]);
  if (!content) return null;

  setTimeout(() => {
    const el = document.getElementById('showmore-container');
    console.log('Tittel: ', el);
    el?.focus();
  }, 10);

  const popup = css`
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  `;

  const popup_inner = css`
    padding: 1px;
    box-shadow: 6px 12px 8px #888888;
    overflow: auto;
    width: 70vh;
    height: 70vh;
    background-color: white;
    text-align: left;
    padding: 40px;
    position: relative;
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 800px) {
      width: 90vh;
      height: 90vh;
    }
  `;

  const button = css`
    top: 5px;
    right: 5px;
    background-color: red; /* Green */
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    align-content: right;
    position: absolute;

    @media screen and (max-width: 800px) {
      position: fixed;
    }
  `;

  const image = css`
    height: 346px;
    width: 246px;

    @media screen and (max-width: 800px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const closeOuter = (e: any) => {
    // console.log(e.target);
    // console.log(domeNode);
    if (!domeNode.current.contains(e.target)) {
      close();
    }
  };

  return (
    <div onMouseDown={(e) => closeOuter(e)} css={popup}>
      <div
        ref={domeNode}
        id="showmore-container"
        tabIndex={0}
        onKeyDown={onKeyDown}
        css={popup_inner}
      >
        {details ? (
          <img css={image} src={details?.Poster || ''} alt="" />
        ) : (
          <Skeleton variant="rect" width={246} height={346} />
        )}

        <Details title="Title" content={details?.Title} />
        <Details title="Actors" content={details?.Actors} />
        <Details title="Plot" content={details?.Plot} />
        <Details title="Genre" content={details?.Genre} />
        <Details title="Year" content={details?.Year} />

        {/* <p>
          <b>Title: </b>
          {details.Title}
        </p>
        <p>
          <b>Year:</b> {details.Year}
        </p>
        <p>
          <b>Rated:</b> {details.Rated}
        </p>
        <p>
          <b>Actors:</b> {details.Actors}
        </p>
        <p>
          <b>Genre:</b> {details.Genre}
        </p>
        <p>
          <b>Plot:</b> {details.Plot}
        </p> */}

        <button onClick={() => close()} css={button}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Showmore;
