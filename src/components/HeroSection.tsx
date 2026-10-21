import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
  onOpenQuote: () => void;
  onOpenProfile: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenQuote,
  onOpenProfile,
  onExploreServices
}) => {
  return (
    <section id="home" className="relative w-full bg-[#2A2C30] text-white overflow-hidden">
      {/* BACKGROUND INDUSTRIAL ATMOSPHERE WITH PORT CRANE SILHOUETTES */}
      <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Port Quay Silhouette Graphics */}
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 w-full h-full object-cover opacity-35"
        >
          {/* Cranes on the horizon */}
          <path d="M1100 480L1160 220L1190 220L1250 480H1100Z" stroke="#ffffff" strokeWidth="2" />
          <line x1="1020" y1="260" x2="1380" y2="260" stroke="#ffffff" strokeWidth="3" />
          <line x1="1175" y1="220" x2="1175" y2="120" stroke="#ffffff" strokeWidth="2" />
          <line x1="1175" y1="120" x2="1380" y2="260" stroke="#D6011E" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="1175" y1="120" x2="1020" y2="260" stroke="#D6011E" strokeWidth="1.5" strokeDasharray="4 4" />

          <path d="M850 480L900 280L930 280L980 480H850Z" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
          <line x1="780" y1="310" x2="1080" y2="310" stroke="#ffffff" strokeWidth="2" opacity="0.6" />

          {/* Waterline */}
          <line x1="0" y1="520" x2="1440" y2="520" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
        </svg>

        {/* Dynamic deep red ambient radial glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D6011E]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl space-y-6">
          {/* SLOGAN KICKER (Unboxed text with brand red bullet per zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs md:text-sm tracking-widest font-bold uppercase text-slate-300">
            <span className="w-2.5 h-2.5 bg-[#D6011E] inline-block -skew-x-12" />
            <span>
              {lang === 'vi'
                ? 'KẾT NỐI NĂNG LỰC — NÂNG TẦM GIÁ TRỊ'
                : 'CONNECTING CAPABILITIES — ELEVATING VALUE'}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400 font-normal">
              {lang === 'vi' ? 'Việt Nam & Cambodia' : 'Vietnam & Cambodia Hubs'}
            </span>
          </div>

          {/* HERO HEADLINE */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-condensed tracking-tight uppercase leading-[1.05] text-white text-balance">
            {lang === 'vi' ? (
              <>
                Dịch Vụ Kỹ Thuật Cho <br />
                <span className="text-white">Cảng Biển & Công Nghiệp</span>
              </>
            ) : (
              <>
                Technical Services For <br />
                <span className="text-white">Ports & Heavy Industry</span>
              </>
            )}
          </h1>

          {/* VALUE PROPOSITION PARAGRAPH */}
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl font-normal">
            {lang === 'vi'
              ? 'Giải pháp toàn diện theo vòng đời thiết bị: Bảo trì trọn gói (FCM), Retrofit điện & biến tần Siemens, di dời lắp đặt cẩu cảng, phụ tùng chính hãng và trạm điện bờ Onshore Power Supply (OPS).'
              : 'Lifecycle port engineering solutions: Full Care Maintenance (FCM), electrical and Siemens drive retrofit, heavy crane relocation, genuine OEM parts, and green Onshore Power Supply (OPS).'}
          </p>

          {/* ACTIONS: 2 BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-[#D6011E] hover:bg-[#B50019] text-white font-condensed font-bold text-base tracking-wider uppercase rounded-md shadow-lg transition-all flex items-center gap-2 cursor-pointer group hover:translate-y-[-1px]"
            >
              <span>{lang === 'vi' ? 'Yêu Cầu Báo Giá Kỹ Thuật' : 'Request Technical Quote'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreServices}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-condensed font-semibold text-base tracking-wider uppercase rounded-md backdrop-blur-sm transition-all cursor-pointer"
            >
              {lang === 'vi' ? 'Xem Các Giải Pháp' : 'Explore Solutions'}
            </button>

            <button
              onClick={onOpenProfile}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-3.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#D6011E]" />
              <span className="underline underline-offset-4">
                {lang === 'vi' ? 'Tải Hồ sơ năng lực (Profile v1.2)' : 'Download Profile v1.2'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 4-KPI PROOF METRIC STRIP (Placed directly below hero) */}
      <div className="border-t border-slate-700/80 bg-[#1E2024]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* KPI 1 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-red-950/60 text-[#D6011E] border border-red-500/20 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-condensed font-extrabold text-2xl text-white tracking-tight">
                  99.2%
                </div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">
                  {lang === 'vi' ? 'Độ khả dụng thiết bị bốc dỡ' : 'Quay Equipment Availability'}
                </div>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-slate-800 text-slate-200 border border-slate-700 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-condensed font-extrabold text-2xl text-white tracking-tight">
                  5,000+ m²
                </div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">
                  {lang === 'vi' ? 'Xưởng dịch vụ chuyên dụng Cái Mép' : 'Dedicated Cai Mep Facility'}
                </div>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-slate-800 text-slate-200 border border-slate-700 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-condensed font-extrabold text-2xl text-white tracking-tight">
                  12 Phút
                </div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">
                  {lang === 'vi' ? 'Thời gian phản ứng sự cố khẩn cấp' : 'Average Rapid Response Time'}
                </div>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-slate-800 text-slate-200 border border-slate-700 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-condensed font-extrabold text-2xl text-white tracking-tight">
                  100%
                </div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">
                  {lang === 'vi' ? 'Kỹ thuật viên chứng chỉ chính hãng' : 'OEM Certified Lead Engineers'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
