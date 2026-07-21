import React, { useState, useEffect } from 'react';
import { BarChart3, HelpCircle, ChevronRight, Coins, RefreshCw, Layers, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { ProductSubView } from '../types';
import { specGuide } from '../data';

interface ProductsProps {
  initialSubView?: string;
}

export default function ProductsView({ initialSubView }: ProductsProps) {
  const [activeTab, setActiveTab] = useState<ProductSubView>('cfd');

  useEffect(() => {
    if (initialSubView) {
      setActiveTab(initialSubView as ProductSubView);
    }
  }, [initialSubView]);

  const productTabs = [
    { id: 'cfd' as ProductSubView, label: 'CFD Trading' },
    { id: 'currencies' as ProductSubView, label: 'Currencies (Forex)' },
    { id: 'futures' as ProductSubView, label: 'Futures contracts' },
    { id: 'indices' as ProductSubView, label: 'Global Indices' },
    { id: 'commodities' as ProductSubView, label: 'Commodities' },
    { id: 'liquidity' as ProductSubView, label: 'Institutional Liquidity' },
    { id: 'white-labels' as ProductSubView, label: 'Broker White Labels' }
  ];

  return (
    <div className="relative min-h-screen bg-[#F9FAF9] pt-24 pb-20">
      {/* Product Specific Hero Banner */}
      <section className="bg-black text-white py-20 relative border-b-4 border-gold">
        <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center sm:text-left space-y-4 max-w-3xl">
            <span className="inline-block mb-[15px] text-[10px] font-mono tracking-widest text-gold bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-none font-black uppercase">
              MARKET ACCESS
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase leading-none">
              INVESTMENT PRODUCTS & SPREADS
            </h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Explore our premium global liquidity corridors, featuring institutional-grade margins and highly optimized derivative contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Tabs Selector */}
      <div className="bg-black border-b border-zinc-900 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto py-4 scrollbar-none">
            {productTabs.map((tab) => (
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

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* TAB 1: CFD TRADING */}
        {activeTab === 'cfd' && (
          <div className="space-y-16 animate-fade-in">
            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase">
                  CONTRACTS FOR DIFFERENCE (CFDs)
                </h2>
                <div className="text-sm text-zinc-700 space-y-4 leading-relaxed font-sans">
                  <p>
                    CFDs are synthetic equity, index, or spot products which reflect the economic benefits of being long or short an underlying instrument. Corporate actions, dividends, and pricing movements are settled cash-in-account daily.
                  </p>
                  <p>
                    Contracts for Difference are engineered for active short-to-medium-term speculation. Leverage parameters provide major advantages over normal physical share dealing, primarily in hedging physical exposures.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 bg-black p-8 rounded-none border-2 border-gold shadow-[8px_8px_0px_0px_rgba(200,155,60,0.25)] text-white relative overflow-hidden">
                <h4 className="font-mono font-black text-xs tracking-wider text-gold uppercase mb-3">CFD MARKET HOURS</h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  CFD markets operate continuously in sync with their underlying exchange indices. Trading desk support runs continuously from Sunday 22:00 UTC through Friday 22:00 UTC.
                </p>
              </div>
            </div>

            {/* CFD Advantages (The Infographics from original screenshots!) */}
            <div className="space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <h3 className="font-display font-black text-2xl text-black uppercase tracking-tight">ADV_ ADVANTAGES OF CFDs over SHARE DEALING</h3>
                <p className="text-xs text-zinc-500 font-mono">Explore why active retail and institutional traders prefer synthetic leverage.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Gearing', desc: 'Instead of depositing 100% of the transaction value, the investor is only required to deposit margin as collateral, maximizing liquidity.' },
                  { title: 'Reduced Transaction Costs', desc: 'There are no other costs involved other than a low transaction spread — there is no Stamp Duty to pay, PTM levy or other local charges.' },
                  { title: 'Selling Short', desc: 'Using CFDs allows the investor the ability to go short on a share - previously a costly and complicated procedure available only to institutions.' },
                  { title: 'Risk Management & Hedging', desc: 'CFDs are particularly useful when employed in risk management and hedging strategies. For example, protect physical stock portfolios.' }
                ].map((adv, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all space-y-4">
                    <div className="w-10 h-10 rounded-none bg-black text-gold flex items-center justify-center font-mono font-black text-sm border border-gold">
                      0{idx + 1}
                    </div>
                    <h4 className="font-display font-black text-md text-black uppercase tracking-tight">{adv.title}</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-sans">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CURRENCIES (FOREX) */}
        {activeTab === 'currencies' && (
          <div className="space-y-12 animate-fade-in">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase">
                FOREIGN EXCHANGE SPOT (FOREX)
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Access the world's largest and most liquid financial market. Trade Major, Minor, and Exotic currency pairs with immediate sub-millisecond execution.
              </p>
            </div>

            {/* Spec Table */}
            <div className="bg-white rounded-none border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="bg-black text-white p-5 flex justify-between items-center border-b border-gold">
                <span className="text-[10px] font-mono font-black tracking-widest text-gold uppercase">FOREX SPREADS & LEVERAGE TIERS</span>
                <span className="text-[9px] font-mono text-zinc-400 uppercase">RAW SPREAD ACCOUNT</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-zinc-100 border-b border-black font-mono font-black text-black uppercase text-[10px] tracking-wider">
                      <th className="p-4">Symbol</th>
                      <th className="p-4">Contract Size</th>
                      <th className="p-4">Min Spread</th>
                      <th className="p-4">Standard Spread</th>
                      <th className="p-4">Leverage</th>
                      <th className="p-4">Margin Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {specGuide.filter(s => s.symbol.includes('/')).map((spec, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50 transition-colors font-mono font-bold">
                        <td className="p-4 text-black text-xs font-black">{spec.symbol}</td>
                        <td className="p-4 text-zinc-600 text-xs font-medium font-sans">{spec.contractSize}</td>
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

        {/* TAB 3: FUTURES CONTRACTS */}
        {activeTab === 'futures' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase">
                INDEX & COMMODITY FUTURES
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Hedge or speculate on global financial indices and raw materials through standardized futures agreements. Futures derivative contracts provide clean pricing matrices without overnight financing fees or daily rolling swaps.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Clean rollover calendars with clear forward timelines.',
                  'No overnight swap/financing costs on futures instruments.',
                  'Deep depth of market (DoM) visibility across underlying liquidity pools.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-xs text-zinc-800 font-mono font-bold uppercase tracking-tight">
                    <CheckCircle2 className="h-4 w-4 text-gold mr-3 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-black p-8 rounded-none border-2 border-gold shadow-[8px_8px_0px_0px_rgba(200,155,60,0.25)] text-white space-y-4">
              <h4 className="font-mono font-black text-xs tracking-wider uppercase text-gold">FUTURES ROLLOVER TERMS</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                All futures positions are automatically closed or cash-settled on the specified expiration date if they are not explicitly rolled over by the trader beforehand. Check our Contract Calendar for active cycle dates.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: GLOBAL INDICES */}
        {activeTab === 'indices' && (
          <div className="space-y-12 animate-fade-in">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase">
                GLOBAL MARKET INDICES
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Trade on the performance of global economic regions in a single transaction. Speculate on the Nasdaq 100, Dow 30, DAX 40, FTSE 100, and Nikkei 225 with competitive margins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'US Tech Index (NQ100)', spec: '10 Standard Indices • 1.0 Point spreads • 1:100 Max Leverage' },
                { title: 'US Industrial (US30)', spec: '10 Standard Indices • 1.5 Point spreads • 1:100 Max Leverage' },
                { title: 'Germany 40 (DE40)', spec: '1 Standard Index • 0.8 Point spreads • 1:100 Max Leverage' }
              ].map((ind, idx) => (
                <div key={idx} className="bg-white p-6 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                  <h4 className="font-display font-black text-md text-black uppercase tracking-tight">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-mono font-bold uppercase">{ind.spec}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: COMMODITIES */}
        {activeTab === 'commodities' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase">
                ENERGIES, PRECIOUS METALS & AGRICULTURE
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Trade spot Gold (XAU), Silver (XAG), WTI Crude Oil (USOIL), and Brent Crude (UKOIL). Our direct liquidity pipelines from major global refiners ensure premium bid/ask pricing even during highly volatile macroeconomic events.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-6 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                  <span className="text-[10px] font-mono font-black tracking-widest text-gold bg-black px-2 py-1 uppercase">PRECIOUS METALS</span>
                  <p className="text-xs text-zinc-600 mt-2 font-sans">Gold and Silver spot contracts, priced in US Dollars per ounce, with zero commissions.</p>
                </div>
                <div className="bg-white p-6 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                  <span className="text-[10px] font-mono font-black tracking-widest text-gold bg-black px-2 py-1 uppercase">ENERGIES SPOT</span>
                  <p className="text-xs text-zinc-600 mt-2 font-sans">Light Sweet Crude (WTI) and Brent spot oil contracts, backed by deep pipeline feeds.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black p-8 rounded-none border-2 border-gold shadow-[8px_8px_0px_0px_rgba(200,155,60,0.25)] text-white space-y-6">
              <h4 className="font-mono font-black text-xs tracking-wider uppercase text-gold">COMMODITY TICK SPECIFICATIONS</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Our commodities operate under specialized contract sizes. For instance, 1 Gold contract represents exactly 100 troy ounces of spot gold. Check our Product Guide for full specifications.
              </p>
            </div>
          </div>
        )}

        {/* TAB 6: LIQUIDITY */}
        {activeTab === 'liquidity' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase">
                INSTITUTIONAL TIER-1 LIQUIDITY
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                We distribute bespoke, ultra-low latency price feeds aggregated directly from major global investment banks, tier-1 non-bank market makers, and prime broker corridors.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Sub-millisecond data feed aggregation engines.',
                  'Bespoke price configurations for high-volume brokerage houses.',
                  'Direct fiber-optic connections to Equinix LD4, NY4, and TY3 data hubs.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-xs text-zinc-800 font-mono font-bold uppercase tracking-tight">
                    <CheckCircle2 className="h-4.5 w-4.5 text-gold mr-3 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-black p-8 rounded-none border-2 border-gold shadow-[8px_8px_0px_0px_rgba(200,155,60,0.25)] text-white space-y-4">
              <h4 className="font-mono font-black text-xs tracking-wider uppercase text-gold">B2B INTEGRATION DESK</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Connect your institutional servers directly to our prime liquidity pools via FIX API 4.4 protocols. Standard liquidity contracts require professional compliance clearance.
              </p>
            </div>
          </div>
        )}

        {/* TAB 7: WHITE LABELS */}
        {activeTab === 'white-labels' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight uppercase">
                CUSTOM TURNKEY BROKERAGE
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Launch your own multi-asset brokerage house within weeks. Our turnkey white label package provides a fully configured MetaTrader 5 server node, integrated CRM systems, client portals, and prime liquidity routes.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Pre-configured MetaTrader 5 (Zen Trader) workspace branding.',
                  'Robust institutional CRM client portal with integrated payment gateways.',
                  'Dedicated technical support desk running continuously 24/5.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-xs text-zinc-800 font-mono font-bold uppercase tracking-tight">
                    <CheckCircle2 className="h-4.5 w-4.5 text-gold mr-3 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-black p-8 rounded-none border-2 border-gold shadow-[8px_8px_0px_0px_rgba(200,155,60,0.25)] text-white space-y-4">
              <h4 className="font-mono font-black text-xs tracking-wider uppercase text-gold">WHITE LABEL ONBOARDING</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                All white label applicants must undergo a specialized corporate background assessment to establish compliance with standard jurisdictional rules. Contact our business development desk for proposals.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
