import React from 'react'

const Hero = () => {
  return (
    <div><header
    className="w-full h-screen bg-[url('/src/images/hero_backdrop1.png')] bg-cover bg-center flex justify-center items-center">
    <div className="flex flex-col justify-center items-center">
        <h1 className=" text-center text-6xl text-white font-bold drop-shadow-lg">Make the decentralized web
        </h1><h1 className=" text-center text-6xl text-white font-bold drop-shadow-lg">a reality for everyone.
        </h1>
        <div className='flex'><a className="mt-8 mx-8 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Connect Now</a>
            <a className="mt-8 mx-8 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
          href="#">Read Documentation</a></div>
        
    </div>
</header></div>
  )
}

export default Hero