import { createContext, useEffect, useState } from "react";
import data from "../data/SongData.json"
const PlaylistContext = createContext();

const PlaylistProvider = ({children})=>{

    const [songData, setSongData] = useState([])
    // console.log(data)
    console.log(songData)
    const getSongData = (pd) =>{

        setSongData(pd)
        // setSongData(data)
    }
    useEffect(()=>{        
        getSongData(data)
    },[])
    return(
    <PlaylistContext.Provider value={songData}>
        {children}
    </PlaylistContext.Provider>
    )
}

export {PlaylistContext, PlaylistProvider};

