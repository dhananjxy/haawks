import React from 'react'
import Mission from '../images/mission1.jpeg'
import Vision from '../images/vision.jpeg'


const Missionvision = () => {
  return (
    <div className='p-10 bg-gradient-to-b from-[#34136e] to-[#7209B7]'>
    <section className="about-us container mx-auto sm:px-4">
    <h2 className='"pt-4 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]"' style={{display: "flex", justifyContent: "center"}}>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                Know About Us{" "}
              </span>
              </h2>
              <p className='text-white pt-2' style={{display: "flex", justifyContent: "center"}}>Learn more about our Vision behind HAAWKS and our Mission towards greatness.</p>
    <br/>
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap">
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className='text-3xl text-[#4CC9F0] p-5 font-bold'>Our Vision</h2>
            <p className='text-white text-lg font-bold pb-10'>Our vision is to make blockchain technology accessible to the masses. We strive to create a decentralized platform and ecosystem that is secure, transparent, and efficient. </p>
            <ul>
                <li className='text-gray-100'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/> Committed to revolutionizing the way transactions are conducted, by leveraging the power of blockchain technology to create a platform that is decentralized, secure, and scalable. </li>
                <li className='text-gray-100'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/> Our goal is to become the go-to blockchain platform for businesses and individuals looking to take advantage of the benefits of decentralization.</li>
                <li className='text-gray-100'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/> We aim to make blockchain technology more accessible to individuals and businesses all over the world, by providing an intuitive and user-friendly platform that is accessible to all.</li>
                <li className='text-gray-100'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/> We want to make sure that everyone has the opportunity to benefit from the advantages of decentralization and blockchain technology.</li>
            
            </ul>
        </div>
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='pt-20' src={Vision} style={{width: '90%'}} alt="Vision Image"/>
        </div>
    </div>
    <br/>
    <br/>    
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap">
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='pt-20' src={Mission} style={{width: '90%'}}  alt="Mission Image"/>
        </div>

        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
        <h2 className='text-3xl text-[#4CC9F0] p-5 font-bold'>Our Mission</h2>
            <p className='text-white text-lg font-bold pb-10'>Our mission is to empower individuals and businesses to take control of their financial futures by providing a decentralized and transparent blockchain platform that enables fast, secure and low-cost transactions </p>
            <ul>
                <li className='text-gray-100'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> We strive to build a strong community of users and developers who share our vision of a decentralized future.</li>
                <li className='text-gray-100'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> By fostering a culture of collaboration and innovation, we aim to create a platform that is continuously evolving and adapting to meet the needs of our users.</li>
                <li className='text-gray-100'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Our goal is to make blockchain technology accessible to everyone, regardless of their technical knowledge or experience.</li>
                <li className='text-gray-100'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> We are committed to providing our users with the tools and resources they need to succeed in a decentralized world.</li>
            
            </ul>
        </div> 
    </div>
</section></div>
  )
}

export default Missionvision