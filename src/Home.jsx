import React, { useState } from "react";

import { MovieItem } from "./components/MovieItem";


import { MoviesSection } from "./components/MoviesSection";
import { api } from "./lib/api"
import { config } from "./config/config";

export function Home () {


  const [ movies, setMovies ] = useState([]);
  const [ canLoadMovies, setCanLoadMovies ] = useState(false);

  async function getMovies () {
    
    const movieName = document.getElementById('movieNameInput').value;

    const url = `search/movie?api_key=62029fdd0e8fc17deba6ddf63e551541&language=en-US&query=${movieName}&page=1&include_adult=false`;
    //https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey}&language=en-US&query=${movieName}&page=1&include_adult=false

    
    const response = await api.get(url);

    setMovies(response.data.results);
    setCanLoadMovies(true);
    console.log(response.data.results);
  }


  return (

      <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-7 is-offset-2">
                <input type="text" className="input" id="movieNameInput"/>
              </div>
              <div className="column is-1">
                <button className="button is-info" onClick={getMovies} >Search</button>
              </div>
            

            </div>
          

            <>
            <p className="title is-2 has-text-white">Filmes</p>

            <br />
            <div className="columns is-multiline ">

                {
                    canLoadMovies ? 
                    movies.map((movie)=>{
                    
                        return < MovieItem key={movie.id} title={movie.title} image={'https://image.tmdb.org/t/p/w500'+movie.poster_path} />


                    })
                    : 
                    <></>
                }

            </div>

        </>
            
          </div>
          



      </section>
    
  )
}