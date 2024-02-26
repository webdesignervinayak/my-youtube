import React, { useEffect, useRef, useState } from 'react'
import ChatBox from './ChatBox'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages} from '../utils/chatSlice';
import { generateName, generateString } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const message = useSelector((store) => store.chat.messages)
    const [livemessage,setLiveMessage] = useState("")
    //const livemessage = useRef(null);

    useEffect( () => {
        const i = setInterval( () =>{
            dispatch(addMessages({
                name: generateName(),
                text: generateString(15),
            }));
        },2000);

        return () => {
            clearInterval(i)
        }

    }, [])

    //console.log(livemessage);

  return (
    <div>
        <h2 className='mt-2 mx-2 p-2 w-[20rem] border border-gray font-semibold'>Live Chat</h2>
        <div className='mx-2 w-[20rem] h-[25rem] border border-gray overflow-y-scroll flex flex-col-reverse'>
            <div className=''>
                {message.map((m,index) => <ChatBox key={index} name={m.name} text={m.text}/>)} 
            </div>
        </div>
        <form className='mx-2 w-[20rem] h-[4rem] border border-gray rounded-b-lg'
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessages({
                name: "Vinayak",
                text: livemessage,
            }))
            setLiveMessage("");
        }
        }>
            <input type="text" placeholder='Type your message here...' 
            className='my-4 px-2 py-1 mx-2 w-60 border border-gray focus:outline-none'
            //ref={livemessage}
            value={livemessage}
            onChange={ (e) => setLiveMessage(e.target.value)}
            />
            <button className='px-2 border border-gray hover:bg-gray-200'>Send</button>
        </form>
    </div>
    
  )
}

export default LiveChat