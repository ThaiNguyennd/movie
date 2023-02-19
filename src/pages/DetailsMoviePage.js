import { title } from "process";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../component/movie/MovieCard";
import { fetcher, keyId } from "../config";
import "swiper/scss";
import useSwiper from "swr";

const DetailsMoviePage = () => {
  const { movieId } = useParams();
  const { data } = useSwiper(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyId}`,
    fetcher
  );
  console.log(data);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <Fragment>
      <div className="w-full px-10 relative">
        <div className="overlay bg-black opacity-70 absolute inset-0"></div>
        <div
          className="w-full h-[600px] bg-no-repeat object-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className=" w-full max-w-[800px] h-[600px] z-10 -mt-[300px] mx-auto relative mb-32">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="mt-10 text-center font-bold text-7xl mb-10">{title}</h1>
      {genres.length && (
        <div className="flex items-center justify-center gap-x-4 mb-10">
          {genres.map((item) => (
            <span
              className="px-4 py-2 border border-primary text-primary rounded-lg"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-loose max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideo></MovieVideo>
      <MovieSimilar></MovieSimilar>
    </Fragment>
  );
};
function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSwiper(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${keyId}`,
    fetcher
  );

  if (!data) return null;
  const { cast } = data;
  if (!cast || cast <= 0) return null;
  return (
    <>
      <div className="">
        <h2 className="text-5xl text-center font-bold mt-5 mb-10">Casts</h2>
        <div className="grid grid-cols-4 gap-8 px-6">
          {cast?.length > 0 &&
            cast.slice(0, 4).map((item) => (
              <div className="" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  alt=""
                  className="w-full h-[400px] object-cover rounded-xl mb-7"
                />
                <h3 className="text-3xl mb-16 text-center">{item.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

function MovieVideo() {
  const { movieId } = useParams();
  const { data } = useSwiper(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${keyId}`,
    fetcher
  );

  if (!data) return null;
  const { results } = data;
  if (!results || results <= 0) return null;
  return (
    <div className="grid grid-cols-2 gap-8 px-10 pb-24">
      {results.length > 0 &&
        results.slice(0, 4).map((item) => (
          <div key={item.id} className="aspect-video ">
            <h3 className="text-2xl font-semibold mb-8">{item.name}</h3>
            <iframe
              width="885"
              height="498"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="d"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-fill rounded-3xl"
            ></iframe>
          </div>
        ))}
    </div>
  );
}
function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSwiper(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${keyId}`,
    fetcher
  );
  console.log(data);
  if (!data) return null;
  const { results } = data;
  if (!results || results <= 0) return null;
  return (
    <div>
      <h3 className="text-4xl font-medium mt-5 mb-10 px-10">Similar video</h3>
      <div className="movie-list px-10">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
export default DetailsMoviePage;
