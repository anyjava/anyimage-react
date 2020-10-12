import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

interface MovieProp {
    id: number,
    year: number,
    title: string,
    summary: string,
    poster: string,
    genres: Array<string>
}

function Movie(props: MovieProp) {
    return <Link to={{
        pathname: "/movie-detail",
        state: props
    }}>
        <div className="movie">
            <img src={props.poster} alt={props.title} title={props.title} />
            <div className="movie__data">
                <h3 className="movie__title">{props.title}</h3>
                <h5 className="movie__year">{props.year}</h5>
                <ul className="genres">
                    {props.genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{props.summary}</p>

            </div>
        </div>
    </Link>
}

export default Movie;
