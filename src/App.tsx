import React, { useState, useEffect } from 'react';
import { MainView, RouteState } from './types';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProductsView from './components/ProductsView';
import PlatformsView from './components/PlatformsView';
import TradingInfoView from './components/TradingInfoView';
import ResourcesView from './components/ResourcesView';
import ContactView from './components/ContactView';
import AccountView from './components/AccountView';

export default function App() {
  const [route, setRoute] = useState<RouteState>({ view: 'home' });

  const handleNavigate = (view: MainView, subView?: string) => {
    setRoute({ view, subView });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the active view based on state
  const renderActiveView = () => {
    switch (route.view) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} />;
      case 'about':
        return <AboutView initialSubView={route.subView} />;
      case 'products':
        return <ProductsView initialSubView={route.subView} />;
      case 'platforms':
        return <PlatformsView />;
      case 'info':
        return <TradingInfoView initialSubView={route.subView} />;
      case 'resources':
        return <ResourcesView />;
      case 'contact':
        return <ContactView />;
      case 'account':
        return <AccountView initialType={route.subView as 'demo' | 'live' || 'live'} />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8F9FB] flex flex-col justify-between selection:bg-gold selection:text-black">
      {/* Dynamic Transparent Sticky Header */}
      <Navigation route={route} onNavigate={handleNavigate} />

      {/* Main Core Viewport */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Floating Regulatory footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
