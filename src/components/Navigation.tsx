import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShieldCheck, Cpu, FileText, BarChart4, PhoneCall, HelpCircle, GraduationCap, Home } from 'lucide-react';
import { MainView, RouteState } from '../types';
import logoImage from '../assets/images/regenerated_image_1784626918921.png';

interface NavigationProps {
  route: RouteState;
  onNavigate: (view: MainView, subView?: string) => void;
}

export default function Navigation({ route, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view: MainView, subView?: string) => {
    onNavigate(view, subView);
    setIsOpen(false);
    setActiveMega(null);
  };

  const navItems = [
    {
      id: 'about',
      label: 'ABOUT',
      sublinks: [
        { label: 'About Us', subView: 'about-us', icon: ShieldCheck, desc: 'Serving traders for over 15 years' },
        { label: 'Our Regulator', subView: 'regulator', icon: ShieldCheck, desc: 'FSC Mauritius regulated broker' },
        { label: 'Compliance & Standards', subView: 'compliance', icon: FileText, desc: 'Strict regulatory alignments' },
        { label: 'Auditor Partner', subView: 'auditor', icon: FileText, desc: 'Financially audited by BDO' },
        { label: 'Frequently Asked FAQs', subView: 'faqs', icon: HelpCircle, desc: 'Instant answers to popular questions' },
      ]
    },
    {
      id: 'products',
      label: 'PRODUCTS',
      sublinks: [
        { label: 'CFD Trading', subView: 'cfd', icon: BarChart4, desc: 'Leverage spot and synthetic assets' },
        { label: 'Currencies', subView: 'currencies', icon: BarChart4, desc: 'Major, minor, and exotic forex pairs' },
        { label: 'Futures contracts', subView: 'futures', icon: Cpu, desc: 'Hedge portfolio indices & materials' },
        { label: 'Indices', subView: 'indices', icon: BarChart4, desc: 'Trade top global market indices' },
        { label: 'Commodities Spot', subView: 'commodities', icon: Cpu, desc: 'Trade gold, silver, oil, and gas' },
        { label: 'Institutional Liquidity', subView: 'liquidity', icon: Cpu, desc: 'Bespoke deep tier-1 liquidity feeds' },
        { label: 'White Labels', subView: 'white-labels', icon: Cpu, desc: 'Bootstrap your own broker workspace' },
      ]
    },
    {
      id: 'platforms',
      label: 'PLATFORMS',
      sublinks: [
        { label: 'Zen Trader (MT5)', subView: 'zen-trader', icon: Cpu, desc: 'Advanced desktop & mobile charting' },
        { label: 'Zen Pro (VertexFX)', subView: 'zen-pro', icon: Cpu, desc: 'Proprietary automated scripting platform' },
      ]
    },
    {
      id: 'info',
      label: 'TRADING INFO',
      sublinks: [
        { label: 'Product Guide', subView: 'product-guide', icon: FileText, desc: 'Full list of tradeable instruments' },
        { label: 'Contract Specification', subView: 'specifications', icon: FileText, desc: 'Lot sizes, tick values, and trading hours' },
        { label: 'Margins & Spreads', subView: 'margins', icon: BarChart4, desc: 'Dynamic margin calculators & spread tiers' },
        { label: 'Contract Calendar', subView: 'calendar', icon: FileText, desc: 'Rollover dates and expiry cycles' },
        { label: 'Code of Conduct', subView: 'conduct', icon: ShieldCheck, desc: 'Ethical frameworks and compliance principles' },
        { label: 'Execution Terms', subView: 'execution', icon: Cpu, desc: 'Sub-millisecond institutional routing' },
        { label: 'Order Types Guide', subView: 'orders', icon: Cpu, desc: 'Market, limit, stop, and trailing orders' },
        { label: 'Segregated Client Funds', subView: 'funds', icon: ShieldCheck, desc: 'FSC-compliant tier-1 segregated trust bank accounts' },
        { label: 'Client Agreement (PDF)', subView: 'agreement', icon: FileText, desc: 'Standard regulatory master agreement' },
        { label: 'Deposits & Withdrawals', subView: 'deposits', icon: FileText, desc: 'Secure card, wire, and wallet channels' },
      ]
    },
    {
      id: 'resources',
      label: 'RESOURCES',
      sublinks: [
        { label: 'Market Insights', subView: 'insights', icon: GraduationCap, desc: 'Daily fundamental & technical outlook' },
        { label: 'Trading Tools', subView: 'tools', icon: Cpu, desc: 'Currency converter, pip & margin calculator' },
        { label: 'Financial Glossary', subView: 'glossary', icon: GraduationCap, desc: 'Expand your terminal-level vocabulary' },
        { label: 'Official Blog Articles', subView: 'blog', icon: GraduationCap, desc: 'Educational tutorials & platform guides' },
        { label: 'Historical Market Data', subView: 'history', icon: FileText, desc: 'Export high-resolution pricing datasets' },
        { label: 'Trading Market Hours', subView: 'hours', icon: FileText, desc: 'Global session schedules and overlays' },
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black border-b border-gold shadow-xl`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => handleLinkClick('home')}>
            <img 
              src={logoImage} 
              alt="Ellipsys" 
              className="h-[70px] w-auto object-contain transition-transform hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right column: Top Row (CTA Buttons) and Bottom Row (Navigation links) */}
          <div className="hidden xl:flex flex-col items-end">
            {/* Top row with CTA buttons */}
            <div className="flex items-center space-x-3 mb-2.5">
              <button 
                onClick={() => handleLinkClick('account', 'demo')}
                className="px-4 py-2 bg-transparent hover:bg-zinc-900 border border-white text-white font-mono font-bold text-[11px] tracking-wider transition-all cursor-pointer uppercase rounded-none"
                id="nav-cta-demo"
              >
                Open Demo Account
              </button>
              <button 
                onClick={() => handleLinkClick('info', 'funds')}
                className="px-4 py-2 bg-transparent hover:bg-gold/10 border border-gold text-gold font-mono font-bold text-[11px] tracking-wider transition-all rounded-none cursor-pointer uppercase"
                id="nav-cta-fund"
              >
                Fund Management
              </button>
              <button 
                onClick={() => handleLinkClick('account', 'live')}
                className="px-4 py-2 bg-gold hover:bg-white text-black font-mono font-black text-[11px] tracking-wider transition-all rounded-none border border-gold cursor-pointer uppercase shadow-[1px_1px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none"
                id="nav-cta-live"
              >
                Open Live Account
              </button>
            </div>

            {/* Bottom row with navigation links */}
            <nav className="flex items-center space-x-1">
              <button 
                onClick={() => handleLinkClick('home')}
                className={`px-3 py-1 font-mono text-[10px] font-black tracking-widest transition-colors hover:text-gold cursor-pointer flex items-center ${route.view === 'home' ? 'text-gold' : 'text-zinc-400'}`}
                id="nav-home"
              >
                <Home className="h-3.5 w-3.5" />
              </button>
              {navItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => setActiveMega(item.id)}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <button 
                    className={`flex items-center px-3 py-1 font-mono text-[10px] font-black tracking-widest transition-colors hover:text-gold cursor-pointer uppercase ${route.view === item.id ? 'text-gold' : 'text-zinc-400'}`}
                    id={`nav-${item.id}`}
                  >
                    {item.label === 'ABOUT' ? 'ABOUT US' : item.label}
                    <ChevronDown className="ml-1 h-3 w-3 text-gold/80 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {activeMega === item.id && (
                    <div className="absolute right-0 top-full w-[600px] bg-black border border-gold rounded-none shadow-[8px_8px_0px_0px_rgba(200,155,60,0.2)] p-6 grid grid-cols-2 gap-4 animate-fade-in z-50">
                      <div className="col-span-2 border-b border-zinc-800 pb-2 mb-1 flex justify-between items-center">
                        <span className="text-[10px] font-mono font-black tracking-widest text-gold uppercase">{item.label} DIRECTORY</span>
                        <span className="text-[9px] font-mono text-zinc-500 font-bold">ELLIPSYS TRADING TERMINAL</span>
                      </div>
                      {item.sublinks.map((sub, idx) => {
                        const Icon = sub.icon;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleLinkClick(item.id as MainView, sub.subView)}
                            className="flex items-start text-left p-2 hover:bg-zinc-900 transition-all group/sub cursor-pointer border border-transparent hover:border-zinc-800"
                          >
                            <div className="p-1.5 rounded-none bg-zinc-900 text-gold group-hover/sub:bg-gold group-hover/sub:text-black transition-colors mr-3 mt-0.5 border border-zinc-800">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <p className="font-display text-xs font-black text-white group-hover/sub:text-gold uppercase tracking-tight transition-colors">{sub.label}</p>
                              <p className="text-[9px] text-zinc-450 mt-0.5 line-clamp-1 font-sans">{sub.desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <button 
                onClick={() => handleLinkClick('contact')}
                className={`px-3 py-1 font-mono text-[10px] font-black tracking-widest transition-colors hover:text-gold cursor-pointer uppercase ${route.view === 'contact' ? 'text-gold' : 'text-zinc-400'}`}
                id="nav-contact"
              >
                CONTACT US
              </button>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-none text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-black border-b border-gold backdrop-blur-xl animate-slide-down max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Quick Links for Accounts */}
            <div className="grid grid-cols-2 gap-3 pb-4 border-b border-zinc-800">
              <button 
                onClick={() => handleLinkClick('account', 'demo')}
                className="py-3 bg-zinc-900 border border-zinc-700 text-white rounded-none font-mono text-[11px] font-bold tracking-widest text-center cursor-pointer uppercase"
              >
                DEMO ACCOUNT
              </button>
              <button 
                onClick={() => handleLinkClick('account', 'live')}
                className="py-3 bg-gold text-black rounded-none border border-gold font-mono text-[11px] font-black tracking-widest text-center cursor-pointer uppercase"
              >
                LIVE ACCOUNT
              </button>
            </div>

            <button 
              onClick={() => handleLinkClick('home')}
              className="block w-full text-left px-3 py-2 font-mono text-xs font-black tracking-widest text-white hover:text-gold hover:bg-zinc-900 rounded-none cursor-pointer"
            >
              HOME
            </button>

            {navItems.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="px-3 py-1.5 text-[10px] font-mono font-black tracking-widest text-gold uppercase bg-zinc-900 border border-zinc-800 rounded-none">
                  {item.label}
                </div>
                <div className="grid grid-cols-1 pl-2 gap-1">
                  {item.sublinks.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleLinkClick(item.id as MainView, sub.subView)}
                      className="text-left w-full px-3 py-1.5 text-zinc-400 hover:text-white text-xs font-medium rounded-none hover:bg-zinc-900 transition-colors cursor-pointer"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button 
              onClick={() => handleLinkClick('contact')}
              className="block w-full text-left px-3 py-2 font-mono text-xs font-black tracking-widest text-white hover:text-gold hover:bg-zinc-900 rounded-none cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
