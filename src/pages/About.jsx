import React from 'react'
import {libraries} from '../constants'
function About() {
  return (
    <div className=' max-container w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full p-0'>
     <h1 className='head-text'>Hello, I'm Ansh</h1>
     
     <div className='my-5 flex flex-col text-yellow-100'>
        <p>
        I'm a 2nd year student pursuing Bachelor of Engineering in Computer Science at UIET, Panjab University. I have developed a deep interest in Competitive Programming and Problem Solving. I find the challenge of participating in live contests and solving complex problems exhilarating. Aside from my love for programming, I am also passionate about web development and AI/ML. I enjoy creating websites and web applications, which has helped me gain practical experience in this field.
        </p>
     </div>
     <div className='py-10 flex flex-col gap-5'>
        <h3 className='subhead-text'>Libraries and Frameworks</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {libraries.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
       <div>
       <h3 className='subhead-text'>Libraries and Frameworks</h3>
       </div>

     </div>
    </div>
  )
}

export default About
