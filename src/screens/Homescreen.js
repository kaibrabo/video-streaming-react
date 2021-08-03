import React from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from "../Row";
import requests from "../Requests";
import './Homescreen.css';


function Homescreen() {
    return (
        <div className="home_screen">
            <Nav />

            <Banner />

            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Comedies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
                        <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default Homescreen;
