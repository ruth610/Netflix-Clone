import React from 'react';
import './rowlist.css';
import Row from '../Row/Row';
import requests from '../../../utils/request';
const RowList = () => {
  return (
    <>
        <Row fetchUrl={requests.fetchNetflixOriginals} title='Netflix Originals'/>
        <Row fetchUrl={requests.fetchTrading} title='Tradings'/>
        <Row fetchUrl={requests.fetchTopRatedMovies} title='Top Rated'/>
        <Row fetchUrl={requests.fetchActionMovies} title='Action Movies'/>
        {/* <Row fetchUrl={requests.fetchRomanticMovies} title='Romantic Movies'/> */}
        <Row fetchUrl={requests.fetchHorrorMovies} title='Horror Movies'/>
        <Row fetchUrl={requests.fetchComedyMovies} title='Comedy Movies'/>
        <Row fetchUrl={requests.fetchDocumentaries} title='Documentaries'/>
        <Row fetchUrl={requests.fetchTvShows} title='Tv Shows'/>
    </>
  )
}

export default RowList;