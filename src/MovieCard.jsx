import React from "react";

const MovieCard  = ({movie})=>{
    return (
        <div className="movie">
                <div>
                    <p>{movie.Year}</p>
                </div>

                <div><img src={movie.Poster !== 'N/A'? movie.Poster : 'https://media.istockphoto.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=0&k=20&c=JN4E5qJgcq3qm89rSc2BIJT6AZ80MvRJie__r3OENY8='}
                    alt={movie.Poster}
                /></div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
    )
}

export default MovieCard;