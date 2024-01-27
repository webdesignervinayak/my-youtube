import React from 'react'

const ChatBox = ({name, text}) => {
  return (
    <div>
        <ul>
            <li className='flex hover:bg-gray-200'>
                <img className="p-2 w-10 h-10" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user-icon"/>
                <span className='p-2 font-semibold text-sm text-gray-400'>{name}</span>
                <span className='py-2 text-sm'>{text}</span>
            </li>
        </ul>
    </div>
  )
}

export default ChatBox