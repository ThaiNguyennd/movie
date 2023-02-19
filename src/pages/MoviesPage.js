import React, { useEffect, useState } from "react";
import useSwiper from "swr";
import MovieCard from "../component/movie/MovieCard";
import { fetcher, keyId } from "../config";
// https://api.themoviedb.org/3/search/movie?api_key=
const MoviesPage = () => {
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  const [fillter, setFillter] = useState("");
  const [submit, setSubmit] = useState();
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=95de03c33a2b80e244f5e32c20b99528"
  );
  const handleFilterChange = (e) => {
    setFillter(e.target.value);
  };
  const handleSubmit = () => {
    setSubmit(fillter);
  };
  useEffect(() => {
    if (submit) {
      setUrl(
        ` https://api.themoviedb.org/3/search/movie?api_key=${keyId}&query=${submit}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/popular?api_key=95de03c33a2b80e244f5e32c20b99528"
      );
    }
  }, [submit]);
  const { data } = useSwiper(url, fetcher);
  const movies = data?.results || [];
  return (
    <div className="p-10 ">
      <div className="w-full text-white flex items-center mb-10 ">
        <input
          type="text"
          className="w-full p-3 bg-slate-800 outline-none"
          placeholder="search movies"
          onChange={handleFilterChange}
        />
        <button onClick={handleSubmit} className="bg-primary p-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviesPage;
