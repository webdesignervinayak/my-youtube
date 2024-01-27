import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle,thumbnails,title} = snippet;
  return (
    <div className='rounded-lg w-72 m-2 h-64'>
        <img src={thumbnails.high.url} 
            alt="thumbnail"
            className='w-full h-48 rounded-lg'/>
        <ul className='px-2'>
            <li className='font-semibold truncate'>{title}</li>
            <li className='text-gray-600 text-sm'>{channelTitle}</li>
            <li className='text-gray-600 text-sm'>{statistics?.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard