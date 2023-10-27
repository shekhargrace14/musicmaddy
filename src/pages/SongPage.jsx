
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
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <button onClick="chords">Chords</button>
            <button onClick="lyrics">Lyrics</button>
            <button onClick="translation">Translation</button>
          </div> 
        </div>
      </div>


      <div className='container songpage' >
        <div className='row d-flex j-between'>
          <div className='column'id="chordsCol">
            <p>Chords</p>
            <p>G     D     C       Em</p>
            <p>Bhawar ke beech me Tu kehta hai tham Ja Tu meri taakat Hai Tu hi mera imaan</p>
          </div> 
          <div className='column' id="LyricsCol">
            <p>Chords</p>
            <p>G     D     C       Em</p>
            <p>Bhawar ke beech me Tu kehta hai tham Ja Tu meri taakat Hai Tu hi mera imaan</p>
          </div> 
          <div className='column' id="translationCol">
            <p>Chords</p>
            <p>G     D     C       Em</p>
            <p>Bhawar ke beech me Tu kehta hai tham Ja Tu meri taakat Hai Tu hi mera imaan</p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default SongPage

