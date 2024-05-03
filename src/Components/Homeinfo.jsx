import React from 'react'
import { Link } from 'react-router-dom';

const renderContent = {
  1:(
    <div className>
      <p className='my-2 p-2 font-poppins font-medium sm:text-xl text-center text-pretty'>Hi i am <span className='font-bold'>Ansh</span> a Web-enthusiast and Competetive programmer</p>
      <div className='flex justify-center '>
      <Link to={"/about"}>
        <span className="text-white font-poppins bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">About Me</span>
      </Link>
      </div>
    </div>
  ),
  2:(
    <div>
    <p className='my-2 p-2 font-poppins font-medium sm:text-xl text-center text-pretty'>Get to Know about my skills and learnings</p>
    <div className='flex justify-center'>
    <Link to={"/projects"}>
      <span className="text-white font-poppins bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">About Me</span>
    </Link>
    </div>
    
  </div>
  ),
  3:(
    <div >
    <p className='my-2 p-2 font-poppins font-medium sm:text-xl text-center text-pretty'>Contact Me :-</p>
    <div className='flex justify-center '>
    <Link to={"/contact"}>
      <span className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 font-poppins focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact</span>
    </Link>
    </div>
  </div>
  ),
  4:(
    <div>
    <p className='my-2 p-2 font-poppins font-medium sm:text-xl text-center text-pretty'>Catch My Projects </p>
    <div className='flex justify-center '>
    <Link to={"/projects"}>
      <span className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-poppins">Projects</span>
    </Link>
    </div>
  </div>
  )
}
const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null ;
}

export default Homeinfo
