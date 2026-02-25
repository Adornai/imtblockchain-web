import React from "react";
import { motion } from "motion/react"; 
import eventImage from "../assets/image6.jpg"; 

const EventShowcaseTwo = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="services">
      <div className="container mx-auto px-6">
        
        
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-20">
          
          

          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Empowering the Next Gen at <span className="text-blue-500">ICP Event</span>
            </h2>

            <p className="text-gray-100 text-lg leading-relaxed mb-6 font-Jost">
              We partnered with the organizers to bring our community over to  
              <span className="text-white font-semibold"> ICP Event</span>. 
              Our team provided Support.
            </p>

            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-100">
                <i className="ri-checkbox-circle-fill text-blue-500 text-xl"></i>
                Provided Community
              </li>
              <li className="flex items-center gap-3 text-gray-100">
                <i className="ri-checkbox-circle-fill text-blue-500 text-xl"></i>
                Organized Online Reachout
              </li>
              <li className="flex items-center gap-3 text-gray-100">
                <i className="ri-checkbox-circle-fill text-blue-500 text-xl"></i>
                Attended
              </li>
            </ul>

            <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              View Case Study
            </button>

          </motion.div>


          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative group"
          >

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            

            <a href="https://x.com/rapheldubem25/status/1956733840489070785?s=20" target="_blank"><div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={eventImage} 
                alt="Event Partnership" 
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" 
              />
              

              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <p className="text-blue-400 text-sm font-bold">ICP Event 2025</p>
              </div>
            </div></a>
          </motion.div>
          

        </div>
      </div>
    </section>
  );
};

export default EventShowcaseTwo;