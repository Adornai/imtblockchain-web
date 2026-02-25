import React from "react";
import { motion } from "motion/react";

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-blue-500/30">
      
      {/* The Grid Pattern */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* The Blue Glow at the top */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-30"></div>

    </div>
  );
};

export default ParticleBackground;