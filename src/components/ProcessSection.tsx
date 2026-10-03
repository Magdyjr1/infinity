import React from 'react';
import { WORKFLOW_STEPS } from '../data/infinityData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#002D54] uppercase block mb-2">
            Streamlined Execution Workflow
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#002D54] tracking-tight">
            Our Process
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial inquiry to on-site testing and delivery, we ensure a seamless procurement experience backed by engineering expertise and rapid logistics.
          </p>
        </div>

        {/* Minimalist Linear Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white p-6 border border-slate-200 rounded-sm hover:border-[#002D54] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-heading font-black text-[#002D54]/25">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#002D54]" />
                </div>

                <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white border border-slate-200 rounded-sm text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Time is critical in the construction and MEP sectors. That is why INFINITY operates with a highly responsive, end-to-end procurement process ensuring the right certified systems reach your jobsite without delay.
          </p>
        </div>
      </div>
    </section>
  );
};
