import { useEffect, useState } from "react";


import { MovieItem } from "./MovieItem";

export function MoviesSection ({ sectionTitle, moviesParams, canLoadMoviesParams }) {

    
    const [ movies, setMovies ] = useState([]);
    const [ canLoadMovies, seCanLoadMovies ] = useState(false);

    useEffect(()=>{
        setMovies(moviesParams);
        seCanLoadMovies(canLoadMoviesParams);
    }, []);


    return (    
        <>
            <p className="title is-2 has-text-white">{sectionTitle}</p>

            <br />
            <div className="columns is-multiline ">

                {
                    canLoadMovies ? 
                    movies.map((movie)=>{
                    
                        return < MovieItem key={movie.id} title={movie.title} image={movie.image} />


                    })
                    : 
                    <></>
                }

            </div>

        </>
    )
}