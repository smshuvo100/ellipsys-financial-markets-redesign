import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { MainView } from '../types';
import logoImage from '../assets/images/regenerated_image_1784626918921.png';

interface FooterProps {
  onNavigate: (view: MainView, subView?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLink = (view: MainView, sub?: string) => {
    onNavigate(view, sub);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-400 font-sans text-xs border-t border-gold pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Corporate Header inside Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-zinc-900">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => handleLink('home')}>
              <img 
                src={logoImage} 
                alt="Ellipsys" 
                className="h-[60px] w-auto object-contain transition-transform hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[11px] leading-relaxed text-zinc-500">
              Licensed and regulated multi-asset brokerage firm, engineering premium trading environments for global market participants.
            </p>
            <div className="flex space-x-2 text-zinc-500">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 hover:bg-gold hover:text-black rounded-none border border-zinc-800 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 hover:bg-gold hover:text-black rounded-none border border-zinc-800 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 hover:bg-gold hover:text-black rounded-none border border-zinc-800 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 hover:bg-gold hover:text-black rounded-none border border-zinc-800 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick navigation */}
          <div>
            <h4 className="font-mono text-white font-black tracking-widest uppercase mb-4 text-[10px] text-gold">Corporate Navigation</h4>
            <ul className="space-y-2 text-[11px]">
              <li><button onClick={() => handleLink('about', 'about-us')} className="hover:text-gold transition-colors cursor-pointer text-left">About Our Group</button></li>
              <li><button onClick={() => handleLink('about', 'regulator')} className="hover:text-gold transition-colors cursor-pointer text-left">Regulatory Framework</button></li>
              <li><button onClick={() => handleLink('about', 'compliance')} className="hover:text-gold transition-colors cursor-pointer text-left">Compliance Auditing</button></li>
              <li><button onClick={() => handleLink('about', 'auditor')} className="hover:text-gold transition-colors cursor-pointer text-left">Our Auditor (BDO)</button></li>
              <li><button onClick={() => handleLink('about', 'faqs')} className="hover:text-gold transition-colors cursor-pointer text-left">Support & FAQs</button></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="font-mono text-white font-black tracking-widest uppercase mb-4 text-[10px] text-gold">Market Products</h4>
            <ul className="space-y-2 text-[11px]">
              <li><button onClick={() => handleLink('products', 'cfd')} className="hover:text-gold transition-colors cursor-pointer text-left">Contract For Differences (CFD)</button></li>
              <li><button onClick={() => handleLink('products', 'currencies')} className="hover:text-gold transition-colors cursor-pointer text-left">Foreign Exchange spot</button></li>
              <li><button onClick={() => handleLink('products', 'futures')} className="hover:text-gold transition-colors cursor-pointer text-left">Indices Futures</button></li>
              <li><button onClick={() => handleLink('products', 'commodities')} className="hover:text-gold transition-colors cursor-pointer text-left">Energy & Metal Commodities</button></li>
              <li><button onClick={() => handleLink('products', 'liquidity')} className="hover:text-gold transition-colors cursor-pointer text-left">Tier-1 Liquidity Pools</button></li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-3 text-[11px]">
            <h4 className="font-mono text-white font-black tracking-widest uppercase mb-4 text-[10px] text-gold">Compliance Office</h4>
            <div className="flex items-start">
              <MapPin className="h-4 w-4 mr-2.5 text-gold shrink-0 mt-0.5" />
              <p className="leading-relaxed text-zinc-400 font-sans">
                CentrePoint, Lot 02, Floor 1,<br />
                Trianon, Mauritius - 11324
              </p>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2.5 text-gold shrink-0" />
              <p className="text-zinc-400 font-mono">+230 460 1422 / +230 460 1425</p>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2.5 text-gold shrink-0" />
              <p className="text-zinc-400 font-mono">compliance@ellipsysfinancial.com</p>
            </div>
          </div>
        </div>

        {/* Legal Risk Warning and Jurisdictional Disclaimers */}
        <div className="py-10 space-y-6 text-[10px] leading-relaxed text-zinc-500 border-b border-zinc-900 font-sans">
          <div className="bg-zinc-950 border-2 border-zinc-800 p-5 rounded-none shadow-sm">
            <h5 className="font-display font-black text-white mb-2 uppercase tracking-wider text-[9px] flex items-center">
              <ShieldCheck className="h-4.5 w-4.5 mr-2 text-gold animate-pulse" />
              RISK WARNING STATEMENT
            </h5>
            <p className="leading-relaxed">
              Trading derivative, securities or spot contracts may not be suitable for all investors. The amount you lose is potentially unlimited and can exceed the amount you originally deposit. Ellipsys Financial Markets is licensed and regulated by the FSC. Spot trading is highly leveraged, with a relatively small amount of money used to take a position in assets having a much greater value. If you are uncomfortable with this level of risk, you should not trade these contracts.
            </p>
          </div>

          <div>
            <h5 className="font-display font-black text-zinc-400 mb-1 uppercase tracking-wider text-[9px]">Cookie & Dynamic Data Disclaimer</h5>
            <p className="leading-relaxed text-zinc-500">
              We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services.
            </p>
          </div>

          <div>
            <h5 className="font-display font-black text-zinc-400 mb-1 uppercase tracking-wider text-[9px]">Jurisdictional Limitations</h5>
            <p className="leading-relaxed text-zinc-500">
              The content and services on this website are not intended for residents of any jurisdiction where leveraged trading or the provision of such services is prohibited by their local law. It is the sole responsibility of the user to ensure compliance with their local laws and obtain any requisite permissions from competent authorities before establishing a relationship with Ellipsys. Ellipsys Financial Markets does not offer its services to residents of countries blacklisted by the FATF, such as Iran, North Korea, or any other countries where local marketing is unlawful.
            </p>
          </div>
          
          <p className="text-[9px] text-zinc-600 font-mono font-bold">
            THIS WEBSITE IS OWNED AND OPERATED BY ELLIPSYS FINANCIAL MARKETS. REGISTERED OFFICE: CENTREPOINT, LOT 02, FLOOR 1, TRIANON, MAURITIUS - 11324. COMPANY REGISTRATION NO: 107134 MAURITIUS. FSC LICENSE NUMBER: C111010125.
          </p>
        </div>

        {/* Corporate bottom line */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-zinc-600 font-mono font-bold uppercase tracking-wider">
          <p>© COPYRIGHT {currentYear} ELLIPSYS FINANCIAL MARKETS. ALL RIGHTS RESERVED. FSC REGULATED NO. C111010125.</p>
          <div className="flex space-x-3 mt-4 sm:mt-0 font-medium normal-case">
            <button onClick={() => handleLink('info', 'agreement')} className="hover:text-gold transition-colors cursor-pointer">Client Agreement</button>
            <span>•</span>
            <button onClick={() => handleLink('about', 'compliance')} className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => handleLink('about', 'compliance')} className="hover:text-gold transition-colors cursor-pointer">AML Policy</button>
            <span>•</span>
            <button onClick={() => handleLink('about', 'compliance')} className="hover:text-gold transition-colors cursor-pointer">Risk Disclosure</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
