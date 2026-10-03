import React from 'react';
import { MapPin, Phone, Mail, Globe, MessageCircle, Clock, Building2, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/infinityData';
import { SafeImage } from './SafeImage';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-[#002D54] uppercase block mb-2">
            Get in Touch • Head Office Cairo
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#002D54] tracking-tight">
            Let&rsquo;s Work Together
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Ready to secure your next project with certified fixing and support systems? Reach out to our technical engineering and sales team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone Numbers & WhatsApp */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Instant WhatsApp Callout */}
            <div className="p-6 bg-emerald-50/70 border border-emerald-200 rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-emerald-950">
                      Instant WhatsApp Technical Desk
                    </h3>
                    <p className="text-xs text-emerald-800 mt-1">
                      Direct chat for pricing, ETA submittal files, and urgent site requirements.
                    </p>
                    <span className="font-mono text-xs font-bold text-emerald-900 mt-1 block">
                      +20 1000 100 869
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/201000100869?text=Hello%20INFINITY%20team,%20I%20would%20like%20to%20inquire%20about%20fixing%20systems%20for%20our%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xs shadow-xs transition-colors whitespace-nowrap self-start sm:self-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Lines Grid */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-4 h-4 text-[#002D54]" />
                <h3 className="font-heading font-bold text-sm text-[#002D54] uppercase tracking-wider">
                  Direct Phone Contacts
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {COMPANY_INFO.phones.map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:${phone.clean}`}
                    className="p-3.5 bg-white border border-slate-200 rounded-xs hover:border-[#002D54] hover:shadow-xs transition-all group block"
                  >
                    <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                      {phone.label}
                    </span>
                    <span className="font-mono font-bold text-xs text-slate-900 group-hover:text-[#002D54]">
                      {phone.number}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email & Web Communications */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-4 h-4 text-[#002D54]" />
                <h3 className="font-heading font-bold text-sm text-[#002D54] uppercase tracking-wider">
                  Official Email Inquiries
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${COMPANY_INFO.emails.sales}`}
                  className="p-3.5 bg-white border border-slate-200 rounded-xs hover:border-[#002D54] transition-colors block"
                >
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Sales & Quotations
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#002D54]">
                    {COMPANY_INFO.emails.sales}
                  </span>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.emails.support}`}
                  className="p-3.5 bg-white border border-slate-200 rounded-xs hover:border-[#002D54] transition-colors block"
                >
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Technical Support
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#002D54]">
                    {COMPANY_INFO.emails.support}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Headquarters Office & Site Engineer Graphic */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="p-6 bg-white border border-slate-200 rounded-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xs bg-[#002D54] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#002D54]">
                    Cairo Headquarters
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium mt-1">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Cairo, Arab Republic of Egypt
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Sunday – Thursday: 9:00 AM – 5:30 PM</span>
                </div>
              </div>
            </div>

            {/* Representative Image (Picture 13: Site engineer with helmet) */}
            <div className="border border-slate-200 rounded-sm overflow-hidden bg-slate-50">
              <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#002D54]" />
                  <span className="text-xs font-bold text-[#002D54]">On-Site Engineering Partner</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Image #13</span>
              </div>
              <div className="max-h-60 overflow-hidden">
                <SafeImage
                  imageNumber={13}
                  alt="INFINITY Senior Project Engineer"
                  aspectRatio="video"
                  showBadge={true}
                />
              </div>
              <div className="p-4 bg-slate-50 text-xs text-slate-600 leading-relaxed">
                Our site engineers provide on-demand pull-out test assistance, anchor calculation verification, and technical submittal files across all construction districts in Egypt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
