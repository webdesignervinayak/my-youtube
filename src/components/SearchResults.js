import React, { useEffect, useState } from 'react'
import { API_KEY, YOUTUBE_SEARCH_ENGINE_API } from '../utils/constants'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import VideoCard from './VideoCard'

const SearchResults = () => {
    const[video,setVideo] = useState([])
    const searchParameterText = useSelector((store) => store.search.searchParameterText)
    const showVideo = useSelector((store) => store.search.showVideo)

    useEffect( () => {
       getVideoData()
    },[showVideo, searchParameterText])

    const getVideoData = async ( ) => {
        const data = await fetch(YOUTUBE_SEARCH_ENGINE_API+searchParameterText+"&maxResults=25&key="+API_KEY)
        const json = await data.json()
        const videoData = json.items;
        setVideo(videoData);
    } 

  return (
    <div className='flex flex-wrap justify-center'>
        {video.map(
          (vid)  => <Link to={"watch?v="+vid.id.videoId} key={vid.id.videoId}><VideoCard info={vid}/></Link>)}
    </div>)
}

export default SearchResults