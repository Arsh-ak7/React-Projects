import React from 'react';
import './App.css';
import Row from "./Row"
import Banner from "./Banner"
import Navbar from "./Navbar"
import requests from "./requests"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetworkOriginals} isLargeRow />
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title ="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title ="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title ="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title ="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
