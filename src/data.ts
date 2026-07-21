import { InstrumentQuote, FAQItem, BlogPost } from './types';

export const liveQuotes: InstrumentQuote[] = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', bid: 1.0942, ask: 1.0943, change: 0.0012, changePercent: 0.11, category: 'currencies' },
  { symbol: 'GBP/USD', name: 'Great Britain Pound / US Dollar', bid: 1.2824, ask: 1.2826, change: -0.0021, changePercent: -0.16, category: 'currencies' },
  { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', bid: 147.35, ask: 147.37, change: 0.42, changePercent: 0.29, category: 'currencies' },
  { symbol: 'AUD/USD', name: 'Australian Dollar / US Dollar', bid: 0.6582, ask: 0.6584, change: 0.0007, changePercent: 0.11, category: 'currencies' },
  { symbol: 'USD/CHF', name: 'US Dollar / Swiss Franc', bid: 0.8654, ask: 0.8656, change: -0.0015, changePercent: -0.17, category: 'currencies' },
  
  { symbol: 'XAU/USD', name: 'Gold Spot / US Dollar', bid: 2420.45, ask: 2421.15, change: 18.50, changePercent: 0.77, category: 'commodities' },
  { symbol: 'XAG/USD', name: 'Silver Spot / US Dollar', bid: 27.85, ask: 27.89, change: 0.35, changePercent: 1.27, category: 'commodities' },
  { symbol: 'USOIL', name: 'WTI Crude Oil', bid: 78.42, ask: 78.46, change: -0.85, changePercent: -1.07, category: 'commodities' },
  { symbol: 'UKOIL', name: 'Brent Crude Oil', bid: 82.15, ask: 82.20, change: -0.72, changePercent: -0.87, category: 'commodities' },
  
  { symbol: 'NQ100', name: 'Nasdaq 100 CFD', bid: 19525.40, ask: 19528.10, change: 145.20, changePercent: 0.75, category: 'indices' },
  { symbol: 'US30', name: 'Dow Jones 30 CFD', bid: 40120.30, ask: 40123.50, change: 85.10, changePercent: 0.21, category: 'indices' },
  { symbol: 'DE40', name: 'DAX 40 CFD', bid: 18340.50, ask: 18343.20, change: 110.40, changePercent: 0.61, category: 'indices' },
  { symbol: 'SPX500', name: 'S&P 500 CFD', bid: 5462.80, ask: 5463.90, change: 32.40, changePercent: 0.60, category: 'indices' },
  
  { symbol: 'BTC/USD', name: 'Bitcoin / US Dollar', bid: 64850.00, ask: 64875.00, change: 1250.00, changePercent: 1.96, category: 'crypto' },
  { symbol: 'ETH/USD', name: 'Ethereum / US Dollar', bid: 3420.50, ask: 3421.90, change: 85.20, changePercent: 2.55, category: 'crypto' },
];

export const faqs: FAQItem[] = [
  {
    question: 'Is Ellipsys regulated, and where?',
    answer: 'Yes, Ellipsys Financial Markets is licensed and regulated by the Financial Services Commission (FSC), Mauritius. It holds a Category 1 Global Business License as a Full Service Dealer (excluding underwriting) pursuant to Section 29 of the Securities Act 2005 and Mauritius Securities Rules 2007. Licence No: C111010125.',
    category: 'compliance'
  },
  {
    question: 'What is the minimum deposit size for opening an account?',
    answer: 'There is no minimum account size restriction for opening an account with us. You can start trading with a deposit of your own choice that fits your trading style and capital management parameters.',
    category: 'trading'
  },
  {
    question: 'How are client funds protected?',
    answer: 'Client funds are fully segregated from Ellipsys\' operating capital. Under FSC regulations, client funds are held in dedicated, highly secured, tier-1 segregated client bank accounts to guarantee maximum safety and transparency.',
    category: 'compliance'
  },
  {
    question: 'What trading platforms does Ellipsys offer?',
    answer: 'Ellipsys offers two primary cutting-edge trading platforms: Zen Trader (based on the popular MetaTrader 5 engine, offering 38+ indicators and deep analysis tools) and Zen Pro (powered by the advanced VertexFX11 engine, offering VTL scripts, custom indicators, and premium risk tools).',
    category: 'platforms'
  },
  {
    question: 'Does Ellipsys support multi-account management (MAM)?',
    answer: 'Yes, we provide a Free MAM (Multi-Account Manager) terminal. Fund managers can easily distribute trades across multiple client accounts simultaneously, with different allocation methods available (lot-based, percentage, proportional, etc.).',
    category: 'trading'
  },
  {
    question: 'What financial assets can I trade with Ellipsys?',
    answer: 'You can trade a wide variety of derivative instruments including Currencies (major, minor, and exotic forex pairs), Commodities (Gold, Silver, WTI Crude Oil, Brent), Indices (Nasdaq 100, Dow 30, S&P 500, DAX 40), Futures, and specialized CFD instruments.',
    category: 'assets'
  },
  {
    question: 'Who is the auditor for Ellipsys Financial Markets?',
    answer: 'To ensure complete compliance and transparent financial reporting, Ellipsys Financial Markets is audited by BDO, one of the world\'s leading international public accounting and advisory networks.',
    category: 'compliance'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What is Forex Trading? - A Beginner\'s Comprehensive Guide',
    excerpt: 'Deep dive into the world\'s largest financial market. Learn how currency exchange works, what pip values are, and how to read currency pairs from scratch.',
    category: 'Currencies',
    date: 'June 17, 2026',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/forex/800/600'
  },
  {
    id: '2',
    title: 'Best 5 Forex Trading Tips - A Beginner\'s Comprehensive Guide',
    excerpt: 'Accelerate your learning curve with five proven guidelines. Master leverage ratios, design disciplined risk management systems, and choose the right entry triggers.',
    category: 'Trading Strategy',
    date: 'June 17, 2026',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/tips/800/600'
  },
  {
    id: '3',
    title: 'Is Forex Trading a Good Idea? Exploring the Realities!',
    excerpt: 'An honest analysis of the opportunities, liquidities, and hazards of forex trading. Discover how volatility can be harnessed responsibly using modern stop loss strategies.',
    category: 'Market Insights',
    date: 'June 17, 2026',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/reality/800/600'
  },
  {
    id: '4',
    title: 'Key Differences Between Forex Trading and Stock Trading',
    excerpt: 'Compare market structures, liquidity levels, trading hours, and leverage parameters between currency spot markets and traditional equity exchanges.',
    category: 'Education',
    date: 'June 17, 2026',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/comparison/800/600'
  }
];

export const testimonials = [
  {
    quote: 'Trading with Ellipsys since 2014, prompt withdrawals and excellent support are what make them my long-term choice.',
    author: 'Zeeshan Amin',
    title: 'Professional Trader & Businessman'
  },
  {
    quote: 'I have traded with various brokers over the years, but I would definitely recommend Ellipsys for their ultra-low spreads and honest execution.',
    author: 'Mitul Kapadia',
    title: 'Independent Futures Trader'
  },
  {
    quote: 'Since I opened my account, I am highly encouraged by the high-speed execution and personalized VIP support service. Impressive work!',
    author: 'Hitesh Dhalani',
    title: 'Managing Director, Dhakan Jewellers'
  }
];

export const companyTimeline = [
  { year: '2011', title: 'Foundation & Infrastructure', description: 'Established core capital structures, liquidity network nodes, and technical data centers.' },
  { year: '2012', title: 'FSC Regulation License', description: 'Successfully secured Category 1 Global Business License from Financial Services Commission, Mauritius.' },
  { year: '2015', title: 'Launch of Zen Trader MT5', description: 'Introduced high-end MT5 customization with 38+ indices, multi-source feed aggregation.' },
  { year: '2018', title: 'Zen Pro Integration', description: 'Incorporated the advanced VertexFX11 engine supporting proprietary automated script strategies.' },
  { year: '2021', title: 'Free MAM Deployment', description: 'Rolled out zero-cost Multi-Account Manager terminal for professional fund management teams.' },
  { year: '2026', title: 'Next-Gen Core Upgrade', description: 'Upgraded execution centers to sub-millisecond response tiers and launched fully responsive secure digital onboarding.' }
];

export const platformFeatures = {
  zenTrader: {
    name: 'Zen Trader',
    poweredBy: 'MetaTrader 5',
    tagline: 'The global standard for professional charting and analytical depth.',
    description: 'Zen Trader delivers unmatched analytical depth with professional-grade indicators, multi-market depth indicators, and immediate execution response. Engineered for active algorithmic traders.',
    bulletPoints: [
      'Advanced Technical Analysis — 38+ indicators, 21 timeframes, and built-in interactive graphics.',
      'Native Mobile Applications — Trade seamlessly on Android, iPhone, and iPad with direct synchronicity.',
      'Global Client Community — Gain access to millions of pre-coded trading strategies, indicators, and expert advisors (EAs).'
    ]
  },
  zenPro: {
    name: 'Zen Pro',
    poweredBy: 'VertexFX 11',
    tagline: 'Proprietary, institutional-grade automated scripting and execution.',
    description: 'A robust, server-synced platform built for heavy institutional workflows. Zen Pro excels with cloud-based automated hosting, proprietary server-side algorithmic coding, and sophisticated risk dashboards.',
    bulletPoints: [
      'True Web-Based Trading — No client installation needed. Access your custom charts securely from any browser.',
      'VTL Scripting & Customization — Code, backtest, and deploy your own automated expert advisory triggers in minutes.',
      'Advanced Portfolio Risk Tools — Access MAM, PAMM, and multi-layered order configurations natively.'
    ]
  }
};

export const specGuide = [
  { symbol: 'EUR/USD', contractSize: '100,000 EUR', minSpread: '0.2 pips', standardSpread: '0.8 pips', leverage: '1:100', marginRequired: '1.0%' },
  { symbol: 'GBP/USD', contractSize: '100,000 GBP', minSpread: '0.4 pips', standardSpread: '1.1 pips', leverage: '1:100', marginRequired: '1.0%' },
  { symbol: 'USD/JPY', contractSize: '100,000 USD', minSpread: '0.2 pips', standardSpread: '0.9 pips', leverage: '1:100', marginRequired: '1.0%' },
  { symbol: 'XAU/USD', contractSize: '100 oz Gold', minSpread: '1.2 pips', standardSpread: '2.5 pips', leverage: '1:50', marginRequired: '2.0%' },
  { symbol: 'USOIL', contractSize: '1,000 Barrels', minSpread: '2.0 pips', standardSpread: '4.0 pips', leverage: '1:33', marginRequired: '3.0%' },
  { symbol: 'NQ100', contractSize: '10 Indices', minSpread: '1.0 points', standardSpread: '1.8 points', leverage: '1:100', marginRequired: '1.0%' }
];
