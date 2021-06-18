import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './Banner.css';

import axios from './Axios';
import requests from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );

            return request;
        }

        fetchData();
    }, [])

    console.log(movie);

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}>

            <div className="banner_contents">
                <h1 className="banner_title">{
                movie?.title || movie?.name || movie?.original_name
                }</h1>
                <div className="banner_buttons">
                    <Button className="banner_button"
                        variant="contained"
                        color="default"
                        startIcon={<PlayArrowIcon />}
                    >Play</Button>
                    <Button className="banner_button"
                        variant="contained"
                        color="default">My List</Button>
                </div>
                <h1 className="banner_description">
                    {truncate(
                        movie?.overview, 150
                    )}</h1>
            </div>

            <div className="banner-fadeBottom" />
        </header>

    )
}

export default Banner;
