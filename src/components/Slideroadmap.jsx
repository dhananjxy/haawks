import React from 'react'
import './map.css'
import G5 from '../images/Group 5.svg'
import G10 from '../images/Group 7.svg'
import G7 from '../images/Group 8.svg'
import G9 from '../images/Group 9.svg'
import G8 from '../images/Group 8.svg'
import G11 from '../images/Group 11.svg'
import G15 from '../images/Group 15.svg'
import G12 from '../images/Group 12.svg'
import G16 from '../images/Group 16.svg'
import G13 from '../images/Group 13.svg'
import G17 from '../images/Group 17.svg'
import G14 from '../images/Group 14.svg'
const Slideroadmap = () => {

    const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

  return (<div className='p-16 bg-gradient-to-t from-[#000120] to-[#220056] min-h-screen'>
  <div className='p-16'>
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
    <div className=' flex py-0 px-35 justify-center items-center ' >
          <div className="wrapper">
      <i id="left" className="fa-solid fa-angle-left"></i>
      <div className="carousel">
        <img src={G5} alt="img" draggable="false"/>
        <img src={G10} alt="img" draggable="false"/>
        <img src={G7} alt="img" draggable="false"/>
        <img src={G9} alt="img" draggable="false"/>
        <img src={G8} alt="img" draggable="false"/>
        <img src={G11} alt="img" draggable="false"/>
        <img src={G15} alt="img" draggable="false"/>
        <img src={G12} alt="img" draggable="false"/>
        <img src={G16} alt="img" draggable="false"/>
        <img src={G13} alt="img" draggable="false"/>
        <img src={G17} alt="img" draggable="false"/>
        <img src={G14} alt="img" draggable="false"/>
      </div>
      <i id="right" className="fa-solid fa-angle-right"></i>
    </div>
    </div></div>
  )
}

export default Slideroadmap