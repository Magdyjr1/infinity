/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutServices } from './components/AboutServices';
import { ProductsSection } from './components/ProductsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PoliciesSection } from './components/PoliciesSection';
import { WhatsAppButton } from './components/WhatsAppButton';

export type PageView = 'home' | 'products' | 'projects' | 'certificates' | 'policies';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Sync state with URL hash for bookmarking and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'products') {
        setCurrentPage('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'projects') {
        setCurrentPage('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'certificates') {
        setCurrentPage('certificates');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'policies') {
        setCurrentPage('policies');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageView, sectionId?: string) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `#${page === 'home' && sectionId ? sectionId : page}`);

    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const topOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - topOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#002D54] selection:text-white antialiased">
      {/* Sticky Navigation Header with Subpage Switching */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero onNavigate={handleNavigate} />

            {/* Who We Are & Core Services */}
            <AboutServices />

            {/* Featured Products (4 items preview with View All 36 button) */}
            <ProductsSection previewMode={true} onNavigate={handleNavigate} />

            {/* Featured Certificates (2 items preview with View All 11 button) */}
            <CertificatesSection previewMode={true} onNavigate={handleNavigate} />

            {/* Featured Mega Projects (4 items preview with View All 20 button) */}
            <ProjectsSection previewMode={true} onNavigate={handleNavigate} />

            {/* 6-Step Workflow Process */}
            <ProcessSection />

            {/* Direct Contact & Branch Directory */}
            <ContactSection />
          </>
        )}

        {currentPage === 'products' && (
          <ProductsSection previewMode={false} onNavigate={handleNavigate} />
        )}

        {currentPage === 'projects' && (
          <ProjectsSection previewMode={false} onNavigate={handleNavigate} />
        )}

        {currentPage === 'certificates' && (
          <CertificatesSection previewMode={false} onNavigate={handleNavigate} />
        )}

        {currentPage === 'policies' && <PoliciesSection />}
      </main>

      {/* Corporate Minimalist Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Action Button (+201000100869) */}
      <WhatsAppButton />
    </div>
  );
}
