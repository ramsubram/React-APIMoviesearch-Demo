/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IPost } from '../App';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Details from './Details';

interface showProps {
  content?: IPost;
  close: Function;
  onKeyDown: (value: any) => void;
  onClick: (value: any) => void;
}

interface showDetails {
  details: string;
  Title: string;
  Plot: string;
  Year: number;
  Actors: string;
  Genre: string;
  Rated: string;
}

const Showmore = ({ content, close, onKeyDown, onClick }: showProps) => {
  const [details, setDetails] = useState<showDetails>();

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
  if (!details) return null;

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
    width: 70vh;
    height: 70vh;
    background-color: white;
    text-align: left;
    padding: 40px;
    position: relative;
    &:focus {
      outline: none;
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
  `;

  const image = css`
    height: 250px;
    width: 250px;
  `;

  return (
    <div css={popup} onClick={() => close()}>
      <div
        id="showmore-container"
        tabIndex={0}
        onKeyDown={onKeyDown}
        css={popup_inner}
      >
        <img css={image} src={content.Poster} alt="" />

        <Details title="Title" content={details.Title} />
        <Details title="Actors" content={details.Actors} />
        <Details title="Plot" content={details.Plot} />
        <Details title="Genre" content={details.Genre} />
        <Details title="Year" content={details.Year} />

        {/* <p>Œ
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
