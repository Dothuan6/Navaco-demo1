import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeTitle: string;
  afterTitle: string;
  equipmentName: string;
  projectName: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeTitle,
  afterTitle,
  equipmentName,
  projectName
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-slate-300 bg-slate-900 shadow-lg select-none font-sans">
      <div
        ref={containerRef}
        className="relative h-[380px] md:h-[420px] w-full cursor-ew-resize overflow-hidden"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* ================= AFTER LAYER (BOTTOM / 100% SOLID OPAQUE DARK SLATE) ================= */}
        <div className="absolute inset-0 bg-[#0B132B] flex flex-col justify-between p-6 md:p-8">
          <div className="flex items-center justify-between border-b border-cyan-900/50 pb-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded border border-emerald-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {afterTitle}
            </span>
            <span className="text-xs text-cyan-300 font-sans font-bold">
              SIEMENS SINAMICS AC DRIVE · 2026
            </span>
          </div>

          {/* Central Showcase Graphic */}
          <div className="my-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider font-sans">
                Giải pháp đã bàn giao cho cảng PAS
              </div>
              <h4 className="text-2xl font-bold text-white font-condensed tracking-tight">
                Tủ E-House Kỹ Thuật Số Siemens Sinamics
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Toàn bộ hệ thống DC lỗi thời được thay thế bằng biến tần AC Siemens hiệu suất cao, điều khiển thông minh qua mạng truyền thông Profinet quang học chống nhiễu biển.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900/90 p-2.5 rounded border border-cyan-800/60">
                  <div className="text-[10px] text-slate-400 uppercase font-sans">Độ sẵn sàng (Availability)</div>
                  <div className="text-lg font-bold text-emerald-400 font-condensed">99.8%</div>
                </div>
                <div className="bg-slate-900/90 p-2.5 rounded border border-cyan-800/60">
                  <div className="text-[10px] text-slate-400 uppercase font-sans">Tiết kiệm dầu Diesel</div>
                  <div className="text-lg font-bold text-emerald-400 font-condensed">-18%</div>
                </div>
              </div>
            </div>

            {/* Circuit Vector Illustration */}
            <div className="hidden md:flex flex-col bg-slate-900 p-4 rounded-lg border border-cyan-500/40 text-xs font-sans">
              <div className="flex justify-between border-b border-slate-800 pb-2 mb-3 text-slate-400">
                <span className="text-emerald-400 font-bold">PLC SIMATIC S7-1500: ACTIVE</span>
                <span className="text-cyan-400">SCADA CLOUD CONNECTED</span>
              </div>
              <div className="space-y-2 text-slate-300 text-xs">
                <div className="flex justify-between bg-slate-950 p-2 rounded">
                  <span>Tời nâng (Hoist Inverter):</span>
                  <span className="text-emerald-400 font-bold">160 kW Sinamics S120</span>
                </div>
                <div className="flex justify-between bg-slate-950 p-2 rounded">
                  <span>Chân chạy (Gantry Inverter):</span>
                  <span className="text-emerald-400 font-bold">4 × 22 kW Active Line</span>
                </div>
                <div className="flex justify-between bg-slate-950 p-2 rounded">
                  <span>Xe con (Trolley Inverter):</span>
                  <span className="text-emerald-400 font-bold">30 kW Vector Control</span>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-sans">
                ✓ Sơn bảo vệ bề mặt chống ăn mòn C5-M bảo hành 10 năm
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
            <span>Dự án: {projectName}</span>
            <span>Thiết bị: {equipmentName}</span>
          </div>
        </div>

        {/* ================= BEFORE LAYER (TOP / 100% SOLID OPAQUE DARK STONE) ================= */}
        <div
          className="absolute inset-0 bg-[#1C1917] flex flex-col justify-between p-6 md:p-8"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
        >
          <div className="flex items-center justify-between border-b border-amber-900/50 pb-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950 px-3 py-1 rounded border border-amber-500/40">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              {beforeTitle}
            </span>
            <span className="text-xs text-amber-400 font-sans font-bold">
              LEGACY ANALOG DC SYSTEM · 2008
            </span>
          </div>

          {/* Central Graphic */}
          <div className="my-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <div className="text-amber-400 text-xs font-bold uppercase tracking-wider font-sans">
                Khảo sát hiện trạng trước khi NAVACO cải tạo
              </div>
              <h4 className="text-2xl font-bold text-amber-100 font-condensed tracking-tight">
                Tủ Điện Analog Cũ & Rỉ Sét Nặng
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Các rơ-le cơ điện và biến tần analog quá tuổi thọ thiết kế 15 năm, thường xuyên phát sinh lỗi ảo, rò điện hồ quang gây dừng cẩu bốc dỡ đột ngột.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-stone-900/90 p-2.5 rounded border border-red-900/60">
                  <div className="text-[10px] text-stone-400 uppercase font-sans">Số ca dừng cẩu đột xuất</div>
                  <div className="text-lg font-bold text-red-400 font-condensed">12 lần / tháng</div>
                </div>
                <div className="bg-stone-900/90 p-2.5 rounded border border-amber-900/60">
                  <div className="text-[10px] text-stone-400 uppercase font-sans">Tình trạng phụ tùng</div>
                  <div className="text-lg font-bold text-amber-400 font-condensed">Ngừng sản xuất</div>
                </div>
              </div>
            </div>

            {/* Warning Diagnostic Panel */}
            <div className="hidden md:flex flex-col bg-stone-900 p-4 rounded-lg border border-red-500/40 text-xs font-sans">
              <div className="flex justify-between border-b border-stone-800 pb-2 mb-3 text-stone-400">
                <span className="text-red-400 font-bold">DC ANALOG DRIVE: TRIPPED</span>
                <span className="text-amber-400">FAULT: OVERCURRENT</span>
              </div>
              <div className="space-y-2 text-stone-300 text-xs">
                <div className="flex justify-between bg-stone-950 p-2 rounded text-red-300">
                  <span>Hộp điều khiển tốc độ:</span>
                  <span className="font-bold">Bo mạch cháy tụ</span>
                </div>
                <div className="flex justify-between bg-stone-950 p-2 rounded text-red-300">
                  <span>Tiếp điểm phanh an toàn:</span>
                  <span className="font-bold">Mòn xước quá giới hạn</span>
                </div>
                <div className="flex justify-between bg-stone-950 p-2 rounded text-red-300">
                  <span>Khung vỏ E-House:</span>
                  <span className="font-bold">Thủng rỉ sét do muối biển</span>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-stone-800 text-[11px] text-amber-400 font-sans">
                ⚠️ Khuyến cáo: Nguy cơ mất an toàn nghiêm trọng cho công nhân bốc xếp
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-400 pt-3 border-t border-stone-800">
            <span>Dự án: {projectName}</span>
            <span>Thiết bị: {equipmentName}</span>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#D6011E] text-white flex items-center justify-center shadow-lg border-2 border-white text-xs font-bold pointer-events-auto">
            ⇄
          </div>
        </div>
      </div>

      {/* FOOTER HELPER */}
      <div className="bg-slate-950 px-4 py-2.5 text-center text-xs text-slate-400 flex items-center justify-between font-sans">
        <span className="text-amber-400 font-medium">◀ Trượt sang trái để xem hiện trạng cũ</span>
        <span className="font-semibold text-slate-200">Kéo thanh trượt để so sánh Trước / Sau</span>
        <span className="text-emerald-400 font-medium">Trượt sang phải để xem kết quả Retrofit ▶</span>
      </div>
    </div>
  );
};
