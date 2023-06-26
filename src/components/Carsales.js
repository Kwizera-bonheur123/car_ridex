import React from 'react'
import Layout from './Layout'
import Carousel from 'react-multi-carousel';
import Car2 from './Images/car-2.jpg'
import Car1 from './Images/car-1.jpg'
import Car3 from './Images/car-3.jpg'
import Car4 from './Images/car-4.jpg'
import Car5 from './Images/car-5.jpg'
import Car6 from './Images/car-6.jpg'
import Cards from './Cards.js'
const Rent = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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
            <div className='px-[10%]'>
                <h1 className='text-4xl text-center font-semibold text-slate-700 pt-6 '>Our rental fleet</h1>
                <h1 className='text-center font-semibold text-slate-500 text-xl pt-8'>To contribute to positive change and achieve our sustainability</h1>
                <h1 className='text-center font-semibold text-slate-500 text-xl'>goals with many extraordinary</h1>
                <Carousel responsive={responsive} className='mt-8'>
                    <div className='w-[80%] bg-slate-300  border-2 border-slate-100 shadow-xl cursor-pointer hover:bg-slate-400  shadow-gray-200 rounded-xl text-center font-semibold text-xl text-slate-700 py-5'>Toyota RAV4</div>
                    <div className='w-[80%] bg-slate-300  border-2 border-slate-100 shadow-xl cursor-pointer hover:bg-slate-400  shadow-gray-200 rounded-xl text-center font-semibold text-xl text-slate-700 py-5'>BMW 3 series</div>
                    <div className='w-[80%] bg-slate-300  border-2 border-slate-100 shadow-xl cursor-pointer hover:bg-slate-400  shadow-gray-200 rounded-xl text-center font-semibold text-xl text-slate-700 py-5'>Cadillac Escalade</div>
                    <div className='w-[80%] bg-slate-300  border-2 border-slate-100 shadow-xl cursor-pointer hover:bg-slate-400  shadow-gray-200 rounded-xl text-center font-semibold text-xl text-slate-700 py-5'>Volkswagen T-Cross</div>
                    <div className='w-[80%] bg-slate-300  border-2 border-slate-100 shadow-xl cursor-pointer hover:bg-slate-400  shadow-gray-200 rounded-xl text-center font-semibold text-xl text-slate-700 py-5'>BMW 4 Series GTI</div>
                    <div className='w-[80%] bg-slate-300  border-2 border-slate-100 shadow-xl cursor-pointer hover:bg-slate-400  shadow-gray-200 rounded-xl text-center font-semibold text-xl text-slate-700 py-5'>BMW 4 series</div>
                    <div className='w-[80%] bg-slate-300  border-2 border-slate-100 shadow-xl cursor-pointer hover:bg-slate-400  shadow-gray-200 rounded-xl text-center font-semibold text-xl text-slate-700 py-5'>Mercedes</div>
                </Carousel>
                <Cards />
            </div>
        </Layout>
    )
}

export default Rent
