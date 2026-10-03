import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Package, Award, Building2, Info, Send, Home } from 'lucide-react';
import { COMPANY_INFO } from '../data/infinityData';

interface NavbarProps {
  currentPage: 'home' | 'products' | 'projects' | 'certificates' | 'policies';
  onNavigate: (page: 'home' | 'products' | 'projects' | 'certificates' | 'policies', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', isPage: true, icon: Home },
    { id: 'products', label: 'Products', isPage: true, icon: Package, badge: '36' },
    { id: 'certificates', label: 'Certificates', isPage: true, icon: Award, badge: '11' },
    { id: 'projects', label: 'Projects', isPage: true, icon: Building2, badge: '20' },
    { id: 'policies', label: 'Policies', isPage: true, icon: Info },
    { id: 'about', label: 'About & Services', isPage: false, sectionId: 'about', icon: Info },
    { id: 'contact', label: 'Contact', isPage: false, sectionId: 'contact', icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);

    if (link.isPage) {
      onNavigate(link.id as 'home' | 'products' | 'projects' | 'certificates' | 'policies');
    } else {
      onNavigate('home', link.sectionId);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand ID */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left"
            >
              <div className="flex items-center justify-center p-0 group-hover:opacity-95 transition-opacity">
                <img
                  src="/pictures/logotp.png"
                  alt="INFINITY Logo"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-sm"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    const fallbackSrc = '/pictures/logo.jpeg';

                    if (target.src.includes('/pictures/logotp.png')) {
                      target.src = fallbackSrc;
                    } else if (target.src.includes('/pictures/logo.jpeg')) {
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML =
                          '<span class="text-xl font-black text-[#002D54] tracking-tighter">INFINITY</span>';
                      }
                    }
                  }}
                />
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  (link.isPage && currentPage === link.id) ||
                  (!link.isPage && currentPage === 'home' && false);

                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link)}
                    className={`relative px-3.5 py-2 rounded-xs text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'text-[#002D54] bg-slate-100 font-bold'
                        : 'text-slate-600 hover:text-[#002D54] hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono ${
                          isActive
                            ? 'bg-[#002D54] text-white'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#002D54] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Direct Phone & WhatsApp */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phones[0].clean}`}
                className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-xs text-xs font-mono font-medium text-slate-700 hover:text-[#002D54] hover:bg-slate-50 border border-slate-200 transition-colors"
                title="Call INFINITY Direct Line"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>+20-1000-100-869</span>
              </a>

              <a
                href="https://wa.me/201000100869?text=Hello%20INFINITY%20Fixation%20Systems,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xs shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="https://wa.me/201000100869"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xs sm:hidden"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#002D54] hover:bg-slate-100 rounded-xs transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive =
                  (link.isPage && currentPage === link.id) ||
                  (!link.isPage && currentPage === 'home' && false);

                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xs text-sm font-semibold transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#002D54] text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-[#002D54]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      <span>{link.label}</span>
                    </div>
                    {link.badge && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                          isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].clean}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 text-slate-800 text-xs font-semibold rounded-xs hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-700" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/201000100869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 text-white text-xs font-semibold rounded-xs hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
