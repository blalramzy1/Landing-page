import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white h-full'>
        <div className='max-w-[800px] mt-[-120px] w-full h-[105vh] text-center mx-auto flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>Growing By More Jops</p>
            <h1 className='md:text-7xl sm:text-5xl font-bold md:py-6'>React devoloper</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Freelancer, Skills</p>
            <Typed strings={["Html.","Css.","javascript.","Sass.","TailwindCss.","React.js.",]}
            typeSpeed={120}
            backSpeed={110}
            loop
            className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'/>
        </div>
        <p className='md:text-2xl text-xl pt-3 pl-2 font-bold text-gray-500'>
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero