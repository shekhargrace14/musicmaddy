import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import songData from "../Data/songData"

const Home = () => {
  return (
    <div>
    
        <Nav/>
        <div className='container'>
            <div className='row '>
                { songData.map(({video, title, artist, language})=>{
                    return(
                        <Card 
                            video={video}
                            title={title}
                            artist={artist}
                            language={language}
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Home