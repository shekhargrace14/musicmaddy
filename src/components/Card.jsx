import React from 'react'
import SongPage from '../pages/SongPage'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    
    <div className='column'>
      <Link to="SongPage">

          <div className='card'>
            <iframe title={props.title} src={props.video}/>
               <div className='info'> 
                <h3 className='title'>{props.title}</h3>
                <p className='artist'>{props.artist}</p>
                <p>{props.language}</p>
                <button></button>
            </div>
           </div>
      </Link>
      </div>

  )
}

export default Card