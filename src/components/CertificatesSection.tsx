import React, { useState } from 'react';
import { Award, CheckCircle2, Maximize2, X, ExternalLink, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { CERTIFICATES_DATA, CertificateItem } from '../data/infinityData';
import { SafeImage } from './SafeImage';

interface CertificatesSectionProps {
  previewMode?: boolean;
  onNavigate?: (page: 'home' | 'products' | 'projects' | 'certificates') => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  previewMode = false,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'International' | 'Local Test'>('All');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  // In preview mode: strictly show 2 flagship certificates (50.jpg ETA 12/0397 and 51.jpg FM Approvals)
  const displayCerts = previewMode
    ? CERTIFICATES_DATA.slice(0, 2)
    : CERTIFICATES_DATA.filter((cert) => {
        if (activeTab === 'All') return true;
        return cert.type === activeTab;
      });

  return (
    <section
      id="certificates"
      className={`border-b border-slate-200/80 ${
        previewMode ? 'py-16 lg:py-24 bg-[#F8FAFC]' : 'pt-28 pb-20 lg:pt-32 lg:pb-28 bg-[#F8FAFC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subpage Breadcrumb Navigation when not in preview mode */}
        {!previewMode && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <button
                onClick={() => onNavigate?.('home')}
                className="hover:text-[#002D54] font-medium flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
              <span>/</span>
              <span className="font-semibold text-[#002D54]">Certifications & Test Reports</span>
              <span className="bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-mono text-[10px]">
                11 Documents
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate?.('products')}
                className="text-xs text-slate-600 hover:text-[#002D54] px-2.5 py-1 rounded bg-white border border-slate-200 cursor-pointer"
              >
                View Products (36) →
              </button>
              <button
                onClick={() => onNavigate?.('projects')}
                className="text-xs text-slate-600 hover:text-[#002D54] px-2.5 py-1 rounded bg-white border border-slate-200 cursor-pointer"
              >
                View Projects (20) →
              </button>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-[0.2em] text-[#002D54] uppercase">
                {previewMode ? 'Verified Compliance Preview' : 'Verified Compliance • Images 50 to 60'}
              </span>
              {!previewMode && (
                <span className="bg-sky-100 text-[#002D54] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  All 11 Documents
                </span>
              )}
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#002D54] tracking-tight">
              {previewMode ? 'Accreditations & Certificates' : 'Our Certificates & Quality Accreditations'}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {previewMode
                ? 'Internationally recognized approvals (ETA, FM Approvals, UL 203) guaranteeing engineering compliance for mega projects in Egypt.'
                : 'Internationally recognized European and American certifications alongside rigorous local university and engineering laboratory pull-out test reports in Egypt.'}
            </p>
          </div>

          {previewMode ? (
            <button
              onClick={() => onNavigate?.('certificates')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002D54] hover:bg-[#00172e] text-white text-xs font-semibold rounded-xs shadow-sm transition-all cursor-pointer group self-start md:self-auto"
            >
              <span>View All 11 Certificates</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-xs self-start md:self-auto">
              {(['All', 'International', 'Local Test'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#002D54] text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab === 'All' ? 'All (11)' : tab === 'International' ? 'International ETA / FM / UL (7)' : 'Local Egyptian Tests (4)'}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Certificates Grid */}
        <div
          className={`grid gap-6 ${
            previewMode
              ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {displayCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-slate-200 rounded-sm hover:border-[#002D54] transition-all flex flex-col justify-between group overflow-hidden shadow-xs hover:shadow-md"
            >
              <div>
                {/* Certificate Document Preview */}
                <div
                  className="relative bg-slate-50 p-4 border-b border-slate-100 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="aspect-[3/4] w-full max-h-[360px] bg-white border border-slate-200 shadow-inner rounded-xs overflow-hidden flex items-center justify-center p-2 relative">
                    <SafeImage
                      imageNumber={cert.imageNumber}
                      alt={cert.title}
                      category="Certificates"
                      className="w-full h-full object-contain filter group-hover:contrast-105 transition-all duration-300"
                    />

                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 bg-[#002D54]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/95 text-[#002D54] text-xs font-semibold px-3 py-1.5 rounded-xs shadow-md flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Certificate</span>
                      </span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex items-center gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-white/95 border border-slate-200 text-slate-700 rounded-xs shadow-xs">
                      #{cert.imageNumber}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-xs ${
                        cert.type === 'International'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {cert.type}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-semibold text-slate-700">{cert.issuingBody}</span>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-base leading-snug group-hover:text-[#002D54] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {cert.scopeSummary}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-xs border border-slate-100">
                    <span>{cert.standard}</span>
                    <span className="text-slate-400">{cert.dateOrCode}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Approved for Mega Projects</span>
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-semibold text-[#002D54] hover:underline cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Mode Bottom CTA banner */}
        {previewMode && (
          <div className="mt-12 bg-white border border-slate-200 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Need Official Technical Submittals or Ain Shams Lab Reports?
              </h3>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                View all 11 full compliance documents (Images 50 to 60), including European Technical Assessments (ETA-12/0397, ETA-18/0018), FM Approvals, UL 203, and Master-Lab tensile pull-out reports.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.('certificates')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#002D54] hover:bg-[#00172e] text-white text-xs font-bold uppercase tracking-wider rounded-xs shadow-sm transition-all whitespace-nowrap cursor-pointer group"
            >
              <span>Explore All 11 Certificates</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Subpage Mode Bottom Navigation */}
        {!previewMode && (
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onNavigate?.('home')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#002D54] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate?.('projects')}
                className="text-xs font-semibold text-[#002D54] hover:underline cursor-pointer"
              >
                Next: View Mega Projects (20) →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-sm max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Picture #{selectedCert.imageNumber} • {selectedCert.issuingBody}
                </span>
                <h3 className="font-heading font-black text-xl text-[#002D54]">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xs hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Image */}
            <div className="p-6 bg-slate-100 flex items-center justify-center">
              <div className="max-w-xl w-full bg-white shadow-lg p-2 border border-slate-300 rounded-xs">
                <SafeImage
                  imageNumber={selectedCert.imageNumber}
                  alt={selectedCert.title}
                  category="Certificates"
                  className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                />
              </div>
            </div>

            {/* Document Description & Actions */}
            <div className="p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-700">
                  <strong>Standard / Code:</strong> {selectedCert.standard} ({selectedCert.dateOrCode})
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  <strong>Scope:</strong> {selectedCert.scopeSummary}
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/201000100869?text=${encodeURIComponent(
                    `Hello INFINITY, please provide the full engineering submittal dossier for certificate: ${selectedCert.title} (Picture #${selectedCert.imageNumber}.jpg).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
                >
                  <span>Request Full PDF Submittal</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
