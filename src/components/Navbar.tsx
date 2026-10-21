import React, { useState } from 'react';
import { NavacoLogo } from './NavacoLogo';
import { Language, SubService, EquipmentItem } from '../types';
import { Search, ChevronDown, Menu, X, Globe, FileText } from 'lucide-react';
import { MegaMenu } from './MegaMenu';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
  onOpenProfile: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onSelectService: (service: SubService) => void;
  onSelectEquipment: (equipment: EquipmentItem) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenSearch,
  onOpenQuote,
  onOpenProfile,
  activeSection,
  onNavigate,
  onSelectService,
  onSelectEquipment
}) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'equipment' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMegaMenu = (menu: 'services' | 'equipment') => {
    setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all h-16">
      <div className="max-w-7xl mx-auto h-full px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-6">
        {/* ZONE 1: BRAND LOGO */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              closeMegaMenu();
            }}
            className="flex items-center gap-1.5 group cursor-pointer"
            aria-label="NAVACO Home"
          >
            <NavacoLogo variant="horizontal" theme="light" height={28} />
          </a>
        </div>

        {/* ZONE 2: PRIMARY NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm font-medium text-slate-700">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              closeMegaMenu();
            }}
            className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 hover:text-[#D6011E] ${
              activeSection === 'home' ? 'text-[#D6011E] font-semibold' : ''
            }`}
          >
            {lang === 'vi' ? 'Trang chủ' : 'Home'}
          </a>

          {/* MEGA MENU TRIGGER: GIẢI PHÁP & DỊCH VỤ */}
          <div className="relative">
            <button
              onClick={() => toggleMegaMenu('services')}
              className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 hover:text-[#D6011E] cursor-pointer ${
                activeMegaMenu === 'services' || activeSection === 'services'
                  ? 'text-[#D6011E] font-semibold'
                  : ''
              }`}
            >
              <span>{lang === 'vi' ? 'Giải pháp & Dịch vụ' : 'Solutions & Services'}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMegaMenu === 'services' ? 'rotate-180 text-[#D6011E]' : ''
                }`}
              />
            </button>
          </div>

          {/* MEGA MENU TRIGGER: THIẾT BỊ */}
          <div className="relative">
            <button
              onClick={() => toggleMegaMenu('equipment')}
              className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 hover:text-[#D6011E] cursor-pointer ${
                activeMegaMenu === 'equipment' || activeSection === 'equipment'
                  ? 'text-[#D6011E] font-semibold'
                  : ''
              }`}
            >
              <span>{lang === 'vi' ? 'Thiết bị' : 'Equipment'}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMegaMenu === 'equipment' ? 'rotate-180 text-[#D6011E]' : ''
                }`}
              />
            </button>
          </div>

          {/* DỰ ÁN */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('projects');
              closeMegaMenu();
            }}
            className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 hover:text-[#D6011E] ${
              activeSection === 'projects' ? 'text-[#D6011E] font-semibold' : ''
            }`}
          >
            {lang === 'vi' ? 'Dự án' : 'Projects'}
          </a>

          {/* ĐỐI TÁC */}
          <a
            href="#partners"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('partners');
              closeMegaMenu();
            }}
            className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 hover:text-[#D6011E] ${
              activeSection === 'partners' ? 'text-[#D6011E] font-semibold' : ''
            }`}
          >
            {lang === 'vi' ? 'Đối tác' : 'Partners'}
          </a>

          {/* VỀ NAVACO */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('about');
              closeMegaMenu();
            }}
            className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 hover:text-[#D6011E] ${
              activeSection === 'about' ? 'text-[#D6011E] font-semibold' : ''
            }`}
          >
            {lang === 'vi' ? 'Về NAVACO' : 'About'}
          </a>

          {/* TIN TỨC */}
          <a
            href="#news"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('news');
              closeMegaMenu();
            }}
            className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 hover:text-[#D6011E] ${
              activeSection === 'news' ? 'text-[#D6011E] font-semibold' : ''
            }`}
          >
            {lang === 'vi' ? 'Tin tức' : 'News'}
          </a>

          {/* LIÊN HỆ */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
              closeMegaMenu();
            }}
            className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 hover:text-[#D6011E] ${
              activeSection === 'contact' ? 'text-[#D6011E] font-semibold' : ''
            }`}
          >
            {lang === 'vi' ? 'Liên hệ' : 'Contact'}
          </a>
        </nav>

        {/* ZONE 3: ACTIONS & UTILITIES (Search, VI/EN, RFQ CTA, Hamburger) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* SEARCH BUTTON */}
          <button
            onClick={onOpenSearch}
            aria-label="Tìm kiếm"
            className="p-1.5 sm:p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            title={lang === 'vi' ? 'Tìm kiếm nhanh' : 'Quick Search'}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* BILINGUAL TOGGLE */}
          <button
            onClick={() => onLanguageChange(lang === 'vi' ? 'en' : 'vi')}
            className="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
            title="Chuyển ngôn ngữ / Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#D6011E]" />
            <span className="font-bold">{lang.toUpperCase()}</span>
          </button>

          {/* PRIMARY RED CTA: YÊU CẦU BÁO GIÁ (Compact on mobile) */}
          <button
            onClick={onOpenQuote}
            className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-[#D6011E] hover:bg-[#B50019] text-white font-condensed font-bold text-xs tracking-wider uppercase rounded shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span className="sm:hidden">{lang === 'vi' ? 'Báo Giá' : 'Quote'}</span>
            <span className="hidden sm:inline">{lang === 'vi' ? 'Yêu Cầu Báo Giá' : 'Request Quote'}</span>
          </button>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="lg:hidden p-1.5 text-slate-700 hover:bg-slate-100 rounded transition-colors ml-0.5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* RENDER DESKTOP MEGA MENU */}
      {activeMegaMenu && (
        <>
          <div
            className="fixed inset-0 top-16 bg-black/20 z-30"
            onClick={closeMegaMenu}
          />
          <MegaMenu
            type={activeMegaMenu}
            lang={lang}
            onSelectService={onSelectService}
            onSelectEquipment={onSelectEquipment}
            onClose={closeMegaMenu}
          />
        </>
      )}

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-white border-b border-slate-200 shadow-xl p-4 z-50 max-h-[85vh] overflow-y-auto font-sans">
          <div className="space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded"
            >
              {lang === 'vi' ? 'Trang chủ' : 'Home'}
            </button>

            <button
              onClick={() => {
                onNavigate('services');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded"
            >
              {lang === 'vi' ? 'Giải pháp & Dịch vụ' : 'Solutions & Services'}
            </button>

            <button
              onClick={() => {
                onNavigate('equipment');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded"
            >
              {lang === 'vi' ? 'Thiết bị' : 'Equipment'}
            </button>

            <button
              onClick={() => {
                onNavigate('projects');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded"
            >
              {lang === 'vi' ? 'Dự án' : 'Projects'}
            </button>

            <button
              onClick={() => {
                onNavigate('partners');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded"
            >
              {lang === 'vi' ? 'Đối tác' : 'Partners'}
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded"
            >
              {lang === 'vi' ? 'Về NAVACO' : 'About NAVACO'}
            </button>

            <button
              onClick={() => {
                onNavigate('news');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded"
            >
              {lang === 'vi' ? 'Tin tức' : 'News'}
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded"
            >
              {lang === 'vi' ? 'Liên hệ' : 'Contact'}
            </button>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenProfile();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center bg-slate-100 text-slate-800 rounded font-medium text-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>{lang === 'vi' ? 'Tải Hồ Sơ Năng Lực (PDF)' : 'Download Profile (PDF)'}</span>
              </button>
              <button
                onClick={() => {
                  onOpenQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center bg-[#D6011E] text-white rounded font-condensed font-bold text-sm tracking-wider uppercase shadow"
              >
                {lang === 'vi' ? 'Yêu Cầu Báo Giá Kỹ Thuật' : 'Request Technical Quote'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
