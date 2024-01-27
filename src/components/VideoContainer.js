import React, { useEffect, useState } from 'react'
import { API_KEY, YOUTUBE_API, YOUTUBE_SEARCH_ENGINE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchResults from './SearchResults';

const VideoContainer = () => {   
    const[video,setVideo] = useState([])
    //const searchParameterText = useSelector((store) => store.search.searchParameterText)
    const showVideo = useSelector((store) => store.search.showVideo)

    useEffect( () => {
       getVideoData()
    },[])

    const getVideoData = async ( ) => {
        const data = await fetch(YOUTUBE_API) ;
        const json = await data.json()
        const videoData = json.items;
        setVideo(videoData);
    }

  if(showVideo) return <SearchResults/>


  return (
    <div className='flex flex-wrap justify-center'>
        {video.map(
          (vid)  => <Link to={"watch?v="+vid.id} key={vid.id}><VideoCard info={vid}/></Link>)}
    </div>)
}

export default VideoContainer