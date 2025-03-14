import { useState, useEffect } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500"; // TMDB image base URL

function Row({ fetch, movieType }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(requests[fetch]); // Fetch trending movies
        setMovies(response.data.results.slice(0, 20)); // Get first 20 movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h1 className="p-6 text-5xl text-bold">{movieType}</h1>
      <div className="p-6 flex overflow-x-scroll whitespace-nowrap scrollbar-hide space-x-4">
        {movies.map((movie) => (
          <div key={movie.id} className="shrink-0">
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className="w-48 h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
            />
            <p className="text-white text-center mt-2">{movie.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Row;
