import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

const achievements = [
  { id: 1, title: "Active Members", value: "100", suffix: "+", icon: "ri-user-star-line" },
  { id: 2, title: "Onboarded", value: "50", suffix: "+", icon: "ri-exchange-dollar-line" },
  { id: 3, title: "Event Partners", value: "9", suffix: "", icon: "ri-global-line" },
  { id: 4, title: "Partners", value: "2", suffix: "", icon: "ri-shake-hands-line" },
];

const CountUp = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(parseInt(to));
    }
  }, [isInView, motionValue, to]);


  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const Achievement = () => {
  return (
    <div className="w-full py-24">
      <div className="container mx-auto px-6">
        
       
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-blue-900/10 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
        >
          
          
          <div className="absolute top-0 w-full h-full bg-blue-500 blur-[50px] -z-10"></div>

          {achievements.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center text-center group">
              
              
              <div className="mb-4 p-4 rounded-full bg-blue-500/10 text-white text-3xl group-hover:bg-white group-hover:text-blue-900 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <i className={item.icon}></i>
              </div>

              
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <CountUp to={item.value} suffix={item.suffix} />
              </h3>

              
              <p className="text-gray-200 text-sm sm:text-base font-Jost uppercase tracking-wider">
                {item.title}
              </p>
              
            </div>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default Achievement;