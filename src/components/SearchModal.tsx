import React, { useState, useMemo } from 'react';
import { X, Search, ChevronRight, Wrench, Truck, Cpu, FileText } from 'lucide-react';
import { Language, SubService, EquipmentItem, ProjectItem } from '../types';
import { SERVICES_DATA, EQUIPMENT_DATA, PROJECTS_DATA } from '../data/navacoData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectService: (service: SubService) => void;
  onSelectEquipment: (equipment: EquipmentItem) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectService,
  onSelectEquipment,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { services: [], equipment: [], projects: [] };

    const services = SERVICES_DATA.filter((s) =>
      s.titleVi.toLowerCase().includes(q) ||
      s.titleEn.toLowerCase().includes(q) ||
      s.solutionVi.toLowerCase().includes(q) ||
      s.problemVi.toLowerCase().includes(q)
    );

    const equipment = EQUIPMENT_DATA.filter((e) =>
      e.nameVi.toLowerCase().includes(q) ||
      e.nameEn.toLowerCase().includes(q) ||
      e.code.toLowerCase().includes(q) ||
      e.supportedBrands.some((b) => b.toLowerCase().includes(q))
    );

    const projects = PROJECTS_DATA.filter((p) =>
      p.titleVi.toLowerCase().includes(q) ||
      p.titleEn.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q) ||
      p.locationVi.toLowerCase().includes(q)
    );

    return { services, equipment, projects };
  }, [query]);

  if (!isOpen) return null;

  const totalResults = results.services.length + results.equipment.length + results.projects.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* INPUT HEADER */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'vi'
                ? 'Tìm kiếm dịch vụ, thiết bị (STS, RTG, Reach Stacker), dự án (Sihanoukville, CMIT)...'
                : 'Search services, cranes (STS, RTG, Reach Stacker), projects (Sihanoukville, CMIT)...'
            }
            className="w-full text-base bg-transparent border-none focus:outline-none text-slate-800 placeholder-slate-400 font-sans"
          />
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* RESULTS CONTAINER */}
        <div className="p-4 overflow-y-auto space-y-4 text-sm font-sans flex-1">
          {query.trim() === '' ? (
            <div className="py-6 text-center text-slate-400 space-y-2">
              <p>{lang === 'vi' ? 'Nhập từ khóa kỹ thuật để tra cứu nhanh.' : 'Type a technical keyword to search.'}</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs">
                {['Bảo trì FCM', 'Cẩu STS', 'RTG Retrofit', 'Điện bờ OPS', 'Kalmar', 'Siemens'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-slate-500">
              {lang === 'vi'
                ? `Không tìm thấy kết quả phù hợp cho "${query}".`
                : `No results found for "${query}".`}
            </div>
          ) : (
            <div className="space-y-4">
              {/* SERVICES */}
              {results.services.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#D6011E]" />
                    <span>{lang === 'vi' ? 'Dịch vụ & Giải pháp' : 'Services & Solutions'}</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.services.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSelectService(item);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-[#D6011E] transition-colors">
                            {lang === 'vi' ? item.titleVi : item.titleEn}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {lang === 'vi' ? item.solutionVi : item.solutionEn}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#D6011E] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* EQUIPMENT */}
              {results.equipment.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#D6011E]" />
                    <span>{lang === 'vi' ? 'Dòng thiết bị cảng' : 'Port Equipment Lines'}</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.equipment.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSelectEquipment(item);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-[#D6011E] transition-colors">
                            {lang === 'vi' ? item.nameVi : item.nameEn}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            Hãng: {item.supportedBrands.join(', ')}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#D6011E] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* PROJECTS */}
              {results.projects.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#D6011E]" />
                    <span>{lang === 'vi' ? 'Dự án thực tế' : 'Case Studies & Projects'}</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.projects.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSelectProject(item);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-[#D6011E] transition-colors">
                            {lang === 'vi' ? item.titleVi : item.titleEn}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {item.client} · {lang === 'vi' ? item.locationVi : item.locationEn}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#D6011E] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
