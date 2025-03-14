import axios from "../utils/axios";
import requests from "../utils/requests";
import { useState, useEffect } from "react";

function Banner() {
  const [movie, setMovie] = useState({});
  const imageBaseUrl = "https://image.tmdb.org/t/p/original"; // Base URL for TMDB images

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log("request", request.data.results);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
        console.log(movie);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`, // Dynamically set the background image
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            {movie?.title || movie.name}
          </h1>
          <p className="mb-5">
            {movie?.overview ||
              "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
