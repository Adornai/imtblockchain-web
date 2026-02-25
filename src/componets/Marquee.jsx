import React from "react";
import { motion } from "motion/react";

import images1 from "../assets/image1.jpg";
import images2 from "../assets/image2.jpg";
import images4 from "../assets/image4.jpg";
import images5 from "../assets/image5.jpg";
import images6 from "../assets/image6.jpg";
import images7 from "../assets/image7.jpg";
import images8 from "../assets/image8.jpg";
import images9 from "../assets/image9.jpg";
import images10 from "../assets/image10.jpg";
import images11 from "../assets/image11.jpg";
import images12 from "../assets/image12.jpg";
import images13 from "../assets/image13.jpg";
import images14 from "../assets/image14.jpg";
import images15 from "../assets/image15.jpg";
import images16 from "../assets/image16.jpg";
import images18 from "../assets/image18.jpg";
import images19 from "../assets/image19.jpg";


const images = [images1, images2, images4, images5, images6, images7, images8, images9, images10, images11, images12, images13, images14, images15, images16, images18, images19];

const Marquee = () => {
  return (
    <div className="container mx-auto py-10 overflow-hidden pt-10">
       
    
      <div className="flex w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        <motion.div
          className="flex flex-shrink-0 gap-10 pr-10"
          animate={{ x: "-50%" }}
          transition={{
            duration: 100, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner ${index}`}
              className="h-30 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;