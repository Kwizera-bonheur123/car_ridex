import React, { useState } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md';
const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={` w-screen h-20 pt-6 lg:bg-slate-200 bg-slate-200 flex justify-around fixed top-0 z-[99] shadow-sm`}>
            <h1 className=' text-slate-700 font-bold md:2xl'>GOGO</h1>
            <ul onClick={() => setOpen(!open)} className={`${open ? " absolute md:relative grid bg-slate-200 h-fit sm:h-15 sm:w-[100%] py-14 top-14 md:mt-0 pl-32 gap-4 text-lg md:top-14 " : "hidden"}  md:flex lg:gap-9 md:gap-3 md:top-14 lg:text-lg md:text-md text-slate-800 font-semibold`}>
                <li><Link path='/' element={<Home />}>Home</Link></li>
                <li><Link path='/Blogs' element={<Home />}>Blogs</Link></li>
                <li className='cursor-pointer'><Link>Car sales</Link>
                    <ul className=' pt-6 absolute'>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>sale 1</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>sale 2</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>sale 3</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>sale 4</Link></li>
                    </ul>
                </li>
                <li><Link path='/carRent' element={<Home />}>Car rent</Link>
                    <ul className=' pt-6 absolute'>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate800 border-white bg-slate-200'><Link path='sales 1'>Car rent 1</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>Car rent 2</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>Car rent 3</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>Car rent 4</Link></li>
                    </ul>
                </li>
                <li><Link path='/spareParts' element={<Home />}>Spare parts</Link>
                    <ul className=' pt-6 absolute'>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>Spare parts 1</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>Spare parts 2</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>Spare parts 3</Link></li>
                        <li className='border-2 w-[135px] text-center h-[40px] text-slate-800 border-white bg-slate-200'><Link path='sales 1'>Spare parts 4</Link></li>
                    </ul>
                </li>
                <li><Link path='/Contact' element={<Home />}>Contact us</Link></li>
            </ul>
            <div className='text-slate-400 font-semibold'>
                {/* <box-icon name='user-minus'></box-icon> */}
                {/* <div><ion-icon name="person-add"></ion-icon></div> */}
                <button>Register/</button>
                <button>Login</button>
            </div>
            <MdMenu onClick={() => setOpen(!open)} className=' text-4xl md:hidden lg:hidden' />
        </div>
    )
}

export default Nav
