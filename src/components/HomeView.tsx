import React, { useState, useEffect } from 'react';
import { ShieldCheck, BarChart4, ChevronRight, Play, Users, Clock, Flame, Info, CheckCircle2, DollarSign } from 'lucide-react';
import { liveQuotes, testimonials, companyTimeline } from '../data';
import { MainView, InstrumentQuote } from '../types';

interface HomeViewProps {
  onNavigate: (view: MainView, subView?: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<'currencies' | 'commodities' | 'indices' | 'crypto'>('currencies');
  const [activeQuote, setActiveQuote] = useState<InstrumentQuote>(liveQuotes[0]);
  const [calculatedMargin, setCalculatedMargin] = useState<number | null>(null);
  const [calcVolume, setCalcVolume] = useState<number>(1);
  const [calcLeverage, setCalcLeverage] = useState<number>(100);

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    areaCode: '+1',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filter quotes by category
  const filteredQuotes = liveQuotes.filter(q => q.category === selectedCategory);

  // Update active quote automatically if category changes
  useEffect(() => {
    const defaultQuote = liveQuotes.find(q => q.category === selectedCategory);
    if (defaultQuote) {
      setActiveQuote(defaultQuote);
    }
  }, [selectedCategory]);

  // Calculate margin in real time
  useEffect(() => {
    if (activeQuote) {
      // Basic margin calculation = (Contract size * Volume * Price) / Leverage
      const isCommodity = activeQuote.category === 'commodities';
      const standardLotSize = isCommodity ? 100 : 100000; // Gold size vs Currencies
      const price = activeQuote.bid;
      const margin = (standardLotSize * calcVolume * price) / calcLeverage;
      setCalculatedMargin(Math.round(margin * 100) / 100);
    }
  }, [activeQuote, calcVolume, calcLeverage]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        country: 'United States',
        areaCode: '+1',
        phone: ''
      });
    }, 1500);
  };

  // Generate a mock sparkling path for the selected quote
  const generateChartPath = (symbol: string) => {
    // Generate a beautiful, pseudo-random but repeatable wave for premium styling
    const points = [];
    const seed = symbol.charCodeAt(0) + symbol.charCodeAt(1);
    for (let i = 0; i <= 10; i++) {
      const x = (i * 300) / 10;
      const deviation = Math.sin(i * 0.8 + seed) * 15 + Math.cos(i * 1.5 + seed) * 10;
      const y = 80 + deviation;
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="relative w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-black overflow-hidden pt-24 pb-16 border-b border-black">
        {/* Background Image with Premium Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/ellipsys_hero_1784624768142.jpg" 
            alt="Ellipsys Hero Background" 
            className="w-full h-full object-cover  scale-105 animate-zoom-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            {/* Regulation Badge */}
            <div className="inline-flex items-center space-x-2 bg-black border border-gold px-4 py-2 text-gold rounded-none premium-shadow-solid-gold">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span className="font-mono font-bold text-[9px] tracking-widest uppercase">FSC MAURITIUS REGULATED • LICENSE C111010125</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[0.95] tracking-tighter uppercase">
                SERVING TRADERS FOR{" "}
                <span className="text-gold">15 YEARS</span>
              </h1>
              <p className="text-sm text-zinc-300 font-sans font-light max-w-2xl leading-relaxed">
                A trusted destination for global market participants. Access tier-1 liquidity, professional trading terminals, and ultra-low latency execution environments.
              </p>
            </div>

            {/* Core Statistics row under Hero */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800 max-w-xl">
              <div>
                <p className="font-mono font-black text-2xl text-white">15+ YRS</p>
                <p className="text-[9px] font-mono uppercase tracking-widest text-gold mt-1">Presence</p>
              </div>
              <div>
                <p className="font-mono font-black text-2xl text-white">0.0 PIP</p>
                <p className="text-[9px] font-mono uppercase tracking-widest text-gold mt-1">Raw Spreads</p>
              </div>
              <div>
                <p className="font-mono font-black text-2xl text-white">Sub-ms</p>
                <p className="text-[9px] font-mono uppercase tracking-widest text-gold mt-1">Execution</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <button 
                onClick={() => onNavigate('account', 'live')}
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-black border border-black font-display font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all rounded-none cursor-pointer"
              >
                Open Live Account
              </button>
              <button 
                onClick={() => onNavigate('account', 'demo')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-black font-display font-black text-xs uppercase tracking-widest transition-all rounded-none cursor-pointer"
              >
                Try Free Demo
              </button>
            </div>
          </div>

          {/* Glowing Widget Card (Real-Time Instrument Quickview) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gold/25 rounded-none blur-2xl -z-10"></div>
            <div className="bg-black border border-gold rounded-none p-6 shadow-[6px_6px_0px_0px_#C89B3C]">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
                  <span className="text-[9px] font-mono font-black tracking-widest text-zinc-400 uppercase">Live Pricing Feed</span>
                </div>
                <span className="text-[9px] font-mono text-gold bg-gold/10 px-2.5 py-1 rounded-none border border-gold/30">EUR/USD BASE</span>
              </div>

              {/* Asset Tab select inside widget */}
              <div className="grid grid-cols-4 gap-1 bg-zinc-950 border border-zinc-900 p-1 rounded-none mb-6">
                {(['currencies', 'commodities', 'indices', 'crypto'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`py-2 text-[9px] font-mono font-bold uppercase tracking-wider transition-all rounded-none cursor-pointer ${selectedCategory === cat ? 'bg-gold text-black font-black' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                  >
                    {cat === 'currencies' ? 'FX' : cat === 'commodities' ? 'METALS' : cat === 'crypto' ? 'COINS' : cat}
                  </button>
                ))}
              </div>

              {/* Mini List of Quotes */}
              <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1">
                {filteredQuotes.map(quote => (
                  <button
                    key={quote.symbol}
                    onClick={() => setActiveQuote(quote)}
                    className={`w-full flex justify-between items-center p-3 rounded-none border transition-all cursor-pointer ${activeQuote.symbol === quote.symbol ? 'bg-gold/15 border-gold text-white' : 'bg-zinc-950 border-zinc-900 hover:bg-zinc-900'}`}
                  >
                    <div>
                      <p className="font-mono text-xs font-black text-white">{quote.symbol}</p>
                      <p className="text-[9px] font-sans text-zinc-500">{quote.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs font-black text-white">{quote.bid.toFixed(quote.category === 'crypto' ? 1 : 4)}</p>
                      <p className={`text-[9px] font-mono font-bold ${quote.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {quote.change >= 0 ? '+' : ''}{quote.changePercent.toFixed(2)}%
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Premium Ticker Tape bar */}
      <div className="bg-black border-y border-gold py-3.5 overflow-hidden whitespace-nowrap z-20 relative">
        <div className="inline-block animate-marquee uppercase font-mono text-[9px] text-zinc-400 tracking-widest font-bold">
          {liveQuotes.map(q => (
            <span key={q.symbol} className="mx-6 inline-flex items-center space-x-2">
              <span className="font-black text-white">{q.symbol}</span>
              <span className="text-zinc-200">{q.bid.toFixed(q.category === 'crypto' ? 0 : 4)}</span>
              <span className={q.change >= 0 ? 'text-green-400' : 'text-red-400'}>
                {q.change >= 0 ? '▲' : '▼'} {q.changePercent.toFixed(2)}%
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. Account Tier Strategy */}
      <section className="py-24 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block mb-[15px] text-[10px] font-mono font-extrabold tracking-widest text-gold uppercase bg-black px-4 py-2 border border-zinc-800">DUAL ACCOUNT ARCHITECTURE</span>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-black tracking-tighter uppercase leading-[0.95]">TRADE ONLINE WITH COMPLETE AUTONOMY</h2>
            <p className="text-sm text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              We design specialized client workflows which cater natively to all trading sizes. From fresh market explorers to quantitative corporate institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* New Trader (Demo Account) */}
            <div className="bg-white rounded-none p-8 border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-none bg-zinc-100 border border-black flex items-center justify-center text-black">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl uppercase text-black leading-none">New Trader</h3>
                  <p className="text-[10px] text-gold font-mono font-bold uppercase tracking-widest mt-1">Free Demo Environment</p>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  Gain zero-risk access to global currency, futures, and metals charts. Powered by live data feeds to simulate professional strategies safely.
                </p>
                <ul className="space-y-3 pt-2">
                  {['Free Demo Trading Account', 'Full Video Learning Library', '24 Hour Global SupportDesk', 'Zero Risk Exposure', 'Real-time Market Analytics'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs text-zinc-700 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-gold mr-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('account', 'demo')}
                className="mt-8 w-full py-4 bg-black hover:bg-gold hover:text-black text-white text-xs font-mono font-black tracking-widest rounded-none uppercase border border-black transition-all cursor-pointer"
              >
                Create Demo Account
              </button>
            </div>

            {/* Retail or Corporate Account */}
            <div className="bg-black rounded-none p-8 border border-gold shadow-[6px_6px_0px_0px_#C89B3C] hover:shadow-[10px_10px_0px_0px_#C89B3C] hover:-translate-x-1 hover:-translate-y-1 transition-all relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl"></div>
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-none bg-gold/15 border border-gold flex items-center justify-center text-gold">
                  <Flame className="h-6 w-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl uppercase text-white leading-none">Active Trader</h3>
                  <p className="text-[10px] text-gold font-mono font-bold uppercase tracking-widest mt-1">Retail & Corporate Tiers</p>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Unlock bespoke raw spreads, sub-ms algorithmic execution tiers, and high-volume commission structures. Regulated client segregated safety.
                </p>
                <ul className="space-y-3 pt-2">
                  {['Award Winning Platforms (MT5 & VertexFX)', 'Dedicated Relationship Managers', 'Free Multi-Account Manager (MAM)', 'Bespoke spreads from 0.0 pips', 'Deep institutional tier-1 liquidity pool'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs text-zinc-300 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-gold mr-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('account', 'live')}
                className="mt-8 w-full py-4 bg-gold hover:bg-white hover:text-black text-black text-xs font-mono font-black tracking-widest rounded-none uppercase border border-gold transition-all cursor-pointer"
              >
                Go Live Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Traders Choose Us (Core Value Props) */}
      <section className="py-24 bg-zinc-50 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-6">
              <span className="inline-block mb-[15px] text-[10px] font-mono font-bold tracking-widest text-gold uppercase bg-black px-3.5 py-1.5 border border-zinc-800">CORPORATE CREDIBILITY</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-black tracking-tighter leading-[0.95] uppercase">
                WHY TRADERS CHOOSE ELLIPSYS
              </h2>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                We design brokerage systems with transparency, safety, and performance at the core. Our 15 years in financial services stands as a symbol of client commitment.
              </p>
              <div className="pt-2">
                <button 
                  onClick={() => onNavigate('about', 'about-us')}
                  className="inline-flex items-center text-xs font-mono font-bold text-black hover:text-gold transition-colors uppercase cursor-pointer"
                >
                  Our Corporate Journey
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Sub-Millisecond Execution', desc: 'Orders are processed through state-of-the-art server networks with average execution speeds below 12 milliseconds.' },
                { title: 'FSC Regulated Fund Safety', desc: 'Client funds are fully segregated in tier-1 bank custody accounts as mandated by Mauritius FSC guidelines.' },
                { title: '24-Hour Premium Support', desc: 'Our experienced support desk operates continuously to ensure immediate guidance for all trading inquiries.' },
                { title: 'Multi-Terminal Platform Choice', desc: 'Access global markets natively using Zen Trader (MT5) or Zen Pro (VertexFX11) setups.' },
                { title: 'Professional MAM Desks', desc: 'Distribute trade allocations natively using our integrated Free Multi-Account Manager console.' },
                { title: 'No Account Size Thresholds', desc: 'Initiate and manage accounts with flexible funding sizes mapped to your own financial goals.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-none border border-zinc-200 hover:border-black transition-all shadow-[2px_2px_0px_0px_rgba(229,231,235,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1">
                  <h4 className="font-display font-black text-sm uppercase text-black tracking-tight">{item.title}</h4>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Margin Calculator Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden border-b border-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,155,60,0.08),transparent)] z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block mb-[15px] text-[10px] font-mono font-bold tracking-widest text-gold uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1.5">INTERACTIVE UTILITIES</span>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase leading-[0.95]">CALCULATE SPREADS & MARGINS</h2>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Plan your trading positions with total transparency. Use our real-time calculator to see precisely what margin deposit is required to sustain your targeted lot size.
            </p>
            <div className="bg-zinc-950 border border-zinc-800 rounded-none p-5 space-y-3 shadow-[4px_4px_0px_0px_#1a1a1a]">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 uppercase font-mono tracking-wider text-[10px]">Selected Symbol:</span>
                <span className="font-mono font-bold text-white">{activeQuote.symbol} ({activeQuote.name})</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 uppercase font-mono tracking-wider text-[10px]">Current Bid Price:</span>
                <span className="font-mono font-bold text-gold">{activeQuote.bid.toFixed(activeQuote.category === 'crypto' ? 1 : 4)} USD</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold pt-4 border-t border-zinc-900">
                <span className="text-zinc-300 uppercase font-mono tracking-wider text-[10px]">Required Margin:</span>
                <span className="text-xl font-mono text-white font-black">
                  {calculatedMargin !== null ? `${calculatedMargin.toLocaleString()} USD` : 'Calculating...'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-zinc-950 border border-gold p-8 rounded-none space-y-6 shadow-[6px_6px_0px_0px_#C89B3C]">
            <h4 className="font-display font-black text-sm tracking-widest text-gold uppercase border-b border-zinc-900 pb-3">CALCULATOR PARAMETERS</h4>
            
            {/* Position Volume Lot Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-300 uppercase font-mono tracking-wider text-[10px]">Volume (Standard Lots):</span>
                <span className="font-mono font-bold text-gold">{calcVolume} Lot{calcVolume > 1 ? 's' : ''}</span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="10" 
                step="0.1"
                value={calcVolume}
                onChange={(e) => setCalcVolume(parseFloat(e.target.value))}
                className="w-full accent-gold bg-zinc-900 rounded-none h-2 cursor-pointer border border-zinc-850"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono font-bold">
                <span>0.1 MIN</span>
                <span>10.0 MAX</span>
              </div>
            </div>

            {/* Leverage Options */}
            <div className="space-y-3">
              <span className="block text-[10px] text-zinc-400 uppercase font-mono tracking-wider">Target Leverage Tier:</span>
              <div className="grid grid-cols-4 gap-2">
                {[33, 50, 100, 200].map(lev => (
                  <button
                    key={lev}
                    onClick={() => setCalcLeverage(lev)}
                    className={`py-2.5 text-xs font-mono font-bold rounded-none transition-all cursor-pointer ${calcLeverage === lev ? 'bg-gold text-black font-black border border-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:bg-zinc-850'}`}
                  >
                    1:{lev}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-none text-[10px] text-zinc-400 leading-relaxed flex items-start">
              <Info className="h-4 w-4 mr-3 shrink-0 text-gold" />
              <p>Note: Calculated margins are indicators based on raw pricing. Swaps, commissions, and dynamic slippages during high market volatility may affect open terminal levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Professional Client Reviews */}
      <section className="py-24 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block mb-[15px] text-[10px] font-mono font-bold tracking-widest text-gold uppercase bg-black px-3.5 py-1.5">TRADER REVIEWS</span>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-black tracking-tighter uppercase leading-[0.95]">THE COMMUNITY SAYS</h2>
            <p className="text-sm text-zinc-600 leading-relaxed font-sans">
              We empower institutional managers and professional retailers. Read reflections from some of our long-term market participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-zinc-50 p-8 rounded-none border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <p className="text-xs text-zinc-700 leading-relaxed italic font-sans font-medium">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-6 border-t border-zinc-200">
                  <p className="font-display font-black text-sm uppercase text-black">{t.author}</p>
                  <p className="text-[10px] text-gold font-mono font-bold mt-1 uppercase tracking-widest">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Request Callback Interactive Block */}
      <section className="py-24 bg-zinc-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-black rounded-none border border-gold shadow-[8px_8px_0px_0px_#C89B3C] overflow-hidden p-8 sm:p-12 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.1),transparent)] pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
            <span className="inline-block mb-[15px] text-[9px] font-mono font-black tracking-widest text-gold uppercase bg-zinc-900 border border-zinc-800 px-3 py-1.5">SECURE CONSULTATION DESK</span>
            <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tighter">REQUEST EXPERT CALLBACK</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Would you prefer to talk directly with an Ellipsys accounts director? Submit your preferred telephone contact and we will return call within 24 hours.
            </p>
          </div>

          {submitSuccess ? (
            <div className="bg-zinc-900 border border-gold rounded-none p-8 text-center space-y-4 max-w-lg mx-auto animate-zoom-in">
              <CheckCircle2 className="h-12 w-12 text-gold mx-auto animate-bounce" />
              <h4 className="font-display font-black text-lg text-white uppercase tracking-tight">Callback Scheduled</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Thank you. One of our senior account executives has received your contact ticket. We will call you within standard market operational hours.
              </p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-3 bg-gold hover:bg-white text-black font-display font-black text-xs tracking-widest uppercase transition-all rounded-none cursor-pointer border border-gold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2">First Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-gold rounded-none px-4 py-3 text-xs text-white placeholder-zinc-700 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-gold rounded-none px-4 py-3 text-xs text-white placeholder-zinc-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2">Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. jdoe@financial.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-gold rounded-none px-4 py-3 text-xs text-white placeholder-zinc-700 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2">Country</label>
                  <select 
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-gold rounded-none px-3 py-3.5 text-xs text-white focus:outline-none"
                  >
                    {['United States', 'Mauritius', 'United Kingdom', 'United Arab Emirates', 'Singapore', 'India', 'Germany'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2">Phone Number *</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="+1"
                      value={formData.areaCode}
                      onChange={(e) => setFormData({...formData, areaCode: e.target.value})}
                      className="w-20 bg-zinc-900 border border-zinc-800 border-r-0 focus:border-gold rounded-none px-3 py-3.5 text-xs text-center text-white focus:outline-none"
                    />
                    <input 
                      type="tel" 
                      required
                      placeholder="555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-gold rounded-none px-4 py-3 text-xs text-white placeholder-zinc-700 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gold hover:bg-white text-black font-display font-black text-xs uppercase tracking-widest transition-all mt-4 flex items-center justify-center space-x-2 rounded-none border border-gold cursor-pointer shadow-[4px_4px_0px_0px_rgba(255,255,255,0.25)] hover:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    <span>TRANSMITTING INQUIRY...</span>
                  </>
                ) : (
                  <span>REQUEST CALLBACK NOW</span>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
