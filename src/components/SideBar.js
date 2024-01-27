import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { showSearchedVideo } from '../utils/searchSlice';

const SideBar = () => {
    const dispatch = useDispatch();
    const showSideBar = useSelector((store) => store.app.isMenuOpen)
    
    if(!showSideBar) return null;
  return (
    <div className='bg-white mt-16 p-2 m-2 shadow-lg w-48'>
        <ul>
            <li onClick={ () => dispatch(showSearchedVideo())}><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Vidoes</li>
            <li>Live</li>
        </ul>
        <h1 className='pt-5 font-bold'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Cricket</li>
            <li>Movies</li>
            <li>Football</li>
        </ul>
        <h1 className='pt-5 font-bold'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Cricket</li>
            <li>Movies</li>
            <li>Football</li>
        </ul>
    </div>
  )
}

export default SideBar