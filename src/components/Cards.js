import React from 'react'
import Layout from './Layout'
import car1 from './Images/hero-banner.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
const Cards = (props) => {
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
                    <h1>Get started with 4 simple steps</h1>
                    <div>
                        <div className='h-[250px] rounded-xl bg-white w-[350px]'>
                            <div className='rounded-lg px-3 bg-red-100 mx-[38%] py-3 w-fit'><FaUserPlus className='text-red-800 text-4xl' /></div>
                            <h1>Create a profile<br></br><br></br>If you are going to use a<br></br> passage of Lorem Ipsum, you<br></br> need to be sure.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cards
