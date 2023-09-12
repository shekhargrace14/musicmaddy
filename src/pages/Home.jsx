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
        <div className='postCard'>
            <div className='container'>
                <div className='row d-flex j-between'>

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

    </>
  )
}

export default Home