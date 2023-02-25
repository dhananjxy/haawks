import React from 'react'

const Community = () => {
  return (
    <div className="pt-10 pb-20 m-0 overflow-hidden w-100 h-96 bg-gradient-to-b from-[#000120] to-[#220056]">
        <h2 className='"pt-8 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]"' style={{display: "flex", justifyContent: "center"}}>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                Join Our Community{" "}
              </span>
              </h2>
              {/* container div */}
                <div className='flex bg-white h-full'>
                    {/* div for smaller image and text */}
                    <div className='flex flex-col w-1/2 bg-gray'>
                        {/* smaller image */}
                    <div className='h-1/2 w-full bg-indigo-300'>
                        bjb
                    </div>
                {/* text */}
                    <div className='h-1/2 w-full bg-lime-600'></div>
                    </div>
                    {/* div for big image */}
                    <div className='w-1/2 bg-black'>

                    </div>
                </div>
    </div>
  )
}

export default Community