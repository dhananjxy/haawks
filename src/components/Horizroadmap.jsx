import React from 'react'
import Roadmapimg from '../images/roadmap3.png'
const Horizroadmap = () => {
  return (
    <div className='bg-gradient-to-t from-[#000120] to-[#220056] p-10' id="roadmap"><div className='p-10'>
    {/* <div className="ml-10 w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r "></div> */}
    <h1 className="pt-4 pl-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]" style={{display: "flex", justifyContent: "center"}}>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
              {" "}
              RoadMap{" "}
            </span>
          </h1>
          <p className='text-white pt-2' style={{display: "flex", justifyContent: "center"}}>Learn more about our Vision behind HAAWKS and our Mission towards greatness.</p>
  <br/>
          </div>
          <img src={Roadmapimg} alt='roadmap-img'/>
          </div>
  )
}

export default Horizroadmap