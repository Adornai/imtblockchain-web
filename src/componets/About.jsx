import React from 'react'

const About = () => {
  return (
    <div className='border border-black/30 m-3 rounded-2xl pb-5 bg-blue-300 shadow-4xl pt-10 lg:mt-10 lg:mb-5 sm:mt-0' id='about'>
        <h1 className="text-3xl font-bold text-center py-3">About Us</h1>
        <p className="text-center lg:text-xl sm:text-lg px-6 sm:px-8 md:px-16 lg:px-34"><span className='font-bold'>IMTBlockchain</span> is a student led initiative at the Institute of Management and Technology, Enugu. We are dedicated to educating, building, and deploying decentralized applications, using our application to solve real world problems. <span className='font-bold text-blue-500'>IMTBlockchain</span> is a community of developers, designers, and enthusiasts building the future of Web3 in Enugu. We are dedicated to creating innovative blockchain solutions that empower individuals and businesses.</p>
    </div>
  )
}

export default About