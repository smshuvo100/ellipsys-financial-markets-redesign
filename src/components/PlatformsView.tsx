import React, { useState } from 'react';
import { Smartphone, Monitor, Cpu, Laptop, Download, ShieldCheck, ArrowRight, Server } from 'lucide-react';
import { platformFeatures } from '../data';

export default function PlatformsView() {
  const [activeTab, setActiveTab] = useState<'trader' | 'pro'>('trader');

  const requirements = [
    { platform: 'Zen Trader (MT5)', os: 'Windows 10/11, macOS Big Sur+, iOS 14.0+, Android 8.0+', processor: 'Core i5 2.0 GHz or higher', ram: '8 GB RAM Minimum' },
    { platform: 'Zen Pro (VertexFX)', os: 'Sleek HTML5 Web (Any Browser), Windows 10/11, iOS 13.0+, Android 7.0+', processor: 'Core i3 1.5 GHz or higher', ram: '4 GB RAM Minimum' }
  ];

  return (
    <div className="relative min-h-screen bg-[#F9FAF9] pt-24 pb-20">
      {/* Platform Specific Hero Banner */}
      <section className="bg-black text-white py-20 relative border-b-4 border-gold">
        <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center sm:text-left space-y-4 max-w-3xl">
            <span className="inline-block mb-[15px] text-[10px] font-mono tracking-widest text-gold bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-none font-black uppercase">
              PRO TERMINALS
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase leading-none">
              ADVANCED TRADING TERMINALS
            </h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              We provide access to two premium institutional trading environments. Powered by lightning-fast servers to preserve your competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* Main Platform Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {/* Horizontal Selectors */}
        <div className="flex justify-center">
          <div className="bg-black p-2 rounded-none border-2 border-gold shadow-[4px_4px_0px_0px_rgba(200,155,60,0.2)] inline-flex space-x-2">
            <button
              onClick={() => setActiveTab('trader')}
              className={`px-5 py-3 rounded-none text-xs font-mono font-black uppercase tracking-widest transition-all flex items-center space-x-2 cursor-pointer ${activeTab === 'trader' ? 'bg-gold text-black border border-gold' : 'text-zinc-400 hover:text-white border border-transparent'}`}
            >
              <Monitor className="h-4 w-4" />
              <span>Zen Trader (MT5)</span>
            </button>
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-5 py-3 rounded-none text-xs font-mono font-black uppercase tracking-widest transition-all flex items-center space-x-2 cursor-pointer ${activeTab === 'pro' ? 'bg-gold text-black border border-gold' : 'text-zinc-400 hover:text-white border border-transparent'}`}
            >
              <Server className="h-4 w-4" />
              <span>Zen Pro (VertexFX)</span>
            </button>
          </div>
        </div>

        {/* Selected Platform Details */}
        {activeTab === 'trader' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            {/* Left side: descriptions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 text-gold px-3 py-1.5 rounded-none text-[9px] font-mono font-black tracking-widest uppercase">
                <span>MOST POPULAR ENGINE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase leading-none">
                {platformFeatures.zenTrader.name}
              </h2>
              <p className="text-xs text-gold font-mono font-black uppercase tracking-widest mt-1">
                POWERED BY {platformFeatures.zenTrader.poweredBy}
              </p>
              <p className="text-sm text-zinc-700 leading-relaxed font-sans">
                {platformFeatures.zenTrader.description}
              </p>
              
              <ul className="space-y-4 pt-2">
                {platformFeatures.zenTrader.bulletPoints.map((bp, idx) => (
                  <li key={idx} className="flex items-start text-xs text-zinc-800 font-mono font-bold uppercase tracking-tight leading-relaxed">
                    <ShieldCheck className="h-5 w-5 text-gold mr-3 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-5 py-3.5 bg-black hover:bg-gold hover:text-black border-2 border-black text-white text-xs font-mono font-black tracking-widest rounded-none uppercase transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Desktop MT5</span>
                </button>
                <button className="px-5 py-3.5 bg-white border-2 border-black hover:bg-zinc-100 text-black text-xs font-mono font-black tracking-widest rounded-none uppercase transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] flex items-center space-x-2">
                  <Smartphone className="h-4 w-4" />
                  <span>Download Mobile iOS</span>
                </button>
              </div>
            </div>

            {/* Right side: image card */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="bg-white p-4 rounded-none border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <img 
                  src="/src/assets/images/trading_desk_1784624785991.jpg" 
                  alt="Zen Trader MT5 Platform Desk" 
                  className="rounded-none w-full object-cover h-[340px] opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-black border-2 border-gold px-4 py-2 rounded-none text-[9px] font-mono text-gold font-black tracking-widest">
                  MT5 AGGREGATED FEED
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            {/* Left side: descriptions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 text-gold px-3 py-1.5 rounded-none text-[9px] font-mono font-black tracking-widest uppercase">
                <span>INSTITUTIONAL GRADE AUTOMATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase leading-none">
                {platformFeatures.zenPro.name}
              </h2>
              <p className="text-xs text-gold font-mono font-black uppercase tracking-widest mt-1">
                POWERED BY {platformFeatures.zenPro.poweredBy}
              </p>
              <p className="text-sm text-zinc-700 leading-relaxed font-sans">
                {platformFeatures.zenPro.description}
              </p>
              
              <ul className="space-y-4 pt-2">
                {platformFeatures.zenPro.bulletPoints.map((bp, idx) => (
                  <li key={idx} className="flex items-start text-xs text-zinc-800 font-mono font-bold uppercase tracking-tight leading-relaxed">
                    <ShieldCheck className="h-5 w-5 text-gold mr-3 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-5 py-3.5 bg-gold hover:bg-white text-black border-2 border-gold text-xs font-mono font-black tracking-widest rounded-none uppercase transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(200,155,60,0.25)] flex items-center space-x-2">
                  <Laptop className="h-4 w-4" />
                  <span>Launch Web Console</span>
                </button>
                <button className="px-5 py-3.5 bg-white border-2 border-black hover:bg-zinc-100 text-black text-xs font-mono font-black tracking-widest rounded-none uppercase transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download VTL Scripts</span>
                </button>
              </div>
            </div>

            {/* Right side: image card */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="bg-white p-4 rounded-none border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <img 
                  src="/src/assets/images/trading_desk_1784624785991.jpg" 
                  alt="Zen Pro VertexFX Desktop" 
                  className="rounded-none w-full object-cover h-[340px] opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-black border-2 border-gold px-4 py-2 rounded-none text-[9px] font-mono text-gold font-black tracking-widest">
                  VERTEX FX11 CLOUD SERVERS
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Specifications Section */}
        <div className="space-y-8 pt-16 border-t border-zinc-200">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-display font-black text-2xl text-black uppercase tracking-tight">TERMINAL REQUIREMENTS</h3>
            <p className="text-xs text-zinc-500 font-mono">Minimum machine guidelines to prevent rendering latencies during active sessions.</p>
          </div>

          <div className="bg-white rounded-none border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-black border-b border-gold font-mono font-black text-white uppercase text-[10px] tracking-wider">
                    <th className="p-4">Platform name</th>
                    <th className="p-4">OS Supported</th>
                    <th className="p-4">Processor Requirement</th>
                    <th className="p-4">RAM Minimum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 font-mono font-bold">
                  {requirements.map((req, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                      <td className="p-4 text-black text-xs font-black">{req.platform}</td>
                      <td className="p-4 text-zinc-600 font-sans font-medium text-xs leading-relaxed">{req.os}</td>
                      <td className="p-4 text-zinc-800 text-xs font-semibold">{req.processor}</td>
                      <td className="p-4 text-zinc-800 text-xs font-black">{req.ram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
