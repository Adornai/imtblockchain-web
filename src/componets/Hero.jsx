import React from 'react';
import { motion } from "motion/react";
import Marquee from './Marquee';
import ParticleBackground from './ParticleBackground';

// 1. Animation Variants (The Recipe)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each letter
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", damping: 12, stiffness: 100 } 
  },
};

const Hero = () => {
  // 2. Split text into arrays so we can animate letters individually
  const textFirst = "IMT".split("");
  const textSecond = "BLOCKCHAIN".split("");

  return (
    <div className='relative pt-24 sm:pt-32 min-h-screen overflow-hidden'>
      
      {/* Fix: Put background in absolute so it stays BEHIND text */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* 3. The Animated Title */}
        <motion.h1 
          className='lg:text-8xl font-Jost font-bold text-center text-5xl cursor-default'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {textFirst.map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block text-black sm:text-3xl lg:text-8xl">
              {char}
            </motion.span>
          ))}

          
          {textSecond.map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block text-blue-600 sm:text-3xl lg:text-8xl">
              {char}
            </motion.span>
          ))}
        </motion.h1>

        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className='font-Jost font-semibold text-center lg:text-2xl text-sm text-slate-700 mt-4'
        >
          A Community Building the Future of Web3 in Enugu
        </motion.p>

        
        <a href="https://chat.whatsapp.com/DbmMz0p4r3JF3G6IqiuXd2?mode=gi_t" target="_blank" rel="noopener noreferrer"><motion.button 
          whileHover={{ scale: 1.3, boxShadow: "0px 00px 20px rgba(37, 99, 235, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, type: "spring" }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full mt-8 mx-auto block font-bold transition-colors hover:bg-blue-900 hover:border"
        >
          Get Started
        </motion.button></a>

      </div>

      {/* Decorative Border Box (Kept from your code) */}
      <div className='mt-20 rounded-2xl border border-black/10 m-3 shadow-2xl bg-white/5 backdrop-blur-sm p-4'>
         <Marquee />
      </div>

    </div>
  )
}

export default Hero;