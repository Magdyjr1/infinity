import React from 'react';
import {
  Anchor,
  Flame,
  Wrench,
  Layers,
  Truck,
  FileCheck2,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/infinityData';
import { SafeImage } from './SafeImage';

export const AboutServices: React.FC = () => {
  const serviceIcons = {
    anchoring: Anchor,
    firefighting: Flame,
    fixing: Wrench,
    'support-hangers': Layers,
    logistics: Truck,
    documentation: FileCheck2,
  };

  return (
    <div id="about" className="bg-white">
      {/* SECTION 1: Who We Are */}
      <section className="py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-[#002D54] uppercase block mb-2">
              Company Background
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#002D54] tracking-tight">
              Who We Are
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              {COMPANY_INFO.about.summary}
            </p>
          </div>

          {/* Editorial Grid: Image 3 and 4 with Mission Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-sm overflow-hidden">
                <SafeImage
                  imageNumber={3}
                  alt="INFINITY Engineering & Sales Operations"
                  aspectRatio="video"
                  showBadge={true}
                />
              </div>
              <div className="border border-slate-200 rounded-sm overflow-hidden mt-6">
                <SafeImage
                  imageNumber={4}
                  alt="On-Site Fixation Consultations & Project Partnership"
                  aspectRatio="video"
                  showBadge={true}
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-slate-50 border-l-2 border-[#002D54] space-y-2">
                <h3 className="font-heading font-bold text-lg text-[#002D54]">
                  Unwavering Customer Satisfaction
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.about.mission}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  What We Bring to Your Project
                </h4>
                <div className="space-y-3">
                  {COMPANY_INFO.values.map((val) => (
                    <div
                      key={val.title}
                      className="p-4 border border-slate-200 rounded-sm hover:border-[#002D54]/50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#002D54] shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-sm text-[#002D54]">
                            {val.title}
                          </h5>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {val.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Operational Context: Single paragraph with image 6 only */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-6 pt-12 border-t border-slate-100 items-center">
            <div className="p-5 border border-slate-200 rounded-sm bg-slate-50">
              <h4 className="font-semibold text-sm text-[#002D54] uppercase tracking-wide">
                Full Project Compliance & Immediate Site Fulfillment
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Accredited by Spanish IETcc and Ain Shams University testing laboratories, while our centralized Cairo logistics facility ensures immediate dispatch to critical job sites with full project compliance and fast execution.
              </p>
            </div>

            <div className="border border-slate-200 rounded-sm overflow-hidden">
              <SafeImage
                imageNumber={6}
                alt="Rapid Logistics Dispatch"
                aspectRatio="video"
                showBadge={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What We Do / Core Services */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold tracking-[0.2em] text-[#002D54] uppercase block mb-2">
              Capabilities
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#002D54] tracking-tight">
              What We Do
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              At INFINITY, we supply and support a comprehensive range of high-quality materials essential for construction, mechanical, and industrial projects.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-16">
            {CORE_SERVICES.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Wrench;
              return (
                <div
                  key={service.id}
                  className="bg-white p-3 sm:p-7 border border-slate-200/90 rounded-sm hover:border-[#002D54] transition-all hover:shadow-xs group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xs bg-slate-100 text-[#002D54] flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-[#002D54] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#002D54] mb-2 sm:mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Architectural Context: Images 7 and 8 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 bg-white border border-slate-200 rounded-sm">
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Why Choose INFINITY
              </span>
              <h4 className="font-heading font-bold text-xl text-[#002D54]">
                Reliable Quality, Fast Delivery & Professional Support
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We pride ourselves on supplying internationally certified materials that guarantee safety and structural performance. From comprehensive technical submittals to on-site pull-out testing, our team ensures your projects stay on track and within budget.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-slate-200 rounded-sm overflow-hidden">
                <SafeImage
                  imageNumber={7}
                  alt="Dedicated Technical Support Team"
                  aspectRatio="video"
                  showBadge={true}
                />
              </div>
              <div className="border border-slate-200 rounded-sm overflow-hidden">
                <SafeImage
                  imageNumber={8}
                  alt="MEP Piping & Fastener Installations"
                  aspectRatio="video"
                  showBadge={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
