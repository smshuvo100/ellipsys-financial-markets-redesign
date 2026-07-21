import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, Award, FileCheck2, HelpCircle, ChevronDown, ChevronUp, CheckCircle, Users } from 'lucide-react';
import { AboutSubView } from '../types';
import { faqs, companyTimeline } from '../data';

interface AboutViewProps {
  initialSubView?: string;
}

export default function AboutView({ initialSubView }: AboutViewProps) {
  const [activeTab, setActiveTab] = useState<AboutSubView>('about-us');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Sync state if navigation sets a sub-view externally
  useEffect(() => {
    if (initialSubView) {
      setActiveTab(initialSubView as AboutSubView);
    }
  }, [initialSubView]);

  const tabs = [
    { id: 'about-us' as AboutSubView, label: 'Company Profile' },
    { id: 'regulator' as AboutSubView, label: 'Our Regulator (FSC)' },
    { id: 'auditor' as AboutSubView, label: 'Auditor (BDO)' },
    { id: 'compliance' as AboutSubView, label: 'Compliance & Safety' },
    { id: 'faqs' as AboutSubView, label: 'Support FAQs' }
  ];

  return (
    <div className="relative min-h-screen bg-white pt-24 pb-20">
      {/* Premium Hero Banner */}
      <section className="bg-black text-white py-20 relative border-b border-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center sm:text-left space-y-4 max-w-3xl">
            <span className="inline-block mb-[15px] text-[9px] font-mono tracking-widest text-gold bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 uppercase font-bold">ELLIPSYS IDENTITY</span>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tighter leading-[0.95]">INSTITUTIONAL EXCELLENCE</h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Discover the regulatory foundations, corporate history, and audit frameworks that support Ellipsys Financial Markets worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Tabs Selector */}
      <div className="bg-black border-y border-gold sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[10px] font-mono font-bold tracking-widest uppercase shrink-0 pb-1 border-b transition-all cursor-pointer ${activeTab === tab.id ? 'border-gold text-gold font-black' : 'border-transparent text-zinc-400 hover:text-white'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* TAB 1: ABOUT US (PROFILE) */}
        {activeTab === 'about-us' && (
          <div className="space-y-16 animate-fade-in">
            {/* Split Corporate Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-black tracking-tighter leading-none">Serving Global Markets for 15 Years</h2>
                <div className="text-sm text-zinc-600 space-y-4 leading-relaxed font-sans">
                  <p>
                    At Ellipsys, we offer services that provide opportunities for our clients to participate and benefit in the Global Currencies and Commodities markets at the push of a button.
                  </p>
                  <p>
                    Ellipsys Financial Markets is licensed and regulated by the Financial Services Commission (FSC), Mauritius. As a GBL/Category 1 Investment Dealer (Full Service Dealer, excluding underwriting), pursuant to Section 29 of the Securities Act 2005, rule 4 of the Securities Rule 2007 and Financial Services Rules 2008 (Licence No: C111010125).
                  </p>
                  <p>
                    Ellipsys is run by a team of industry professionals who have developed services which are client oriented. Technology being a major parameter coupled with customized client service is what drives the Ellipsys Team. Following a strict code of ethics and industry standard practices, we deliver uncompromised execution environments.
                  </p>
                </div>
              </div>
              
              {/* Stat card sidebar */}
              <div className="lg:col-span-5 bg-white p-8 rounded-none border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
                <h4 className="font-display font-black text-sm tracking-wider uppercase text-gold border-b border-zinc-100 pb-2">ELLIPSYS BY THE NUMBERS</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-b border-zinc-100 pb-4">
                    <p className="font-mono font-black text-4xl text-black">15+</p>
                    <p className="text-[9px] font-mono text-zinc-500 uppercase mt-1 tracking-wider">Years of Operations</p>
                  </div>
                  <div className="border-b border-zinc-100 pb-4">
                    <p className="font-mono font-black text-4xl text-black">180K+</p>
                    <p className="text-[9px] font-mono text-zinc-500 uppercase mt-1 tracking-wider">Active Accounts</p>
                  </div>
                  <div>
                    <p className="font-mono font-black text-4xl text-black">Sub-ms</p>
                    <p className="text-[9px] font-mono text-zinc-500 uppercase mt-1 tracking-wider">Routing Latency</p>
                  </div>
                  <div>
                    <p className="font-mono font-black text-4xl text-black">100%</p>
                    <p className="text-[9px] font-mono text-zinc-500 uppercase mt-1 tracking-wider">FSC Regulated</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Timeline */}
            <div className="space-y-8 border-t border-black pt-12">
              <div className="text-center max-w-xl mx-auto space-y-3">
                <h3 className="font-display font-black text-2xl uppercase text-black tracking-tight">Our Milestone Timeline</h3>
                <p className="text-xs text-zinc-500 font-sans">How we engineered a premier global trading terminal over a decade.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-6">
                {companyTimeline.map((milestone) => (
                  <div key={milestone.year} className="bg-zinc-50 p-5 rounded-none border border-zinc-200 hover:border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
                    <div className="text-[10px] font-mono font-bold text-gold bg-black w-fit px-2.5 py-1 rounded-none mb-3 border border-zinc-850">{milestone.year}</div>
                    <h4 className="font-display font-black text-xs text-black uppercase tracking-tight leading-snug">{milestone.title}</h4>
                    <p className="text-[10px] text-zinc-600 mt-2 leading-relaxed font-sans">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: REGULATOR (FSC) */}
        {activeTab === 'regulator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-black tracking-tighter">Financial Services Commission (FSC), Mauritius</h2>
                <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                  The Financial Services Commission, Mauritius (FSC) is the integrated regulator for the non-bank financial services sector and global business. Established in 2001, the FSC is mandated under the Financial Services Act 2007 to license, regulate, monitor and supervise the conduct of business activities in these sectors.
                </p>
              </div>

              {/* License Details Grid */}
              <div className="bg-white rounded-none border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="bg-black text-white p-5 flex justify-between items-center border-b border-zinc-800">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-gold uppercase">Official FSC Credentials</span>
                  <span className="text-[9px] font-mono text-zinc-400">STATUS: ACTIVE</span>
                </div>
                <div className="p-6 divide-y-2 divide-zinc-100 font-sans">
                  <div className="py-3 flex justify-between text-xs">
                    <span className="text-zinc-500 font-bold uppercase tracking-wider text-[10px]">Licensed Entity:</span>
                    <span className="font-bold text-black text-right">Ellipsys Financial Markets</span>
                  </div>
                  <div className="py-3 flex justify-between text-xs">
                    <span className="text-zinc-500 font-bold uppercase tracking-wider text-[10px]">FSC License Type:</span>
                    <span className="font-bold text-black text-right">Investment Dealer (Full Service Dealer, excluding underwriting)</span>
                  </div>
                  <div className="py-3 flex justify-between text-xs">
                    <span className="text-zinc-500 font-bold uppercase tracking-wider text-[10px]">Governing Law:</span>
                    <span className="font-bold text-black text-right">Section 29 of Securities Act 2005 & Securities Rule 2007</span>
                  </div>
                  <div className="py-3 flex justify-between text-xs">
                    <span className="text-zinc-500 font-bold uppercase tracking-wider text-[10px]">License Number:</span>
                    <span className="font-mono font-bold text-gold text-right">C111010125</span>
                  </div>
                  <div className="py-3 flex justify-between text-xs">
                    <span className="text-zinc-500 font-bold uppercase tracking-wider text-[10px]">Registered Jurisdiction:</span>
                    <span className="font-bold text-black text-right">Mauritius (GBL Category 1)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-zinc-50 p-8 rounded-none border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <Shield className="h-10 w-10 text-gold" />
              <h4 className="font-display font-black text-md text-black uppercase tracking-wider">REGULATORY SOLVENCY</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                As an Investment Dealer, Ellipsys is subject to strict capital adequacy thresholds, constant reporting protocols, and transparent audit guidelines to ensure our trading feeds are always backed by secure liquid buffers.
              </p>
              <div className="border-t border-zinc-200 pt-4 text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                FSC License Link Verified • Registered 107134
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AUDITOR (BDO) */}
        {activeTab === 'auditor' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fade-in">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-16 h-10 bg-red-600 text-white font-black flex items-center justify-center rounded-none font-sans tracking-widest text-lg border border-black shadow-sm">BDO</div>
              <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-black tracking-tighter">Financially Audited by BDO</h2>
              <div className="text-sm text-zinc-600 space-y-4 leading-relaxed font-sans">
                <p>
                  To ensure the absolute safety of investor funds and compliance with FSC capital ratios, Ellipsys Financial Markets maintains a strict partnership with BDO, one of the world\'s premier international accounting and audit networks.
                </p>
                <p>
                  All corporate cash flows, margin structures, operational expenses, and client segregated accounts are subject to periodic, independent audits. This guarantees that our operational ledger is clear, solvent, and mathematically flawless.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-none border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <h4 className="font-display font-black text-sm tracking-wider uppercase text-gold">WHY INDEPENDENT AUDITS MATTER</h4>
              <ul className="space-y-4">
                {[
                  'Verification of Tier-1 Fund Segregation — Confirms client capital is stored separately and never used for corporate liquidity.',
                  'Balance Sheet Sufficiency — Guarantees that our cash reserves far exceed standard statutory regulatory buffers.',
                  'Transparent Fee Logs — Validates that spreads and execution pricing models match compliance declarations.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-xs text-zinc-700 leading-relaxed font-sans font-medium">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 4: COMPLIANCE */}
        {activeTab === 'compliance' && (
          <div className="space-y-12 animate-fade-in">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-black tracking-tighter">Compliance Policies & Risk Architecture</h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                We operate under structured global frameworks to defend our traders from market manipulation, identity thefts, and liquidity failures. Read our compliance pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Anti-Money Laundering (AML)', desc: 'We strictly align with international FATF guidelines. All client registrations, fund transfers, and corporate bank channels are vetted to block terrorist financing and illicit capital washes.' },
                { title: 'Know Your Customer (KYC)', desc: 'Our onboarding system enforces robust identity verification. Every live trader must provide verified government passports and proof of utility residence to preserve account sanity.' },
                { title: 'Segregated Bank Vaults', desc: 'Client funds are fully locked in independent tier-1 bank custody. Operational costs are paid strictly from Ellipsys company capital, shielding investor margins.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-none border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                  <h4 className="font-display font-black text-sm uppercase text-black tracking-tight">{item.title}</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: FAQS ACCORDION */}
        {activeTab === 'faqs' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-black tracking-tighter">Support FAQs & Client Answers</h2>
              <p className="text-xs text-zinc-500 font-sans">Click on any question to expand detailed answers from our compliance team.</p>
            </div>

            <div className="bg-white border border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden p-6 divide-y divide-zinc-100">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left text-xs font-display font-black uppercase text-black hover:text-gold transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {openFaqIndex === idx ? <ChevronUp className="h-4 w-4 text-gold shrink-0 animate-pulse" /> : <ChevronDown className="h-4 w-4 text-zinc-400 shrink-0" />}
                  </button>
                  {openFaqIndex === idx && (
                    <p className="text-xs text-zinc-600 mt-3 leading-relaxed animate-fade-in pl-3 border-l border-gold font-sans">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
