import adonaiX from "../assets/adonaiX.jpg";
import adonaipic from "../assets/adonaipic.jpeg";
import chideraX from "../assets/chideraX.jpg";
import chiderapic from "../assets/chiderapic.jpeg";
import raphaelX from "../assets/raphaelX.jpg";
import raphaelpic from "../assets/raphaelpic.jpeg";
import powertechX from "../assets/powertechX.jpeg";
import powertechpic from "../assets/powertechpic.jpeg";

import austinpic from "../assets/austinpic.jpeg";
// import vickyX from "../assets/vickyX.jpg";
// import vickypic from "../assets/vickypic.jpg";


const coreLeaders = [
  {
    name: "Jayden Adornai",
    role: "Founder & Lead Developer",
    description: "I am the Founder of IMTBlockchain and a Lead Web3 Developer. My mission is to build the future of Web3 in Enugu, focusing on expanding the blockchain ecosystem through scalable DApps and community empowerment.",
    realPic: adonaipic,   
    xAvatar: adonaiX,
    xLink: "https://x.com/Adornaij"
  },
  {
    name: "Chidera Andrew",
    role: "Co-Founder & Operations",
    description: "Been onchain since 2022 The Co founder of IMTBLOCKCHAIN, Project ambassador of @MetaLend_DeFi, @chance_ Solid team for @Being_DerpyAF and @Wise_Token Known for being a base builder 🟦 and supporting close to 30+ people in the Base ecosystem.",
    realPic: chiderapic, 
    xAvatar: chideraX, 
    xLink: "https://x.com/chiderahandle"
  },
  {
    name: "Prince Raphael",
    role: "Co-Founder & Lead Content Creator",
    description: "Prince Raphael is an ambitious entrepreneur and the Co-Founder & Head of External Content at IMTBLOCKCHAIN. Specializing in strategic communication and digital branding, he shapes the public perception of decentralized projects across the global Web3 ecosystem. Driven by a passion for continuous growth, his ventures extend beyond blockchain into international trade and exports, all grounded in a strong foundation of integrity.",
    realPic: raphaelpic,   
    xAvatar: raphaelX, 
    xLink: "https://x.com/princeraphaelhandle"
  },{
    name: "Powertech",
    role: "Chief Operating Officer (COO)",
    description: "Powertech drives the operational strategy and physical footprint of the IMTBlockchain community. Leading campus logistics and on ground execution, he is directly responsible for transforming our broader Web3 vision into a highly engaged, massive student movement at the Institute of Management and Technology. From coordinating large scale tech events to optimizing day to day community operations, his leadership ensures our decentralized goals have a powerful, real-world impact.",
    realPic: powertechpic,   
    xAvatar: powertechX, 
    xLink: "https://x.com/powertechhandle"
  },
  {
    name: "Austin",
    role: "Community Lead & Developer",
    description: "As the Head of Community for IMTBlockchain, Austin is the primary bridge between the leadership team and the student members. He oversees overarching community engagement strategies, drives discussions, and ensures the community culture remains active, educational, and focused on Web3 growth..",
    realPic: austinpic,   
    xAvatar: austinpic, 
    xLink: "https://x.com/austinh"
  },
  {
    name: "Vicky",
    role: "Ecosystem Moderator",
    description: "Vicky manages the day to day operations of IMTBlockchain’s social and discussion platforms. She is responsible for welcoming new members, moderating conversations, and answering questions, ensuring our digital ecosystem remains a safe, organized, and highly active hub for blockchain education.",
    // realPic: vickypic,   
    // xAvatar: vickyX, 
    xLink: "https://x.com/vickyhandle"
  }
];

const DynamicLeadership = () => {
  return (
    <section className="py-20 bg-slate-600 text-white flex justify-center">
      <div className="max-w-4xl w-full px-6">
        
        
        <div id="team" className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-widest uppercase mb-2">Core Teams</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-2">
          {coreLeaders.map((leader, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center bg-slate-800 p-8 rounded-2xl border border-slate-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(29,155,240,0.15)] hover:border-[#1DA1F2]"
            >
              
              
              <a href={leader.xLink} target="_blank" rel="noopener noreferrer" className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-slate-700 group-hover:border-[#1DA1F2] transition-colors duration-500 shadow-lg">
                
                
                <img 
                  src={leader.realPic} 
                  alt={`${leader.name} Real`} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" 
                />
                
                
                <img 
                  src={leader.xAvatar} 
                  alt={`${leader.name} X Avatar`} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-110" 
                />
              </a>

              
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-[#1DA1F2] transition-colors duration-300">
                {leader.name}
              </h3>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mt-1 mb-4">
                {leader.role}
              </p>
              <p className="text-center text-gray-400 leading-relaxed">
                {leader.description}
              </p>
              
              
              <div className="mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                 <span className="bg-[#1DA1F2]/10 text-[#1DA1F2] py-1 px-4 rounded-full text-sm font-medium border border-[#1DA1F2]/30">
                   Connect on X
                 </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DynamicLeadership;