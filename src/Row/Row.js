import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from '../Axios';

const Row =(props)=> {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[props.fetchUrl]);
  
    return (
        <div style={{marginTop:'1vh'}} className="row">
            <h2> {props.title} </h2>
            <div className="row__posters">
                {movies.map((movie) =>
                    ((props.isLargeRow && movie.poster_path) || (!props.isLargeRow && movie.backdrop_path)) && (
                    <img 
                    className={`row__poster ${props.isLargeRow && "row__posterLarge"}`} 
                    key={movie.id} 
                    src={`${base_url}${ props.isLargeRow ? movie.poster_path : movie.backdrop_path}` } 
                    alt={movie.name} />
                   
                ))}
           
            </div>
            
        </div>
    )
}

export default Row; 
