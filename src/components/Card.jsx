import React from 'react'

const Card = (props) => {
  return (
        <div className='card'>
            <div className='column'>
            <iframe src={props.video}/>
            <div className='info'> 
                <h3 className='title'>{props.title}</h3>
                <p className='artist'>{props.artist}</p>
                <p>{props.language}</p>
            </div>
        </div>

    </div>
  )
}

export default Card