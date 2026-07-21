import React, { useState } from 'react';
import { User, Shield, Upload, FileCheck, CheckCircle2, DollarSign, ArrowLeft, ArrowRight } from 'lucide-react';

interface AccountViewProps {
  initialType?: 'demo' | 'live';
}

export default function AccountView({ initialType = 'live' }: AccountViewProps) {
  const [accountType, setAccountType] = useState<'demo' | 'live'>(initialType);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appCompleted, setAppCompleted] = useState(false);

  // Steps
  // Step 1: Personal Details
  // Step 2: Document Verification
  // Step 3: Source of Funds
  // Step 4: Acknowledgement

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: 'Select...',
    residence: 'Mauritius',
    birthCountry: 'Mauritius',
    address: '',
    
    idType: 'Select...',
    idNumber: '',
    idExpiry: '',
    idFile: null as File | null,
    
    secType: 'Select...',
    secNumber: '',
    secExpiry: '',
    secFile: null as File | null,

    sourceOfFunds: 'Salary',
    otherSourceDetails: '',
    
    agreeTerms: false,
    agreeAgreement: false,
    agreeRisk: false
  });

  const handleNextStep = () => {
    // Basic validation
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        alert('Please complete all required fields (*).');
        return;
      }
    }
    if (currentStep === 2) {
      if (formData.idType === 'Select...' || !formData.idNumber) {
        alert('Please complete your Primary Identification details.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms || !formData.agreeAgreement || !formData.agreeRisk) {
      alert('You must acknowledge and accept all terms and risk declarations.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAppCompleted(true);
    }, 2000);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      alert('Please complete your name and email address.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAppCompleted(true);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#F9FAF9] pt-24 pb-20">
      {/* Account Visual Header */}
      <section className="bg-black text-white py-20 relative border-b border-gold">
        <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center sm:text-left space-y-4 max-w-3xl">
            <span className="inline-block mb-[15px] text-[10px] font-mono tracking-widest text-gold bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-none font-black uppercase">
              SECURE REGISTRATION
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase leading-none">
              ONBOARDING PORTAL
            </h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Initiate your demo sandbox or launch your live, fully regulated FSC trading terminal within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Toggle between Demo and Live registration */}
        {!appCompleted && (
          <div className="flex justify-center mb-8">
            <div className="bg-white p-1 rounded-none border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex">
              <button
                onClick={() => { setAccountType('demo'); setCurrentStep(1); }}
                className={`px-5 py-2.5 rounded-none text-xs font-mono font-black uppercase tracking-widest transition-all cursor-pointer ${accountType === 'demo' ? 'bg-black text-white' : 'text-zinc-500 hover:text-black hover:bg-zinc-100'}`}
              >
                Demo Environment
              </button>
              <button
                onClick={() => { setAccountType('live'); setCurrentStep(1); }}
                className={`px-5 py-2.5 rounded-none text-xs font-mono font-black uppercase tracking-widest transition-all cursor-pointer ${accountType === 'live' ? 'bg-black text-white' : 'text-zinc-500 hover:text-black hover:bg-zinc-100'}`}
              >
                Live Trading Account
              </button>
            </div>
          </div>
        )}

        {appCompleted ? (
          /* Submission success state */
          <div className="bg-white p-8 sm:p-12 rounded-none border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center space-y-6 max-w-xl mx-auto animate-zoom-in">
            <CheckCircle2 className="h-16 w-16 text-gold mx-auto" />
            <h3 className="font-display font-black text-2xl text-black uppercase tracking-tight">
              {accountType === 'live' ? 'Application Received' : 'Demo Configured'}
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans max-w-md mx-auto">
              {accountType === 'live' 
                ? 'Thank you for choosing Ellipsys Financial Markets. Our compliance officers have received your personal and document verification bundle. Review is typically concluded within 2 hours.'
                : 'Your demo trading terminal is now operational! Check your registered email for your custom MT5 Zen Trader sandbox credentials.'
              }
            </p>
            
            <div className="bg-zinc-50 border border-black rounded-none p-5 text-left text-xs divide-y-2 divide-zinc-100 font-mono">
              <div className="py-2.5 flex justify-between">
                <span className="text-zinc-500 uppercase font-black text-[10px]">Trader Name:</span>
                <span className="font-bold text-black">{formData.firstName} {formData.lastName || 'Guest'}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-zinc-500 uppercase font-black text-[10px]">Registered Email:</span>
                <span className="font-bold text-black">{formData.email}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-zinc-500 uppercase font-black text-[10px]">Account Type:</span>
                <span className="font-bold text-gold uppercase tracking-wider">{accountType}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-zinc-500 uppercase font-black text-[10px]">Compliance Status:</span>
                <span className="font-mono font-bold text-amber-550 uppercase">{accountType === 'live' ? 'VETTING PENDING' : 'ACTIVE'}</span>
              </div>
            </div>

            <button
              onClick={() => { setAppCompleted(false); setCurrentStep(1); }}
              className="px-6 py-3.5 bg-black hover:bg-gold hover:text-black border-2 border-black text-white text-xs font-mono font-black uppercase tracking-widest rounded-none transition-all cursor-pointer"
            >
              Return to Portal
            </button>
          </div>
        ) : accountType === 'demo' ? (
          /* Simple Demo Account Form */
          <div className="bg-white p-8 rounded-none border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6 animate-fade-in">
            <div className="border-b-2 border-black pb-4 flex items-center space-x-3">
              <User className="h-5 w-5 text-gold" />
              <div>
                <h3 className="font-display font-black text-lg text-black uppercase tracking-tight">Instant Sandbox registration</h3>
                <p className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest font-black">NO CREDIT CARD REQUIRED</p>
              </div>
            </div>

            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">First Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="e.g. Liam"
                    className="w-full bg-zinc-50 border border-black rounded-none px-4 py-3.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Last Name</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="e.g. Miller"
                    className="w-full bg-zinc-50 border border-black rounded-none px-4 py-3.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Email Address *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="e.g. liam@terminal.com"
                  className="w-full bg-zinc-50 border border-black rounded-none px-4 py-3.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black hover:bg-gold hover:text-black border border-black text-white font-mono font-black text-xs uppercase tracking-widest rounded-none transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]"
              >
                {isSubmitting ? 'Provisioning Sandbox...' : 'Launch Demo Account'}
              </button>
            </form>
          </div>
        ) : (
          /* Multi-step Live Account Form */
          <div className="bg-white p-8 rounded-none border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-8 animate-fade-in">
            {/* Steps Progress Indicator */}
            <div className="relative flex justify-between items-center max-w-lg mx-auto border-b border-zinc-100 pb-6">
              {[1, 2, 3, 4].map(step => (
                <div key={step} className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-none border border-black flex items-center justify-center font-mono font-black text-xs ${currentStep >= step ? 'bg-gold text-black' : 'bg-zinc-100 text-zinc-450'}`}>
                    {step}
                  </div>
                  <span className={`text-[10px] font-mono font-black tracking-widest uppercase hidden sm:inline ${currentStep === step ? 'text-black' : 'text-zinc-400'}`}>
                    {step === 1 ? 'Personal' : step === 2 ? 'Documents' : step === 3 ? 'Funds' : 'Terms'}
                  </span>
                </div>
              ))}
            </div>

            {/* STEP 1: PERSONAL DETAILS */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h4 className="font-mono font-black text-xs tracking-widest text-gold uppercase">Step 1: Personal Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">First Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Middle Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Fitzgerald"
                      value={formData.middleName}
                      onChange={(e) => setFormData({...formData, middleName: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Kennedy"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. jfk@presidency.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +230 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Date of Birth</label>
                    <input 
                      type="date" 
                      value={formData.dob}
                      onChange={(e) => setFormData({...formData, dob: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Residential Address</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 1600 Pennsylvania Ave"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: DOCUMENTS UPLOAD */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h4 className="font-mono font-black text-xs tracking-widest text-gold uppercase">Step 2: Document Verification</h4>
                
                {/* ID Card / Passport */}
                <div className="p-5 bg-zinc-50 rounded-none border border-black space-y-4">
                  <span className="text-[10px] font-mono font-black tracking-widest text-gold uppercase block">Primary ID Passport</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Document Type</label>
                      <select 
                        value={formData.idType}
                        onChange={(e) => setFormData({...formData, idType: e.target.value})}
                        className="w-full bg-white border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none"
                      >
                        <option>Select...</option>
                        <option>National Passport</option>
                        <option>Driving License</option>
                        <option>Government ID Card</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">ID Number</label>
                      <input 
                        type="text" 
                        placeholder="e.g. P189201"
                        value={formData.idNumber}
                        onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                        className="w-full bg-white border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Drag and drop zone mimicry */}
                  <div className="border border-dashed border-zinc-400 hover:border-gold rounded-none p-6 text-center cursor-pointer transition-colors bg-white">
                    <Upload className="h-6 w-6 text-zinc-400 mx-auto mb-2" />
                    <p className="text-[11px] text-zinc-650 font-sans">Drag and drop file here, or click to choose from system files</p>
                    <p className="text-[9px] text-zinc-400 mt-1 font-mono uppercase font-bold">Supported: JPG, PNG, PDF (Max 5MB)</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: SOURCE OF FUNDS */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h4 className="font-mono font-black text-xs tracking-widest text-gold uppercase">Step 3: Source of Funds</h4>
                
                <div>
                  <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-3">Primary Capital Source *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Salary', 'Business Turnover', 'Inheritance', 'Other'].map(src => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setFormData({...formData, sourceOfFunds: src})}
                        className={`py-3 text-xs font-mono font-black rounded-none uppercase tracking-widest border border-black transition-all cursor-pointer ${formData.sourceOfFunds === src ? 'bg-gold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100'}`}
                      >
                        {src}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.sourceOfFunds === 'Other' && (
                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Please Elaborate Details</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Asset liquidation, investments"
                      value={formData.otherSourceDetails}
                      onChange={(e) => setFormData({...formData, otherSourceDetails: e.target.value})}
                      className="w-full bg-zinc-50 border border-black rounded-none px-3 py-2.5 text-xs font-mono font-bold text-black focus:outline-none focus:border-gold"
                    />
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: ACKNOWLEDGEMENTS */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <h4 className="font-mono font-black text-xs tracking-widest text-gold uppercase">Step 4: Legal Acknowledgement</h4>
                
                <div className="bg-zinc-50 p-4 rounded-none border border-black space-y-4 max-h-[180px] overflow-y-auto text-[10px] leading-relaxed text-zinc-650 font-sans">
                  <p>1. The Client appoints Ellipsys as the Client's agent for the purpose of dealing in Spot Contracts in accordance with the terms of the Client Agreement.</p>
                  <p>2. The Client agrees that the Client Agreement, Risk Disclosure Statement, and Client Acknowledgement are for the purposes of this agreement.</p>
                  <p>3. Client confirms that it does not have any pending litigation, disputed accounts, or other unresolved matters whatsoever. If they occur, client must advise Ellipsys in writing.</p>
                </div>

                <div className="space-y-4 pt-2">
                  <label className="flex items-start text-xs text-zinc-700 leading-normal font-sans cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                      className="mt-0.5 mr-3 accent-black shrink-0 h-4 w-4 rounded-none border border-black"
                    />
                    <span>I confirm that the information provided is true, accurate and complete. I have read and accept the <span className="text-gold font-bold">Terms & Conditions</span> and <span className="text-gold font-bold">Privacy Policy</span>.</span>
                  </label>
                  
                  <label className="flex items-start text-xs text-zinc-700 leading-normal font-sans cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={formData.agreeAgreement}
                      onChange={(e) => setFormData({...formData, agreeAgreement: e.target.checked})}
                      className="mt-0.5 mr-3 accent-black shrink-0 h-4 w-4 rounded-none border border-black"
                    />
                    <span>I have read and accept the <span className="text-gold font-bold">Client Agreement and Acknowledgement</span>.</span>
                  </label>

                  <label className="flex items-start text-xs text-zinc-700 leading-normal font-sans cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={formData.agreeRisk}
                      onChange={(e) => setFormData({...formData, agreeRisk: e.target.checked})}
                      className="mt-0.5 mr-3 accent-black shrink-0 h-4 w-4 rounded-none border border-black"
                    />
                    <span>I have read and accept the <span className="text-gold font-bold">Risk Disclosure Document</span>.</span>
                  </label>
                </div>
              </div>
            )}

            {/* Next / Previous controllers */}
            <div className="flex justify-between pt-6 border-t border-zinc-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-black text-xs font-mono font-black uppercase tracking-widest rounded-none flex items-center space-x-2 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-5 py-2.5 bg-black hover:bg-gold text-white hover:text-black border border-black text-xs font-mono font-black uppercase tracking-widest rounded-none flex items-center space-x-2 transition-all ml-auto cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]"
                >
                  <span>Continue</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-gold hover:bg-black hover:text-gold text-black border border-black text-xs font-mono font-black uppercase tracking-widest rounded-none flex items-center space-x-2 transition-all ml-auto cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border border-black border-t-transparent rounded-full animate-spin"></span>
                      <span>Transmitting Files...</span>
                    </>
                  ) : (
                    <span>Submit Application</span>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
