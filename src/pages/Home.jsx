import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import songData from "../Data/songData"
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
    
        <Nav/>
        <Hero/>
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

    </>
  )
}

export default Home