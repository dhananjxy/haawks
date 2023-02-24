import React from 'react'
import { useRef } from 'react';
import { PieChart } from "react-minimal-pie-chart";
import './token.css';

const Tokenomics = () => {

    const dataMock = [
        { title: "Seed", value: 2.00, color: "#3260ed" },
        { title: "Private Sale", value: 6.00, color: "#8ca8ff" },
        { title: "Public Sale", value: 8.00, color: "#7af0d1" },
        { title: "Marketing", value: 6.00, color: "#3290ed" },
        { title: "Team", value: 18.00, color: "#7c7af0" },
        { title: "Strategic Funding", value: 15.00, color: "#32e4ed" },
        { title: "Ecosystem Rewards", value: 35.00, color: "#32bbed" },
        { title: "Liquidity", value: 5.00, color: "#4b00e2" },
        { title: "Advisory", value: 5.00, color: "#4bffe2" }
      ];
    
      const toolTip = useRef();
      return (
        <div className="bg-gradient-to-t from-[#000120] to-[#220056] p-10">

            {/* <div className="ml-20 w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r "></div> */}
        <h1 className="pt-4 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]" style={{display: "flex", justifyContent: "center"}}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] pb-3 pl-20">
                {" "}
                Tokenomics{" "}
              </span>
            </h1>
            <p className='text-white pt-2' style={{display: "flex", justifyContent: "center"}}>Learn more about our Vision behind HAAWKS and our Mission towards greatness.</p>
    <br/>
            <div className="customTooltip" ref={toolTip}>
      </div>
        <div className="pi-data tknTop flex justify-center p-20">
          
            <div className="tkn_distribution_wrp">
              <div className="mainPieCgar px-20">
                <PieChart
                  animationDuration={1000}
                  animate={true}
                  data={dataMock}
                  // label={({ dataEntry }) => dataEntry.value+"%"}
                  // labelStyle={{
                  //   fontSize: '5px',
                  //   fontFamily: 'sans-serif',
                  //   fill:"#fff"
                  // }}

                  onMouseOver={(e, index) => {
                    toolTip.current.innerHTML =dataMock[index].title+" "+dataMock[index].value + " %";
                    e.target.style.opacity = "0.8";
                    e.target.style.cursor = "pointer";
                    toolTip.current.style.top = e.pageY + "px";
                    toolTip.current.style.left = e.pageX + "px";
                    toolTip.current.classList.add("active");
                  }}
                  onMouseOut={(e, index) => {
                    e.target.style.opacity = "1";
                    e.target.style.cursor = "auto";
                    toolTip.current.classList.remove("active");
                  }}
                  lineWidth={45}
                  labelPosition={75}
                />
                <p>
                  Total <small>500,000,000</small>
                </p>
              </div>
              <ul className="ul_data-list px-20">
                <h5>Token Pools</h5>
                {dataMock &&
                  dataMock.map((data, id) => {
                    return (
                      <li key={id}>
                        <div>
                          <small
                            style={{ background: data.color }}
                          ></small>{" "}
                          {data.title}
                        </div>{" "}
                        <span>{data.value}%</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
        </div>
      </div>
  )
}

export default Tokenomics