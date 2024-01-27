import React from 'react'
import Button from './Button'

const ButtonList = ( ) => {
    const list = ["All","Latest","Ram","Music","Podcasts","Mixes","News","Ayodhya","Modi","Spritual","Driving"]
  return (
    <div className='flex'>
        {list.map((val) => <Button key={val} name={val}/>)}
    </div>
  )
}

export default ButtonList