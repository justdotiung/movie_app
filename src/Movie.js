import React from 'react';
import './Movie.css';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
    
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title} </h1>
                <div className = "Movie__Genres">
                    {genres.map((genre, index) => <MoveGenres genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                     text= {synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'/>
                </div>
            </div>
        </div>
    );
}

function MoviePoster({poster,alt}) {
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
        );
        
    }
function MoveGenres({genre}) {
    return(
        <span className="Movie__Genre">{genre}</span>
    ); 
}
Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}
MoviePoster.prototypes = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
}
MoveGenres.prototypes = {
    genre: propTypes.string.isRequired
}
export default Movie