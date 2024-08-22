import React from 'react'
import Navbar  from '../Components/navBar';
import { Link } from 'react-router-dom';
import sidePic from '../assets/myself-3.png'

function AboutPage() {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-white  bg-opacity-5 backdrop-blur-md rounded-[10px] 2xl:w-[1200px] 2xl:h-[660px] xl:w-[950px] xl:h-[600px] lg:w-[800px] lg:h-[600px] md:w-[600px] md:h-[600px] sm:w-[400px] sm:h-[600px] xs:w-[300px] xs:h-[630px]'>

            <div>
                <Navbar />
            </div>



            <div>
                <div className="sm:mt-28 mt-5 sm:inset-0  flex justify-center items-center ">
                    <div className="sm:w-[1000px] sm:h-[500px] w-[400px] h-[650px]  p-3">
                      <div className="sm:flex sm:justify-between xl:flex xl:justify-center items-center h-full ">
                        
                        <div className="sm:flex-shrink-0 flex justify-center ">
                          <img src={sidePic} alt="Headline" className="w-[400px] h-[400px] rounded-[25px]" />
                        </div>
                        
                        <div className="text-white flex-grow ml-6">
                          <h1 className="text-4xl font-poppins mb-4">Who am i ?</h1>
                          <p className="font-raleway w-[700px]">I'm a self-taught MERN stack developer with a passion for designing and developing robust websites from the ground up. With experience in building dynamic web applications, I excel in both front-end and back-end development, leveraging my strong understanding of full-stack technologies. My drive to continuously learn and explore new skills fuels my creativity and keeps me at the forefront of innovation. I’m always eager to contribute my expertise to a collaborative and dynamic development team, where I can help turn ambitious ideas into reality</p>
                        </div>
                    
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
      </div>
    </>
  )
}

export default AboutPage