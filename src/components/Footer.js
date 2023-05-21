import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import { FaFacebook, FaInstagram, FaTwitter, FaSkype } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
const Footer = () => {
    return (
        <div className='bg-slate-300 px-[13%]'>
            <div className=' pt-[50px] flex justify-start gap-[14%]'>
                <div>
                    <h1 className=' font-semibold text-slate-900 text-3xl'>Ridex</h1>
                    <h1 className='mt-[20px] text-gray-500 font-normal'>Search for cheap rental cars in New York.<br></br> With a diverse fleet of 19,000 vehicles,<br></br> Waydex offers its consumers an attractive<br></br> and fun selection.</h1>
                </div>
                <div className=' grid gap-2 text-slate-900 font-normal'>
                    <h1 className='text-slate-700 font-semibold'>Company</h1>
                    <Link path='/' element={<Home />} className='text-gray-500 font-normal'>Car Sales</Link>
                    <Link path='/' element={<Home />} className='text-gray-500 font-normal'>Car Rent</Link>
                    <Link path='/' element={<Home />} className='text-gray-500 font-normal'>Car sales</Link>
                    <Link path='/' element={<Home />} className='text-gray-500 font-normal'>Blogs</Link>
                </div>
                <div className=' grid gap-2 text-slate-900 font-normal'>
                    <h1 className='text-slate-700 font-semibold'>Support</h1>
                    <Link path='/' element={<Home />} className='text-gray-500 font-normal'>Help center</Link>
                    <Link path='/' element={<Home />} className='text-gray-500 font-normal'>Ask a question</Link>
                    <Link path='/' element={<Home />} className='text-gray-500 font-normal'>Privacy policy</Link>
                    <Link path='/' element={<Home />} className='text-gray-500 font-normal'>Tearms and conditions</Link>
                </div>
            </div>
            <div className='mt-[40px] w-full flex justify-between px-[5%] rounded-t-3xl h-[70px] py-8 bg-slate-200'>
                <p>&copy; 2023 All Rights Reserved</p>
                <div className='flex gap-8'>
                    <FaFacebook className='text-blue-950 text-3xl h-6 w-6' />
                    <FaInstagram className='text-blue-950 text-3xl h-6 w-6' />
                    <FaSkype className='text-blue-950 text-3xl h-6 w-6' />
                    <FaTwitter className='text-blue-950 text-3xl h-6 w-6' />
                    <IoMail className='text-blue-950 text-3xl h-6 w-6' />
                </div>
            </div>
        </div>
    )
}

export default Footer
