import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldAlert, CheckCircle } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    { sender: 'bot', text: 'Hello! Welcome to the Ellipsys Trading Support desk. How can we help you regarding your account setup or platform specification?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    // Simulated automated smart response
    setTimeout(() => {
      let botResponse = "Thank you for reaching out. One of our Senior Brokerage Relationship Managers will contact you soon. If you need immediate funding or live registration, please navigate to the Open Live Account application.";
      
      const text = userMsg.toLowerCase();
      if (text.includes('demo') || text.includes('trial')) {
        botResponse = "Opening a demo account is completely free of charge and requires zero margin deposits. Simply navigate to our Online Application portal and toggle 'Demo Account' to start trading with virtual capital immediately.";
      } else if (text.includes('regulated') || text.includes('fsc') || text.includes('license')) {
        botResponse = "Ellipsys Financial Markets is fully licensed and regulated by the Financial Services Commission (FSC) of Mauritius under license number C111010125. All trader funds are strictly segregated in tier-1 custody accounts.";
      } else if (text.includes('spread') || text.includes('pip') || text.includes('commission')) {
        botResponse = "We offer raw ECN spreads from 0.0 pips on major currencies, with highly competitive liquidity models. On standard retail accounts, average spreads on EUR/USD range around 0.8 pips with zero commissions.";
      } else if (text.includes('deposit') || text.includes('withdraw') || text.includes('fund')) {
        botResponse = "You can fund your account securely via Visa, Mastercard, international bank wire, or online wallets. All deposits are free of charge, with instant processing times for card channels.";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="relative min-h-screen bg-[#F9FAF9] pt-24 pb-20">
      {/* Contact Specific Hero Banner */}
      <section className="bg-black text-white py-20 relative border-b border-gold">
        <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center sm:text-left space-y-4 max-w-3xl">
            <span className="inline-block mb-[15px] text-[10px] font-mono tracking-widest text-gold bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-none font-black uppercase">
              CONTACT DESK
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase leading-none">
              CONNECT WITH OUR SPECIALISTS
            </h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              We operate global trading desks 24 hours a day to assist you with registration setup, institutional API bridges, or compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info, Contact Form, Chat Simulator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Office details & Form */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white p-8 rounded-none border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-mono font-black text-xs tracking-wider uppercase text-gold">Physical Headquarters</h4>
              <div className="flex items-start text-xs font-sans text-zinc-650 leading-relaxed">
                <MapPin className="h-5 w-5 text-gold mr-2.5 shrink-0" />
                <p>
                  Ellipsys Financial Markets<br />
                  CentrePoint, Lot 02, Floor 1,<br />
                  Trianon, Mauritius - 11324
                </p>
              </div>
              <div className="flex items-center text-xs font-sans text-zinc-650">
                <Phone className="h-4 w-4 text-gold mr-2.5 shrink-0" />
                <p>+230 460 1422 / +230 460 1425</p>
              </div>
              <div className="flex items-center text-xs font-sans text-zinc-650">
                <Mail className="h-4 w-4 text-gold mr-2.5 shrink-0" />
                <p>compliance@ellipsysfinancial.com</p>
              </div>
            </div>

            <div className="bg-black text-white p-6 rounded-none border border-gold space-y-3">
              <span className="text-[10px] font-mono font-black tracking-widest text-gold uppercase">Compliance Desk Hours</span>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Our core administrative team operates Monday to Friday from 08:00 to 17:00 UTC+4. In-terminal desk support is accessible 24/5.
              </p>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="bg-white p-8 rounded-none border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
            <h3 className="font-display font-black text-lg tracking-tight text-black uppercase border-b border-zinc-100 pb-3">Submit compliance Inquiry</h3>
            
            {formSuccess ? (
              <div className="bg-gold/10 border border-gold p-6 text-center space-y-4 max-w-md mx-auto animate-zoom-in rounded-none">
                <CheckCircle className="h-10 w-10 text-gold mx-auto" />
                <h4 className="font-display font-black text-sm text-black uppercase">Inquiry Transmitted Successfully</h4>
                <p className="text-xs text-zinc-750 font-sans leading-relaxed">
                  Thank you. Your message has been routed to our compliance officer. We will return a response to your designated email shortly.
                </p>
                <button 
                  onClick={() => setFormSuccess(false)}
                  className="px-5 py-2.5 bg-black text-gold text-[10px] font-mono font-black tracking-widest rounded-none uppercase transition-colors hover:bg-gold hover:text-black cursor-pointer"
                >
                  New Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alice"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-4 py-3 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Your Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. alice@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-4 py-3 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Corporate Account Solvency"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-zinc-50 border border-black rounded-none px-4 py-3 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Your Message *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Write details regarding your compliance inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-zinc-50 border border-black rounded-none px-4 py-3 text-xs font-sans text-black focus:outline-none focus:border-gold"
                  />
                </div>

                <button 
                  type="submit"
                  className="px-6 py-3.5 bg-black hover:bg-gold hover:text-black border border-black text-white text-xs font-mono font-black tracking-widest uppercase rounded-none transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Live Chat Simulator */}
        <div className="lg:col-span-5 bg-white rounded-none border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col h-[520px]">
          {/* Chat Header */}
          <div className="bg-black p-4 border-b border-gold flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
              <div>
                <p className="font-display font-black text-xs text-white uppercase tracking-wider">Trading Desk Support</p>
                <p className="text-[9px] text-gold font-mono uppercase tracking-widest font-bold">Automated Assistant</p>
              </div>
            </div>
            <MessageSquare className="h-4 w-4 text-gold" />
          </div>

          {/* Chat Message Window */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-zinc-50 font-sans">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-none text-xs leading-relaxed ${msg.sender === 'user' ? 'bg-gold text-black rounded-bl-lg font-bold shadow-sm' : 'bg-white border border-zinc-200 text-zinc-700 rounded-br-lg shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-black bg-white flex space-x-2">
            <input 
              type="text" 
              placeholder="Ask about regulation, spreads, demo..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 bg-zinc-50 border border-black rounded-none px-3 py-2 text-xs font-mono font-bold focus:outline-none focus:border-gold text-black"
            />
            <button 
              type="submit"
              className="p-3 bg-black hover:bg-gold text-white hover:text-black rounded-none transition-all border border-black cursor-pointer flex items-center justify-center"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
