import React from 'react';

export const PoliciesSection: React.FC = () => {
  const policies = [
    {
      title: '1. Quality Assurance Policy',
      points: [
        'Certified to international standards with UL, FM, and ETA approvals.',
        'Strict incoming inspections before any delivery to site.',
        'Full technical submittals and origin certificates for each project.',
      ],
    },
    {
      title: '2. Operations & Logistics Policy',
      points: [
        'Fast and reliable delivery to avoid project delays.',
        'Emergency supply plans for critical construction timelines.',
        'Safe storage and handling of all materials, especially chemical fixings.',
      ],
    },
    {
      title: '3. Engineering Support Policy',
      points: [
        'Pre-project consultation for the best fixing system selection.',
        'On-site technical support and pull-out testing.',
        'Ongoing after-sales support and design-based alternatives.',
      ],
    },
    {
      title: '4. HSE Policy',
      points: [
        'Mandatory PPE compliance at every project site.',
        'Safe material transport and lifting procedures.',
        'Responsible waste and packaging practices.',
      ],
    },
    {
      title: '5. Customer Satisfaction Policy',
      points: [
        'Competitive pricing with transparent project proposals.',
        'Quick communication on logistics challenges and solutions.',
        'Long-term partnership approach with main contractors.',
      ],
    },
  ];

  return (
    <section className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#002D54] uppercase block mb-2">
            Company Policies
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#002D54] tracking-tight">
            Quality, Operations & Customer Commitment
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((policy) => (
            <div key={policy.title} className="p-6 border border-slate-200 rounded-sm bg-white shadow-sm">
              <h2 className="font-heading font-bold text-xl text-[#002D54] mb-4">{policy.title}</h2>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                {policy.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-[#002D54] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
