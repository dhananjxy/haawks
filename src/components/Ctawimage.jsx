import React from 'react'
import Ctaimage from '../images/ctaimage.jpeg'

const Ctawimage = () => {
  return (
    <div>
    <div className="bg-[#7209B7] px-16 py-10 overflow-hidden relative">
        <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-bold dark:text-white sm:text-4xl">
                <span className="block text-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                Make the decentralized web
                </span>
                <span className="block text-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                a reality for everyone.
                </span>
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                    <button type="button" className="py-4 px-10  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Get started
                    </button>
                </div>
            </div>
        </div>
        <img src={Ctaimage} className="absolute top-0 right-10 hidden h-full max-w-1/2 lg:block"/>
    </div>
    </div>
  )
}

export default Ctawimage