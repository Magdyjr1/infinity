import React, { useState } from 'react';
import { MapPin, Building2, Layers, ArrowUpRight, ArrowRight, ArrowLeft, MessageCircle, X } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/infinityData';
import { SafeImage } from './SafeImage';

interface ProjectsSectionProps {
  previewMode?: boolean;
  onNavigate?: (page: 'home' | 'products' | 'projects' | 'certificates') => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  previewMode = false,
  onNavigate,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Infrastructure', 'Commercial', 'Residential', 'Healthcare', 'Government', 'Institutional'];

  // In preview mode: strictly show 4 landmark mega projects (61.jpg, 62.jpg, 63.jpg, 64.jpg)
  const displayProjects = previewMode
    ? PROJECTS_DATA.slice(0, 4)
    : PROJECTS_DATA.filter((proj) => {
        if (activeFilter === 'All') return true;
        return proj.category === activeFilter;
      });

  const getWhatsAppProjectUrl = (item: ProjectItem) => {
    const text = `Hello INFINITY team, I am referencing your project supply at: ${item.title} (${item.location}). We have a similar project and need technical fixings consultation.`;
    return `https://wa.me/201000100869?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="projects"
      className={`border-b border-slate-100 ${
        previewMode ? 'py-16 lg:py-24 bg-white' : 'pt-28 pb-20 lg:pt-32 lg:pb-28 bg-white'
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
              <span className="font-semibold text-[#002D54]">Mega Projects Portfolio</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-mono text-[10px]">
                20 Projects
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate?.('products')}
                className="text-xs text-slate-600 hover:text-[#002D54] px-2.5 py-1 rounded bg-slate-50 border border-slate-200 cursor-pointer"
              >
                View Products (36) →
              </button>
              <button
                onClick={() => onNavigate?.('certificates')}
                className="text-xs text-slate-600 hover:text-[#002D54] px-2.5 py-1 rounded bg-slate-50 border border-slate-200 cursor-pointer"
              >
                View Certificates (11) →
              </button>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-[0.2em] text-[#002D54] uppercase">
                {previewMode ? 'Landmark References Preview' : 'Reference Portfolio • Images 61 to 80'}
              </span>
              <span className="bg-sky-100 text-[#002D54] text-[10px] font-bold px-2 py-0.5 rounded-full">
                {previewMode ? '4 Iconic Mega Projects' : 'All 20 Projects'}
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#002D54] tracking-tight">
              {previewMode ? 'Featured Mega Projects' : 'Some of Our Mega Projects'}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {previewMode
                ? "Flagship national infrastructure and high-rise developments in Egypt supplied with INFINITY fixation systems and fire support solutions."
                : "Showcasing 20 benchmark developments in Egypt equipped with INFINITY fixation systems, heavy mechanical anchors, and fire fighting support lines."}
            </p>
          </div>

          {previewMode ? (
            <button
              onClick={() => onNavigate?.('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002D54] hover:bg-[#00172e] text-white text-xs font-semibold rounded-xs shadow-sm transition-all cursor-pointer group self-start md:self-auto"
            >
              <span>View All 20 Mega Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <div className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 border border-slate-200 rounded-xs self-start md:self-auto">
              Showing <span className="font-bold text-[#002D54]">{displayProjects.length}</span> of 20 Mega Projects
            </div>
          )}
        </div>

        {/* Minimalist Filter Tabs (Subpage Mode) */}
        {!previewMode && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-10 border-b border-slate-100">
            {categories.map((cat) => {
              const count = cat === 'All' ? PROJECTS_DATA.length : PROJECTS_DATA.filter((p) => p.category === cat).length;
              if (count === 0 && cat !== 'All') return null;
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#002D54] text-white'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-xs ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid: 4 items on Home, 20 items on Subpage */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white border border-slate-200 rounded-sm hover:border-[#002D54] transition-all flex flex-col justify-between group overflow-hidden shadow-xs hover:shadow-md cursor-pointer"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <SafeImage
                    imageNumber={project.imageNumber}
                    alt={project.title}
                    category="Projects"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-black/60 backdrop-blur-md text-white border border-white/20 rounded-xs">
                      #{project.imageNumber}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/90 text-slate-800 rounded-xs">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center gap-1">
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span className="font-medium text-slate-600 line-clamp-1">{project.location}</span>
                  </div>

                  <h3 className="font-heading font-black text-slate-900 text-base leading-snug group-hover:text-[#002D54] transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-4 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 line-clamp-1 max-w-[180px]">
                  {project.keyProducts?.[0] || 'Fixings & Supports'}
                </span>
                <span className="text-xs font-semibold text-[#002D54] group-hover:underline">
                  Details →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Mode Bottom CTA banner */}
        {previewMode && (
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Explore All 20 Mega Developments Across Egypt
              </h3>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                From Cairo Metro Line 4 and the New Capital CBD to El-Alamein Towers and Olympic City — see the complete list of national landmarks powered by INFINITY fixings.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#002D54] hover:bg-[#00172e] text-white text-xs font-bold uppercase tracking-wider rounded-xs shadow-sm transition-all whitespace-nowrap cursor-pointer group"
            >
              <span>Explore All 20 Mega Projects</span>
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
                onClick={() => onNavigate?.('certificates')}
                className="text-xs font-semibold text-[#002D54] hover:underline cursor-pointer"
              >
                Next: View Certificates & Tests (11) →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-sm max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Picture #{selectedProject.imageNumber} • {selectedProject.category}
                </span>
                <h3 className="font-heading font-black text-xl text-[#002D54]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xs hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div className="aspect-[16/9] bg-slate-900 border border-slate-200 rounded-xs overflow-hidden flex items-center justify-center">
                <SafeImage
                  imageNumber={selectedProject.imageNumber}
                  alt={selectedProject.title}
                  category="Projects"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span className="font-semibold text-slate-700">{selectedProject.location}</span>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Scope of Supply & Engineering Work
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProject.scope}
                </p>
              </div>

              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xs text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Sector / Category:</span>
                  <span className="font-semibold text-slate-800">{selectedProject.category}</span>
                </div>
                {selectedProject.keyProducts && selectedProject.keyProducts.length > 0 && (
                  <div className="flex items-start justify-between">
                    <span className="text-slate-400">Supplied Systems:</span>
                    <span className="font-semibold text-slate-800 text-right max-w-[70%]">
                      {selectedProject.keyProducts.join(', ')}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Verified By:</span>
                  <span className="font-semibold text-slate-800">INFINITY Fixation Systems Egypt</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Planning a similar construction or MEP project?
              </span>
              <a
                href={getWhatsAppProjectUrl(selectedProject)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
