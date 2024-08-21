import React from 'react';
import Navbar  from '../Components/navBar';
import TitleArea from '../Components/HomeComponent/titleArea';
import Cursor from '../Components/cursor';

function HomePage() {
  return (
    <>
      <Cursor />
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-white bg-opacity-5 backdrop-blur-md rounded-[10px] 2xl:w-[1200px] 2xl:h-[660px] xl:w-[950px] xl:h-[600px] lg:w-[800px] lg:h-[600px] md:w-[600px] md:h-[600px] sm:w-[400px] sm:h-[600px] xs:w-[300px] xs:h-[630px]'>

            <div>
                <Navbar />
            </div>



            <div>
                <TitleArea />
            </div>
        
        </div>
      </div>
    </>
  );
}

export default HomePage;
