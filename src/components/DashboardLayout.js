import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import DashboardNav from './DashboardNav'
const DashboardLayout = (props) => {
  return (
    <div className='flex'>
      <DashboardSidebar />
      <div className='grid'>
        <DashboardNav />
        <div className='bg-slate-100 top-[12%] absolute w-[80%]'>
          <div className=' bg-white px-20 pt-8 rounded-t-3xl h-[88%] w-full'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
