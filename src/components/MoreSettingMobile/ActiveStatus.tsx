import React from 'react'
import { MdExpandLess } from 'react-icons/md'
import { Link } from 'react-router-dom'

function ActiveStatus() {
  return (
    <div className='dark:dark-color'>
      {/* Fixed header */}
          <div className="  fixed top-0 left-0 right-0 bg-white dark:dark-color z-10 border-b-2 border-gray-200 dark:border-gray-700">
            <Link
              to="/settings"
              className="flex items-center font-semibold text-black dark:text-white py-4 px-4"
            >
              <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
              <span className="font-bold text-xl ml-28">Active Status</span>
            </Link>
          </div>
    <div className='dark:dark-color w-screen h-screen'>
      <h1 className='dark:dark-color pt-[80px] ml-4 text-black text-2xl font-semibold'>Show my active status</h1>
      <p className='pl-4 text-sm pt-8 text-black dark:dark-color'>When turned on, your followers and connections can see when you're online or last active. 
        <br/>
        <br/>
        When off, you won’t see others' activity status either. </p>
    </div>
    </div>
  )
}

export default ActiveStatus
