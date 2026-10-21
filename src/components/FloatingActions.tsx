import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface FloatingActionsProps {
  lang: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  return (
    <aside aria-label="Hỗ trợ nhanh" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* ZALO BUTTON */}
      <a
        href="https://zalo.me/0901331808"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#0068FF] hover:bg-[#0052cc] text-white px-3.5 py-2.5 rounded-full shadow-xl transition-all hover:scale-105 group"
        title="Chat qua Zalo: 090.1331.808"
      >
        <div className="w-5 h-5 flex items-center justify-center font-bold text-xs">
          Z
        </div>
        <span className="hidden sm:inline-block text-xs font-semibold font-sans pr-1">
          {lang === 'vi' ? 'Chat Zalo' : 'Zalo Support'}
        </span>
      </a>

      {/* CALL HOTLINE BUTTON */}
      <a
        href="tel:0901331808"
        className="flex items-center gap-2 bg-[#D6011E] hover:bg-[#B50019] text-white px-3.5 py-2.5 rounded-full shadow-xl transition-all hover:scale-105 group"
        title="Gọi hotline kỹ thuật 24/7: 090.1331.808"
      >
        <Phone className="w-4 h-4 animate-pulse" />
        <span className="text-xs font-mono font-bold pr-1">
          090.1331.808
        </span>
      </a>
    </aside>
  );
};
