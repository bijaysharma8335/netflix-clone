import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { movieTrailer } from "movie-trailer";
import axios from "../../axios";
import "./Row.css";
import { IMAGE_BASE_URL } from "../../config/Config";
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);

            return request;
        }
        fetchData();
    }, [fetchUrl]);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        console.log("movie", movie, trailerUrl);
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            console.log("hello");
            // movieTrailer(null, { tmdbId: movie.id })
            //     .then((url) => {
            //         console.log("url is " + url);
            //         const urlParams = new URLSearchParams(new URL(url).search);
            //         console.log("urlParams" + urlParams);
            //         setTrailerUrl(urlParams.get("v"));
            //     })
            movieTrailer((movie ? movie.name : null) || (movie ? movie.title : null) || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
            // movieTrailer(null, { tmdbId: movie.id })
            //     .then((url) => {
            //         console.log("url", url);
            //         const urlParams = new URLSearchParams(new URL(url).search);
            //         settrailerUrl(urlParams.get("v"));
            //     })
            //     .catch((error) => console.log(error));
        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* row__posters */}
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${IMAGE_BASE_URL}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && (
                <YouTube
                    // videoId='2g811Eo7K8U'

                    videoId={trailerUrl}
                    opts={opts}
                />
            )}
        </div>
    );
};

export default Row;
// https://www.youtube.com/watch?v=XtMThy8QKqU&t=949s

// https://github1s.com/darwin619/Netflix-Clone/blob/HEAD/src/index.js#L13
