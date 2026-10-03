import React from 'react';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/infinityData';

interface FooterProps {
  onNavigate?: (page: 'home' | 'products' | 'projects' | 'certificates', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00172e] text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-0">
                <img
                  src="/pictures/logotpwt.png"
                  alt="INFINITY"
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src.includes('/pictures/logotpwt.png')) {
                      target.src = '/pictures/logotp.png';
                    } else {
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.logo-fallback')) {
                        const fallback = document.createElement('span');
                        fallback.className = 'logo-fallback text-base font-bold text-white';
                        fallback.innerText = 'INFINITY';
                        parent.appendChild(fallback);
                      }
                    }
                  }}
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Supplying top-tier, internationally certified fixation systems, heavy fasteners, fire fighting support solutions, and anchoring systems for mega construction projects.
            </p>

            <div className="text-[11px] font-mono text-slate-400">
              Company Profile 2026 • Arab Republic of Egypt
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Dedicated Pages
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate?.('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Homepage Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full pr-4"
                >
                  <span>Products Catalog</span>
                  <span className="font-mono text-[10px] bg-white/10 px-1.5 py-0.5 rounded">36 Items</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('projects')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full pr-4"
                >
                  <span>Mega Projects Portfolio</span>
                  <span className="font-mono text-[10px] bg-white/10 px-1.5 py-0.5 rounded">20 Projects</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('certificates')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full pr-4"
                >
                  <span>Certificates & Test Reports</span>
                  <span className="font-mono text-[10px] bg-white/10 px-1.5 py-0.5 rounded">11 Docs</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Core Categories */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Systems
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Mechanical Anchors</li>
              <li>Chemical Fixing</li>
              <li>Nylon & Frame Plugs</li>
              <li>UL / FM Pipe Clamps</li>
              <li>Support Strut Channels</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Headquarters
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones[0].clean}`} className="hover:text-white font-mono">
                  {COMPANY_INFO.phones[0].number}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emails.sales}`} className="hover:text-white">
                  {COMPANY_INFO.emails.sales}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`https://${COMPANY_INFO.website}`} className="hover:text-white font-mono">
                  {COMPANY_INFO.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {COMPANY_INFO.profileYear} {COMPANY_INFO.name}. All rights reserved. Professional Fixation Solutions.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
