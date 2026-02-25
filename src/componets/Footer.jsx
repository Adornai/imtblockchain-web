import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* 1. Brand & Description */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-widest">
            IMT<span className="text-blue-500">BLOCKCHAIN</span>
          </h2>
          <p className="text-sm leading-relaxed">
            The premier student lead Web3 hub at the Institute of Management and Technology, Enugu. We are building, learning, and shaping the decentralized future.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Ecosystem</a></li>
            <li><a href="#events" className="hover:text-blue-400 transition-colors">Events & Workshops</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#team" className="hover:text-blue-400 transition-colors">Leadership</a></li>
          </ul>
        </div>

        {/* 3. Community & Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Community</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#1DA1F2] transition-colors">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-[#5865F2] transition-colors">Discord Server</a></li>
            <li><a href="https://chat.whatsapp.com/DbmMz0p4r3JF3G6IqiuXd2?mode=gi_t" className="hover:text-[#25D366] transition-colors">WhatsApp Group</a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">Channel (YouTube)</a></li>
          </ul>
        </div>

        {/* 4. Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:imtblockchainenugu@gmail.com" className="hover:text-blue-400 transition-colors">
                imtblockchainenugu@gmail.com
              </a>
            </li>
            <li className="mt-4 text-xs">
              📍 Enugu, Nigeria
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {currentYear} IMTBlockchain. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;