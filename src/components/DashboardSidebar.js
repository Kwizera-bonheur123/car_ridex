import React from 'react'
import { FaChartBar } from 'react-icons/fa';
const DashboardSidebar = () => {
  return (
    <div className=' w-[20%] bg-slate-100 h-screen left-0 top-0'>
      <div className='flex gap-4 h-[12%] pl-16 py-7 font-bold text-2xl'>GAGA</div>
      <div className='flex gap-4 pl-[12%] py-6'>
        <FaChartBar className='text-3xl text-slate-600' />
        <h1 className=' font-semibold text-xl text-slate-600'>Dashboard</h1>
      </div>
      <div className='flex gap-4 pl-[12%] py-6'>
        <FaChartBar className='text-3xl text-slate-600' />
        <h1 className=' font-semibold text-xl text-slate-600'>Ordered Cars</h1>
      </div>
      <div className='flex gap-4 pl-[12%] py-6'>
        <FaChartBar className='text-3xl text-slate-600' />
        <h1 className=' font-semibold text-xl text-slate-600'>Bought Cars</h1>
      </div>
      <div className='flex gap-4 pl-[12%] py-6'>
        <FaChartBar className='text-3xl text-slate-600' />
        <h1 className=' font-semibold text-xl text-slate-600'>Add Rental Cars</h1>
      </div>
      <div className='flex gap-4 pl-[12%] py-6'>
        <FaChartBar className='text-3xl text-slate-600' />
        <h1 className=' font-semibold text-xl text-slate-600'>Add Car Sales</h1>
      </div>
      <div className='flex gap-4 pl-[12%] py-6'>
        <FaChartBar className='text-3xl text-slate-600' />
        <h1 className=' font-semibold text-xl text-slate-600'>Add Spare Parts</h1>
      </div>
    </div>
  )
}

export default DashboardSidebar
