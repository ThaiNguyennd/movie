import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate =useNavigate()
  return (
    <div className="movie-card flex flex-col rounded-lg bg-slate-800 p-3 h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-4"
      />
      <div className="flex flex-col flex-1 text-white">
        <h3 className="text-xl">{title}</h3>
        <div className="flex items-center justify-between mt-2 opacity-50 text-sm mb-5">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button onClick={()=> navigate(`/movie/${id}`)} className="w-full bg-primary py-4 rounded-lg  mt-auto  ">
          Watch
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
