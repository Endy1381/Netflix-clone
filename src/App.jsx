import { useState, useEffect } from "react";
import "./App.css";
import Header from "./comp/header";
import Footer from "./comp/footer";
import Banner from "./comp/Banner";
import Row from "./comp/row";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Row fetch="fetchTrending" movieType="Trending" />
      <Row fetch="fetchTopRated" movieType="Top-rated" />
      <Row fetch="fetchActionMovies" movieType="Action" />
      <Row fetch="fetchComedyMovies" movieType="Comedy" />
      <Row fetch="fetchHorrorMovies" movieType="Horror" />
      <Row fetch="fetchRomanceMovies" movieType="Romance" />
      <Row fetch="fetchDocumentaries" movieType="Documentaries" />
      <Row fetch="fetchTvShows" movieType="Tv-show" />
      <Footer />
      <h1>hallo there bruvv</h1>
    </>
  );
}

export default App;
