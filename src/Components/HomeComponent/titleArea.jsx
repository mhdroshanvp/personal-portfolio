import React from 'react'
import pfp from "../../assets/level-2.png"

function TitleArea() {
  return (
    <>
      <div className="sm:mt-28 mt-5 sm:inset-0  flex justify-center items-center ">
        <div className=" sm:w-[1000px] sm:h-[450px] w-[400px] h-[650px]  ">
          <div className="sm:flex sm:justify-between xl:flex xl:justify-center items-center h-full ">
            <div className="sm:flex-shrink-0 flex justify-center ">
              <div>
                <img src={pfp} className='
                2xl:w-56 2xl:h-56
                xl:w-56 xl:h-56
                lg:w-52 lg:h-52
                md:w-44 md:h-44
                sm:w-52 sm:h-52
                xs:w-52 xs:h-52
                rounded-full border' alt="pfp" />
              </div>
            </div>
            <div className="text-white flex-grow ml-6">
              <h1 className="text-3xl font-extrabold mb-4">Hey, I'm Muhammed Roshan V P.</h1>
              <p className="text-lg ">I'm a versatile developer passionate about designing, coding, maintaining, and deploying end-to-end web solutions. I specialize in creating seamless user experiences and robust back-end systems, managing every aspect from concept to launch. Let's connect and build something extraordinary together!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleArea