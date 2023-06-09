import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';

import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
            console.log(res.data);
            const number = Math.floor(Math.random() * (20 - 0 + 1)) + 0
            setMovie(res.data.results[number])
        })
    }, [])


  return (
    <div className='banner' 
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.original_title : ''}</h1>
            <div className="buttons">
                <button className="btn">Play</button>
                <button className="btn">My list</button>
            </div>
            <h1 className="discription">{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>  
    </div>
  )
}

export default Banner