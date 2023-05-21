import React from 'react'
import Layout from './Layout'
import car1 from './Images/hero-banner.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
const Home = (props) => {
    return (
        <Layout>
            <div className='flex gap-[20%]'>
                <div className='pt-[15%] pl-[13%]'>
                    <h1 className='  text-slate-950 text-[35px] font-semibold'>THE EASY WAY TO <br></br> TAKEOVER A LEASE</h1>
                    {/* <input type='text'></input> */}
                </div>
                <img src={car1} className='h-[42%] w-[44%] rounded-3xl mt-[2%]'></img>
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
                        <div className='h-[250px] rounded-xl pt-1 bg-white w-[310px]'>
                            <div className='rounded-lg px-3 bg-rose-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-rose-300 text-2xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Create a profile</h1>
                            <h1 className='text-center text-gray-500'>If you are going to use a<br></br> passage of Lorem Ipsum, you<br></br> need to be sure.</h1>
                            <h1 className='text-blue-600 text-center my-2 font-semibold text-lg'>Get Started</h1>
                        </div>
                        <div className='h-[250px] rounded-xl pt-1 bg-white w-[310px]'>
                            <div className='rounded-lg px-3 bg-blue-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-blue-300 text-2xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Tell us what car you want</h1>
                            <h1 className='text-center text-gray-500'>Various versions have evolved<br></br> over the years, sometimes by<br></br> accident, sometimes on<br></br>purpose</h1>
                        </div>
                        <div className='h-[250px] rounded-xl pt-1 bg-white w-[310px]'>
                            <div className='rounded-lg px-3 bg-green-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-green-300 text22xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Match with seller</h1>
                            <h1 className='text-center text-gray-500'>It to make a type specimen<br></br>book. It has survived not only<br></br>five centuries, but also the<br></br>leap into electronic</h1>
                        </div>
                        <div className='h-[250px] rounded-xl pt-1 bg-white w-[310px]'>
                            <div className='rounded-lg px-3 bg-violet-100 mx-[40%] my-2 py-3 w-fit'><FaUserPlus className='text-violet-300 tex2-4xl' /></div>
                            <h1 className='text-center font-semibold text-gray-500 text-lg mb-3'>Make a deal</h1>
                            <h1 className='text-center text-gray-500'>There are many variations of<br></br>passages of Lorem available,<br></br>but the majority have suffered<br></br>alteration</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
