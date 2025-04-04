import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
const Row = ({fetchUrl,title}) => {
    const [movies,setMovies] = useState(null);
    const [trailer,setTrailer] = useState('')
    const baseUrl='https://image.tmdb.org/t/p/original';
    useEffect(()=>{
        (async()=>{
            try {
                const response= await axios.get(fetchUrl)
                // console.log(response);
                setMovies(response.data.results);
            } catch (error) {
                console.log(error);
            }
        })();
    },[fetchUrl]);
    const handleClick=(data)=>{
        if(trailer){
            setTrailer('')
        }
        else{
            movieTrailer(data?.title  || data?.name || data?.original_name)
            .then((url)=>{
                console.log(url)
                const urlParam= new URLSearchParams( new URL(url).search)
                console.log(urlParam.get('v'));
                setTrailer(urlParam.get('v'));
            })
        }
    }
    // console.log(movies)
    const opts={
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    }
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      ]
  };
  return (
    <div className='container-categories'>
        <div className="title">{title}</div>
        <div className="movies-container">
            <Slider {...settings}>
            {
                movies && movies.length?movies.map((data,index)=>(
                    <div 
                        className="movie-container" 
                        key={index}
                        onClick={()=>handleClick(data)}
                    >
                            <div className="row-poster">
                                <img src={baseUrl+data.poster_path} alt={data.name} width={150}/>
                                <div className="movie-title">{data.name}</div>
                            </div>
                    </div>
                ))
            :<p>Loading...</p>}
            </Slider>
        </div>
        <div className="trailer-display">
            {trailer && <YouTube videoId={trailer} opts={opts}/>}
        </div>
    </div>
  )
}

export default Row;