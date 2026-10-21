import React, { useState } from 'react';
import { X, Download, FileCheck, Shield, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, lang }) => {
  const [downloadStarted, setDownloadStarted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadStarted(true);
    // Create simulated file download
    const element = document.createElement('a');
    const file = new Blob([
      `NAVACO COMPANY PROFILE v1.2 (2026)\n` +
      `Slogan: KẾT NỐI NĂNG LỰC - NÂNG TẦM GIÁ TRỊ\n` +
      `Trụ sở chính: 405/26 Xô Viết Nghệ Tĩnh, P. 24, Q. Bình Thạnh, TP. Hồ Chí Minh\n` +
      `Xưởng dịch vụ: KCN Cái Mép, TX. Phú Mỹ, Tỉnh Bà Rịa - Vũng Tàu\n` +
      `Chi nhánh Hải Phòng & Phnom Penh (Cambodia)\n` +
      `Hotline: 090.1331.808 | Email: sales@navaco.vn\n\n` +
      `NĂNG LỰC CỐT LÕI:\n` +
      `1. Bảo trì trọn gói (FCM) thiết bị cảng STS, RTG, Reach Stacker.\n` +
      `2. Retrofit điện, biến tần Siemens Sinamics, nâng cấp E-House tại Việt Nam.\n` +
      `3. Phụ tùng chính hãng OEM: Kalmar, Bromma, Bubenzer, igus, Teufelberger.\n` +
      `4. Nâng hạ, lắp đặt, di dời cẩu cảng bằng đường thủy nội địa.\n` +
      `5. Giải pháp cấp điện bờ Onshore Power Supply (OPS) hợp tác cùng Siemens.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'NAVACO_Profile_v1.2_Full.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="bg-[#42454A] px-6 py-4 flex items-center justify-between text-white border-b-2 border-[#D6011E]">
          <div className="flex items-center gap-3">
            <FileCheck className="w-6 h-6 text-[#D6011E]" />
            <h3 className="text-lg font-bold font-condensed tracking-wide uppercase">
              {lang === 'vi' ? 'Hồ Sơ Năng Lực NAVACO (Profile v1.2)' : 'NAVACO Company Profile (v1.2)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 font-sans text-sm text-slate-700 space-y-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
            <div className="flex justify-between items-center text-xs text-slate-500">
              <span>Định dạng: PDF Bìa Cứng / 28 Trang</span>
              <span>Phiên bản: v1.2 (08/2026)</span>
            </div>
            <h4 className="font-bold text-slate-900 text-base">
              {lang === 'vi'
                ? 'Năng Lực Kỹ Thuật & Dự Án Cảng Biển - Việt Nam & Cambodia'
                : 'Technical Capability & Port Projects - Vietnam & Cambodia'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Tài liệu chi tiết cung cấp: sơ đồ tổ chức đội ngũ kỹ sư, danh mục chứng chỉ đào tạo từ các hãng (Siemens, Kalmar, Bromma), hình ảnh xưởng Cái Mép, và 12 hồ sơ ca điển hình (case studies).'
                : 'Full document includes: engineering team structure, OEM certifications (Siemens, Kalmar, Bromma), Cai Mep workshop facilities, and 12 detailed case studies.'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {lang === 'vi'
                ? 'Tài liệu chính thức do Ban Giám đốc NAVACO phê duyệt, dùng cho hồ sơ thầu & chào giá kỹ thuật.'
                : 'Official documentation authorized by NAVACO Board for tendering & technical evaluations.'}
            </span>
          </div>

          {downloadStarted && (
            <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-xs">
              ✓ {lang === 'vi' ? 'Tệp tin đang được tải xuống thiết bị của bạn!' : 'File download started successfully!'}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="flex-1 py-2.5 bg-[#D6011E] hover:bg-[#B50019] text-white font-condensed font-bold text-sm tracking-wider uppercase rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Tải Hồ Sơ (PDF)' : 'Download Profile (PDF)'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition-colors"
            >
              {lang === 'vi' ? 'Đóng' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
