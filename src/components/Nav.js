import React, { useState } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md';
const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`  w-screen h-20 pt-6 lg:bg-slate-200 bg-slate-200 flex md-top-6 md:justify-around fixed top-0 z-[99] shadow-sm`}>
            <h1 className=' absolute sm:static text-2xl pl-8 sm:pl-16 text-slate-700 font-bold md:2xl'>GOGO</h1>
            <ul onClick={() => setOpen(!open)} className={`${open ? " mt-14 sm:h-0 sm:m-0 absolute md:static right-0 bg-slate-200 pl-[40%] sm:pl-0 h-[50%] grid gap-5 pb-[65%] border-2 sm:border-0 border-white w-[100%] sm:flex md:w-auto py-4 sm:py-0 " : "hidden md:flex"} flex duration-700 delay-200 lg:gap-9 md:gap-3 lg:text-lg md:text-md text-slate-800 font-semibold`}>
                <li><Link to='/' element={<Home />}>Home</Link></li>
                <li><Link to='/Blogs' element={<Home />}>Blogs</Link></li>
                <li className='cursor-pointer'><Link>Car sales</Link>
                    {/* <ul className=' pt-6 absolute'>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>sale 1</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>sale 2</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>sale 3</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>sale 4</Link></li>
                    </ul> */}
                </li>
                <li><Link to='/rent' element={<Home />}>Car rent</Link>
                    {/* <ul className=' pt-6 absolute'>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate800 border-white bg-slate-200'><Link to='sales 1'>Car rent 1</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>Car rent 2</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>Car rent 3</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>Car rent 4</Link></li>
                    </ul> */}
                </li>
                <li><Link to='/spareParts' element={<Home />}>Spare parts</Link>
                    {/* <ul className=' pt-6 absolute'>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>Spare parts 1</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>Spare parts 2</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>Spare parts 3</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link to='sales 1'>Spare parts 4</Link></li>
                    </ul> */}
                </li>
                <li><Link to='/Contact' element={<Home />}>Contact us</Link></li>
            </ul>
            <div className='text-slate-400 font-semibold'>
                {/* <box-icon name='user-minus'></box-icon> */}
                {/* <div><ion-icon name="person-add"></ion-icon></div> */}
                {/* <button>Register/</button>
                <button>Login</button> */}
            </div>
            <MdMenu onClick={() => setOpen(!open)} className=' text-4xl absolute right-7 sm:hidden' />
        </div>
    )
}

export default Nav
