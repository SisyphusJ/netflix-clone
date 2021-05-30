import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./requests.js";
import Banner from "./Banner";
import Nav from "./Nav.js";

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner />

            <Row title="NETFLIX ORIGINARS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow /**행이 긴 포스터일경우 boolean 형태**/ />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchToprated} />
            <Row title="Action Movies" fetchUrl={requests.fetcthActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;
