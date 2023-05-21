import React from 'react'
import Home from './Cards'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div className='w-full h-[70px] bg-slate-200 fixed top-0 shadow-sm'>
            <ul className='flex gap-6 py-5 pl-[30%] text-slate-800 font-semibold'>
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
            <div className='text-slate-400 absolute right-16 top-6 font-semibold'>
                {/* <box-icon name='user-minus'></box-icon> */}
                {/* <div><ion-icon name="person-add"></ion-icon></div> */}
                <button>Register/</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Nav
