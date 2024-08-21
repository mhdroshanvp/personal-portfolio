import React from 'react'
import Navbar from '../Components/navBar'
import { Link } from 'react-router-dom'

function ProjectPage() {
    return (
        <>
          <div className='flex justify-center items-center h-screen'>
            <div className='bg-white bg-opacity-5 backdrop-blur-md rounded-[10px] 2xl:w-[1200px] 2xl:h-[660px] xl:w-[950px] xl:h-[600px] lg:w-[800px] lg:h-[600px] md:w-[600px] md:h-[600px] sm:w-[400px] sm:h-[600px] xs:w-[300px] xs:h-[630px]'>
    
                <div>
                    <Navbar />
                </div>
    
    
    
                <div>
                    <div className="sm:mt-28 mt-5 sm:inset-0  flex justify-center items-center ">
                        <div className="bg-[#000000] sm:w-[1000px] sm:h-[500px] w-[400px] h-[650px]   rounded-[70px] p-6">
                        <div className="sm:flex sm:justify-between xl:flex xl:justify-center items-center h-full ">
                            <div className="sm:flex-shrink-0 flex justify-center ">
                            {/* <img src={pfImage} alt="Headline" className="w-[300px] h-[300px] rounded-[25px]" /> */}
                            <p>pic</p>
                            </div>
                            <div className="text-white flex-grow ml-6">
                            <h1 className="text-3xl font-bold mb-4">Projects</h1>

                            <button className='bg-white text-black rounded-[20px] w-40 h-10 mt-5'>
                                <Link to="/">
                                Connecting with us
                                </Link>
                            </button>
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

export default ProjectPage