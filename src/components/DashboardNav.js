import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
const DashboardNav = () => {
    return (
        <div className=' flex justify-between pr-24 pl-6 bg-slate-100 top-0 h-[12%] w-[80%] fixed pt-7'>
            <div>
                <input type='text' placeholder='Search...' className='bg-slate-200 w-[220%] rounded-xl pl-[8%] border-noe h-[40px]'></input>
            </div>
            <div>
                <FaUserCircle className=' text-3xl' />
            </div>
        </div>
    )
}

export default DashboardNav
