import { RightSidebar } from '@/components/layout/RightSidebar'
import Sidebar from '@/components/layout/Sidebar'
import Notifications from '@/components/notifications/Notifications'
import React from 'react'

const Notofications = () => {
  return (
    <>
       <div className="w-screen h-screen flex  bg-gray-100">
      <div className="w-1/12 z-50"><Sidebar/></div>
      <div className=" dark:bg-gray-800  w-8/12 ml-20 bg-gray-100 overflow-X-hidden z-10 ">
       <Notifications/>
      </div>
      {/* Right Sidebar */}
                <div className="fixed right-0 top-0 w-[350px] h-full z-50 bg-white">
                  <RightSidebar />
                </div>
    </div>
    </>
  )
}

export default Notofications
