import React from 'react'
import Layout from './Layout'
import car1 from './Images/hero-banner.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import Blog1 from './Images/blog-1.jpg'
import Blog2 from './Images/blog-2.jpg'
import Blog3 from './Images/blog-3.jpg'
import Blog4 from './Images/blog-4.jpg'
import Blog5 from './Images/blog-5.jpg'
import Car2 from './Images/car-2.jpg'
const Home = (props) => {
    return (
        <Layout>
            {/* <div className='flex gap-[20%]'>
                <div className='pt-[15%] pl-[13%]'>
                    <h1 className='  text-slate-950 text-[35px] font-semibold'>THE EASY WAY TO <br></br> TAKEOVER A LEASE</h1>
                </div>
                <img src={car1} className='h-[42%] w-[44%] rounded-3xl mt-[2%]'></img>
            </div> */}
            <div className='home'></div>
            <div className=' bg-slate-500/70 w-full h-[680px] mt-20 absolute top-0'>
                <h1 className='text-4xl font-bold text-slate-300 pt-[10%] pl-10'>THE EASY WAY TO TAKE TO<br></br>TAKEOVER A LEASE<br></br>TRUSTED PROCESS</h1>
            </div>
            <div className='px-[13%]'>
                <div className='flex justify-between mt-10'>
                    <h1 className='text-4xl text-slate-950'>Featured cars</h1>
                    <div className='flex gap-3'>
                        <button className='text-xl -mt-6'>View more</button>
                        <AiOutlineArrowRight className='text-blue-400 text-xl' />
                    </div>
                </div>
                {props.children}
                <div>
                    <h1 className='text-3xl my-[30px]'>Get started with 4 simple steps</h1>
                    <div className='flex gap-8'>
                        <div className='h-[250px] rounded-xl pt-1 bg-white hover:bg-blue-50 w-[310px]'>
                            <div className='rounded-lg px-3 bg-rose-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-rose-300 text-2xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Create a profile</h1>
                            <h1 className='text-center text-gray-500'>If you are going to use a<br></br> passage of Lorem Ipsum, you<br></br> need to be sure.</h1>
                            <h1 className='text-blue-600 text-center my-2 cursor-pointer font-semibold text-lg'>Get Started</h1>
                        </div>
                        <div className='h-[250px] rounded-xl pt-1 bg-white hover:bg-blue-50 w-[310px]'>
                            <div className='rounded-lg px-3 bg-blue-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-blue-300 text-2xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Tell us what car you want</h1>
                            <h1 className='text-center text-gray-500 px-7'>Various versions have evolved over the years, sometimes by accident, sometimes on purpose</h1>
                        </div>
                        <div className='h-[250px] rounded-xl pt-1 bg-white hover:bg-blue-50 w-[310px]'>
                            <div className='rounded-lg px-3 bg-green-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-green-300 text22xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Match with seller</h1>
                            <h1 className='text-center text-gray-500 px-3'>It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</h1>
                        </div>
                        <div className='h-[250px] rounded-xl pt-1 bg-white hover:bg-blue-50 w-[310px]'>
                            <div className='rounded-lg px-3 bg-violet-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-violet-300 tex2-4xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Make a deal</h1>
                            <h1 className='text-center text-gray-500'>There are many variations of<br></br>passages of Lorem available,<br></br>but the majority have suffered<br></br>alteration</h1>
                        </div>
                    </div>
                    <h1>Our Blog</h1>
                    <div className='flex gap-6 overflow-x-auto whitespace-nowrap'>
                        <div className='w-[28%] h-fit bg-slate-200 shadow-lg rounded-xl pb-7 border-2 border-white'>
                            <img src={Blog1} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl px-6 mt-4 font-normal text-gray-600 text-left'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                        <div className='w-[28%] h-fit bg-slate-200 shadow-lg rounded-xl pb-7 border-2 border-white'>
                            <img src={Blog1} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl px-6 mt-4 font-normal text-gray-600'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                        <div className='w-[28%] h-fit bg-slate-200 shadow-lg rounded-xl pb-7 border-2 border-white'>
                            <img src={Blog1} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl relative px-6 mt-4 font-normal text-gray-600'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                        <div className=' w-[320px] h-fit bg-slate-200 shadow-lg rounded-xl pb-7 border-2 border-white'>
                            <img src={Blog1} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl pl-6 mt-4 font-normal text-gray-600'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                        <div className=' w-[320px] h-fit bg-slate-200 shadow-lg rounded-xl pb-7 border-2 border-white'>
                            <img src={Blog1} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl pl-6 mt-4 font-normal text-gray-600'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
