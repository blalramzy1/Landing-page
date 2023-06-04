import React from 'react'
import Analyticspic from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='text-black w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Analyticspic} alt="/"/>
            <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 '>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum laudantium provident ipsam ullam quisquam sapiente dolorum fuga tempora amet libero vero deserunt, ipsum, esse hic vel! Nulla, provident pariatur!</p>
            <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-auto px-6 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics