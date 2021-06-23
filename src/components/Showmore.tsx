import { IPost } from '../App';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './Showmore.css';

interface showProps {
  content?: IPost;
  close: Function;
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

const Showmore = ({ content, close }: showProps) => {
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

  return (
    <div className="popup">
      <div className="popup-inner">
        <img src={content.Poster} alt="" />

        <p>
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
        </p>

        <button onClick={() => close()} className="close-cutton">
          Close
        </button>
      </div>

      <p></p>
    </div>
  );
};

export default Showmore;
