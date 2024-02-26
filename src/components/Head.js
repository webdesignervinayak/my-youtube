import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { searchParameter, showSearchedVideo } from '../utils/searchSlice'
import { Link } from 'react-router-dom'

const Head = () => {
    const dispatch = useDispatch()
    const [SearchText,getSearchText] = useState("")
    const [suggestions,setSuggestions] = useState([])
    const [showSuggetions,setShowSuggestions] = useState(false)

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    useEffect( () => {
        const timer = setTimeout(() => getSearchSuggestions(),200);

        return ( () => {
            clearTimeout(timer);
        })
    },[SearchText])


    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API+SearchText);
        const json = await data.json();
        setSuggestions(json[1])
    }

    const getSearchParameter = (sug) => {
        dispatch(searchParameter(sug));
        dispatch(showSearchedVideo());
    }

    const handleBlur = () => {
        setTimeout(() => {
            setShowSuggestions(false)
        }, 300);
    }

    const gotoHome = () => {
        dispatch(showSearchedVideo())
    }

  return (
    <div className= 'grid grid-flow-col p-2 mx-2 shadow-lg fixed top-0 left-0 right-0 bg-white'>
        <div className='flex col-span-1'>
            <img 
                src="https://i.pinimg.com/736x/96/33/0f/96330f95e5f907dd65fec5f6cf6a1faf.jpg" 
                alt="Menu"
                className='h-10 cursor-pointer'
                onClick={() => toggleMenuHandler()}
            />
            <img 
                src="https://ongpng.com/wp-content/uploads/2023/04/3-13.png" 
                alt="logo"
                className='h-10 mx-2'
                onClick={gotoHome}
            />
        </div>

        <div className='col-span-10'>
            <div>
            <input 
                type="text"
                className='w-1/2 border border-gray-200 p-2 rounded-l-full focus:outline-none'
                value={SearchText}
                onChange={(e) => getSearchText(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => handleBlur()}
           />
            <button
                className='bg-gray-200 p-2 rounded-r-full'
            >Search</button>
            </div>
            { showSuggetions && <div className='my-2 rounded-md shadow-md w-[31rem] fixed bg-white'>
                <ul>
                    {suggestions.map((sug) => <li key={sug}className='px-2 cursor-default hover:bg-gray-200' onClick={() => getSearchParameter(sug)}>{sug}</li>)}
                </ul>
            </div> }
        </div>
        <div className='col-span-1'>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMK00sAxza-l8ONBbqIzfBX3TBOcdhWp-jqOLYt6qLQ&s" 
                alt="usericon"
                className='h-10 col-span-1'
            />
        </div>
        
    </div>
  )
}

export default Head