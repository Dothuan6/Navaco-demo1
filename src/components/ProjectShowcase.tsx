import React, { useState } from 'react';
import { ProjectItem, ServiceCategory, Language } from '../types';
import { PROJECTS_DATA } from '../data/navacoData';
import { filterProjects } from '../utils/rfq';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ArrowRight, MapPin, Calendar, CheckCircle2, X } from 'lucide-react';

interface ProjectShowcaseProps {
  lang: Language;
  onOpenQuote: () => void;
  selectedProject: ProjectItem | null;
  onSelectProject: (project: ProjectItem | null) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  lang,
  onOpenQuote,
  selectedProject,
  onSelectProject
}) => {
  const [countryFilter, setCountryFilter] = useState<'all' | 'vietnam' | 'cambodia'>('all');
  const [serviceFilter, setServiceFilter] = useState<'all' | ServiceCategory>('all');
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

  const filteredProjects = filterProjects(PROJECTS_DATA, '', countryFilter, serviceFilter);
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

  // Sihanoukville flagship for the Before / After showcase
  const sihanoukvilleProject = PROJECTS_DATA.find((p) => p.id === 'sihanoukville-rtg');

  return (
    <section id="projects" className="py-20 bg-[#F7F7F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#D6011E] uppercase tracking-widest font-sans mb-2">
              03. {lang === 'vi' ? 'DỰ ÁN HIỆN TRƯỜNG THỰC TẾ' : 'FIELD PROVEN CASE STUDIES'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-condensed text-slate-900 uppercase tracking-tight">
              {lang === 'vi' ? 'Dự Án Tiêu Biểu Việt Nam & Cambodia' : 'Featured Projects in Vietnam & Cambodia'}
            </h2>
            <p className="mt-2 text-slate-600 text-sm font-sans">
              {lang === 'vi'
                ? 'Minh chứng năng lực triển khai thực địa: nâng cấp cẩu bến bãi, bảo trì FCM tại các cảng nước sâu và sông quốc tế.'
                : 'Proven engineering execution: terminal crane retrofits, FCM maintenance at deep-water and Mekong river ports.'}
            </p>
          </div>

          {/* FILTER CONTROLS (Functional segmented buttons per frontend-design rules) */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Country buttons */}
            <div className="inline-flex rounded-lg bg-slate-200/80 p-1 text-xs font-medium">
              <button
                onClick={() => setCountryFilter('all')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  countryFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lang === 'vi' ? 'Tất cả quốc gia' : 'All Regions'}
              </button>
              <button
                onClick={() => setCountryFilter('vietnam')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  countryFilter === 'vietnam'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Việt Nam
              </button>
              <button
                onClick={() => setCountryFilter('cambodia')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  countryFilter === 'cambodia'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cambodia
              </button>
            </div>
          </div>
        </div>

        {/* FLAGSHIP BEFORE / AFTER INTERACTIVE SLIDER SPOTLIGHT */}
        {sihanoukvilleProject && (
          <div className="mb-14 bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-3">
              <div>
                <div className="text-xs font-sans font-bold text-[#D6011E] uppercase tracking-wider mb-1">
                  CASE STUDY TIÊU BIỂU // {sihanoukvilleProject.year}
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-condensed uppercase tracking-tight text-slate-900">
                  {lang === 'vi' ? sihanoukvilleProject.titleVi : sihanoukvilleProject.titleEn}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-[#D6011E]" />
                <span>{lang === 'vi' ? sihanoukvilleProject.locationVi : sihanoukvilleProject.locationEn}</span>
                <span>·</span>
                <span className="font-semibold text-slate-700">{sihanoukvilleProject.client}</span>
              </div>
            </div>

            {/* THE BEFORE-AFTER SLIDER */}
            <BeforeAfterSlider
              beforeTitle={sihanoukvilleProject.beforeLabelVi || 'Hiện trạng cũ'}
              afterTitle={sihanoukvilleProject.afterLabelVi || 'Sau khi nâng cấp'}
              equipmentName={lang === 'vi' ? sihanoukvilleProject.equipmentVi : sihanoukvilleProject.equipmentEn}
              projectName="PAS Sihanoukville Port RTG Retrofit"
            />

            {/* RESULTS ROW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
              {(lang === 'vi' ? sihanoukvilleProject.resultsVi : sihanoukvilleProject.resultsEn).map((res, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-sans">{res}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-[#D6011E] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-6">
                {/* Clean unboxed metadata with separators (no pill enclosures) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
                  <span className="text-[#D6011E] font-bold uppercase">{proj.country.toUpperCase()}</span>
                  <span aria-hidden="true">·</span>
                  <span>{lang === 'vi' ? proj.serviceNameVi : proj.serviceNameEn}</span>
                  <span aria-hidden="true">·</span>
                  <span>{proj.year}</span>
                </div>

                <h3 className="font-condensed font-bold text-lg text-slate-900 uppercase tracking-tight line-clamp-2 hover:text-[#D6011E] transition-colors">
                  {lang === 'vi' ? proj.titleVi : proj.titleEn}
                </h3>

                <div className="text-xs text-slate-500 mt-2 flex items-center gap-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{lang === 'vi' ? proj.locationVi : proj.locationEn}</span>
                </div>

                <p className="text-xs text-slate-600 mt-3 line-clamp-3 font-sans leading-relaxed">
                  {lang === 'vi' ? proj.challengeVi : proj.challengeEn}
                </p>
              </div>

              {/* CARD FOOTER */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  {proj.client}
                </span>

                <button
                  onClick={() => onSelectProject(proj)}
                  className="text-xs font-semibold text-slate-800 hover:text-[#D6011E] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{lang === 'vi' ? 'Xem case study' : 'View Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOGGLE ALL PROJECTS BUTTON */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-6 py-2.5 bg-white border border-slate-300 hover:border-[#D6011E] text-slate-800 hover:text-[#D6011E] font-condensed font-bold text-sm tracking-wider uppercase rounded-md shadow-xs transition-colors cursor-pointer"
          >
            {showAllProjects
              ? lang === 'vi' ? 'Thu Gọn Danh Sách' : 'Show Less'
              : lang === 'vi' ? 'Xem Tất Cả Dự Án' : 'View All Projects'}
          </button>
        </div>

        {/* PROJECT CASE STUDY DETAIL MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
            <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
              <div className="bg-[#2A2C30] text-white p-6 border-b-2 border-[#D6011E] flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-1">
                    <span>{selectedProject.country.toUpperCase()}</span>
                    <span>·</span>
                    <span>{selectedProject.year}</span>
                    <span>·</span>
                    <span>{selectedProject.client}</span>
                  </div>
                  <h3 className="text-xl font-bold font-condensed uppercase tracking-tight">
                    {lang === 'vi' ? selectedProject.titleVi : selectedProject.titleEn}
                  </h3>
                </div>
                <button
                  onClick={() => onSelectProject(null)}
                  aria-label="Đóng"
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5 text-sm flex-1 text-slate-700">
                {/* Fast Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <div>
                    <span className="text-slate-400 block font-mono">KHÁCH HÀNG:</span>
                    <strong className="text-slate-900">{selectedProject.client}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono">ĐỊA ĐIỂM:</span>
                    <strong className="text-slate-900">
                      {lang === 'vi' ? selectedProject.locationVi : selectedProject.locationEn}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono">THIẾT BỊ:</span>
                    <strong className="text-slate-900">
                      {lang === 'vi' ? selectedProject.equipmentVi : selectedProject.equipmentEn}
                    </strong>
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 font-mono mb-1">
                    {lang === 'vi' ? 'Thách thức kỹ thuật ban đầu:' : 'Initial Engineering Challenge:'}
                  </h4>
                  <p className="text-slate-700 text-xs leading-relaxed bg-amber-50/50 p-3 rounded border border-amber-200/60">
                    {lang === 'vi' ? selectedProject.challengeVi : selectedProject.challengeEn}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 font-mono mb-1">
                    {lang === 'vi' ? 'Giải pháp NAVACO triển khai:' : 'NAVACO Delivery Solution:'}
                  </h4>
                  <p className="text-slate-700 text-xs leading-relaxed bg-emerald-50/50 p-3 rounded border border-emerald-200/60">
                    {lang === 'vi' ? selectedProject.solutionVi : selectedProject.solutionEn}
                  </p>
                </div>

                {/* Quantified Results */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 font-mono mb-2">
                    {lang === 'vi' ? 'Kết quả đo lường thực tế:' : 'Measured Outcomes & Deliverables:'}
                  </h4>
                  <div className="space-y-1.5">
                    {(lang === 'vi' ? selectedProject.resultsVi : selectedProject.resultsEn).map((res, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-800">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-medium rounded-lg"
                >
                  {lang === 'vi' ? 'Đóng' : 'Close'}
                </button>

                <button
                  onClick={() => {
                    onSelectProject(null);
                    onOpenQuote();
                  }}
                  className="px-6 py-2 bg-[#D6011E] hover:bg-[#B50019] text-white font-condensed font-bold text-sm tracking-wider uppercase rounded-lg shadow"
                >
                  {lang === 'vi' ? 'Tư Vấn Giải Pháp Tương Tự' : 'Request Similar Solution'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
