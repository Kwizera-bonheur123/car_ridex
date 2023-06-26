import React from 'react'
import Layout from './Layout'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Blog1 from './Images/blog-1.jpg'
import Blog2 from './Images/blog-2.jpg'
import Blog3 from './Images/blog-3.jpg'
import Blog4 from './Images/blog-4.jpg'
import Blog5 from './Images/blog-5.jpg'
import Cards from './Cards';
const Home = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Layout>
            {/* <div className='flex gap-[20%]'>
                <div className='pt-[15%] pl-[13%]'>
                    <h1 className='  text-slate-950 text-[35px] font-semibold'>THE EASY WAY TO <br></br> TAKEOVER A LEASE</h1>
                </div>
                <img src={car1} className='h-[42%] w-[44%] rounded-3xl mt-[2%]'></img>
            </div> */}
            <div className='home h-screen'></div>
            <div className=' bg-slate-600/60 pl-10 pt-[10%] w-full h-screen absolute top-0'>
                <h1 className='text-4xl font-bold text-slate-300'>THE EASY WAY TO TAKE TO<br></br>TAKEOVER A LEASE<br></br>TRUSTED PROCESS</h1>
                <button className='px-10 py-5 bg-slate-400 text-xl mt-6 rounded-2xl font-bold text-gray-50'>Get Started  &#8594;</button>
            </div>
            <div className='px-[7%]'>
                <div className='flex justify-between mt-10'>
                    <h1 className='text-4xl text-slate-950'>Featured cars</h1>
                    <div className='flex gap-3'>
                        <button className='text-xl -mt-6'>View more</button>
                        <AiOutlineArrowRight className='text-blue-400 text-xl' />
                    </div>
                </div>
                {/* {props.children} */}
                <Cards />
                <div>
                    <h1 className='text-3xl my-[30px] text-slate-700'>Get started with 4 simple steps</h1>
                    <div className=' xl:flex xl:gap-8 sm:grid sm:gap-6 grid gap-5 md:grid-cols-2 lg:grid-cols-2 lg:grid md:gap-5'>
                        <div className='h-[250px] rounded-xl pt-1 bg-white hover:bg-blue-50'>
                            <div className='rounded-lg px-3 bg-rose-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-rose-300 text-2xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Create a profile</h1>
                            <h1 className=' text-center px-3 text-gray-500'>If you are going to use a passage of Lorem Ipsum, you need to be sure about your information.</h1>
                            <h1 className='text-center text-blue-600 my-2 cursor-pointer font-semibold text-lg'>Get Started</h1>
                        </div>
                        <div className='h-[250px] rounded-xl pt-1 bg-white hover:bg-blue-50'>
                            <div className='rounded-lg px-3 bg-blue-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-blue-300 text-2xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Tell us what car you want</h1>
                            <h1 className='text-center text-gray-500 px-7'>Various versions have evolved over the years, sometimes by accident, sometimes on purpose</h1>
                        </div>
                        <div className='h-[250px] rounded-xl pt-1 bg-white hover:bg-blue-50'>
                            <div className='rounded-lg px-3 bg-green-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-green-300 text22xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Match with seller</h1>
                            <h1 className='text-center text-gray-500 px-3'>It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</h1>
                        </div>
                        <div className='h-[250px] rounded-xl pt-1 bg-white hover:bg-blue-50'>
                            <div className='rounded-lg px-3 bg-violet-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-violet-300 tex2-4xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Make a deal</h1>
                            <h1 className='text-center px-3 text-gray-500'>There are many variations of passages of Lorem available, but the majority have suffered alteration</h1>
                        </div>
                    </div>
                    <h1 className='text-3xl my-5 font-semibold text-slate-700'>Our Blog</h1>
                    <Carousel className='flex justify-start' responsive={responsive}>
                        <div className='mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300'>
                            <img src={Blog1} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl px-6 mt-4 font-normal text-gray-600 text-left'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                        <div className='mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300'>
                            <img src={Blog2} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl px-6 mt-4 font-normal text-gray-600 text-left'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                        <div className='mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300'>
                            <img src={Blog3} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl px-6 mt-4 font-normal text-gray-600 text-left'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                        <div className='mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300'>
                            <img src={Blog4} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl px-6 mt-4 font-normal text-gray-600 text-left'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                        <div className='mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300'>
                            <img src={Blog5} className='rounded-t-2xl'></img>
                            <h1 className='text-2xl px-6 mt-4 font-normal text-gray-600 text-left'>Opening of new office of the company</h1>
                            <div className='flex justify-between px-6 mt-3'>
                                <button className='text-blue-600 text-lg cursor-pointer'>Read more...</button>
                                <h1 className='text-gray-500 text-md'>January 14,2022</h1>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </Layout>
    )
}
export default Home