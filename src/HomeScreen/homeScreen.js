import React from 'react';
import Nav from '../Nav/nav';
import Banner from '../Banner/banner';
import './homeScreen.css'
import requests from '../Request';
import Row from '../Row/Row';
import Footer from '../Footer/footer.js'

function HomeScreen (){
 return(
     <div className="homeScreen">
         <Nav />
         <Banner />
         <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
         <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} />
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={false} />
         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={false} />
         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={false} />
         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow={false} />
         <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false} />
         <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow={false} />
         <Footer/>
     </div>
 )
}

export default HomeScreen;