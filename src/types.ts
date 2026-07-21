export type MainView = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'platforms' 
  | 'info' 
  | 'resources' 
  | 'contact' 
  | 'account';

export type AboutSubView = 
  | 'about-us' 
  | 'regulator' 
  | 'compliance' 
  | 'auditor' 
  | 'faqs';

export type ProductSubView = 
  | 'cfd' 
  | 'currencies' 
  | 'futures' 
  | 'indices' 
  | 'commodities' 
  | 'liquidity' 
  | 'white-labels';

export type PlatformSubView = 
  | 'zen-trader' 
  | 'zen-pro';

export type TradingInfoSubView = 
  | 'product-guide' 
  | 'specifications' 
  | 'margins' 
  | 'calendar' 
  | 'conduct' 
  | 'execution' 
  | 'orders' 
  | 'funds' 
  | 'agreement' 
  | 'deposits';

export type ResourceSubView = 
  | 'insights' 
  | 'tools' 
  | 'glossary' 
  | 'blog' 
  | 'history' 
  | 'hours';

export interface RouteState {
  view: MainView;
  subView?: string;
}

export interface InstrumentQuote {
  symbol: string;
  name: string;
  bid: number;
  ask: number;
  change: number;
  changePercent: number;
  category: 'currencies' | 'commodities' | 'indices' | 'crypto';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
}
