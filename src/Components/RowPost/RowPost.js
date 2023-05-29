import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';


import './RowPost.css'

function RowPost({title, isSmall, url}) {

  const [movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data , 'movieeeeeeeeeeeeeeee');
      setMovie(res.data.results)
    })
  }, [])


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }


  const movieTrailerHandler = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
      console.log(res.data);
      if(res.data.results.length !== 0){
        setUrlId(res.data.results[0])
      }
    })
  }

  
  return (
    <div className='row'>
        <h1 className='movie-title'>{title}</h1>
        <div className='posters'>
          {movie.map((item) => {
             return <img onClick={()=> {movieTrailerHandler(item.id)}} className={isSmall ? 'small-poster' : 'poster'} src={`${imageUrl+item.backdrop_path}`} alt="card" />
          })}
    
        </div>
       { urlId && <Youtube videoId={urlId.key} opts={opts}/> }
    </div>
  )
}

export default RowPost