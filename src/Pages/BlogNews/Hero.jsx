import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-[300px] p-6 bg-orange-600 text-white bg-opacity-35 flex items-center justify-center relative">
       <img
        src="https://www.hashmicro.com/blog/wp-content/uploads/2022/10/Tools-16.jpg"
        className="absolute top-0 opacity-40 w-full h-full object-cover"
      />
    <div className="absolute w-full md:p-8 flex flex-col gap-2 items-start justify-center px-6">
      <h2 className="text-lg md:text-2xl font-medium">
        Quality, Integrity, Value.
      </h2>
      <h1 className="w-full text-3xl md:text-5xl font-light text-start tracking-wide">
        Blog | News
      </h1>
      <p className="w-full max-w-md text-start">
        We excel at transforming visions into reality through outstanding
        craftmanship and precise attention to detail. With years of expirance
        and a dedication to quality
      </p>
    </div>

  </div>
  )
}

export default Hero