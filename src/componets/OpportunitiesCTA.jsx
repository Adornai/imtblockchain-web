import React from 'react';

const OpportunitiesCTA = () => {
  return (
    <section className="py-24 bg-slate-550 px-6">
      <div className="max-w-5xl mx-auto bg-linear-to-br from-slate-900 to-slate-800 border border-blue-500/30 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden group">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/20 blur-[80px] rounded-full transition-all duration-500 group-hover:bg-purple-500/20"></div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
          Unlock Web3 <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-200">Opportunities</span>
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
          Ready to get paid to build? Access our curated board of ecosystem grants, active hackathons, developer bounties, and exclusive Web3 jobs.
        </p>

        
        <a 
          href="" 
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:-translate-y-1 relative z-10"
        >
          Explore Jobs & Grants
         
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
        
      </div>
    </section>
  );
};

export default OpportunitiesCTA;