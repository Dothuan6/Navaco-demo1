import { RFQFormData, ProjectItem, ServiceCategory } from '../types';

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\.\(\)\+]/g, '');
  return cleaned.length >= 9 && cleaned.length <= 15 && /^\d+$/.test(cleaned);
}

export function validateRfqForm(data: Partial<RFQFormData>, lang: 'vi' | 'en' = 'vi'): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = lang === 'vi' ? 'Vui lòng nhập họ và tên' : 'Please enter your full name';
  }

  if (!data.company || data.company.trim().length < 2) {
    errors.company = lang === 'vi' ? 'Vui lòng nhập tên công ty / đơn vị' : 'Please enter company name';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = lang === 'vi' ? 'Email không hợp lệ (ví dụ: contact@port.com)' : 'Valid email is required';
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = lang === 'vi' ? 'Số điện thoại hoặc Zalo không hợp lệ' : 'Valid phone or Zalo is required';
  }

  if (!data.needs || data.needs.length === 0) {
    errors.needs = lang === 'vi' ? 'Vui lòng chọn ít nhất một nhu cầu kỹ thuật' : 'Please select at least one technical service need';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function filterProjects(
  projects: ProjectItem[],
  searchTerm: string,
  countryFilter: 'all' | 'vietnam' | 'cambodia',
  serviceFilter: 'all' | ServiceCategory
): ProjectItem[] {
  const term = searchTerm.trim().toLowerCase();

  return projects.filter((project) => {
    // Country filter
    if (countryFilter !== 'all' && project.country !== countryFilter) {
      return false;
    }

    // Service category filter
    if (serviceFilter !== 'all' && project.serviceType !== serviceFilter) {
      return false;
    }

    // Keyword search
    if (term) {
      const matchVi = project.titleVi.toLowerCase().includes(term) ||
        project.client.toLowerCase().includes(term) ||
        project.locationVi.toLowerCase().includes(term) ||
        project.equipmentVi.toLowerCase().includes(term) ||
        project.serviceNameVi.toLowerCase().includes(term);

      const matchEn = project.titleEn.toLowerCase().includes(term) ||
        project.locationEn.toLowerCase().includes(term) ||
        project.equipmentEn.toLowerCase().includes(term) ||
        project.serviceNameEn.toLowerCase().includes(term);

      return matchVi || matchEn;
    }

    return true;
  });
}
