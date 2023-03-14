import React from 'react'
import { Fade } from 'react-reveal'
import Assetimage from '../images/assetgraphic.webp'
import Deximage from '../images/dexgraphic.png'
import Nftimage from '../images/nftgraphic.png'
const Services = () => {
  return (
    <div> <div className='p-16 bg-gradient-to-t from-[#000120] to-[#220056]'>
    <section className="about-us container mx-auto sm:px-4">
    <Fade bottom><h2 className='"pt-4 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]"' style={{display: "flex", justifyContent: "center"}}>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                Our Services{" "}
              </span>
              </h2>
              <p className='text-white pt-8 pb-12' style={{display: "flex", justifyContent: "center"}}>Learn more about our Vision behind HAAWKS and our Mission towards greatness.</p>
    </Fade>
    <br/>
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap">
    <Fade left cascade>
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className='text-4xl text-[#4CC9F0] pb-10 font-bold'>DEX</h2>
            <p className='text-white text-xl font-bold pb-10'>Details. </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/> Committed to revolutionizing the way transactions are conducted, by leveraging the power of blockchain technology to create a platform that is decentralized, secure, and scalable. </li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/> Our goal is to become the go-to blockchain platform for businesses and individuals looking to take advantage of the benefits of decentralization.</li>
            </ul>
            <br/>
            <p className='text-white text-xl font-bold pb-10'>Utility. </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Committed to revolutionizing the way transactions are conducted, by leveraging the power of blockchain technology to create a platform that is decentralized, secure, and scalable. </li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Our goal is to become the go-to blockchain platform for businesses and individuals looking to take advantage of the benefits of decentralization.</li>
            </ul>
            <br/>
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
        </div>
        
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='pt-20' src={Deximage} style={{width: '90%'}} alt="Vision Image"/>
        </div></Fade>
    </div>
    <br/>
    <br/>    
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap">
        <Fade right cascade>
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='pt-20' src={Nftimage} style={{width: '90%'}}  alt="Mission Image"/>
        </div>

        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
        <h2 className='text-4xl text-[#4CC9F0] pb-10 font-bold'>NFT Marketplace</h2>
        <p className='text-white text-xl font-bold pb-10'>Details</p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> We strive to build a strong community of users and developers who share our vision of a decentralized future.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> By fostering a culture of collaboration and innovation, we aim to create a platform that is continuously evolving and adapting to meet the needs of our users.</li>  
            </ul>
            <br/><p className='text-white text-xl font-bold pb-10'>Utility</p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> We strive to build a strong community of users and developers who share our vision of a decentralized future.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> By fostering a culture of collaboration and innovation, we aim to create a platform that is continuously evolving and adapting to meet the needs of our users.</li>  
            </ul>
            <br/>
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
        </div> 
        </Fade>
    </div>
    <br />
    <br />
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap">
    <Fade left cascade>
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className='text-4xl text-[#4CC9F0] pb-10 font-bold'>Asset Tokenisation</h2>
            <p className='text-white text-xl font-bold pb-10'>Details. </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Asset tokenization in real estate is the process of converting ownership of a property into digital tokens that can be traded on a blockchain-based platform.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> The process of tokenization involves digitizing the asset's legal ownership, value, and other relevant information, which is then recorded on a blockchain.</li>
            </ul>
            <br/>
            <p className='text-white text-xl font-bold pb-10'>Utility. </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Tokenization can provide many benefits for real estate investors and property owners.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Overall, asset tokenization is an innovative solution that has the potential to transform the way real estate transactions are conducted and increase access to investment opportunities in the industry.</li>
            </ul>
            <br/>
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
        </div>
        
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='pt-20' src={Assetimage} style={{width: '90%'}} alt="Vision Image"/>
        </div></Fade>
    </div><div className='flex justify-center'> <a className="mt-8 mx-8 px-24 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
          href="#">Read More</a></div>
</section></div></div>
  )
}

export default Services