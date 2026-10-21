import React, { useState } from 'react';
import { Language } from '../types';
import { PARTNERS_DATA } from '../data/navacoData';
import { ShieldCheck, ChevronRight } from 'lucide-react';

interface PartnersEcosystemProps {
  lang: Language;
}

export const PartnersEcosystem: React.FC<PartnersEcosystemProps> = ({ lang }) => {
  const [activePartner, setActivePartner] = useState<string | null>(null);

  return (
    <section id="partners" className="py-20 bg-[#F7F7F5] border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#D6011E] uppercase tracking-widest font-sans mb-2">
            05. {lang === 'vi' ? 'HỆ SINH THÁI ĐỐI TÁC CHÍNH HÃNG' : 'PORT ECOSYSTEM PARTNERS'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-condensed text-slate-900 uppercase tracking-tight">
            {lang === 'vi' ? 'Đối Tác Kỹ Thuật & Cung Ứng Toàn Cầu' : 'Global Technical & OEM Partners'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm font-sans leading-relaxed">
            {lang === 'vi'
              ? 'Chỉ liên kết và cung cấp dịch vụ từ các thương hiệu thiết bị cảng biển đã hợp tác chính thức, đảm bảo đầy đủ chứng nhận CO/CQ và tiêu chuẩn kỹ thuật nhà sản xuất.'
              : 'Direct authorized relationships with world-class port OEMs, guaranteeing authentic CO/CQ certifications and factory engineering protocols.'}
          </p>
        </div>

        {/* LOGO GRID WITH HOVER TO COLOR */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {PARTNERS_DATA.map((partner) => {
            const isHovered = activePartner === partner.name;

            return (
              <div
                key={partner.name}
                onMouseEnter={() => setActivePartner(partner.name)}
                onClick={() => setActivePartner(partner.name)}
                className={`p-5 rounded-xl border bg-white transition-all cursor-pointer flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#D6011E] shadow-md ring-1 ring-[#D6011E]'
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-lg md:text-xl font-extrabold font-condensed uppercase tracking-wider transition-colors ${
                        isHovered ? 'text-[#D6011E]' : 'text-slate-500'
                      }`}
                    >
                      {partner.name}
                    </span>
                    <ShieldCheck
                      className={`w-4 h-4 transition-colors ${
                        isHovered ? 'text-[#D6011E]' : 'text-slate-300'
                      }`}
                    />
                  </div>

                  <div className="text-[11px] font-semibold text-slate-700">
                    {lang === 'vi' ? partner.categoryVi : partner.categoryEn}
                  </div>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {lang === 'vi' ? partner.descriptionVi : partner.descriptionEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#D6011E]">
                    {lang === 'vi' ? partner.establishedRoleVi : partner.establishedRoleEn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
