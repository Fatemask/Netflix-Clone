import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from '../Axios';
import Popover from 'react-bootstrap/Popover';
import movieTrailer from 'movie-trailer';
import 'react-modal-video/css/modal-video.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ModalVideo from 'react-modal-video';

const Row =(props)=> {
    const [movies, setMovies] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [movie, setMovie] = useState("movie name");
    const [id , setId] = useState();
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[props.fetchUrl]);

   const trailer =(movie)=>{
       setOpen(true);
       var name = movie.name ?movie.name : movie.title;
       
        movieTrailer(name, {id: true, multi: true} ).then(response =>{
            if(response){
            setId(response[0]);
            }else{
                setId('gdZLi9oWNZg')
            }
        })
   } 
   
    
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1)+"..." : string;
    }

    var popover = (
        <Popover id="popover-basic">
            <div className="right">
            <h3>{movie.name ? movie.name : movie.title}</h3>
            <p>
                {truncate(movie?.overview, 250)}
            </p>
            </div>
        </Popover>
    );
		  
    return (
        <div style={{marginTop:'1vh'}} className="row__main">
            <h2> {props.title} </h2>
            <div className="row__posters">
                {movies.map((movie) =>
                    ((props.isLargeRow && movie.poster_path) || (!props.isLargeRow && movie.backdrop_path)) && (
                    
                     <OverlayTrigger
                        placement="right" 
                        overlay={popover}
                    >                    
                        <img 
                        className={`row__poster ${props.isLargeRow && "row__posterLarge"}`} 
                        key={movie.id} 
                        src={`${base_url}${ props.isLargeRow ? movie.poster_path : movie.backdrop_path}` } 
                        alt={movie.name}
                        onMouseEnter={() => setMovie(movie)}
                        onClick={()=> trailer(movie)}
                        variant="success" />     
                        
                    </OverlayTrigger>
                    
                ))}
                    <div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={id} onClose={() => setOpen(false)} />
                    </div>
            </div>
            
        </div>
    )
}

export default Row; 
