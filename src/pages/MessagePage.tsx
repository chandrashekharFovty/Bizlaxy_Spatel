import React from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Messages from '@/components/chatMessage/messages'

const MessagePage = () => {
  return (
     <>
      <div className="dark:bg-gray-800 dark:text-white w-screen h-screen flex  bg-gray-100">
      <div className="w-2/12 z-50"><Sidebar/></div>
      <div className="w-10/12 bg-gray-100 overflow-X-hidden z-10">
         <Messages/>
      </div>
    </div>
    </>
  )
}

export default MessagePage
