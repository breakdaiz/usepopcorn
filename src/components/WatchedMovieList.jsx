import React from "react";
import WatchMovie from "./WatchMovie";

const WatchedMovieList = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map(movie => (
        <WatchMovie movie={movie} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
