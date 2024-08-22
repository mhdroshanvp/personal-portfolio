import React from 'react'
import pfp from "../../assets/level-2.png"

// 2xl: 1536px
// xl: 1280px
// lg: 1024px
// md: 768px
// sm: 640px
// xs: 320px

function TitleArea() {
  return (
    <>
      <div className="
      sm:inset-0  flex justify-center items-center 
      sm:mt-28
      xs:mt-28
      md:mt-28
      lg:mt-28
      xl:mt-28
      2xl:mt-28
      ">
        <div className=" 
        sm:w-[1000px] sm:h-[450px]
        xs:w-[1000px] xs:h-[450px]
        md:w-[560px] md:h-[450px]
        lg:w-[900px] lg:h-[450px]
        xl:w-[600px] xl:h-[400px]
        2xl:w-[900px] 2xl:h-[450px]">
          
          <div className="
          xs:flex xs:flex-col
          sm:flex sm:flex-col
          md:flex md:flex-col
          lg:flex lg:flex-row
          xl:flex xl:flex-row
          2xl:flex 2xl:flex-row
          sm:justify-between xl:justify-center items-center h-full">

            <div className="sm:flex-shrink-0 flex justify-center "> 
              <div>
                <img src={pfp} className="
                2xl:w-56 2xl:h-56
                xl:w-56 xl:h-56
                lg:w-52 lg:h-52
                md:w-44 md:h-44
                sm:w-52 sm:h-52
                xs:w-32 xs:h-32
                rounded-full border" alt="pfp" />
              </div>
            </div>

            <div className="text-white flex-grow 
              2xl:ml-6
              xl:ml-6
              lg:ml-8
              md:mt-8
              sm:ml-8
              xs:ml-8">
              <h1 className="
                2xl:text-3xl 2xl:mb-4
                xl:text-3xl xl:mb-4
                lg:text-3xl lg:mb-4
                md:text-3xl md:mb-4
                sm:text-3xl sm:mb-4
                xs:text-2xl xs:mb-5
                font-extrabold">I'm Muhammed Roshan V P.</h1>
              <p className="
              2xl:text-lg 2xl:w-[700px]
              xl:text-lg xl:w-[500px]
              lg:text-lg lg:w-[500px]
              md:text-lg md:w-[500px]
              sm:text-md sm:w-[500px]
              xs:text-md xs:w-[250px]
              ">I'm a Mern stack developer, passionate about designing, coding, maintaining, and deploying end-to-end web solutions. I specialize in creating seamless user experiences and robust back-end systems, managing every aspect from concept to launch. Let's connect and build something extraordinary together!</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default TitleArea