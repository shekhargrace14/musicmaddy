import { useContext } from 'react'
import { PlaylistContext } from '../context/PlaylistContext'
import { Link } from 'react-router-dom'

const Playlist = () => {
    const songData = useContext(PlaylistContext)
    return (
        <div className='grid grid-cols-4 gap-4'>
            {songData.map((song,index)=>(
                <Link key={index} to={`./SingleSongPage/${song.id}`}>
                    <div className='overflow-hidden'>
                        <iframe src={song.youtubeLink}/>
                        <h2>{song.title}</h2>
                        <p>{song.artist}</p>
                        <p>{song.id}</p>
                    </div>
                </Link>
            ))}
            Playlist
        </div>
    )
}

export default Playlist