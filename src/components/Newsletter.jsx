import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-[#220056] p-20"><div>
    <h2 className="text-[#4CC9F0] font-semibold lg:text-xl md:pt-4 pt-4">
      Newsletter
    </h2>
    <p className="text-white pt-4 pb-5">
      Be the first one to know about discounts, offers and events.Unsubscribe whenever you like.
    </p>
    <div className="relative">
      <input
        placeholder="Enter your email"
        className="rounded-full px-4 py-3 bg-[#342F49] w-full input-p"
      ></input>
      <button className="text-white md:px-7 md:py-3 px-3 py-3 text-xs md:text-base rounded-full bg-[#6366F1] absolute right-2 submit-btn hover:text-white c-btn tracking-wider overflow-hidden">
        <span className="absolute inset-0 bg-[#5558ff]"></span>
        <span className="absolute inset-0 flex justify-center items-center">
          Submit
        </span>
        Submit
      </button>
    </div>
  </div></div>
  )
}

export default Newsletter