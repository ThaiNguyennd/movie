/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import useSwiper from "swr";
import { fetcher } from "../../config";
import { useNavigate } from "react-router-dom";
// https://api.themoviedb.org/3/movie/now_playing?api_key=95de03c33a2b80e244f5e32c20b99528
const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSwiper(
    ` https://api.themoviedb.org/3/movie/${type}?api_key=95de03c33a2b80e244f5e32c20b99528`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
