import React, { useState, useEffect } from "react";
import axios from "./Axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
	const base_url = "https://image.tmdb.org/t/p/original/";

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);

			setMovies(request.data.results);

			return request;
		}

		fetchData();
		return;
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row_posters">
				{movies.map(
					(movie) =>
						// checks for broken links
						(
							<img
								src={`${base_url}${movie.poster_path}`}
								className={`row_poster ${
									isLargeRow && "row_posterLarge"
								}`}
								alt={movie.name}
								key={movie.id}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default Row;
