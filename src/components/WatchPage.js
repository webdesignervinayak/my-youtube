import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { collapseMenu } from '../utils/appSlice';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [videoID] = useSearchParams();
  const dispatch = useDispatch();

  console.log(videoID);

  useEffect(() => {
    dispatch(collapseMenu());
  },[]);

  return (
    <div className='flex mt-16'>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+videoID.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
      className='ml-8 my-2'></iframe>
      <LiveChat/>
    </div>
  )
}

export default WatchPage