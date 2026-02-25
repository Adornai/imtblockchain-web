import React from "react";
import { motion } from "motion/react";

// Note: Removed the hardcoded 'import image from ...' 
// because we are now passing specific images via props.

const EventCard = ({ image, date, title, location, description, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group w-full h-112.5 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/5"
    >
      
      {/* 1. THE IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* 2. GRADIENT OVERLAY */}
      <a href={link} target="blank"></a><div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity duration-300"></div>

      {/* 3. BORDER GLOW */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-colors duration-300"></div>

      {/* 4. DATE BADGE */}
      <div className="absolute top-4 right-4 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        {date}
      </div>

      {/* 5. TEXT CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        
        <h3 className="text-2xl font-bold text-white mb-1 leading-tight group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <i className="ri-map-pin-line text-blue-500"></i>
          <span>{location}</span>
        </div>

        {/* DESCRIPTION (Hidden by default, slides up on hover) */}
        <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-4">
          {description}
        </p>

        {/* BUTTON */}
        <div className="h-0 group-hover:h-10 overflow-hidden transition-all duration-300">
          <button className="text-white text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all hover:text-blue-400">
            View Details <i className="ri-arrow-right-line"></i>
          </button>
        </div>

      </div><a/>
    </motion.div>
  );
};

export default EventCard;