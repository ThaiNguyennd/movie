import axios from "axios";
import React, { useEffect, useState } from "react";
import { SwiperSlide,Swiper } from "swiper/react";

const Banner = () => {
  const [movie, setMovies] = useState();
  useEffect(() => {
    async function fetch() {
      const reponse = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=95de03c33a2b80e244f5e32c20b99528"
      );
      if (reponse && reponse?.data?.results) setMovies(reponse.data.results);
    }
    fetch();
  }, [movie]);
  return (
    <section className="banner h-[500px] page-container mb-10 select-none">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movie?.length > 0 &&
          movie.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
const BannerItem = ({ item }) => {
    const {title,poster_path}=item
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white mb-5">
              <h2 className="font-bold text-5xl mb-6">{ title}</h2>
        <div className="flex items-center gap-x-4 mt-3">
          <span className="px-5 py-1 rounded-md border border-white">
            Action
          </span>
          <span className="px-5 py-1 rounded-md border border-white">
            Action
          </span>
          <span className="px-5 py-1 rounded-md border border-white">
            Action
          </span>
        </div>
        <button className="px-8 py-3 mt-8 text-white font-medium rounded-lg bg-red-600">
          Watch
        </button>
      </div>
    </div>
  );
};
export default Banner;
