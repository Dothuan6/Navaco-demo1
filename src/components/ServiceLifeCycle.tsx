import React, { useState } from 'react';
import { SubService, ServiceCategory, Language } from '../types';
import { SERVICES_DATA } from '../data/navacoData';
import { Wrench, Zap, Activity, ArrowRight, CheckCircle2, AlertCircle, X, ChevronRight, Send } from 'lucide-react';

interface ServiceLifeCycleProps {
  lang: Language;
  onOpenQuoteWithNeed: (need: string) => void;
  selectedService: SubService | null;
  onSelectService: (service: SubService | null) => void;
}

export const ServiceLifeCycle: React.FC<ServiceLifeCycleProps> = ({
  lang,
  onOpenQuoteWithNeed,
  selectedService,
  onSelectService
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('operation');

  const categories = [
    {
      id: 'operation' as ServiceCategory,
      titleVi: 'Vận Hành & Khai Thác',
      titleEn: 'Operations & Maintenance',
      subtitleVi: 'Bảo trì trọn gói FCM, phụ tùng chính hãng, cho thuê thiết bị và cung ứng nhân lực vận hành cảng.',
      subtitleEn: 'Full Care Maintenance (FCM), genuine spare parts, fleet equipment rental, and certified operator staffing.',
      icon: Wrench,
      count: '4 Dịch vụ'
    },
    {
      id: 'retrofit' as ServiceCategory,
      titleVi: 'Nâng Cấp & Hiện Đại Hóa',
      titleEn: 'Retrofit & Modernization',
      subtitleVi: 'Retrofit biến tần Siemens, đại tu phục hồi cơ khí, nâng hạ di dời cẩu cảng và đào tạo buồng lái mô phỏng Simulator.',
      subtitleEn: 'Siemens AC drive retrofit, heavy mechanical overhaul, riverine crane relocation, and simulator training.',
      icon: Zap,
      count: '4 Dịch vụ'
    },
    {
      id: 'infrastructure' as ServiceCategory,
      titleVi: 'Hạ Tầng & Năng Lượng',
      titleEn: 'Infrastructure & Port Energy',
      subtitleVi: 'Hệ thống điện trung và hạ thế, trạm biến áp bến cảng, và giải pháp cấp điện bờ Onshore Power Supply (OPS).',
      subtitleEn: 'Medium/low voltage quayside grids, port package substations, and green Onshore Power Supply (OPS).',
      icon: Activity,
      count: '2 Dịch vụ'
    }
  ];

  const currentServices = SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#F7F7F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#D6011E] uppercase tracking-widest font-sans mb-2">
            01. {lang === 'vi' ? 'VÒNG ĐỜI VẬN HÀNH THIẾT BỊ' : 'EQUIPMENT OPERATIONAL LIFECYCLE'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-condensed text-slate-900 uppercase tracking-tight">
            {lang === 'vi' ? 'Giải Pháp Kỹ Thuật Toàn Diện Cảng Biển' : 'End-to-End Port Engineering Solutions'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            {lang === 'vi'
              ? 'Mô hình phân loại theo vòng đời khai thác của Kalmar: đồng hành cùng khách hàng từ khâu vận hành hàng ngày, nâng cấp gia tăng tuổi thọ, đến hạ tầng năng lượng xanh.'
              : 'Structured along the operational lifecycle: supporting terminals from daily operations and fleet maintenance, through life-extension retrofits, to green shore power.'}
          </p>
        </div>

        {/* 3 LIFECYCLE TABS / PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-6 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-[#D6011E] shadow-md ring-1 ring-[#D6011E]'
                    : 'bg-white/80 border-slate-200 hover:border-slate-400 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg ${
                        isActive ? 'bg-[#D6011E] text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-sans text-slate-500 font-bold">{cat.count}</span>
                  </div>

                  <h3 className="text-xl font-bold font-condensed uppercase tracking-tight text-slate-900 mb-2">
                    {lang === 'vi' ? cat.titleVi : cat.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {lang === 'vi' ? cat.subtitleVi : cat.subtitleEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold ${
                      isActive ? 'text-[#D6011E]' : 'text-slate-500'
                    }`}
                  >
                    {isActive
                      ? lang === 'vi' ? 'Đang xem danh mục' : 'Active Category'
                      : lang === 'vi' ? 'Xem các dịch vụ con' : 'Explore Sub-Services'}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#D6011E] translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* SUB-SERVICES GRID FOR SELECTED CATEGORY */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
            <div>
              <h3 className="font-condensed font-bold text-lg text-slate-900 uppercase tracking-wide">
                {lang === 'vi'
                  ? `Các Hạng Mục Kỹ Thuật: ${categories.find((c) => c.id === activeCategory)?.titleVi}`
                  : `Technical Services: ${categories.find((c) => c.id === activeCategory)?.titleEn}`}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'vi'
                  ? 'Bấm vào từng dịch vụ để xem chi tiết vấn đề khách hàng, giải pháp NAVACO và quy trình thực hiện.'
                  : 'Click on any service to inspect client challenges, NAVACO solutions, and delivery workflow.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentServices.map((service) => (
              <div
                key={service.id}
                className="p-5 rounded-lg border border-slate-200 hover:border-[#D6011E] transition-all bg-slate-50/50 hover:bg-white hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-bold text-base text-slate-900">
                      {lang === 'vi' ? service.titleVi : service.titleEn}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0 uppercase">
                      ID: {service.id}
                    </span>
                  </div>

                  {/* Problem & Solution snippet */}
                  <div className="space-y-2 text-xs text-slate-600 mb-4 font-sans">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <p className="line-clamp-2">
                        <strong className="text-slate-700">{lang === 'vi' ? 'Vấn đề:' : 'Challenge:'}</strong>{' '}
                        {lang === 'vi' ? service.problemVi : service.problemEn}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="line-clamp-2">
                        <strong className="text-slate-700">{lang === 'vi' ? 'NAVACO làm gì:' : 'Solution:'}</strong>{' '}
                        {lang === 'vi' ? service.solutionVi : service.solutionEn}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-slate-800 hover:text-[#D6011E] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{lang === 'vi' ? 'Xem chi tiết quy trình' : 'View Workflow'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteWithNeed(lang === 'vi' ? service.titleVi : service.titleEn)}
                    className="px-3 py-1.5 bg-[#D6011E] hover:bg-[#B50019] text-white text-xs font-condensed font-bold uppercase rounded tracking-wider cursor-pointer transition-colors"
                  >
                    {lang === 'vi' ? 'Báo Giá' : 'RFQ'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DETAILED SERVICE MODAL / DRAWER (7-BLOCK FORMAT AS REQUIRED IN BRIEF 4c) */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col font-sans">
              {/* BLOCK 1: HERO */}
              <div className="bg-[#2A2C30] text-white p-6 border-b-2 border-[#D6011E] flex items-start justify-between">
                <div>
                  <div className="text-xs font-mono text-red-400 uppercase tracking-widest mb-1">
                    {lang === 'vi' ? 'QUY CHUẨN KỸ THUẬT DỊCH VỤ' : 'TECHNICAL SERVICE SPECIFICATION'}
                  </div>
                  <h3 className="text-2xl font-bold font-condensed tracking-tight uppercase">
                    {lang === 'vi' ? selectedService.titleVi : selectedService.titleEn}
                  </h3>
                  <div className="text-xs text-slate-300 mt-1">
                    {selectedService.partnerOrProjectsVi}
                  </div>
                </div>
                <button
                  onClick={() => onSelectService(null)}
                  aria-label="Đóng"
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* BLOCKS 2 - 6: PROBLEM, SOLUTION, PROCESS, PARTNERS, PROJECTS */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 flex-1">
                {/* BLOCK 2: VẤN ĐỀ KHÁCH HÀNG GẶP */}
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-lg">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>{lang === 'vi' ? 'Vấn đề khách hàng gặp phải' : 'Client Challenge & Risks'}</span>
                  </div>
                  <p className="text-amber-950 leading-relaxed text-sm">
                    {lang === 'vi' ? selectedService.problemVi : selectedService.problemEn}
                  </p>
                </div>

                {/* BLOCK 3: NAVACO LÀM GÌ */}
                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-lg">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'vi' ? 'Giải pháp NAVACO triển khai' : 'NAVACO Engineering Solution'}</span>
                  </div>
                  <p className="text-emerald-950 leading-relaxed text-sm">
                    {lang === 'vi' ? selectedService.solutionVi : selectedService.solutionEn}
                  </p>
                </div>

                {/* BLOCK 4: QUY TRÌNH KỸ THUẬT (4 BƯỚC) */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-3 font-mono">
                    {lang === 'vi' ? 'Quy trình thực hiện chuẩn hóa (Standard Workflow):' : 'Standard Delivery Workflow:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(lang === 'vi' ? selectedService.processVi : selectedService.processEn).map((step, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#42454A] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-xs text-slate-800 leading-normal">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BLOCK 5 & 6: DỰ ÁN & HÃNG LIÊN QUAN */}
                <div className="p-3 bg-slate-100 rounded-lg text-xs text-slate-600 flex items-center justify-between">
                  <div>
                    <strong>{lang === 'vi' ? 'Dự án / Đối tác minh họa:' : 'Reference Projects / Partners:'}</strong>{' '}
                    <span>{lang === 'vi' ? selectedService.partnerOrProjectsVi : selectedService.partnerOrProjectsEn}</span>
                  </div>
                </div>
              </div>

              {/* BLOCK 7: FORM YÊU CẦU BÁO GIÁ CTA */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-medium rounded-lg transition-colors"
                >
                  {lang === 'vi' ? 'Đóng' : 'Close'}
                </button>

                <button
                  onClick={() => {
                    const serviceTitle = lang === 'vi' ? selectedService.titleVi : selectedService.titleEn;
                    onSelectService(null);
                    onOpenQuoteWithNeed(serviceTitle);
                  }}
                  className="px-6 py-2.5 bg-[#D6011E] hover:bg-[#B50019] text-white font-condensed font-bold text-sm tracking-wider uppercase rounded-lg shadow transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'vi' ? 'Yêu Cầu Báo Giá Dịch Vụ Này' : 'Request Quote for this Service'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
