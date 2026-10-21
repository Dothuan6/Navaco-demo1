import React from 'react';
import { Language } from '../types';
import { NEWS_DATA } from '../data/navacoData';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';

interface NewsSectionProps {
  lang: Language;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ lang }) => {
  return (
    <section id="news" className="py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#D6011E] uppercase tracking-widest font-sans mb-2">
              06. {lang === 'vi' ? 'TIN TỨC & KIẾN THỨC KỸ THUẬT' : 'TECHNICAL INSIGHTS & NEWS'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-condensed text-slate-900 uppercase tracking-tight">
              {lang === 'vi' ? 'Cập Nhật Dự Án & Chuyên Đề Cảng' : 'Field Updates & Engineering Articles'}
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              {lang === 'vi'
                ? 'Thông tin cập nhật từ chuỗi bài hiện trường Sihanoukville và cẩm nang kỹ thuật vận hành thiết bị cảng.'
                : 'Project field updates, crane modernization reports, and marine technical maintenance guides.'}
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            {lang === 'vi' ? '3 Chuyên mục: Dự án · Kỹ thuật · Sự kiện' : 'Topics: Projects · Technical · Events'}
          </div>
        </div>

        {/* 3 ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-[#F7F7F5] rounded-xl border border-slate-200 overflow-hidden hover:border-[#D6011E] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-6">
                {/* Meta without pills */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-3">
                  <span className="text-[#D6011E] font-bold">
                    {lang === 'vi' ? article.categoryVi : article.categoryEn}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-condensed font-bold text-lg text-slate-900 uppercase tracking-tight hover:text-[#D6011E] transition-colors line-clamp-2">
                  {lang === 'vi' ? article.titleVi : article.titleEn}
                </h3>

                <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                  {lang === 'vi' ? article.summaryVi : article.summaryEn}
                </p>
              </div>

              <div className="p-4 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">NAVACO Engineering</span>
                <span className="text-xs font-semibold text-[#D6011E] flex items-center gap-1">
                  <span>{lang === 'vi' ? 'Đọc bài viết' : 'Read Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
