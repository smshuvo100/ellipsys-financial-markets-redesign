import React, { useState, useEffect } from 'react';
import { CreditCard, FileSpreadsheet, Scale, Lock, DollarSign, ArrowUpRight, Zap, RefreshCw } from 'lucide-react';
import { TradingInfoSubView } from '../types';
import { specGuide } from '../data';

interface TradingInfoProps {
  initialSubView?: string;
}

export default function TradingInfoView({ initialSubView }: TradingInfoProps) {
  const [activeTab, setActiveTab] = useState<TradingInfoSubView>('specifications');

  useEffect(() => {
    if (initialSubView) {
      setActiveTab(initialSubView as TradingInfoSubView);
    }
  }, [initialSubView]);

  const tabs = [
    { id: 'specifications' as TradingInfoSubView, label: 'Specifications' },
    { id: 'execution' as TradingInfoSubView, label: 'Execution Terms' },
    { id: 'funds' as TradingInfoSubView, label: 'Client Funds' },
    { id: 'deposits' as TradingInfoSubView, label: 'Deposits/Withdrawals' },
    { id: 'conduct' as TradingInfoSubView, label: 'Code of Conduct' }
  ];

  const depositChannels = [
    { method: 'Visa / Mastercard / Maestro', speed: 'Instant (1-2 minutes)', fee: '0.0%', minAmount: '100 USD', maxAmount: '10,000 USD' },
    { method: 'International Bank Wire', speed: '2 - 3 Working Days', fee: 'No Ellipsys Fees (Bank fees apply)', minAmount: '500 USD', maxAmount: 'Unlimited' },
    { method: 'Sticpay / Neteller / Skrill', speed: 'Instant (1-5 minutes)', fee: '0.0%', minAmount: '50 USD', maxAmount: '5,000 USD' }
  ];

  return (
    <div className="relative min-h-screen bg-[#F9FAF9] pt-24 pb-20">
      {/* Platform Specific Hero Banner */}
      <section className="bg-black text-white py-20 relative border-b-4 border-gold">
        <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center sm:text-left space-y-4 max-w-3xl">
            <span className="inline-block mb-[15px] text-[10px] font-mono tracking-widest text-gold bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-none font-black uppercase">
              TRADING SPECIFICATIONS
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase leading-none">
              TRADING SPECIFICATIONS & TERMS
            </h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Find complete details regarding contract lot dimensions, margins, segregated accounts, execution paths, and deposit channels.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Tabs Selector */}
      <div className="bg-black border-b border-zinc-900 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto py-4 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-mono font-black tracking-widest uppercase shrink-0 pb-1 border-b transition-all cursor-pointer ${activeTab === tab.id ? 'border-gold text-gold' : 'border-transparent text-zinc-500 hover:text-white'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* TAB 1: SPECIFICATIONS */}
        {activeTab === 'specifications' && (
          <div className="space-y-12 animate-fade-in">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase">
                CONTRACT SPECIFICATION SHEET
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Review standard leverage parameters, minimum spreads, tick sizes, and margin ratios for popular currency and spot metals contracts.
              </p>
            </div>

            <div className="bg-white rounded-none border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="bg-black text-white p-5 flex justify-between items-center border-b border-gold">
                <span className="text-[10px] font-mono font-black tracking-widest text-gold uppercase">Contract Terms & Spreads Matrix</span>
                <span className="text-[9px] font-mono text-zinc-400">RAW SPREADS SHOWN</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-zinc-100 border-b border-black font-mono font-black text-black uppercase text-[10px] tracking-wider">
                      <th className="p-4">Symbol</th>
                      <th className="p-4">Standard Lot Size</th>
                      <th className="p-4">Minimum Spread</th>
                      <th className="p-4">Average Spread</th>
                      <th className="p-4">Max Leverage</th>
                      <th className="p-4">Margin Buffer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 font-mono font-bold">
                    {specGuide.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4 text-black text-xs font-black">{spec.symbol}</td>
                        <td className="p-4 text-zinc-600 font-sans font-medium text-xs">{spec.contractSize}</td>
                        <td className="p-4 text-emerald-600 text-xs font-black">{spec.minSpread}</td>
                        <td className="p-4 text-zinc-800 text-xs font-semibold">{spec.standardSpread}</td>
                        <td className="p-4 text-zinc-800 text-xs font-semibold">{spec.leverage}</td>
                        <td className="p-4 text-zinc-800 text-xs font-black">{spec.marginRequired}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EXECUTION TERMS */}
        {activeTab === 'execution' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-12 h-12 p-2.5 bg-black text-gold border-2 border-gold rounded-none flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase leading-none">
                SPEED, LATENCY & EXECUTION
              </h2>
              <div className="text-sm text-zinc-700 space-y-4 leading-relaxed font-sans">
                <p>
                  Orders placed on the Ellipsys terminal are routed immediately to our institutional prime bridges. By aggregating liquidity feeds from multiple tier-1 banking institutions, we minimize pricing discrepancies and eliminate re-quotes entirely.
                </p>
                <p>
                  During major global macroeconomic reports or high market volatility events, spreads may experience momentary expansion or minor slippage. This is a direct, honest reflection of liquidity changes in the underlying banking corridors.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black p-8 rounded-none border-2 border-gold shadow-[8px_8px_0px_0px_rgba(200,155,60,0.25)] text-white space-y-6">
              <h4 className="font-mono font-black text-xs tracking-wider uppercase text-gold">EXECUTION SPECIFICATIONS</h4>
              <div className="space-y-4 divide-y divide-zinc-850">
                <div className="py-2.5 flex justify-between text-xs font-mono font-bold">
                  <span className="text-zinc-400">Execution Engine:</span>
                  <span className="text-white">Market Execution (No Re-quotes)</span>
                </div>
                <div className="py-2.5 flex justify-between text-xs font-mono font-bold">
                  <span className="text-zinc-400">Average Routing Time:</span>
                  <span className="text-gold font-black">11.8 Milliseconds</span>
                </div>
                <div className="py-2.5 flex justify-between text-xs font-mono font-bold">
                  <span className="text-zinc-400">Slippage Protection:</span>
                  <span className="text-white">Slippage Limits Enabled</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CLIENT FUNDS */}
        {activeTab === 'funds' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-12 h-12 p-2.5 bg-black text-gold border-2 border-gold rounded-none flex items-center justify-center">
                <Lock className="h-6 w-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase leading-none">
                SEGREGATED CLIENT BANK VAULTS
              </h2>
              <div className="text-sm text-zinc-700 space-y-4 leading-relaxed font-sans">
                <p>
                  As a regulated FSC broker, client security is our ultimate priority. Ellipsys Financial Markets maintains an absolute separation between the funds of our clients and the operational accounts of the company.
                </p>
                <p>
                  All retail and institutional trader balances are held exclusively in dedicated, tier-1 segregated banking custody. In the highly unlikely event of corporate solvency concerns, client capital remains entirely secure and untouchable by company creditors.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black p-8 rounded-none border-2 border-gold shadow-[8px_8px_0px_0px_rgba(200,155,60,0.25)] text-white space-y-4">
              <h4 className="font-mono font-black text-xs tracking-wider uppercase text-gold">FSC BANK SAFEGUARDS</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Under Section 29 FSC rules, our banking records are audited regularly by independent third parties to verify that all cash deposits match terminal operational ledgers precisely.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: DEPOSITS & WITHDRAWALS */}
        {activeTab === 'deposits' && (
          <div className="space-y-12 animate-fade-in">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase leading-none">
                SECURE FUNDING & WITHDRAWAL CHANNELS
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Fund your live accounts instantly or request swift capital withdrawals. We charge zero deposit fees across credit cards, bank wires, and electronic e-wallet providers.
              </p>
            </div>

            <div className="bg-white rounded-none border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="bg-black text-white p-5 flex justify-between items-center border-b border-gold">
                <span className="text-[10px] font-mono font-black tracking-widest text-gold uppercase">Deposit Channels & Fees</span>
                <span className="text-[9px] font-mono text-zinc-400">ZERO FEES ON ALL METHODS</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-zinc-100 border-b border-black font-mono font-black text-black uppercase text-[10px] tracking-wider">
                      <th className="p-4">Method</th>
                      <th className="p-4">Processing Speed</th>
                      <th className="p-4">Deposit Fee</th>
                      <th className="p-4">Minimum Amount</th>
                      <th className="p-4">Maximum Limit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 font-mono font-bold">
                    {depositChannels.map((ch, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4 text-black flex items-center font-black">
                          <CreditCard className="h-4 w-4 mr-2.5 text-gold" />
                          {ch.method}
                        </td>
                        <td className="p-4 text-zinc-600 font-sans font-medium text-xs">{ch.speed}</td>
                        <td className="p-4 text-emerald-600 text-xs font-black">{ch.fee}</td>
                        <td className="p-4 text-zinc-800 text-xs font-black">{ch.minAmount}</td>
                        <td className="p-4 text-zinc-800 text-xs font-semibold">{ch.maxAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: CODE OF CONDUCT */}
        {activeTab === 'conduct' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-12 h-12 p-2.5 bg-black text-gold border-2 border-gold rounded-none flex items-center justify-center">
                <Scale className="h-6 w-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase leading-none">
                ETHICAL CODE OF CONDUCT
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans font-bold">
                At Ellipsys Financial Markets, compliance is not just about check-lists — it is an active dedication to fair and honest trading practices.
              </p>
              <div className="text-sm text-zinc-700 space-y-4 leading-relaxed font-sans">
                <p>
                  Our internal desk operates under a strict code of ethics, eliminating conflicts of interest between the brokerage house and our retail or institutional clients. We never take the counter-party risk or trade against our users.
                </p>
                <p>
                  Every order is transparently matched, fully mapped, and cleared directly into the interbank markets, preserving complete transactional integrity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black p-8 rounded-none border-2 border-gold shadow-[8px_8px_0px_0px_rgba(200,155,60,0.25)] text-white space-y-4">
              <h4 className="font-mono font-black text-xs tracking-wider uppercase text-gold">ETHICAL GUARANTEES</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                All account managers, support officers, and directors undergo routine compliance certifications to ensure complete conformity with the latest Mauritius Securities Rules.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
