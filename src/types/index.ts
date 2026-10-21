export type Language = 'vi' | 'en';

export type ServiceCategory = 'operation' | 'retrofit' | 'infrastructure';

export interface SubService {
  id: string;
  category: ServiceCategory;
  titleVi: string;
  titleEn: string;
  problemVi: string;
  problemEn: string;
  solutionVi: string;
  solutionEn: string;
  processVi: string[];
  processEn: string[];
  partnerOrProjectsVi: string;
  partnerOrProjectsEn: string;
  iconName: string;
}

export interface EquipmentItem {
  id: string;
  nameVi: string;
  nameEn: string;
  code: string;
  descriptionVi: string;
  descriptionEn: string;
  capabilitiesVi: string[];
  capabilitiesEn: string[];
  specs: {
    labelVi: string;
    labelEn: string;
    value: string;
  }[];
  supportedBrands: string[];
}

export interface ProjectItem {
  id: string;
  titleVi: string;
  titleEn: string;
  client: string;
  locationVi: string;
  locationEn: string;
  country: 'vietnam' | 'cambodia';
  serviceType: ServiceCategory;
  serviceNameVi: string;
  serviceNameEn: string;
  equipmentVi: string;
  equipmentEn: string;
  year: string;
  challengeVi: string;
  challengeEn: string;
  solutionVi: string;
  solutionEn: string;
  resultsVi: string[];
  resultsEn: string[];
  hasBeforeAfter?: boolean;
  beforeLabelVi?: string;
  beforeLabelEn?: string;
  afterLabelVi?: string;
  afterLabelEn?: string;
}

export interface PartnerItem {
  name: string;
  categoryVi: string;
  categoryEn: string;
  descriptionVi: string;
  descriptionEn: string;
  establishedRoleVi: string;
  establishedRoleEn: string;
}

export interface NewsArticle {
  id: string;
  titleVi: string;
  titleEn: string;
  summaryVi: string;
  summaryEn: string;
  categoryVi: string;
  categoryEn: string;
  date: string;
  readTime: string;
}

export interface RFQFormData {
  fullName: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  country: 'vietnam' | 'cambodia' | 'other';
  needs: string[];
  equipmentType: string;
  equipmentBrand: string;
  message: string;
  fileName?: string;
}
