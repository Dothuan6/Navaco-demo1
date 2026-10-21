import React, { useState, useEffect } from 'react';
import { Language, SubService, EquipmentItem, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServiceLifeCycle } from './components/ServiceLifeCycle';
import { EquipmentSection } from './components/EquipmentSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { WhyNavaco } from './components/WhyNavaco';
import { PartnersEcosystem } from './components/PartnersEcosystem';
import { NewsSection } from './components/NewsSection';
import { CallToActionBlock } from './components/CallToActionBlock';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { QuoteModal } from './components/QuoteModal';
import { ProfileModal } from './components/ProfileModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals state
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [preselectedNeed, setPreselectedNeed] = useState<string | undefined>(undefined);
  const [preselectedEquipment, setPreselectedEquipment] = useState<string | undefined>(undefined);

  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Detail item modals
  const [selectedService, setSelectedService] = useState<SubService | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Smooth scroll helper
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteWithNeed = (need: string) => {
    setPreselectedNeed(need);
    setPreselectedEquipment(undefined);
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithEquipment = (eqName: string) => {
    setPreselectedEquipment(eqName);
    setPreselectedNeed(undefined);
    setIsQuoteOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setPreselectedNeed(undefined);
    setPreselectedEquipment(undefined);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] flex flex-col font-sans selection:bg-[#D6011E] selection:text-white">
      {/* GLOBAL NAVBAR */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={handleOpenGeneralQuote}
        onOpenProfile={() => setIsProfileOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onSelectService={(service) => setSelectedService(service)}
        onSelectEquipment={(equipment) => setSelectedEquipment(equipment)}
      />

      {/* MAIN CONTENT RUNWAY */}
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <HeroSection
          lang={lang}
          onOpenQuote={handleOpenGeneralQuote}
          onOpenProfile={() => setIsProfileOpen(true)}
          onExploreServices={() => handleNavigate('services')}
        />

        {/* 2. SERVICES & OPERATIONAL LIFECYCLE (3 PILLARS + 7-BLOCK SERVICE DETAILS) */}
        <ServiceLifeCycle
          lang={lang}
          onOpenQuoteWithNeed={handleOpenQuoteWithNeed}
          selectedService={selectedService}
          onSelectService={setSelectedService}
        />

        {/* 3. EQUIPMENT CAROUSEL & CARDS (6 MAGIRUS STYLE LINES) */}
        <EquipmentSection
          lang={lang}
          onOpenQuoteWithEquipment={handleOpenQuoteWithEquipment}
          selectedEquipment={selectedEquipment}
          onSelectEquipment={setSelectedEquipment}
        />

        {/* 4. PROJECTS & CASE STUDIES (WITH BEFORE/AFTER SLIDER) */}
        <ProjectShowcase
          lang={lang}
          onOpenQuote={handleOpenGeneralQuote}
          selectedProject={selectedProject}
          onSelectProject={setSelectedProject}
        />

        {/* 5. WHY NAVACO (4 VERIFIED PILLARS + BRAND VALUES MANIFESTO) */}
        <WhyNavaco lang={lang} />

        {/* 6. PARTNERS ECOSYSTEM (8 AUTHORIZED BRANDS) */}
        <PartnersEcosystem lang={lang} />

        {/* 7. NEWS & TECHNICAL INSIGHTS */}
        <NewsSection lang={lang} />

        {/* 8 & 9. CALL TO ACTION & CAREERS */}
        <CallToActionBlock
          lang={lang}
          onOpenQuote={handleOpenGeneralQuote}
          onOpenProfile={() => setIsProfileOpen(true)}
        />
      </main>

      {/* FOOTER */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenGeneralQuote}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* FLOATING ACTION BUTTONS (ZALO & HOTLINE) */}
      <FloatingActions lang={lang} />

      {/* MODALS */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        lang={lang}
        preselectedNeed={preselectedNeed}
        preselectedEquipment={preselectedEquipment}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        lang={lang}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        lang={lang}
        onSelectService={(service) => setSelectedService(service)}
        onSelectEquipment={(equipment) => setSelectedEquipment(equipment)}
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </div>
  );
}
