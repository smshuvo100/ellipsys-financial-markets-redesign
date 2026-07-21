import React, { useState } from 'react';
import { BookOpen, HelpCircle, Calculator, Search, Calendar, Clock, RefreshCw, ChevronRight } from 'lucide-react';
import { ResourceSubView } from '../types';
import { blogPosts } from '../data';

export default function ResourcesView() {
  const [activeTab, setActiveTab] = useState<ResourceSubView>('blog');
  const [searchQuery, setSearchQuery] = useState('');

  // Currency Converter states
  const [fromAmount, setFromAmount] = useState<number>(1000);
  const [fromCurrency, setFromCurrency] = useState<string>('EUR');
  const [toCurrency, setToCurrency] = useState<string>('USD');
  const [convertedResult, setConvertedResult] = useState<number>(1094.20);

  const rates: { [key: string]: number } = {
    'EUR_USD': 1.0942,
    'USD_EUR': 0.9139,
    'GBP_USD': 1.2824,
    'USD_GBP': 0.7798,
    'USD_JPY': 147.35,
    'JPY_USD': 0.0068,
    'EUR_JPY': 161.24,
    'JPY_EUR': 0.0062
  };

  const handleConvert = () => {
    if (fromCurrency === toCurrency) {
      setConvertedResult(fromAmount);
      return;
    }
    const pair = `${fromCurrency}_${toCurrency}`;
    const rate = rates[pair];
    if (rate) {
      setConvertedResult(Math.round(fromAmount * rate * 100) / 100);
    } else {
      // Approximate fallback
      setConvertedResult(Math.round(fromAmount * 1.15 * 100) / 100);
    }
  };

  // Filter blog posts by search query
  const filteredBlogs = blogPosts.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const glossaryItems = [
    { term: 'Ask Price', definition: 'The lowest price a seller is willing to accept for a particular financial contract or currency spot.' },
    { term: 'Bid Price', definition: 'The highest price a buyer is willing to pay to purchase a financial contract or currency spot.' },
    { term: 'Margin Deposit', definition: 'The collateral capital required to initiate and maintain leveraged positions on the trading terminal.' },
    { term: 'Pip (Percentage in Point)', definition: 'The smallest standard numerical price increment change in global currency trading (usually 0.0001).' },
    { term: 'Slippage', definition: 'The price deviation discrepancy between the requested order price and the actual execution price on interbank bridges.' },
    { term: 'Spread', definition: 'The exact numerical difference between the current bid and ask price of an instrument (e.g. 0.8 pips).' }
  ];

  return (
    <div className="relative min-h-screen bg-[#F9FAF9] pt-24 pb-20">
      {/* Platform Specific Hero Banner */}
      <section className="bg-black text-white py-20 relative border-b-4 border-gold">
        <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center sm:text-left space-y-4 max-w-3xl">
            <span className="text-[10px] font-mono tracking-widest text-gold bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-none font-black uppercase">
              RESOURCES CENTER
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase leading-none">
              MARKET INTELLIGENCE & CALCULATORS
            </h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Accelerate your analytical skills. Access our custom currency converters, educational tutorials, and glossary definitions.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Tabs Selector */}
      <div className="bg-black border-b border-zinc-900 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto py-4 scrollbar-none">
            <button
              onClick={() => setActiveTab('blog')}
              className={`text-xs font-mono font-black tracking-widest uppercase shrink-0 pb-1 border-b transition-all cursor-pointer ${activeTab === 'blog' ? 'border-gold text-gold' : 'border-transparent text-zinc-500 hover:text-white'}`}
            >
              Educational Blog
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`text-xs font-mono font-black tracking-widest uppercase shrink-0 pb-1 border-b transition-all cursor-pointer ${activeTab === 'tools' ? 'border-gold text-gold' : 'border-transparent text-zinc-500 hover:text-white'}`}
            >
              Currency Converter
            </button>
            <button
              onClick={() => setActiveTab('glossary')}
              className={`text-xs font-mono font-black tracking-widest uppercase shrink-0 pb-1 border-b transition-all cursor-pointer ${activeTab === 'glossary' ? 'border-gold text-gold' : 'border-transparent text-zinc-500 hover:text-white'}`}
            >
              Financial Glossary
            </button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* TAB 1: OFFICIAL BLOG */}
        {activeTab === 'blog' && (
          <div className="space-y-12 animate-fade-in">
            {/* Search and Category bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-black border-2 border-gold p-4 rounded-none shadow-[4px_4px_0px_0px_rgba(200,155,60,0.15)] gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-gold rounded-none pl-9 pr-4 py-2 text-xs font-mono font-bold text-white focus:outline-none"
                />
              </div>
              <span className="text-[10px] text-zinc-300 font-mono font-black tracking-widest uppercase">SHOWING {filteredBlogs.length} TUTORIALS</span>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((post) => (
                <div key={post.id} className="bg-white rounded-none border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between">
                  <div>
                    <div className="h-48 relative bg-black border-b border-black">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 left-4 bg-black text-gold text-[9px] font-mono font-black tracking-widest uppercase px-3 py-1.5 rounded-none border border-gold">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex space-x-4 text-[10px] text-zinc-500 font-mono font-bold uppercase">
                        <span className="flex items-center"><Calendar className="h-3 w-3 mr-1 text-gold" /> {post.date}</span>
                        <span className="flex items-center"><Clock className="h-3 w-3 mr-1 text-gold" /> {post.readTime}</span>
                      </div>
                      <h4 className="font-display font-black text-base text-black uppercase tracking-tight leading-tight">{post.title}</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed font-sans line-clamp-3">{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-4 border-t border-zinc-100 bg-zinc-50/50 flex justify-between items-center">
                    <span className="text-[9px] text-zinc-400 font-mono font-bold uppercase">ELLIPSYS LEARNING PORTAL</span>
                    <button className="text-[10px] font-mono font-black text-gold hover:text-black tracking-widest uppercase flex items-center transition-colors cursor-pointer">
                      Read Article <ChevronRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CONVERTER TOOL */}
        {activeTab === 'tools' && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-none border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6 animate-fade-in">
            <div className="border-b border-zinc-100 pb-5 mb-4 flex items-center space-x-3">
              <div className="w-10 h-10 p-2 bg-black text-gold border border-gold flex items-center justify-center rounded-none mr-1">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-black uppercase tracking-tight">Live Currency Converter</h3>
                <span className="text-[9px] text-gold bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-none font-mono font-black uppercase tracking-widest inline-block mt-1">Interbank Aggregated Rates</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Convert Amount</label>
                <input 
                  type="number" 
                  value={fromAmount}
                  onChange={(e) => setFromAmount(parseFloat(e.target.value) || 0)}
                  className="w-full bg-zinc-50 border-2 border-black rounded-none px-4 py-3.5 text-xs font-mono font-black text-black focus:outline-none focus:border-gold"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">From Currency</label>
                  <select 
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full bg-white border-2 border-black rounded-none px-3 py-3.5 text-xs font-mono font-black text-black focus:outline-none focus:border-gold"
                  >
                    {['EUR', 'USD', 'GBP', 'JPY'].map(cur => (
                      <option key={cur} value={cur}>{cur}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">To Currency</label>
                  <select 
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full bg-white border-2 border-black rounded-none px-3 py-3.5 text-xs font-mono font-black text-black focus:outline-none focus:border-gold"
                  >
                    {['USD', 'EUR', 'GBP', 'JPY'].map(cur => (
                      <option key={cur} value={cur}>{cur}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button 
                onClick={handleConvert}
                className="w-full py-4 bg-black hover:bg-gold hover:text-black border-2 border-black text-white text-xs font-mono font-black uppercase tracking-widest rounded-none transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] flex items-center justify-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Calculate Rate conversion</span>
              </button>

              <div className="bg-zinc-50 border border-black p-4 rounded-none flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-mono font-black uppercase tracking-widest">Converted Value:</span>
                <span className="font-mono font-black text-black text-lg">{convertedResult.toLocaleString()} {toCurrency}</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FINANCIAL GLOSSARY */}
        {activeTab === 'glossary' && (
          <div className="max-w-4xl mx-auto bg-white rounded-none border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden p-8 space-y-6 animate-fade-in">
            <h3 className="font-display font-black text-2xl text-black border-b border-black pb-4 uppercase tracking-tight">Financial Terminology Glossary</h3>
            
            <div className="divide-y divide-zinc-200">
              {glossaryItems.map((item, idx) => (
                <div key={idx} className="py-5 first:pt-0 last:pb-0 space-y-2">
                  <h4 className="font-mono font-black text-xs text-gold uppercase tracking-widest">{item.term}</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
