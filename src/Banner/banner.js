import React, { useEffect, useState } from 'react'
import './banner.css';
import axios from '../Axios';
import requests from "../Request";
import Typewriter from "typewriter-effect";
import ModalVideo from 'react-modal-video';
import movieTrailer from 'movie-trailer';
import 'react-modal-video/css/modal-video.css';

function Banner() {
  var desc ="";
  const [movie, setMovie] = useState([]);
  const [isOpen, setOpen] = useState(false);
    const [id , setId] = useState();
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  },[]);
  
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
    desc = string?.length > n ? string.substr(0, n-1) + "..." : string;
  }

    return (
        <header className="banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` , backgroundSize: "cover", backgroundPosition:'center center' }} >
        <div className="banner__contents">
          <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
            <button className="banner__button" onClick={()=> trailer(movie)}>Trailer</button>
          </div>
          <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
         {desc ? 
            <Typewriter
             onInit={(typewriter, )=> {
              typewriter         
              .typeString(desc)
              .start();
              }} />
           : null }</h1>
        </div>

        <div className="banner-fadeBottom" />
        <div>
         <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={id} onClose={() => setOpen(false)} />
        </div>
        </header>
        
    )
}

export default Banner;
