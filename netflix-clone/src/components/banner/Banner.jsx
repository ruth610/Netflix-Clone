import React, { useEffect,useState } from 'react';
import axios from '../../utils/axios';
import './banner.css';
import requests from '../../utils/request';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
const Banner = () => {
    const [movies,setMovies]=useState(null);
    const [trailer,setTrailer] = useState('');
    useEffect(()=>{
        (async()=>{
            try {
                const request= await axios.get(requests.fetchNetflixOriginals)
                // console.log(request);
                setMovies(request.data.results[
                    Math.floor(Math.random()*request.data.results.length)
                ]);
                // console.log(movies);
            } catch (error) {
                console.log("error",error);
            }
        })();
    },[requests.fetchNetflixOriginals])
    const truncate = (str = "", n) => {
        return str.length > n ? str.substring(0, n - 1) + "..." : str;
    };
    const handleClick=(movie)=>{
        if(trailer){
            setTrailer('');
        }
        else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url)=>{
                console.log(url)
                const paramUrl= new URLSearchParams (new URL(url) .search);
                console.log(paramUrl);
                setTrailer(paramUrl.get('v'));
            })
            .catch((error)=>console.log(error))
        }
    }
    const opts={
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    }
  return (
    <div className='banner'
    style={{
        backgroundSize: 'Cover',
        backgroundImage: /*movies.backdrop_path?*/`url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`/*:"url('/default-banner.jpg')"*/,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}
    >
        <div className="banner-content">
            <div className="title">
                <h1>{movies?.title || movies?.name || movies?.original_name}</h1>
            </div>
            <div className="banner-buttons">
                <button className='banner-button play' onClick={()=>handleClick(movies)}>{trailer? "Resume": "Play"}</button>
                <button className='banner-button list'>My Lists</button>
            </div>
            <h1 className="banner-description">
                {truncate(movies?.overview,150)}
            </h1>
        </div>
        <div className="fade-bottom"></div>
        <div className='diplay-trailer'>{trailer && <YouTube videoId={trailer} opts={opts}/>}</div>
    </div>
  )
}

export default Banner;