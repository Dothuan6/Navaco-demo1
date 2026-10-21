import React, { useState } from 'react';
import { X, CheckCircle, UploadCloud, Send, FileText } from 'lucide-react';
import { RFQFormData, Language } from '../types';
import { validateRfqForm } from '../utils/rfq';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedNeed?: string;
  preselectedEquipment?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedNeed,
  preselectedEquipment
}) => {
  const [formData, setFormData] = useState<RFQFormData>({
    fullName: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    country: 'vietnam',
    needs: preselectedNeed ? [preselectedNeed] : ['Bảo trì trọn gói (FCM)'],
    equipmentType: preselectedEquipment || '',
    equipmentBrand: '',
    message: '',
    fileName: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const serviceOptions = [
    { id: 'fcm', labelVi: 'Bảo trì trọn gói (FCM)', labelEn: 'Full Care Maintenance (FCM)' },
    { id: 'parts', labelVi: 'Phụ tùng chính hãng (OEM)', labelEn: 'Genuine OEM Spare Parts' },
    { id: 'rental', labelVi: 'Cho thuê thiết bị cảng', labelEn: 'Port Equipment Rental' },
    { id: 'staffing', labelVi: 'Cung ứng nhân lực vận hành', labelEn: 'Certified Port Staffing' },
    { id: 'retrofit', labelVi: 'Retrofit điện & tự động hoá', labelEn: 'Electrical & Automation Retrofit' },
    { id: 'relocation', labelVi: 'Nâng hạ, di dời cẩu', labelEn: 'Heavy Lifting & Relocation' },
    { id: 'power', labelVi: 'Điện trung thế & Điện bờ (OPS)', labelEn: 'Medium Voltage & Shore Power (OPS)' },
    { id: 'other', labelVi: 'Nhu cầu kỹ thuật khác', labelEn: 'Other Technical Services' }
  ];

  const handleNeedToggle = (needLabel: string) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(needLabel);
      if (exists) {
        return { ...prev, needs: prev.needs.filter((n) => n !== needLabel) };
      } else {
        return { ...prev, needs: [...prev.needs, needLabel] };
      }
    });
    if (errors.needs) {
      setErrors((prev) => ({ ...prev, needs: '' }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateRfqForm(formData, lang);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real network dispatch to sales@navaco.vn
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* MODAL HEADER */}
        <div className="bg-[#42454A] px-6 py-4 flex items-center justify-between text-white border-b-2 border-[#D6011E]">
          <div>
            <h3 className="text-lg md:text-xl font-bold font-condensed tracking-wide uppercase">
              {lang === 'vi' ? 'Yêu Cầu Báo Giá Kỹ Thuật' : 'Request Technical Quotation'}
            </h3>
            <p className="text-xs text-slate-300">
              {lang === 'vi'
                ? 'Gửi thông tin trực tiếp đến phòng Kỹ thuật & Bán hàng: sales@navaco.vn'
                : 'Directly submitted to NAVACO Technical & Sales Team: sales@navaco.vn'}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 overflow-y-auto flex-1 font-sans text-sm text-slate-800">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-condensed">
                {lang === 'vi' ? 'GỬI YÊU CẦU THÀNH CÔNG!' : 'REQUEST SUBMITTED SUCCESSFULLY!'}
              </h4>
              <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                {lang === 'vi'
                  ? `Cảm ơn ông/bà ${formData.fullName} (${formData.company}). Đội ngũ kỹ sư trưởng của NAVACO đã tiếp nhận thông tin và sẽ liên hệ qua điện thoại (${formData.phone}) hoặc email (${formData.email}) trong vòng 2-4 giờ làm việc.`
                  : `Thank you, ${formData.fullName} (${formData.company}). NAVACO lead engineering team has received your request and will contact you via phone (${formData.phone}) or email (${formData.email}) within 2-4 business hours.`}
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg max-w-md mx-auto text-left text-xs text-slate-600">
                <p><strong>Hotline kỹ thuật khẩn cấp:</strong> 090.1331.808 (Mr. Danny Do)</p>
                <p><strong>Email:</strong> sales@navaco.vn</p>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#42454A] hover:bg-slate-900 text-white font-medium rounded-lg text-sm transition-colors"
              >
                {lang === 'vi' ? 'Đóng cửa sổ' : 'Close Dialog'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ROW 1: Name and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'vi' ? 'Họ và tên *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder={lang === 'vi' ? 'Nguyễn Văn A' : 'John Doe'}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6011E] ${
                      errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'vi' ? 'Tên Công ty / Cảng *' : 'Company / Terminal *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: '' });
                    }}
                    placeholder={lang === 'vi' ? 'Công ty CP Cảng...' : 'Port Authority / Logistics Corp'}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6011E] ${
                      errors.company ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
                </div>
              </div>

              {/* ROW 2: Position & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'vi' ? 'Chức vụ' : 'Job Title / Role'}
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    placeholder={lang === 'vi' ? 'Trưởng phòng Kỹ thuật / Quản lý Thiết bị' : 'Technical Director / Port Ops Manager'}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6011E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'vi' ? 'Quốc gia / Địa bàn *' : 'Country / Region *'}
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value as any })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6011E] bg-white"
                  >
                    <option value="vietnam">Việt Nam (Cái Mép, Hải Phòng, TP.HCM, Đà Nẵng)</option>
                    <option value="cambodia">Cambodia (Phnom Penh PPAP, Sihanoukville PAS)</option>
                    <option value="other">{lang === 'vi' ? 'Quốc tế khác' : 'Other International'}</option>
                  </select>
                </div>
              </div>

              {/* ROW 3: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'vi' ? 'Email làm việc *' : 'Work Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="email@company.com"
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6011E] ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'vi' ? 'Số điện thoại / Zalo *' : 'Phone / WhatsApp / Zalo *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="0901234567"
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6011E] ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* ROW 4: Needs (Checkboxes) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'vi' ? 'Nhu cầu dịch vụ kỹ thuật (chọn một hoặc nhiều) *' : 'Technical Needs (Select all that apply) *'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => {
                    const isChecked = formData.needs.includes(opt.labelVi) || formData.needs.includes(opt.labelEn);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => handleNeedToggle(lang === 'vi' ? opt.labelVi : opt.labelEn)}
                        className={`flex items-center gap-2 p-2 text-left rounded border transition-colors ${
                          isChecked
                            ? 'bg-red-50 border-[#D6011E] text-slate-900 font-medium'
                            : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded flex items-center justify-center border text-xs ${
                            isChecked ? 'bg-[#D6011E] border-[#D6011E] text-white' : 'border-slate-400 bg-white'
                          }`}
                        >
                          {isChecked ? '✓' : ''}
                        </span>
                        <span className="text-xs">{lang === 'vi' ? opt.labelVi : opt.labelEn}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.needs && <p className="text-red-600 text-xs mt-1">{errors.needs}</p>}
              </div>

              {/* ROW 5: Equipment details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'vi' ? 'Loại thiết bị' : 'Equipment Type'}
                  </label>
                  <input
                    type="text"
                    value={formData.equipmentType}
                    onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                    placeholder={lang === 'vi' ? 'Cẩu STS, RTG, Reach Stacker...' : 'STS Crane, RTG, Reach Stacker...'}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6011E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'vi' ? 'Hãng sản xuất / Năm sx' : 'OEM Brand / Year'}
                  </label>
                  <input
                    type="text"
                    value={formData.equipmentBrand}
                    onChange={(e) => setFormData({ ...formData, equipmentBrand: e.target.value })}
                    placeholder="Kalmar, ZPMC, Konecranes, Liebherr..."
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6011E]"
                  />
                </div>
              </div>

              {/* ROW 6: Message & Attachment */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  {lang === 'vi' ? 'Nội dung yêu cầu chi tiết' : 'Detailed Requirements / Notes'}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    lang === 'vi'
                      ? 'Mô tả tình trạng sự cố, nhu cầu khảo sát thực tế, hoặc phụ tùng cần tra cứu...'
                      : 'Describe equipment issues, site survey request, or parts to be quoted...'
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6011E]"
                />
              </div>

              {/* File upload simulator */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  {lang === 'vi' ? 'Đính kèm hình ảnh hoặc tài liệu kỹ thuật (nếu có)' : 'Attach Photos or Drawings (Optional)'}
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-xs text-slate-700 transition-colors">
                    <UploadCloud className="w-4 h-4 text-[#D6011E]" />
                    <span>{lang === 'vi' ? 'Chọn file (PDF, DWG, JPG, PNG)' : 'Select File (PDF, DWG, JPG)'}</span>
                    <input type="file" onChange={handleFileUpload} className="hidden" />
                  </label>
                  {formData.fileName && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      {formData.fileName}
                    </span>
                  )}
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#D6011E] hover:bg-[#B50019] text-white font-condensed font-bold text-base tracking-wider uppercase rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? lang === 'vi' ? 'Đang gửi...' : 'Submitting...'
                      : lang === 'vi' ? 'Gửi Yêu Cầu Báo Giá' : 'Submit Quotation Request'}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
