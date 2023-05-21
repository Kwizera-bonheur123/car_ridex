import React from 'react'
import Home from './Home'
import { IoPeopleOutline } from 'react-icons/io5';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { IoFlashOutline } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { IoApertureOutline } from 'react-icons/io5';
import Car2 from './Images/car-2.jpg'
import Car1 from './Images/car-1.jpg'
import Car3 from './Images/car-3.jpg'
import Car4 from './Images/car-4.jpg'
import Car5 from './Images/car-5.jpg'
import Car6 from './Images/car-6.jpg'
const Cards = () => {
    return (
        <Home>
            <div className='grid grid-cols-3 gap-7 mt-8'>
                <div className=''>
                    <div className=' h-[500px] bg-slate-200 shadow-xl shadow-slate-300 border-2 border-white rounded-2xl'>
                        <img src={Car1} className='rounded-3xl px-3 pt-3'></img>
                        <div className='px-6'>
                            <div className='flex justify-between  mt-5'>
                                <h1 className='text-2xl'>Toyota RAV4</h1>
                                <h1 className='text-xl outline-dashed px-3 rounded-xl outline-blue-500'>2021</h1>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 mt-5'>
                                <div className='flex gap-3'><IoPeopleOutline className='text-blue-400 text-2xl' /><h1>4 people</h1></div>
                                <div className='flex gap-3'><IoSpeedometerOutline className='text-blue-400 text-2xl' /><h1>7.7km/1-litre</h1></div>
                                <div className='flex gap-3'><IoFlashOutline className='text-blue-400 text-2xl' /><h1>Gasoline</h1></div>
                                <div className='flex gap-3'><IoApertureOutline className='text-blue-400 text-2xl' /><h1>Automatic</h1></div>

                            </div>
                            <div className='h-[2px] w-full bg-slate-950 mt-4'></div>
                            <div className='flex justify-between mt-5'>
                                <h1 className='text-xl text-slate-950'>$620/month</h1>
                                <div className='flex gap-3'>
                                    <div className='px-4 bg-blue-200 py-4 rounded-full'><FaHeart className='text-blue-400 font-normal' /></div>
                                    <button className='rounded-2xl bg-blue-400 px-7 py-2 font-semibold text-white'>Rent now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='h-[500px] bg-slate-200 shadow-xl shadow-slate-300 border-2 border-white rounded-2xl'>
                        <img src={Car2} className='rounded-3xl px-3 pt-3'></img>
                        <div className='px-6'>
                            <div className='flex justify-between  mt-5'>
                                <h1 className='text-2xl'>BMW 3 Series</h1>
                                <h1 className='text-xl outline-dashed px-3 rounded-xl outline-blue-500'>2019</h1>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 mt-5'>
                                <div className='flex gap-3'><IoPeopleOutline className='text-blue-400 text-2xl' /><h1>4 people</h1></div>
                                <div className='flex gap-3'><IoSpeedometerOutline className='text-blue-400 text-2xl' /><h1>8.2km/1-litre</h1></div>
                                <div className='flex gap-3'><IoFlashOutline className='text-blue-400 text-2xl' /><h1>Gasoline</h1></div>
                                <div className='flex gap-3'><IoApertureOutline className='text-blue-400 text-2xl' /><h1>Automatic</h1></div>

                            </div>
                            <div className='h-[2px] w-full bg-slate-950 mt-4'></div>
                            <div className='flex justify-between mt-5'>
                                <h1 className='text-xl text-slate-950'>$350/month</h1>
                                <div className='flex gap-3'>
                                    <div className='px-4 bg-blue-200 py-4 rounded-full'><FaHeart className='text-blue-400 font-normal' /></div>
                                    <button className='rounded-2xl bg-blue-400 px-7 py-2 font-semibold text-white'>Rent now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='h-[500px] bg-slate-200 shadow-xl shadow-slate-300 border-2 border-white rounded-2xl'>
                        <img src={Car3} className='rounded-3xl px-3 pt-3'></img>
                        <div className='px-6'>
                            <div className='flex justify-between  mt-5'>
                                <h1 className='text-2xl'>Cadillac Escalade</h1>
                                <h1 className='text-xl outline-dashed px-3 rounded-xl outline-blue-500'>2020</h1>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 mt-5'>
                                <div className='flex gap-3'><IoPeopleOutline className='text-blue-400 text-2xl' /><h1>4 people</h1></div>
                                <div className='flex gap-3'><IoSpeedometerOutline className='text-blue-400 text-2xl' /><h1>7.7km/1-litre</h1></div>
                                <div className='flex gap-3'><IoFlashOutline className='text-blue-400 text-2xl' /><h1>Gasoline</h1></div>
                                <div className='flex gap-3'><IoApertureOutline className='text-blue-400 text-2xl' /><h1>Automatic</h1></div>

                            </div>
                            <div className='h-[2px] w-full bg-slate-950 mt-4'></div>
                            <div className='flex justify-between mt-5'>
                                <h1 className='text-xl text-slate-950'>$620/month</h1>
                                <div className='flex gap-3'>
                                    <div className='px-4 bg-blue-200 py-4 rounded-full'><FaHeart className='text-blue-400 font-normal' /></div>
                                    <button className='rounded-2xl bg-blue-400 px-7 py-2 font-semibold text-white'>Rent now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='h-[500px] bg-slate-200 shadow-xl shadow-slate-300 border-2 border-white rounded-2xl'>
                        <img src={Car4} className='rounded-3xl px-3 pt-3'></img>
                        <div className='px-6'>
                            <div className='flex justify-between  mt-5'>
                                <h1 className='text-2xl'>Volkswagen T-Cross</h1>
                                <h1 className='text-xl outline-dashed px-3 rounded-xl outline-blue-500'>2020</h1>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 mt-5'>
                                <div className='flex gap-3'><IoPeopleOutline className='text-blue-400 text-2xl' /><h1>4 people</h1></div>
                                <div className='flex gap-3'><IoSpeedometerOutline className='text-blue-400 text-2xl' /><h1>7.7km/1-litre</h1></div>
                                <div className='flex gap-3'><IoFlashOutline className='text-blue-400 text-2xl' /><h1>Gasoline</h1></div>
                                <div className='flex gap-3'><IoApertureOutline className='text-blue-400 text-2xl' /><h1>Automatic</h1></div>

                            </div>
                            <div className='h-[2px] w-full bg-slate-950 mt-4'></div>
                            <div className='flex justify-between mt-5'>
                                <h1 className='text-xl text-slate-950'>$400/month</h1>
                                <div className='flex gap-3'>
                                    <div className='px-4 bg-blue-200 py-4 rounded-full'><FaHeart className='text-blue-400 font-normal' /></div>
                                    <button className='rounded-2xl bg-blue-400 px-7 py-2 font-semibold text-white'>Rent now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='h-[500px] bg-slate-200 shadow-xl shadow-slate-300 border-2 border-white rounded-2xl'>
                        <img src={Car5} className='rounded-3xl px-3 pt-3'></img>
                        <div className='px-6'>
                            <div className='flex justify-between  mt-5'>
                                <h1 className='text-2xl'>BMW 4 Series GTI</h1>
                                <h1 className='text-xl outline-dashed px-3 rounded-xl outline-blue-500'>2021</h1>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 mt-5'>
                                <div className='flex gap-3'><IoPeopleOutline className='text-blue-400 text-2xl' /><h1>4 people</h1></div>
                                <div className='flex gap-3'><IoSpeedometerOutline className='text-blue-400 text-2xl' /><h1>7.6km/1-litre</h1></div>
                                <div className='flex gap-3'><IoFlashOutline className='text-blue-400 text-2xl' /><h1>Gasoline</h1></div>
                                <div className='flex gap-3'><IoApertureOutline className='text-blue-400 text-2xl' /><h1>Automatic</h1></div>

                            </div>
                            <div className='h-[2px] w-full bg-slate-950 mt-4'></div>
                            <div className='flex justify-between mt-5'>
                                <h1 className='text-xl text-slate-950'>$400/month</h1>
                                <div className='flex gap-3'>
                                    <div className='px-4 bg-blue-200 py-4 rounded-full'><FaHeart className='text-blue-400 font-normal' /></div>
                                    <button className='rounded-2xl bg-blue-400 px-7 py-2 font-semibold text-white'>Rent now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='h-[500px] bg-slate-200 shadow-xl shadow-slate-300 border-2 border-white rounded-2xl'>
                        <img src={Car6} className='rounded-3xl px-3 pt-3'></img>
                        <div className='px-6'>
                            <div className='flex justify-between  mt-5'>
                                <h1 className='text-2xl'>BMW 4 Series GTI</h1>
                                <h1 className='text-xl outline-dashed px-3 rounded-xl outline-blue-500'>2021</h1>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 mt-5'>
                                <div className='flex gap-3'><IoPeopleOutline className='text-blue-400 text-2xl' /><h1>4 people</h1></div>
                                <div className='flex gap-3'><IoSpeedometerOutline className='text-blue-400 text-2xl' /><h1>7.2km/1-litre</h1></div>
                                <div className='flex gap-3'><IoFlashOutline className='text-blue-400 text-2xl' /><h1>Gasoline</h1></div>
                                <div className='flex gap-3'><IoApertureOutline className='text-blue-400 text-2xl' /><h1>Automatic</h1></div>

                            </div>
                            <div className='h-[2px] w-full bg-slate-950 mt-4'></div>
                            <div className='flex justify-between mt-5'>
                                <h1 className='text-xl text-slate-950'>$490/month</h1>
                                <div className='flex gap-3'>
                                    <div className='px-4 bg-blue-200 py-4 rounded-full'><FaHeart className='text-blue-400 font-normal' /></div>
                                    <button className='rounded-2xl bg-blue-400 px-7 py-2 font-semibold text-white'>Rent now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Home>
    )
}

export default Cards
