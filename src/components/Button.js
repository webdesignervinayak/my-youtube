import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 rounded-md px-5 py-2 mx-1 cursor-pointer hover:bg-black hover:text-white'>{name}</button>
    </div>
  )
}

export default Button