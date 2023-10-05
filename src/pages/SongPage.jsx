
import React from 'react'

const SongPage = (props) => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='column'>
          <iframe title={props.title} src={props.video}/>
          </div>
          <div className='column'>
            <h3 className='title'>{props.title}</h3>
            <p className='artist'>{props.artist}</p>
            <p>{props.language}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongPage