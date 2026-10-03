import React from 'react';
import { ArrowRight, MessageCircle, Phone, ShieldCheck, CheckCircle2, Package, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/infinityData';

interface HeroProps {
  onNavigate?: (page: 'home' | 'products' | 'projects' | 'certificates') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const getWhatsAppInquiryUrl = () => {
    const text = `Hello INFINITY team, I am reaching out from your website regarding fixings and support solutions for our construction project.`;
    return `https://wa.me/201000100869?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-900 text-white min-h-[85vh] flex items-center">
      {/* Background Image 2 with dark navy gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pictures/2.jpg"
          alt="INFINITY - Architectural Mega Project"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-110"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (target.src.includes('/pictures/2.jpg')) {
              target.src = 'D:\\Abdelrhman\\infinity\\pictures\\2.jpg';
            } else {
              target.style.display = 'none';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00172e]/95 via-[#002D54]/85 to-[#00172e]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Minimalist Top Tag */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xs mb-6 text-white text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>INFINITY</span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-6">
            INFINITY
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-sky-200 mt-2 font-sans tracking-normal">
              A Perfect Fixing Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
            Specializing in high-performance fixation systems, heavy mechanical anchors, fire fighting support solutions, and chemical anchoring for Egypt's flagship mega projects.
          </p>

          {/* Key Trust Signals */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>UL Listed & FM Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>ETA Certified Anchors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>Ain Shams Tested</span>
            </div>
          </div>

          {/* Direct Action Hub */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary: Go to Products Subpage */}
            <button
              onClick={() => onNavigate?.('products')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#002D54] text-xs font-bold uppercase tracking-wider rounded-xs shadow-md transition-all cursor-pointer group"
            >
              <Package className="w-4 h-4 text-[#002D54]" />
              <span>Products Catalog (36)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary: Go to Projects Subpage */}
            <button
              onClick={() => onNavigate?.('projects')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold rounded-xs transition-colors cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-sky-300" />
              <span>Mega Projects (20)</span>
            </button>

            {/* Direct WhatsApp Callout */}
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xs shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Direct Phone Number Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <span className="text-slate-400">Direct Engineering Hotline:</span>
            <a
              href={`tel:+201000100869`}
              className="font-mono font-semibold text-white hover:text-sky-300 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+20-1000-100-869</span>
            </a>
            <span className="text-slate-500">•</span>
            <a
              href={`tel:+201000100815`}
              className="font-mono text-slate-300 hover:text-white transition-colors"
            >
              +20-1000-100-815
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
