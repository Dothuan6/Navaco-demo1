import React from 'react';
import { Language } from '../types';
import { FileDown, Users, ArrowRight, Send } from 'lucide-react';

interface CallToActionBlockProps {
  lang: Language;
  onOpenQuote: () => void;
  onOpenProfile: () => void;
}

export const CallToActionBlock: React.FC<CallToActionBlockProps> = ({
  lang,
  onOpenQuote,
  onOpenProfile
}) => {
  return (
    <section className="bg-[#42454A] text-white py-16 border-t border-slate-700 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* BLOCK 8: HỒ SƠ NĂNG LỰC + TUYỂN DỤNG (2 small adjacent blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1: Tải hồ sơ năng lực */}
          <div className="p-6 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between hover:border-[#D6011E] transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D6011E] font-bold uppercase mb-2">
                <FileDown className="w-4 h-4" />
                <span>PROFILE v1.2</span>
              </div>
              <h3 className="text-xl font-bold font-condensed uppercase tracking-tight text-white">
                {lang === 'vi' ? 'Hồ Sơ Năng Lực Kỹ Thuật' : 'Technical Capability Profile'}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {lang === 'vi'
                  ? 'Bao gồm chi tiết danh mục chứng chỉ hãng, máy móc thiết bị xưởng Cái Mép và các hợp đồng tiêu biểu.'
                  : 'Detailed OEM certificates, Cai Mep workshop machinery, and signature port project contracts.'}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-700">
              <button
                onClick={onOpenProfile}
                className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-condensed font-bold text-xs tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{lang === 'vi' ? 'Tải Hồ Sơ Năng Lực (PDF)' : 'Download Profile (PDF)'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Box 2: Tuyển dụng kỹ sư */}
          <div className="p-6 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between hover:border-[#D6011E] transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase mb-2">
                <Users className="w-4 h-4" />
                <span>CAREERS AT NAVACO</span>
              </div>
              <h3 className="text-xl font-bold font-condensed uppercase tracking-tight text-white">
                {lang === 'vi' ? 'Gia Nhập Đội Ngũ Kỹ Sư NAVACO' : 'Join the NAVACO Engineering Team'}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {lang === 'vi'
                  ? 'Tuyển dụng kỹ sư điện tự động hóa, kỹ sư cơ khí cẩu cảng làm việc tại Cái Mép, Hải Phòng và Campuchia.'
                  : 'We are hiring drive automation engineers, mechanical crane specialists in Cai Mep, Hai Phong & Cambodia.'}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-700">
              <a
                href="mailto:hr@navaco.vn?subject=Ung%20tuyen%20Ky%20su%20NAVACO"
                className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-condensed font-bold text-xs tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-2 text-center"
              >
                <span>{lang === 'vi' ? 'Gửi CV Về hr@navaco.vn' : 'Apply via hr@navaco.vn'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* BLOCK 9: KÊU GỌI CUỐI TRANG (MAIN RFQ CTA) */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-700">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-condensed uppercase tracking-tight text-white text-balance">
            {lang === 'vi'
              ? 'Cần Hỗ Trợ Kỹ Thuật Cho Thiết Bị Của Bạn?'
              : 'Need Technical Support for Your Equipment?'}
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            {lang === 'vi'
              ? 'Đội ngũ kỹ sư trưởng NAVACO sẵn sàng khảo sát hiện trường trong vòng 24 giờ tại cụm cảng Cái Mép, Hải Phòng, TP.HCM và Campuchia.'
              : 'Our lead engineers are prepared for on-site emergency surveys within 24 hours across Cai Mep, Hai Phong, HCMC, and Cambodia.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-[#D6011E] hover:bg-[#B50019] text-white font-condensed font-bold text-base tracking-wider uppercase rounded-md shadow-lg transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Yêu Cầu Báo Giá Kỹ Thuật' : 'Request Technical Quotation'}</span>
            </button>

            <button
              onClick={onOpenProfile}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-condensed font-semibold text-base tracking-wider uppercase rounded-md backdrop-blur-sm transition-colors cursor-pointer"
            >
              {lang === 'vi' ? 'Tải Hồ Sơ Năng Lực' : 'Download Company Profile'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
