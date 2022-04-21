import React from 'react'

function MovieCard(props) {
    const movieTitle = props.title;
    
  return (
    <>
    <div className='movieTitle'>{movieTitle}</div>
    </>
  )
}

export default MovieCard