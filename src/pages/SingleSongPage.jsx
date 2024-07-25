import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PlaylistContext } from '../context/PlaylistContext'
// import data from "../data/SongData.json"


const SingleSongPage = () => {
    const {id} = useParams()
    const songData = useContext(PlaylistContext)
    const songId = Number(id)
    const song = songData.find(s => s.id===songId)
    console.log(id)
    // console.log(data)
    // console.log(songId)
    console.log(song)
    // useEffect(()=>{
    //     getSongData(data)
    // })

  return (
    <div className='overflow-hidden'>
        {/* <iframe src={song.youtubeLink}/> */}
        <h2>{song.title}</h2>
        <p>{song.artist}</p>
        {/* <p>{song.lyrics.replace(/\n/g,"<br>")}</p> */}
        <div dangerouslySetInnerHTML={{ __html: song.lyrics }} />
    </div>

  )
}

export default SingleSongPage