import React from 'react'
import Layout from './Layout'
import Carousel from 'react-multi-carousel';
import Car2 from './Images/car-2.jpg'
import Car1 from './Images/car-1.jpg'
import Car3 from './Images/car-3.jpg'
import Car4 from './Images/car-4.jpg'
import Car5 from './Images/car-5.jpg'
import Car6 from './Images/car-6.jpg'
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
        <div className='mt-8 gap-20 flex w-full border-2 border-white px-[1%] py-[1%] rounded-xl'>
          <img src={Car2} className='rounded-xl'></img>
          <div className='mt-8'>
            <h1 className='text-3xl text-slate-700 font-semibold'>BMW 4 Series GTI</h1>
            <div className=' flex gap-x-20 mt-8'>
              <div className='grid gap-3'>
                <h1 className='text-slate-700 font-semibols text-xl'>Year: 2019</h1>
                <h1 className='text-slate-700 font-semibols text-xl'>Fuel: Petrol</h1>
                <h1 className='text-slate-700 font-semibols text-xl'>People: 4</h1>
                <h1 className='text-slate-700 font-semibols text-xl'>Consume: 8.2km/1-litre</h1>
              </div>
              <div className='grid gap-3'>
                <h1 className='text-slate-700 font-semibols text-xl'>Category: Automatic</h1>
                <h1 className='text-slate-700 font-semibols text-xl'>Doors: 4</h1>
                <h1 className='text-slate-700 font-semibols text-xl'>Condition: Used</h1>
                <h1 className='text-slate-700 font-semibols text-xl'>Engine: 3900</h1>
              </div>
              <div>
                <h1 className=' text-2xl bg-blue-400 px-5 py-2 absolute -mt-20 rounded-lg font-semibold'>$15,000</h1>
                <button className=' bg-blue-400 text-white rounded-xl absolute mt-24 px-7 text-xl font-semibold py-3'>Rent now</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Rent
