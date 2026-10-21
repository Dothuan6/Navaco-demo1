import React from 'react';
import { SubService, EquipmentItem, Language } from '../types';
import { SERVICES_DATA, EQUIPMENT_DATA } from '../data/navacoData';
import { Wrench, Zap, Activity, ChevronRight, Truck } from 'lucide-react';
import { CraneIllustration } from './CraneIllustrations';

interface MegaMenuProps {
  type: 'services' | 'equipment';
  lang: Language;
  onSelectService: (service: SubService) => void;
  onSelectEquipment: (equipment: EquipmentItem) => void;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  type,
  lang,
  onSelectService,
  onSelectEquipment,
  onClose
}) => {
  if (type === 'services') {
    const operations = SERVICES_DATA.filter((s) => s.category === 'operation');
    const retrofits = SERVICES_DATA.filter((s) => s.category === 'retrofit');
    const infra = SERVICES_DATA.filter((s) => s.category === 'infrastructure');

    return (
      <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 py-6 px-4 md:px-8 animate-in fade-in slide-in-from-top-2 duration-150">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* VẬN HÀNH */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-[#D6011E]">
              <Wrench className="w-4 h-4 text-[#D6011E]" />
              <h4 className="font-condensed font-bold text-slate-900 tracking-wider text-base uppercase">
                {lang === 'vi' ? '1. Vận Hành & Khai Thác' : '1. Operation & Fleet Services'}
              </h4>
            </div>
            <p className="text-xs text-slate-500 font-sans">
              {lang === 'vi'
                ? 'Duy trì năng suất bốc xếp, hạn chế tối đa dừng thiết bị tại bến.'
                : 'Maximizing quay availability and eliminating unscheduled downtime.'}
            </p>
            <div className="space-y-2 pt-1">
              {operations.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectService(item);
                    onClose();
                  }}
                  className="w-full text-left p-2 rounded hover:bg-slate-50 group transition-colors block"
                >
                  <div className="font-semibold text-xs text-slate-800 group-hover:text-[#D6011E] transition-colors flex items-center justify-between">
                    <span>{lang === 'vi' ? item.titleVi : item.titleEn}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D6011E]" />
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {lang === 'vi' ? item.solutionVi : item.solutionEn}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* NÂNG CẤP */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-[#D6011E]">
              <Zap className="w-4 h-4 text-[#D6011E]" />
              <h4 className="font-condensed font-bold text-slate-900 tracking-wider text-base uppercase">
                {lang === 'vi' ? '2. Nâng Cấp & Hiện Đại Hóa' : '2. Retrofit & Modernization'}
              </h4>
            </div>
            <p className="text-xs text-slate-500 font-sans">
              {lang === 'vi'
                ? 'Kéo dài tuổi thọ cẩu thêm 10-15 năm, tối ưu chi phí đầu tư Capex.'
                : 'Extending crane service life by 10-15 years at a fraction of new capex.'}
            </p>
            <div className="space-y-2 pt-1">
              {retrofits.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectService(item);
                    onClose();
                  }}
                  className="w-full text-left p-2 rounded hover:bg-slate-50 group transition-colors block"
                >
                  <div className="font-semibold text-xs text-slate-800 group-hover:text-[#D6011E] transition-colors flex items-center justify-between">
                    <span>{lang === 'vi' ? item.titleVi : item.titleEn}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D6011E]" />
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {lang === 'vi' ? item.solutionVi : item.solutionEn}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* HẠ TẦNG & NĂNG LƯỢNG */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-[#D6011E]">
              <Activity className="w-4 h-4 text-[#D6011E]" />
              <h4 className="font-condensed font-bold text-slate-900 tracking-wider text-base uppercase">
                {lang === 'vi' ? '3. Hạ Tầng & Năng Lượng' : '3. Port Grid & Shore Power'}
              </h4>
            </div>
            <p className="text-xs text-slate-500 font-sans">
              {lang === 'vi'
                ? 'Trạm biến áp, điện trung thế và giải pháp điện bờ Onshore Power Supply (OPS).'
                : 'Quayside substations, medium voltage infrastructure and green OPS shore power.'}
            </p>
            <div className="space-y-2 pt-1">
              {infra.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectService(item);
                    onClose();
                  }}
                  className="w-full text-left p-2 rounded hover:bg-slate-50 group transition-colors block"
                >
                  <div className="font-semibold text-xs text-slate-800 group-hover:text-[#D6011E] transition-colors flex items-center justify-between">
                    <span>{lang === 'vi' ? item.titleVi : item.titleEn}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D6011E]" />
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {lang === 'vi' ? item.solutionVi : item.solutionEn}
                  </div>
                </button>
              ))}
            </div>

            {/* Quick highlight banner */}
            <div className="mt-4 p-3 bg-slate-100 rounded border border-slate-200 text-xs">
              <span className="font-bold text-[#D6011E]">Hợp tác công nghệ cùng SIEMENS:</span>
              <p className="text-[11px] text-slate-600 mt-1">
                {lang === 'vi'
                  ? 'Giải pháp điện bờ OPS và hệ thống truyền động Sinamics cho cẩu cảng biển.'
                  : 'Onshore Power Supply & Sinamics drives engineered for maritime terminals.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // EQUIPMENT MEGA MENU (MAGIRUS STYLE WITH THUMBNAIL/CARD GRID)
  return (
    <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 py-6 px-4 md:px-8 animate-in fade-in slide-in-from-top-2 duration-150">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
          <div>
            <h4 className="font-condensed font-bold text-slate-900 tracking-wider text-base uppercase">
              {lang === 'vi' ? 'Dòng Thiết Bị Cảng Phục Vụ' : 'Port Equipment We Service'}
            </h4>
            <p className="text-xs text-slate-500 font-sans">
              {lang === 'vi'
                ? 'NAVACO cung cấp dịch vụ bảo trì, nâng cấp, phụ tùng và cho thuê (không bán thiết bị mới).'
                : 'Specialized maintenance, retrofit, spare parts and rental (no equipment sales).'}
            </p>
          </div>
          <div className="text-xs text-slate-400 font-sans hidden sm:block">
            6 Dòng thiết bị chủ lực theo tiêu chuẩn Magirus
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {EQUIPMENT_DATA.map((eq) => (
            <button
              key={eq.id}
              onClick={() => {
                onSelectEquipment(eq);
                onClose();
              }}
              className="text-left p-3 rounded-lg border border-slate-200 hover:border-[#D6011E] hover:shadow-md transition-all group bg-white flex flex-col justify-between"
            >
              <div className="h-20 w-full mb-2 overflow-hidden flex items-center justify-center bg-slate-50 rounded">
                <CraneIllustration type={eq.code as any} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="inline-block text-[10px] font-mono font-bold text-[#D6011E] bg-red-50 px-1.5 py-0.5 rounded mb-1">
                  {eq.code}
                </span>
                <h5 className="font-bold text-xs text-slate-900 group-hover:text-[#D6011E] line-clamp-2 leading-tight">
                  {lang === 'vi' ? eq.nameVi : eq.nameEn}
                </h5>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                  {eq.supportedBrands.slice(0, 2).join(', ')}...
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
