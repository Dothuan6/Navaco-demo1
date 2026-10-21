import React, { useState } from 'react';
import { EquipmentItem, Language } from '../types';
import { EQUIPMENT_DATA } from '../data/navacoData';
import { CraneIllustration } from './CraneIllustrations';
import { ShieldAlert, ArrowRight, Wrench, X, CheckCircle2 } from 'lucide-react';

interface EquipmentSectionProps {
  lang: Language;
  onOpenQuoteWithEquipment: (eqName: string) => void;
  selectedEquipment: EquipmentItem | null;
  onSelectEquipment: (equipment: EquipmentItem | null) => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  lang,
  onOpenQuoteWithEquipment,
  selectedEquipment,
  onSelectEquipment
}) => {
  return (
    <section id="equipment" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#D6011E] uppercase tracking-widest font-sans mb-2">
              02. {lang === 'vi' ? 'DÒNG THIẾT BỊ CHỦ LỰC' : 'PORT CRANE & FLEET ECOSYSTEM'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-condensed text-slate-900 uppercase tracking-tight">
              {lang === 'vi' ? 'Chúng Tôi Phục Vụ Thiết Bị Nào' : 'Port Equipment We Service'}
            </h2>
            <p className="mt-2 text-slate-600 text-sm font-sans">
              {lang === 'vi'
                ? 'Thiết kế thẻ theo phong cách Magirus: hình ảnh kỹ thuật, tên phân cấp và năng lực chuyên sâu của NAVACO cho từng dòng thiết bị.'
                : 'Magirus-inspired equipment showcase: technical blueprints, taxonomy, and NAVACO core service scope per equipment line.'}
            </p>
          </div>

          {/* POLICY BADGE: NO SALE / NO PRICES */}
          <div className="inline-flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 self-start md:self-auto">
            <ShieldAlert className="w-4 h-4 text-[#D6011E] shrink-0" />
            <span>
              {lang === 'vi'
                ? 'Lưu ý: NAVACO không bán thiết bị mới & không hiển thị giá máy.'
                : 'Notice: Technical service provider only (no new equipment sales).'}
            </span>
          </div>
        </div>

        {/* 6-EQUIPMENT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPMENT_DATA.map((eq) => (
            <div
              key={eq.id}
              className="bg-[#F7F7F5] rounded-xl border border-slate-200 overflow-hidden hover:border-[#D6011E] hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                {/* ILLUSTRATION CONTAINER */}
                <div className="h-52 bg-gradient-to-b from-slate-100 to-white p-4 flex items-center justify-center border-b border-slate-200/80 relative">
                  <span className="absolute top-3 left-3 text-xs font-mono font-bold text-white bg-[#42454A] px-2 py-0.5 rounded">
                    {eq.code}
                  </span>
                  <CraneIllustration type={eq.code as any} className="w-full h-full object-contain" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="font-condensed font-bold text-lg text-slate-900 uppercase tracking-tight group-hover:text-[#D6011E] transition-colors">
                    {lang === 'vi' ? eq.nameVi : eq.nameEn}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 font-sans leading-relaxed">
                    {lang === 'vi' ? eq.descriptionVi : eq.descriptionEn}
                  </p>

                  {/* NAVACO CAPABILITIES BULLETS */}
                  <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                      {lang === 'vi' ? 'NAVACO làm được gì:' : 'NAVACO Service Scope:'}
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1 font-sans">
                      {(lang === 'vi' ? eq.capabilitiesVi : eq.capabilitiesEn).slice(0, 2).map((cap, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#D6011E] font-bold">›</span>
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="p-4 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectEquipment(eq)}
                  className="text-xs font-semibold text-slate-800 hover:text-[#D6011E] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{lang === 'vi' ? 'Xem thông số kỹ thuật' : 'View Specifications'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenQuoteWithEquipment(lang === 'vi' ? eq.nameVi : eq.nameEn)}
                  className="px-3 py-1.5 bg-[#42454A] hover:bg-[#D6011E] text-white font-condensed font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  {lang === 'vi' ? 'Báo Giá' : 'RFQ'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILED EQUIPMENT MODAL */}
        {selectedEquipment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
            <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
              <div className="bg-[#42454A] text-white p-5 border-b-2 border-[#D6011E] flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-red-400 font-bold uppercase">
                    EQUIPMENT PROFILE // {selectedEquipment.code}
                  </span>
                  <h3 className="text-xl font-bold font-condensed uppercase tracking-tight">
                    {lang === 'vi' ? selectedEquipment.nameVi : selectedEquipment.nameEn}
                  </h3>
                </div>
                <button
                  onClick={() => onSelectEquipment(null)}
                  aria-label="Đóng"
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
                {/* Illustration */}
                <div className="h-44 bg-slate-50 border border-slate-200 rounded-lg p-2 flex items-center justify-center">
                  <CraneIllustration type={selectedEquipment.code as any} className="w-full h-full object-contain" />
                </div>

                {/* Specs */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 font-mono mb-2">
                    {lang === 'vi' ? 'Thông số kỹ thuật định danh:' : 'Typical Technical Specs:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedEquipment.specs.map((spec, i) => (
                      <div key={i} className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs">
                        <div className="text-slate-400 text-[10px] uppercase">
                          {lang === 'vi' ? spec.labelVi : spec.labelEn}
                        </div>
                        <div className="font-bold text-slate-900 mt-0.5">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Capabilities */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 font-mono mb-2">
                    {lang === 'vi' ? 'Phạm vi năng lực kỹ thuật NAVACO cung cấp:' : 'NAVACO Full Service Capabilities:'}
                  </h4>
                  <div className="space-y-2">
                    {(lang === 'vi' ? selectedEquipment.capabilitiesVi : selectedEquipment.capabilitiesEn).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="p-3 bg-slate-100 rounded text-xs text-slate-600">
                  <strong>{lang === 'vi' ? 'Các hãng thiết bị đã từng xử lý:' : 'Compatible Brands Serviced:'}</strong>{' '}
                  <span>{selectedEquipment.supportedBrands.join(', ')}</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onSelectEquipment(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-medium rounded-lg"
                >
                  {lang === 'vi' ? 'Đóng' : 'Close'}
                </button>

                <button
                  onClick={() => {
                    const eqName = lang === 'vi' ? selectedEquipment.nameVi : selectedEquipment.nameEn;
                    onSelectEquipment(null);
                    onOpenQuoteWithEquipment(eqName);
                  }}
                  className="px-6 py-2 bg-[#D6011E] hover:bg-[#B50019] text-white font-condensed font-bold text-sm tracking-wider uppercase rounded-lg shadow"
                >
                  {lang === 'vi' ? 'Yêu Cầu Báo Giá Thiết Bị Này' : 'Request Quote for this Crane'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
