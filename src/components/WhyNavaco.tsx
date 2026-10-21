import React from 'react';
import { Language } from '../types';
import { WHY_NAVACO_POINTS, NAVACO_PROFILE } from '../data/navacoData';
import { ShieldCheck, Warehouse, CheckCheck, Globe2 } from 'lucide-react';

interface WhyNavacoProps {
  lang: Language;
}

export const WhyNavaco: React.FC<WhyNavacoProps> = ({ lang }) => {
  const icons = [ShieldCheck, Warehouse, CheckCheck, Globe2];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#D6011E] uppercase tracking-widest font-sans mb-2">
            04. {lang === 'vi' ? 'NĂNG LỰC KIỂM CHỨNG ĐƯỢC' : 'VERIFIED ENGINEERING CAPABILITY'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-condensed text-slate-900 uppercase tracking-tight">
            {lang === 'vi' ? 'Vì Sao Chọn Kỹ Thuật NAVACO' : 'Why Port Operators Choose NAVACO'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'vi'
              ? 'Tập trung vào 4 trụ cột thực tế, đã được kiểm chứng qua các hợp đồng cảng biển lớn, không dùng số liệu thổi phồng chưa xác minh.'
              : 'Grounded in 4 verified operational pillars tested across major international terminals, avoiding unverified vanity claims.'}
          </p>
        </div>

        {/* 4 PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_NAVACO_POINTS.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.id}
                className="p-6 rounded-xl border border-slate-200 bg-[#F7F7F5] hover:border-[#D6011E] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-white text-[#D6011E] border border-slate-200 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="font-condensed font-bold text-lg text-slate-900 uppercase tracking-tight mb-2">
                    {lang === 'vi' ? item.titleVi : item.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {lang === 'vi' ? item.descVi : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BRAND IDENTITY VALUES SECTION (N-A-V-A-C-O from Brand Guidelines) */}
        <div className="bg-[#42454A] text-white rounded-xl p-6 md:p-10 border border-slate-700">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-[#D6011E] uppercase tracking-widest">
              TUYÊN NGÔN THƯƠNG HIỆU // BRAND MANIFESTO
            </span>
            <h3 className="text-xl md:text-3xl font-bold font-condensed uppercase tracking-tight mt-1">
              {NAVACO_PROFILE.sloganVi}
            </h3>
            <p className="text-xs text-slate-300 mt-2">
              {lang === 'vi'
                ? 'NAVACO là sự kết tinh của khát vọng, trách nhiệm và cam kết tạo nên giá trị bền vững.'
                : 'NAVACO embodies strategic navigation, accountability and unwavering commitment to engineering value.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NAVACO_PROFILE.values.map((val) => (
              <div
                key={`${val.key}-${val.term}`}
                className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 text-center hover:border-[#D6011E] transition-colors"
              >
                <div className="text-2xl font-extrabold font-condensed text-[#D6011E]">
                  {val.key}
                </div>
                <div className="font-bold text-xs text-white uppercase mt-1 tracking-wider">
                  {val.term}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 leading-tight">
                  {lang === 'vi' ? val.vi : val.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
