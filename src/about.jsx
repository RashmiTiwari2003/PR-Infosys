import React from 'react'

const About = () => {
  return (
    <div id='home'>
      <div className='w-full'>
        <div className="flex bg-white px-3 md:px-14 py-4 h-full">
          <div className="flex flex-row items-center gap-3 w-full">
            <img src="./images/logo.png" alt="logo" className='w-10 md:w-16 h-10 md:h-16' />
            <h1 className='text-black text-nowrap md:text-lg yetx-sm'>P.R Infosys</h1>
            <div className='flex flex-row gap-4 ml-auto'>
              <a href='#home' className='text-black text-nowrap text-sm md:text-lg'>Home</a>
              <a href='#products' className='text-black text-nowrap text-sm md:text-lg'>Products</a>
              <a href='#contact' className='text-black text-nowrap text-sm md:text-lg'>Contact</a>
            </div>
          </div>
        </div>
        <div className='relative flex md:flex-row flex-col justify-around items-center px-4 py-2 min-h-[80vh]'>
          <img src="./images/bg-about.jpg" alt="bg-about" className='brightness-50 -z-10 absolute opacity-65 w-full h-full object-cover' />
          <div className='flex flex-col justify-center'>
            <h1 className='text-black text-xl'>Welcome to P.R. Infosys</h1>
            <h1 className='text-black text-xl animated'>Welcome to our </h1>
          </div>
          <div className='flex flex-col justify-center'>
            <img className='shadow-2xl rounded-3xl w-52 md:w-96 h-52 md:h-96' src="./images/main.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
