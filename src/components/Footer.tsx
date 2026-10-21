import React from 'react';
import { NavacoLogo } from './NavacoLogo';
import { Language } from '../types';
import { NAVACO_PROFILE } from '../data/navacoData';
import { MapPin, Phone, Mail, Clock, ExternalLink, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
  onOpenProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  onOpenQuote,
  onOpenProfile
}) => {
  return (
    <footer id="contact" className="bg-[#2A2C30] text-slate-300 border-t border-slate-700 font-sans text-xs">
      {/* MAIN FOOTER INFO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* COLUMN 1 & 2: BRAND & SLOGAN */}
          <div className="lg:col-span-2 space-y-4">
            <NavacoLogo variant="horizontal" theme="dark" height={34} />
            
            <p className="font-condensed font-bold text-sm text-white uppercase tracking-wider text-slate-200">
              {NAVACO_PROFILE.sloganVi}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === 'vi'
                ? 'Đơn vị cung cấp dịch vụ kỹ thuật, bảo trì trọn gói (FCM), đại tu nâng cấp và giải pháp điện bờ cho hệ thống cảng biển và công nghiệp nặng tại Việt Nam & Cambodia.'
                : 'Turnkey technical services, Full Care Maintenance (FCM), crane retrofits, and shore power solutions for seaports and heavy industry in Vietnam & Cambodia.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-slate-800 hover:bg-[#D6011E] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-slate-800 hover:bg-[#D6011E] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 3: QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="font-condensed font-bold text-sm text-white uppercase tracking-wider border-b border-slate-700 pb-2">
              {lang === 'vi' ? 'Liên Kết Nhanh' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'vi' ? 'Trang chủ' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'vi' ? 'Giải pháp & Dịch vụ' : 'Solutions & Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('equipment')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'vi' ? 'Dòng thiết bị cảng' : 'Equipment Lines'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'vi' ? 'Dự án tiêu biểu' : 'Projects & Case Studies'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partners')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'vi' ? 'Hệ sinh thái đối tác' : 'Partner Ecosystem'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenProfile}
                  className="hover:text-[#D6011E] transition-colors cursor-pointer font-semibold text-slate-300"
                >
                  {lang === 'vi' ? 'Tải Hồ sơ năng lực (PDF)' : 'Download Profile (PDF)'}
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 & 5: WORKSHOP & OFFICES */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-condensed font-bold text-sm text-white uppercase tracking-wider border-b border-slate-700 pb-2">
              {lang === 'vi' ? 'Hệ Thống Văn Phòng & Xưởng Dịch Vụ' : 'Offices & Overhaul Workshop'}
            </h4>

            <div className="space-y-3 text-slate-400">
              {/* TRỤ SỞ CHÍNH */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6011E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">{lang === 'vi' ? 'Trụ sở chính (TP.HCM):' : 'Headquarters (HCMC):'}</strong>
                  <span>{NAVACO_PROFILE.addressHcm}</span>
                </div>
              </div>

              {/* XƯỞNG CÁI MÉP */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6011E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">{lang === 'vi' ? 'Xưởng dịch vụ chuyên dụng Cái Mép:' : 'Cai Mep Overhaul Workshop:'}</strong>
                  <span>{NAVACO_PROFILE.addressCaiMep}</span>
                </div>
              </div>

              {/* HẢI PHÒNG */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6011E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">{lang === 'vi' ? 'Chi nhánh Hải Phòng:' : 'Hai Phong Branch:'}</strong>
                  <span>{NAVACO_PROFILE.addressHaiPhong}</span>
                </div>
              </div>

              {/* CONTACT DIRECT */}
              <div className="pt-2 border-t border-slate-700/80 flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-[#D6011E]" />
                  <span className="font-mono font-bold text-white">{NAVACO_PROFILE.hotline}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-[#D6011E]" />
                  <span className="font-mono">{NAVACO_PROFILE.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="bg-[#1F2124] border-t border-slate-800 py-4 text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © 2026 NAVACO Technical Services. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>ISO 9001:2015</span>
            <span aria-hidden="true">·</span>
            <span>Maritime Safety Standards</span>
            <span aria-hidden="true">·</span>
            <span>navaco.vn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
