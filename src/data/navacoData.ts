import { SubService, EquipmentItem, ProjectItem, PartnerItem, NewsArticle } from '../types';

export const NAVACO_PROFILE = {
  name: 'NAVACO',
  sloganVi: 'KẾT NỐI NĂNG LỰC – NÂNG TẦM GIÁ TRỊ',
  sloganEn: 'CONNECTING CAPABILITIES – ELEVATING VALUE',
  hotline: '090.1331.808',
  email: 'sales@navaco.vn',
  hrEmail: 'hr@navaco.vn',
  contactPerson: 'Danny Do (090.1331.808 - nhon.do@navaco.vn)',
  addressHcm: '405/26 Xô Viết Nghệ Tĩnh, P. 24, Q. Bình Thạnh, TP. Hồ Chí Minh',
  addressCaiMep: 'Khu công nghiệp Cái Mép, Thị xã Phú Mỹ, Tỉnh Bà Rịa – Vũng Tàu',
  addressHaiPhong: 'Km 9, Đường 356, Quận Hải An, TP. Hải Phòng',
  addressPhnomPenh: 'Phnom Penh Autonomous Port (PPAP) Commercial Area, Phnom Penh, Cambodia',
  establishedYear: '2016',
  brandHex: {
    red: '#D6011E',
    graphite: '#42454A',
    bg: '#F7F7F5'
  },
  values: [
    { key: 'N', term: 'Navigation', vi: 'Định hướng phát triển', en: 'Strategic Direction' },
    { key: 'A', term: 'Ambition', vi: 'Khát vọng vươn xa', en: 'Global Ambition' },
    { key: 'V', term: 'Value', vi: 'Tạo nên giá trị bền vững', en: 'Sustainable Value' },
    { key: 'A', term: 'Accountability', vi: 'Trách nhiệm trong mọi cam kết', en: 'Full Accountability' },
    { key: 'C', term: 'Commitment', vi: 'Giữ vững uy tín và chất lượng', en: 'Quality Commitment' },
    { key: 'O', term: 'Optimization', vi: 'Không ngừng tối ưu', en: 'Continuous Optimization' }
  ]
};

export const SERVICES_DATA: SubService[] = [
  // Nhóm 1: VẬN HÀNH (Operation)
  {
    id: 'fcm',
    category: 'operation',
    titleVi: 'Bảo trì trọn gói (FCM)',
    titleEn: 'Full Care Maintenance (FCM)',
    problemVi: 'Thiết bị cảng dừng đột xuất gây nghẽn cầu bến, thiếu đội ngũ kỹ sư chuyên môn cao túc trực 24/7.',
    problemEn: 'Unexpected port equipment breakdown causes berth congestion and lack of on-site certified engineering staff.',
    solutionVi: 'Hợp đồng bảo trì định kỳ, xử lý sự cố cấp tốc, kỹ thuật viên NAVACO túc trực tại cảng và giám sát bằng phần mềm CMMS.',
    solutionEn: 'Comprehensive maintenance contracts, rapid troubleshooting, resident engineers on-site and digital CMMS tracking.',
    processVi: [
      'Khảo sát hiện trạng thiết bị và đánh giá rủi ro hư hỏng',
      'Lập kế hoạch bảo trì phòng ngừa (PM) theo chu kỳ giờ máy',
      'Bố trí tổ kỹ sư hiện trường túc trực theo ca bốc xếp',
      'Số hóa nhật ký bảo trì và phân tích dữ liệu độ tin cậy'
    ],
    processEn: [
      'Current state inspection and operational risk assessment',
      'Preventive maintenance (PM) scheduling by running hours',
      'Dedicated on-site technical team deployed per terminal shift',
      'Digital CMMS maintenance logbook and reliability analytics'
    ],
    partnerOrProjectsVi: 'Áp dụng tại CMIT Cái Mép, Cảng Tiên Sa Đà Nẵng',
    partnerOrProjectsEn: 'Deployed at CMIT Cai Mep, Tien Sa Port Danang',
    iconName: 'Wrench'
  },
  {
    id: 'spare-parts',
    category: 'operation',
    titleVi: 'Phụ tùng chính hãng',
    titleEn: 'Genuine OEM Spare Parts',
    problemVi: 'Phụ tùng đặt hàng nước ngoài chờ đợi nhiều tuần, mã phụ tùng khó xác định hoặc dễ mua phải hàng không chuẩn.',
    problemEn: 'Long lead time for overseas spare parts, difficulty in exact parts catalog mapping and risk of counterfeit components.',
    solutionVi: 'Tư vấn tra cứu mã phụ tùng chính xác từ bản vẽ gốc, nhập khẩu trực tiếp chính hãng (Bubenzer, Teufelberger, Bromma, Kalmar) và hỗ trợ lắp đặt.',
    solutionEn: 'Exact OEM drawing decoding, direct authorized import (Bubenzer, Teufelberger, Bromma, Kalmar) with turnkey installation.',
    processVi: [
      'Tra cứu chính xác Part Number từ sơ đồ thiết kế gốc',
      'Cung cấp chứng chỉ xuất xứ (CO) và chất lượng (CQ) của hãng',
      'Dự trữ sẵn tại kho Cái Mép các vật tư tiêu hao khẩn cấp',
      'Kỹ sư hỗ trợ thay thế, cân chỉnh lực và hiệu chuẩn'
    ],
    processEn: [
      'Exact Part Number mapping directly from OEM engineering drawings',
      'Full Manufacturer Certificate of Origin (CO) & Quality (CQ)',
      'Strategic safety stock stored in Cai Mep warehouse for emergencies',
      'Engineers support installation, torque calibration and testing'
    ],
    partnerOrProjectsVi: 'Đối tác chiến lược: Bubenzer, Teufelberger, Sennebogen, ALIMAK',
    partnerOrProjectsEn: 'Strategic OEM Partners: Bubenzer, Teufelberger, Sennebogen, ALIMAK',
    iconName: 'Cpu'
  },
  {
    id: 'equipment-rental',
    category: 'operation',
    titleVi: 'Cho thuê thiết bị',
    titleEn: 'Port Equipment Rental',
    problemVi: 'Cảng quá tải cục bộ vào mùa cao điểm, chi phí đầu tư mua mới thiết bị quá lớn và chờ bàn giao kéo dài.',
    problemEn: 'Terminal congestion during peak container traffic; exorbitant capex for new equipment purchases with 12+ month delivery.',
    solutionVi: 'Cho thuê Reach Stacker, xe nâng container rỗng, xe đầu kéo bến bãi theo ngày/tháng/năm, kèm tài xế và dịch vụ bảo trì định kỳ.',
    solutionEn: 'Flexible rental fleet of Reach Stackers, Empty Container Handlers, Terminal Tractors, with trained drivers and turnkey servicing.',
    processVi: [
      'Tiếp nhận yêu cầu tải trọng và chu kỳ khai thác của bến',
      'Bàn giao xe đã qua kiểm định an toàn và bảo dưỡng tổng thể',
      'Cung cấp tài xế đạt chuẩn bằng cấp vận hành hoặc đào tạo tài xế cảng',
      'Kỹ thuật viên lưu động túc trực bảo trì định kỳ tại chỗ'
    ],
    processEn: [
      'Requirements analysis based on TEU volume and yard cycle time',
      'Handover of fully certified and pre-inspected equipment units',
      'Provision of certified terminal drivers or cross-training customer staff',
      'Mobile field technical support for seamless on-site maintenance'
    ],
    partnerOrProjectsVi: 'Dự án cho thuê tại CMIT, Cảng Tiên Sa, Đà Nẵng',
    partnerOrProjectsEn: 'Rental deployments at CMIT, Tien Sa Port, Danang',
    iconName: 'Truck'
  },
  {
    id: 'staffing',
    category: 'operation',
    titleVi: 'Cung ứng nhân lực vận hành',
    titleEn: 'Certified Port Operator Staffing',
    problemVi: 'Cảng và bãi ICD thiếu tài xế cẩu STS/RTG, tài xế Reach Stacker có tay nghề và chứng chỉ an toàn đạt chuẩn.',
    problemEn: 'Terminals and ICDs face shortage of certified STS/RTG crane operators and heavy container handler drivers.',
    solutionVi: 'Cung ứng đội ngũ lái cẩu, lái xe nâng bãi được đào tạo bài bản, tuân thủ nghiêm ngặt quy trình an toàn lao động hàng hải.',
    solutionEn: 'Deploying certified port crane and equipment operators trained under international maritime safety and speed standards.',
    processVi: [
      'Sát hạch kỹ năng điều khiển trên mô phỏng và thực tế',
      'Huấn luyện an toàn xếp dỡ container và phòng ngừa tai nạn',
      'Bàn giao nhân lực theo ca làm việc linh hoạt của cảng',
      'Giám sát chỉ số KPI năng suất bốc xếp hàng tháng'
    ],
    processEn: [
      'Rigorous operational assessment on simulator and live equipment',
      'Comprehensive safety and maritime cargo handling certification',
      'Shift-based deployment adapted to real container vessel schedules',
      'Continuous monthly productivity (moves/hour) KPI monitoring'
    ],
    partnerOrProjectsVi: 'Báo giá nhân lực vận hành mới nhất 08/2026',
    partnerOrProjectsEn: 'Updated certified operator pricing schedule 08/2026',
    iconName: 'Users'
  },

  // Nhóm 2: NÂNG CẤP (Retrofit & Upgrades)
  {
    id: 'retrofit-automation',
    category: 'retrofit',
    titleVi: 'Retrofit điện & tự động hóa',
    titleEn: 'Electrical & Automation Retrofit',
    problemVi: 'Hệ thống điều khiển cẩu lỗi thời (DC drive, PLC cũ), phụ tùng bo mạch hiếm, cẩu hay bị dừng không rõ nguyên nhân.',
    problemEn: 'Obsolescent crane drive systems (DC drives, legacy PLCs), obsolete circuit boards, and frequent inexplicable crane stoppages.',
    solutionVi: 'Thay thế toàn diện PLC, biến tần AC (Siemens Simotion/Sinamics), phần mềm SCADA giám sát từ xa; E-House chế tạo sẵn tại Việt Nam.',
    solutionEn: 'Turnkey upgrade with modern Siemens AC drives, PLC migration, remote SCADA diagnostics; pre-fabricated E-House built in Vietnam.',
    processVi: [
      'Khảo sát sơ đồ điện, tính toán động lực học và công suất kéo',
      'Chế tạo tủ điện, tích hợp hệ thống điều khiển tại xưởng Cái Mép',
      'Lắp đặt trên cẩu, đấu nối dây tín hiệu và truyền thông quang',
      'Chạy thử không tải, thử tải thực tế và chuyển giao công nghệ'
    ],
    processEn: [
      'Electrical schematic review, torque and drive sizing calculations',
      'E-House electrical enclosure fabrication at Cai Mep workshop',
      'On-crane installation, fiber optic and fieldbus wiring integration',
      'No-load testing, full proof load test and engineer handover'
    ],
    partnerOrProjectsVi: 'Dự án tiêu biểu: CMIT Cái Mép, RTG Sihanoukville (Cambodia) hợp tác cùng Siemens',
    partnerOrProjectsEn: 'Flagship: CMIT Cai Mep, RTG Sihanoukville (Cambodia) with Siemens',
    iconName: 'Zap'
  },
  {
    id: 'overhaul',
    category: 'retrofit',
    titleVi: 'Đại tu và phục hồi cơ khí',
    titleEn: 'Mechanical Overhaul & Refurbishment',
    problemVi: 'Kết cấu thép cẩu bị ăn mòn muối biển, gầu ngoạm, cáp nâng mòn hỏng, cabin và động cơ diesel suy giảm công suất.',
    problemEn: 'Severe marine corrosion on crane steel structures, worn hoist ropes and sheaves, deteriorating operator cabin and diesel gensets.',
    solutionVi: 'Đại tu tổng thể cơ khí, thay thế động cơ Genset, làm mới cabin công thái học, phun cát chống ăn mòn và sơn bảo vệ 3 lớp theo chuẩn C5-M.',
    solutionEn: 'Full structural mechanical overhaul, genset repowering, ergonomic cabin replacement, grit blasting and 3-layer C5-M marine recoating.',
    processVi: [
      'Siêu âm kiểm tra mối hàn (NDT) kết cấu thép chịu lực',
      'Thay mới cơ cấu nâng hạ, hộp số, phanh an toàn Bubenzer',
      'Đại tu động cơ Diesel hoặc chuyển đổi Hybrid / E-RTG',
      'Phun cát tiêu chuẩn Sa 2.5 và sơn hệ epoxy-polyurethane C5-M'
    ],
    processEn: [
      'Non-destructive testing (NDT) ultrasonic inspection of critical welds',
      'Hoist gearbox, drum and Bubenzer fail-safe brake replacement',
      'Diesel genset repowering or hybrid/E-RTG electrification conversion',
      'Sa 2.5 sandblasting and high-durability C5-M marine coating system'
    ],
    partnerOrProjectsVi: 'Dự án phục hồi cẩu RTG tại Cảng Quốc tế Sihanoukville',
    partnerOrProjectsEn: 'RTG Crane Refurbishment project at Sihanoukville Autonomous Port',
    iconName: 'Hammer'
  },
  {
    id: 'relocation',
    category: 'retrofit',
    titleVi: 'Nâng hạ, lắp đặt và di dời cẩu',
    titleEn: 'Heavy Lifting, Installation & Crane Relocation',
    problemVi: 'Cảng tiếp nhận thiết bị mới từ tàu biển hoặc cần di dời cẩu hàng trăm tấn giữa các cầu bến mà không gián đoạn giao thông hàng hải.',
    problemEn: 'Receiving newly delivered cranes from heavy-lift vessels or relocating multi-hundred-ton cranes between berths without port shutdown.',
    solutionVi: 'Dịch vụ trọn gói tiếp nhận từ tàu chuyên dụng, kích nâng thủy lực, chằng buộc, tháo dỡ, vận chuyển đường thủy và lắp đặt lại tại bến đích.',
    solutionEn: 'Turnkey vessel roll-off/lift-off, SPMT hydraulic jacking, seafastening, barge transport, and precise re-commissioning on new rail berth.',
    processVi: [
      'Mô phỏng 3D tính toán ổn định, tải trọng mặt cầu và thủy triều',
      'Sử dụng hệ thống kích trượt thủy lực hoặc xe chuyên dùng SPMT',
      'Chằng buộc cố định trên sà lan biển và di chuyển an toàn',
      'Cân chỉnh ray bến, lắp đặt và kiểm định tải trọng an toàn'
    ],
    processEn: [
      '3D simulation of quay deck bearing load, tidal window and stability',
      'Deployment of hydraulic skidding systems and heavy-duty SPMT trailers',
      'Certified maritime seafastening and ocean barge towage execution',
      'Rail alignment, commissioning and regulatory load test certification'
    ],
    partnerOrProjectsVi: 'Dự án Kalmar tại PPAP Phnom Penh, Di dời cẩu Cảng Tân Thuận TP.HCM',
    partnerOrProjectsEn: 'Kalmar project at PPAP Phnom Penh, Tan Thuan Port Crane Relocation HCMC',
    iconName: 'Move'
  },
  {
    id: 'training-simulator',
    category: 'retrofit',
    titleVi: 'Đào tạo kỹ thuật & Mô phỏng (Simulator)',
    titleEn: 'Technical Training & Crane Simulator',
    problemVi: 'Đội ngũ kỹ thuật bến bãi gặp lúng túng khi xử lý sự cố biến tần/PLC phức tạp, thiếu môi trường huấn luyện lái cẩu an toàn.',
    problemEn: 'Terminal engineers lack practical diagnostic skills for modern drives/PLCs; high risks when training novice crane drivers on live berths.',
    solutionVi: 'Chương trình đào tạo chuyển giao công nghệ sau retrofit; hệ thống buồng lái mô phỏng (Simulator) luyện tập tình huống khẩn cấp.',
    solutionEn: 'Post-retrofit tech transfer training program; advanced crane simulator training for zero-risk real-world emergency handling.',
    processVi: [
      'Huấn luyện lý thuyết hệ thống truyền động và SCADA chẩn đoán',
      'Thực hành kiểm tra và xử lý lỗi giả lập trực tiếp trên tủ điện',
      'Tập huấn lái cẩu trên buồng mô phỏng đa màn hình NAVACO Simulator',
      'Đánh giá và cấp chứng chỉ hoàn thành khóa đào tạo'
    ],
    processEn: [
      'Theory training on drive systems and SCADA fault diagnostics',
      'Hands-on fault simulation and electrical troubleshooting drills',
      'Crane operations practice on NAVACO multi-screen simulator cabin',
      'Competency assessment and certification issuance'
    ],
    partnerOrProjectsVi: 'Đào tạo kỹ thuật cho cảng PAS Sihanoukville & các cảng thành viên',
    partnerOrProjectsEn: 'Technical training for PAS Sihanoukville terminal engineers',
    iconName: 'GraduationCap'
  },

  // Nhóm 3: HẠ TẦNG & NĂNG LƯỢNG (Infrastructure & Energy)
  {
    id: 'electrical-infra',
    category: 'infrastructure',
    titleVi: 'Điện trung & hạ thế cho cảng và nhà máy',
    titleEn: 'Medium & Low Voltage Port Infrastructure',
    problemVi: 'Hệ thống cấp điện cho cẩu bờ sụt áp, tủ điện cũ nổ hồ quang gây nguy hiểm, busbar rỉ sét do môi trường mặn.',
    problemEn: 'Severe voltage drop along quay crane feedlines, arcing hazards from aging switchgear, and busbar corrosion from salt atmosphere.',
    solutionVi: 'Thiết kế thi công trạm biến áp, tủ phân phối trung thế (MV), tủ hạ thế (LV), thanh dẫn busbar chịu mặn và hệ thống cáp ngầm bến bãi.',
    solutionEn: 'Engineering and EPC construction of substations, medium voltage (MV) & low voltage (LV) panels, salt-resistant busbars and underground cable trenches.',
    processVi: [
      'Khảo sát phụ tải bến cảng và tính toán bảo vệ rơ-le chống chạm chập',
      'Sản xuất lắp đặt tủ trung/hạ thế đạt chuẩn IEC 61439 tại Việt Nam',
      'Thi công hào cáp ngầm, hộp đấu nối cẩu bờ (Pit box) chịu ngập',
      'Thử nghiệm đóng điện đóng cắt và bàn giao hệ thống SCADA điện'
    ],
    processEn: [
      'Quay load survey and selective relay protection calculation',
      'IEC 61439 compliant MV/LV panel manufacturing in Vietnam',
      'Submersible quay pit boxes and heavy cable duct installation',
      'Energization testing, protective relay calibration and SCADA integration'
    ],
    partnerOrProjectsVi: 'Dự án STOLL tại Phnom Penh Cambodia, các cụm cảng sông và biển',
    partnerOrProjectsEn: 'STOLL infrastructure project in Phnom Penh, Cambodia and regional river/sea ports',
    iconName: 'Activity'
  },
  {
    id: 'shore-power',
    category: 'infrastructure',
    titleVi: 'Giải pháp điện bờ cho cảng (OPS)',
    titleEn: 'Onshore Power Supply / Shore Power (OPS)',
    problemVi: 'Tàu cập bến phải chạy động cơ phụ đốt dầu FO/DO xả khói bụi mù mịt, cảng đối mặt quy định phát thải xanh gắt gao của IMO.',
    problemEn: 'Berthing vessels burn dirty auxiliary fuel creating dense emissions, facing strict IMO green port decarbonization regulations.',
    solutionVi: 'Giải pháp cấp điện từ bờ cho tàu (Cold Ironing / Onshore Power Supply) hợp tác cùng Siemens: biến tần đổi tần số 50Hz/60Hz, tay cáp cấp điện tự động.',
    solutionEn: 'Cold Ironing / OPS shore connection system in partnership with Siemens: frequency converters (50Hz to 60Hz), cable management systems (igus).',
    processVi: [
      'Phân tích biểu đồ phụ tải tàu biển cập bến (công suất từ 1MVA - 16MVA)',
      'Hệ thống biến đổi tĩnh tĩnh Siemens SFC chuyển đổi 50Hz sang 60Hz',
      'Thiết kế cụm cuộn cáp và cần nối cáp igus an toàn chống giật',
      'Đồng bộ hòa lưới không ngắt điện (Blackout-free synchronization)'
    ],
    processEn: [
      'Berth vessel load profile analysis (capacities from 1MVA to 16MVA)',
      'Siemens Static Frequency Converter (SFC) for 50Hz to 60Hz conversion',
      'igus heavy-duty cable management and socket pit integration',
      'Seamless blackout-free synchronization with shipboard power systems'
    ],
    partnerOrProjectsVi: 'Đối tác công nghệ giải pháp: Siemens, igus',
    partnerOrProjectsEn: 'Technology solution partnership with Siemens, igus',
    iconName: 'Anchor'
  }
];

export const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: 'sts',
    code: 'STS',
    nameVi: 'Cẩu bờ bốc dỡ container (STS)',
    nameEn: 'Ship-to-Shore Container Crane (STS)',
    descriptionVi: 'Thiết bị chủ lực bốc dỡ container tại cầu tàu, chịu tải trọng lớn và hoạt động liên tục trong môi trường biển khắc nghiệt.',
    descriptionEn: 'Flagship quay cranes handling container vessel loading and unloading under extreme marine weather and relentless cycles.',
    capabilitiesVi: [
      'Bảo trì phòng ngừa FCM, sửa chữa cơ điện khẩn cấp 24/7',
      'Retrofit hệ thống điều khiển PLC và biến tần Siemens/ABB',
      'Đại tu tời nâng, thay cáp thép Teufelberger, thay thế phanh Bubenzer',
      'Nâng chiều cao cẩu (Boom height extension) và vươn dài cần đón tàu lớn'
    ],
    capabilitiesEn: [
      'FCM preventive maintenance and 24/7 emergency troubleshooting',
      'PLC and AC drive retrofit (Siemens / ABB integration)',
      'Hoist drum overhaul, Teufelberger wire rope and Bubenzer brake replacement',
      'Boom height extension and outreach elongation for ultra-large container ships'
    ],
    specs: [
      { labelVi: 'Sức nâng dưới Spreader', labelEn: 'Safe Working Load', value: '40 - 65 Tấn (Tons)' },
      { labelVi: 'Tầm với ngoài mép cầu', labelEn: 'Outreach', value: '35 - 65 m (Tàu Post-Panamax)' },
      { labelVi: 'Tốc độ nâng hàng', labelEn: 'Hoist Speed', value: '60 - 150 m/min' }
    ],
    supportedBrands: ['Kalmar', 'ZPMC', 'Mitsui E&S', 'Liebherr', 'Konecranes']
  },
  {
    id: 'rtg',
    code: 'RTG',
    nameVi: 'Cẩu bánh lốp bãi container (RTG)',
    nameEn: 'Rubber-Tyred Gantry Crane (RTG)',
    descriptionVi: 'Cẩu xếp dỡ container linh hoạt trong bãi chứa, yêu cầu độ chính xác cao khi di chuyển và hạ hàng trên các block.',
    descriptionEn: 'High-density yard gantry cranes providing agile container stacking and block transport across terminal yards.',
    capabilitiesVi: [
      'Bảo trì trọn gói hệ thống động cơ diesel và thủy lực lái',
      'Điện hóa cẩu: chuyển đổi từ Diesel sang E-RTG (Busbar hoặc Cable Reel)',
      'Retrofit biến tần nâng/di chuyển, lắp đặt cabin điều khiển mới',
      'Cân chỉnh ray bánh xe, thay lốp chuyên dụng và kiểm tra NDT kết cấu'
    ],
    capabilitiesEn: [
      'Comprehensive maintenance for diesel genset and steering hydraulics',
      'E-RTG electrification conversion (Busbar system or Cable Reel)',
      'AC drive and hoist motor retrofit, modern ergonomic cabin installation',
      'Gantry alignment, specialized port tire servicing and NDT steel inspection'
    ],
    specs: [
      { labelVi: 'Khẩu độ bãi', labelEn: 'Span', value: '6+1 Hàng container (Rows)' },
      { labelVi: 'Chiều cao nâng', labelEn: 'Lifting Height', value: '1 over 5 hoặc 1 over 6' },
      { labelVi: 'Sức nâng danh định', labelEn: 'Rated Capacity', value: '41 Tấn (Tons)' }
    ],
    supportedBrands: ['Kalmar', 'Konecranes', 'ZPMC', 'Mitsui E&S', 'Paceco']
  },
  {
    id: 'reach-stacker',
    code: 'RS',
    nameVi: 'Xe nâng chụp Container (Reach Stacker)',
    nameEn: 'Container Reach Stacker',
    descriptionVi: 'Phương tiện cơ động hàng đầu cho bốc xếp container có hàng tại bãi nhỏ, ICD và các trung tâm logistics đường sắt/sông.',
    descriptionEn: 'The primary agile workhorse for handling laden containers in terminal yards, inland container depots (ICDs) and logistics hubs.',
    capabilitiesVi: [
      'Dịch vụ cho thuê xe kèm hoặc không kèm tài xế',
      'Đại tu động cơ Cummins/Volvo, hộp số Dana/Kessler',
      'Cung cấp phụ tùng khung chụp Spreader Bromma/ELME chính hãng',
      'Bảo dưỡng định kỳ hệ thống thủy lực nâng và cần boom'
    ],
    capabilitiesEn: [
      'Turnkey rental with or without certified operators',
      'Cummins/Volvo engine and Dana/Kessler transmission overhaul',
      'Genuine Bromma and ELME spreader wear parts and sensor supply',
      'Boom cylinder and high-pressure hydraulic preventive servicing'
    ],
    specs: [
      { labelVi: 'Sức nâng hàng 1', labelEn: 'Row 1 Capacity', value: '45 Tấn (Tons)' },
      { labelVi: 'Sức nâng hàng 2 / 3', labelEn: 'Row 2/3 Capacity', value: '31 Tấn / 16 Tấn' },
      { labelVi: 'Tầng nâng tối đa', labelEn: 'Stacking Height', value: '5 - 6 Tầng Container' }
    ],
    supportedBrands: ['Kalmar', 'Konecranes', 'Hyster', 'Sany', 'Ferrari']
  },
  {
    id: 'empty-handler',
    code: 'ECH',
    nameVi: 'Xe nâng container rỗng (Empty Container Handler)',
    nameEn: 'Empty Container Handler',
    descriptionVi: 'Chuyên dụng sắp xếp container rỗng lên tới 8 tầng với tốc độ chu kỳ cao, đòi hỏi độ ổn định và an toàn tuyệt đối.',
    descriptionEn: 'Fast-cycle vertical stacking of empty containers up to 8 tiers high with extreme stability and safety interlocks.',
    capabilitiesVi: [
      'Cung cấp phụ tùng mấu ngoạm (twistlock), xích nâng và puly',
      'Kiểm tra định kỳ độ rão khung nâng và góc nghiêng thủy lực',
      'Cho thuê theo tháng hoặc theo mùa bốc dỡ hàng nông sản',
      'Đại tu cầu xe và hệ thống phanh ướt an toàn'
    ],
    capabilitiesEn: [
      'Twistlock, lift chain and mast sheave replacement parts',
      'Mast fatigue testing and hydraulic tilt cylinder alignment',
      'Short-term and seasonal rental for container turnover surges',
      'Drive axle and wet disc brake system overhauling'
    ],
    specs: [
      { labelVi: 'Chiều cao nâng', labelEn: 'Stacking Capability', value: '7 - 8 Tầng Container Rỗng' },
      { labelVi: 'Sức nâng danh định', labelEn: 'Capacity', value: '9 - 10 Tấn (Tons)' },
      { labelVi: 'Khung chụp kép', labelEn: 'Spreader Type', value: 'Single / Double Handling' }
    ],
    supportedBrands: ['Kalmar', 'Hyster', 'Konecranes', 'Taylor', 'Sany']
  },
  {
    id: 'terminal-tractor',
    code: 'TT',
    nameVi: 'Xe đầu kéo cảng (Terminal Tractor)',
    nameEn: 'Terminal Tractor / Tug Master',
    descriptionVi: 'Đầu kéo chuyên dụng kéo rơ-moóc container luân chuyển giữa mép cầu tàu và bãi chứa nội bộ cảng.',
    descriptionEn: 'Heavy-duty yard trucks shuttling container chassis between the quay crane legs and terminal storage blocks.',
    capabilitiesVi: [
      'Cho thuê đoàn xe đầu kéo kèm tài xế phục vụ giải phóng tàu nhanh',
      'Đại tu mâm kéo thủy lực (Fifth wheel) nâng hạ nhanh',
      'Sửa chữa hệ thống phanh khí nén và hộp số tự động Allison',
      'Cung cấp phụ tùng thay thế gầm, cầu sau và lốp chịu tải'
    ],
    capabilitiesEn: [
      'Fleet rental with drivers for rapid vessel turn-around sprints',
      'Fifth-wheel hydraulic elevating system overhaul and pin renewal',
      'Pneumatic braking and Allison automatic transmission repair',
      'Undercarriage, drive axle, and terminal tire replacement'
    ],
    specs: [
      { labelVi: 'Tải trọng mâm kéo', labelEn: '5th Wheel Capacity', value: '32 - 36 Tấn (Tons)' },
      { labelVi: 'Tổng tải kéo GCW', labelEn: 'Gross Combination Weight', value: '75 - 90 Tấn' },
      { labelVi: 'Động cơ', labelEn: 'Engine Rating', value: 'Cummins QSB 6.7L' }
    ],
    supportedBrands: ['Kalmar Ottawa', 'Terberg', 'Capacity', 'MAFI']
  },
  {
    id: 'mhc',
    code: 'MHC',
    nameVi: 'Cẩu bờ di động (Mobile Harbour Crane)',
    nameEn: 'Mobile Harbour Crane (MHC)',
    descriptionVi: 'Cẩu cảng đa năng bánh lốp tải trọng nặng, có khả năng nâng hàng container, hàng rời và hàng siêu trường siêu trọng.',
    descriptionEn: 'High-versatility rubber-tyred harbor cranes for containers, bulk materials, and heavy project breakbulk cargo.',
    capabilitiesVi: [
      'Đại tu cơ cấu quay (Slewing bearing) và mâm xoay cẩu',
      'Cung cấp gầu ngoạm hàng rời (Grab) và phụ tùng cáp cẩu Teufelberger',
      'Retrofit hệ thống điều khiển PLC và cảm biến mô-men tải (LMI)',
      'Bảo trì định kỳ động cơ diesel chính và trạm bơm thủy lực biến thiên'
    ],
    capabilitiesEn: [
      'Slewing ring bearing overhaul and turntable structural inspection',
      'Bulk grab supply and high-grade Teufelberger crane rope rigging',
      'PLC control upgrade and Load Moment Indicator (LMI) calibration',
      'Main diesel engine and variable displacement hydraulic pump servicing'
    ],
    specs: [
      { labelVi: 'Sức nâng tối đa', labelEn: 'Max Lifting Capacity', value: '64 - 125 Tấn' },
      { labelVi: 'Bán kính làm việc', labelEn: 'Max Working Radius', value: '40 - 54 m' },
      { labelVi: 'Chế độ hàng rời', labelEn: 'Bulk Handling Mode', value: 'Lên tới 1,500 Tấn/giờ' }
    ],
    supportedBrands: ['Liebherr', 'Gottwald (Konecranes)', 'Italgru', 'Sennebogen']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'sihanoukville-rtg',
    titleVi: 'Đại tu & Retrofit hệ thống điều khiển RTG - Cảng PAS Sihanoukville',
    titleEn: 'Comprehensive RTG Control Retrofit & Overhaul - PAS Sihanoukville',
    client: 'Sihanoukville Autonomous Port (PAS)',
    locationVi: 'Sihanoukville, Cambodia',
    locationEn: 'Sihanoukville, Cambodia',
    country: 'cambodia',
    serviceType: 'retrofit',
    serviceNameVi: 'Nâng cấp & Đại tu',
    serviceNameEn: 'Retrofit & Overhaul',
    equipmentVi: 'Cẩu RTG bánh lốp',
    equipmentEn: 'Rubber-Tyred Gantry Crane',
    year: '2025 - 2026',
    challengeVi: 'Đội cẩu RTG đã vận hành hơn 15 năm, hệ thống điều khiển analog cũ thường xuyên báo lỗi chập chờn, tiêu hao nhiên liệu diesel lớn và thiếu phụ tùng thay thế từ hãng.',
    challengeEn: 'RTG fleet in service for 15+ years with legacy analog controls causing frequent nuisance trips, excessive fuel consumption, and obsolete spare parts.',
    solutionVi: 'NAVACO thiết kế và lắp đặt E-House chế tạo mới tại Việt Nam, nâng cấp toàn bộ sang biến tần Siemens AC Sinamics, thay thế PLC, tân trang cơ khí và sơn lại toàn bộ kết cấu theo chuẩn hàng hải.',
    solutionEn: 'NAVACO custom-engineered new E-Houses built in Vietnam, converted systems to Siemens AC Sinamics drives, updated PLCs, repowered gensets, and renewed 3-layer marine coatings.',
    resultsVi: [
      'Giảm 95% số ca dừng cẩu đột xuất do lỗi điện tử',
      'Tiết kiệm 18% nhiên liệu diesel nhờ thuật toán điều khiển biến tần thông minh',
      'Kéo dài vòng đời khai thác thêm 10 năm với chi phí chỉ bằng 25% mua cẩu mới'
    ],
    resultsEn: [
      '95% reduction in unscheduled electronic downtime',
      '18% diesel fuel savings achieved via intelligent AC drive algorithms',
      'Extended service life by 10 years at only 25% the capital cost of a new crane'
    ],
    hasBeforeAfter: true,
    beforeLabelVi: 'Trước: Tủ điện cũ analog, rỉ sét, lỗi liên tục',
    beforeLabelEn: 'Before: Corroded legacy analog panels, frequent trips',
    afterLabelVi: 'Sau: E-House hiện đại hóa Siemens AC, sạch chuẩn quốc tế',
    afterLabelEn: 'After: Modern Siemens AC E-House, pristine marine standard'
  },
  {
    id: 'cmit-cai-mep',
    titleVi: 'Hợp đồng bảo trì toàn diện FCM - Cảng Quốc tế Cái Mép (CMIT)',
    titleEn: 'Full Care Maintenance (FCM) Contract - Cai Mep Int. Terminal (CMIT)',
    client: 'CMIT (APM Terminals Joint Venture)',
    locationVi: 'Cái Mép, Bà Rịa - Vũng Tàu, Việt Nam',
    locationEn: 'Cai Mep, Ba Ria - Vung Tau, Vietnam',
    country: 'vietnam',
    serviceType: 'operation',
    serviceNameVi: 'Vận hành & Bảo trì (FCM)',
    serviceNameEn: 'Operations & Maintenance (FCM)',
    equipmentVi: 'Cẩu bờ Super Post-Panamax STS & Đội xe bãi',
    equipmentEn: 'Super Post-Panamax STS Cranes & Yard Fleet',
    year: '2024 - 2026',
    challengeVi: 'CMIT là cảng nước sâu đón các siêu tàu mẹ lớn nhất thế giới, yêu cầu độ sẵn sàng thiết bị (Equipment Availability) duy trì trên 98.5% và cam kết thời gian khắc phục sự cố dưới 30 phút.',
    challengeEn: 'CMIT berths some of the largest mega-container vessels worldwide, demanding continuous equipment availability above 98.5% and under-30-minute breakdown response.',
    solutionVi: 'NAVACO triển khai trạm kỹ thuật tại hiện trường với đội ngũ 24 kỹ sư túc trực 24/7/365, áp dụng quy trình kiểm tra dự đoán rung động và phần mềm CMMS quản trị vật tư tức thời.',
    solutionEn: 'NAVACO deployed an on-dock engineering station with 24 certified resident technicians on 24/7/365 rotation, vibration predictive analysis, and real-time CMMS inventory tracking.',
    resultsVi: [
      'Duy trì độ khả dụng của cẩu STS đạt 99.2% qua các năm',
      'Thời gian phản ứng xử lý sự cố trung bình chỉ 12 phút',
      'Được khách hàng CMIT trao chứng nhận An toàn Lao động Xuất sắc'
    ],
    resultsEn: [
      'Consistently delivered 99.2% STS crane operational availability',
      'Average incident response and dispatch time reduced to 12 minutes',
      'Awarded CMIT Outstanding Terminal Safety and Operational Partner'
    ]
  },
  {
    id: 'ppap-kalmar',
    titleVi: 'Tiếp nhận, lắp ráp và chạy thử cẩu Kalmar - Cảng PPAP Phnom Penh',
    titleEn: 'Receiving, Assembly & Commissioning of Kalmar Cranes - PPAP Phnom Penh',
    client: 'Phnom Penh Autonomous Port (PPAP)',
    locationVi: 'Phnom Penh, Cambodia',
    locationEn: 'Phnom Penh, Cambodia',
    country: 'cambodia',
    serviceType: 'retrofit',
    serviceNameVi: 'Lắp đặt & Di dời cẩu',
    serviceNameEn: 'Installation & Relocation',
    equipmentVi: 'Cẩu bờ bốc dỡ sông Kalmar',
    equipmentEn: 'Kalmar Quayside Container Cranes',
    year: '2025',
    challengeVi: 'Vận chuyển các khối siêu trường siêu trọng từ tàu biển sang sà lan sông Mekong và lắp dựng an toàn trong điều kiện nước xiết và mặt bến giới hạn tải trọng.',
    challengeEn: 'Transshipment of heavy-lift modules from ocean heavy-lift ships onto Mekong river barges, navigating fast currents and tight wharf load limits.',
    solutionVi: 'Sử dụng hệ thống cẩu nổi chuyên dụng kết hợp kích kéo thủy lực, NAVACO tiến hành lắp ráp cơ khí chính xác từng milimet và đấu nối điện đồng bộ theo tiêu chuẩn hãng Kalmar.',
    solutionEn: 'Employed high-capacity floating cranes and hydraulic jack systems, executing millimeter-accurate structural assembly and electrical hookups to Kalmar OEM standards.',
    resultsVi: [
      'Hoàn thành bàn giao sớm hơn 10 ngày so với tiến độ cam kết',
      'Tuyệt đối an toàn 0 tai nạn (Zero LTI) suốt 4,200 giờ công',
      'Được chính quyền cảng PPAP đánh giá cao và trao hợp đồng dịch vụ tiếp theo'
    ],
    resultsEn: [
      'Commissioned 10 days ahead of contractual schedule',
      'Zero lost-time injuries (Zero LTI) across 4,200 project man-hours',
      'Commended by PPAP port authority with follow-on maintenance awards'
    ]
  },
  {
    id: 'tan-thuan-crane',
    titleVi: 'Hạ tải và di dời cẩu bốc dỡ container - Cảng Tân Thuận TP.HCM',
    titleEn: 'Dismantling & Riverine Relocation of Container Cranes - Tan Thuan Port',
    client: 'Cảng Sài Gòn (Saigon Port JSC)',
    locationVi: 'Quận 7, TP. Hồ Chí Minh, Việt Nam',
    locationEn: 'District 7, Ho Chi Minh City, Vietnam',
    country: 'vietnam',
    serviceType: 'retrofit',
    serviceNameVi: 'Di dời & Hạ tải cẩu',
    serviceNameEn: 'Crane Relocation & Rigging',
    equipmentVi: 'Cẩu giàn bến cảng trọng tải 45T',
    equipmentEn: '45-Ton Quayside Gantry Cranes',
    year: '2024',
    challengeVi: 'Quy hoạch đô thị yêu cầu di dời thiết bị khỏi bến cũ Tân Thuận, cẩu có chiều cao lớn không thể đi qua cầu đường bộ, buộc phải vận chuyển bằng đường thủy nội địa qua luồng hàng hải sông Sài Gòn.',
    challengeEn: 'Urban renewal required crane relocation away from legacy Tan Thuan berths; tall structures prohibited road transport, demanding riverine barge logistics.',
    solutionVi: 'NAVACO lập phương án hạ thấp cần boom, tính toán chằng buộc thủy lực chống lật trên sà lan biển 3,000T, phối hợp Cảng vụ Hàng hải điều tiết luồng tàu an toàn tuyệt đối.',
    solutionEn: 'NAVACO lowered booms, engineered sea-fastening calculations for 3,000T maritime barges, and coordinated with Maritime Administration for seamless passage.',
    resultsVi: [
      'Di dời thành công 2 cụm cẩu an toàn tuyệt đối',
      'Tái lắp đặt và hiệu chuẩn ray tại bến mới chỉ sau 14 ngày',
      'Tiết kiệm 40% chi phí so với phương án tháo rời từng bộ phận'
    ],
    resultsEn: [
      'Safely relocated two complete gantry cranes without structural fatigue',
      'Re-installed and aligned to new quayside rail within 14 days',
      'Delivered 40% cost savings compared to full component disassembly'
    ]
  },
  {
    id: 'stoll-substation',
    titleVi: 'Thi công trạm biến áp và tủ trung thế - Dự án STOLL Phnom Penh',
    titleEn: 'Substation & Medium Voltage Switchgear Project - STOLL Phnom Penh',
    client: 'STOLL Industrial Logistics',
    locationVi: 'Phnom Penh, Cambodia',
    locationEn: 'Phnom Penh, Cambodia',
    country: 'cambodia',
    serviceType: 'infrastructure',
    serviceNameVi: 'Hạ tầng & Năng lượng',
    serviceNameEn: 'Infrastructure & Energy',
    equipmentVi: 'Trạm biến áp 22kV / 0.4kV & Tủ RMU',
    equipmentEn: '22kV / 0.4kV Substation & RMU Switchgear',
    year: '2025',
    challengeVi: 'Khu công nghiệp hậu cần cảng mới đòi hỏi nguồn điện trung thế ổn định, chống sụt áp khi khởi động đồng thời nhiều thiết bị nâng hạ công suất lớn.',
    challengeEn: 'New port logistics zone required clean, reliable medium-voltage power capable of absorbing heavy inductive inrush currents from multiple cranes.',
    solutionVi: 'Cung cấp và thi công trạm biến áp hợp bộ, tủ hợp bộ trung thế ABB/Siemens tích hợp rơ-le số bảo vệ chọn lọc và hệ thống bù công suất phản kháng tự động.',
    solutionEn: 'Supplied and installed turnkey package substation, Siemens MV switchgear with selective numerical relay protection and automated power factor correction.',
    resultsVi: [
      'Hệ số công suất cosφ duy trì ổn định > 0.98',
      'Cắt giảm nguy cơ sự cố hồ quang lan truyền xuống mức 0',
      'Đáp ứng tiêu chuẩn nghiệm thu khắt khe của Điện lực Campuchia (EDC)'
    ],
    resultsEn: [
      'Power factor cosφ consistently sustained above 0.98',
      'Eliminated arc fault propagation risks to zero',
      'Passed all EDC (Electricite du Cambodge) grid compliance tests'
    ]
  },
  {
    id: 'fleet-rental-tien-sa',
    titleVi: 'Cung cấp đội xe chụp container cho thuê - Cảng Tiên Sa & CMIT',
    titleEn: 'Fleet Rental of Container Reach Stackers - Tien Sa & CMIT Terminals',
    client: 'Cảng Đà Nẵng & CMIT',
    locationVi: 'Đà Nẵng & Cái Mép, Việt Nam',
    locationEn: 'Danang & Cai Mep, Vietnam',
    country: 'vietnam',
    serviceType: 'operation',
    serviceNameVi: 'Cho thuê thiết bị',
    serviceNameEn: 'Equipment Rental',
    equipmentVi: 'Đội xe Kalmar Reach Stacker & Đầu kéo chuyên dùng',
    equipmentEn: 'Kalmar Reach Stacker Fleet & Terminal Tractors',
    year: '2025 - 2026',
    challengeVi: 'Sản lượng container xuất nhập khẩu tăng đột biến 35% trong mùa quý 3-4, nguy cơ ùn tắc hàng hóa nếu không bổ sung năng lực gắp cont kịp thời.',
    challengeEn: 'Peak season saw container throughput spike by 35% in Q3-Q4, threatening yard congestion without immediate container handling reinforcement.',
    solutionVi: 'NAVACO điều động thần tốc cụm 4 xe Kalmar Reach Stacker 45T và 8 xe đầu kéo kèm tài xế chuyên nghiệp, hỗ trợ kỹ thuật viên kiểm tra xe mỗi sáng.',
    solutionEn: 'NAVACO rapidly mobilized 4 units of Kalmar 45T Reach Stackers and 8 yard tractors with certified drivers and daily pre-shift inspection technicians.',
    resultsVi: [
      'Giải tỏa 100% điểm nghẽn bãi trong vòng 48 giờ sau bàn giao',
      'Năng suất xếp dỡ đạt bình quân 26 moves/giờ/xe',
      'Khách hàng gia hạn hợp đồng thuê khung dài hạn'
    ],
    resultsEn: [
      'Cleared all yard choke points within 48 hours of mobilization',
      'Maintained high handling pace of 26 moves/hour per unit',
      'Client extended contract into multi-year framework agreement'
    ]
  }
];

export const PARTNERS_DATA: PartnerItem[] = [
  {
    name: 'Siemens',
    categoryVi: 'Tự động hóa & Điện cảng biển',
    categoryEn: 'Port Automation & Drives',
    descriptionVi: 'Hệ thống truyền động biến tần Sinamics, PLC Simatic, SCADA và giải pháp cấp điện bờ Onshore Power Supply (OPS).',
    descriptionEn: 'Sinamics drive systems, Simatic PLCs, SCADA, and Onshore Power Supply (OPS) shore-to-ship connection systems.',
    establishedRoleVi: 'Đối tác công nghệ tích hợp hệ thống điều khiển & điện bờ',
    establishedRoleEn: 'Certified Technology Solution Partner for Crane Automation & Shore Power'
  },
  {
    name: 'Kalmar',
    categoryVi: 'Thiết bị xếp dỡ cảng biển toàn cầu',
    categoryEn: 'Global Cargo Handling Equipment',
    descriptionVi: 'Phụ tùng chính hãng, dịch vụ bảo trì chuyên sâu và kỹ thuật lắp dựng cẩu STS, RTG, Reach Stacker.',
    descriptionEn: 'Genuine OEM parts, deep technical servicing, and erection expertise for STS, RTG, and Reach Stackers.',
    establishedRoleVi: 'Cung cấp phụ tùng và dịch vụ kỹ thuật chuyên sâu theo tiêu chuẩn hãng',
    establishedRoleEn: 'OEM Spare Parts Provider & Specialized Engineering Service'
  },
  {
    name: 'Bromma',
    categoryVi: 'Khung chụp container (Spreader)',
    categoryEn: 'Container Crane Spreaders',
    descriptionVi: 'Nhà sản xuất khung chụp container số 1 thế giới: phụ tùng chốt twistlock, cảm biến và đại tu khung chụp STS/RTG.',
    descriptionEn: 'World leader in crane spreaders: genuine twistlocks, telescoping parts, flippers and spreader refurbishments.',
    establishedRoleVi: 'Nhà phân phối phụ tùng chính hãng và dịch vụ đại tu khung chụp',
    establishedRoleEn: 'Authorized Spreader Parts Distributor & Refurbishment Specialist'
  },
  {
    name: 'Bubenzer',
    categoryVi: 'Hệ thống phanh an toàn công nghiệp',
    categoryEn: 'Industrial Fail-Safe Braking Systems',
    descriptionVi: 'Phanh khẩn cấp đĩa và tang trống cho tời nâng hạ hàng hải (PINTSCH BUBENZER Đức), má phanh và bộ thủy lực đẩy.',
    descriptionEn: 'German PINTSCH BUBENZER emergency disc & drum brakes for marine hoists, thrusters and high-wear pads.',
    establishedRoleVi: 'Đại diện kỹ thuật phân phối phụ tùng và hiệu chuẩn phanh an toàn',
    establishedRoleEn: 'Technical Representative for Safety Brake Systems & Calibration'
  },
  {
    name: 'igus',
    categoryVi: 'Hệ thống xích dẫn cáp bến cảng',
    categoryEn: 'Energy Chain & Shore Connection Systems',
    descriptionVi: 'Xích dẫn cáp nhựa chịu mặn siêu bền (e-chain) cho xe con cẩu STS, cẩu RTG và cần cuốn cáp điện bờ.',
    descriptionEn: 'Heavy-duty marine e-chains for STS trolleys, RTGs and shore-to-ship cold ironing cable booms.',
    establishedRoleVi: 'Cung cấp phụ tùng xích dẫn cáp và giải pháp dẫn hướng cáp bến',
    establishedRoleEn: 'Port Energy Chain & Cable Carrier Solution Provider'
  },
  {
    name: 'Teufelberger',
    categoryVi: 'Cáp thép đặc chủng cẩu cảng',
    categoryEn: 'Special High-Performance Steel Wire Ropes',
    descriptionVi: 'Cáp thép nén cấu trúc 8-tao và 9-tao chống xoắn của Áo chuyên dụng cho tời nâng chính và xe con cẩu container.',
    descriptionEn: 'Austrian compacted rotation-resistant 8-strand & 9-strand high-durability hoist wire ropes.',
    establishedRoleVi: 'Nhập khẩu và bấm đầu cáp, lắp đặt cáp thép cẩu đạt chứng chỉ an toàn',
    establishedRoleEn: 'Importer, rigger and certified proof-loader of crane wire ropes'
  },
  {
    name: 'Sennebogen',
    categoryVi: 'Cẩu xử lý vật liệu và hàng rời',
    categoryEn: 'Material Handlers & Heavy Duty Cranes',
    descriptionVi: 'Thiết bị bốc dỡ phế liệu, dăm gỗ, nông sản rời tại bến cảng sông biển và nhà máy sản xuất.',
    descriptionEn: 'Purpose-built material handling cranes for scrap, woodchips and bulk grains at quays and mills.',
    establishedRoleVi: 'Cung cấp phụ tùng và dịch vụ bảo trì hệ thống thủy lực',
    establishedRoleEn: 'Hydraulic servicing and specialized spare parts supply'
  },
  {
    name: 'ALIMAK',
    categoryVi: 'Thang máy công nghiệp cẩu bến',
    categoryEn: 'Industrial Rack & Pinion Crane Elevators',
    descriptionVi: 'Thang máy thanh răng chuyên dụng đưa kỹ thuật viên và tài xế lên cabin cẩu STS ở độ cao trên 50 mét an toàn.',
    descriptionEn: 'Rack-and-pinion service lifts safely elevating crane operators and technicians 50+ meters high.',
    establishedRoleVi: 'Bảo trì định kỳ, kiểm định an toàn và phụ tùng thay thế',
    establishedRoleEn: 'Periodic maintenance, safety drop testing and genuine parts support'
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'sihanoukville-series-1',
    titleVi: 'Hành trình hiện đại hóa đội cẩu RTG tại Cảng Quốc tế Sihanoukville (PAS)',
    titleEn: 'Modernizing the RTG Crane Fleet at Sihanoukville Autonomous Port (PAS)',
    summaryVi: 'Chi tiết giải pháp thay thế hệ thống điều khiển analog sang Siemens AC Sinamics do kỹ sư NAVACO thực hiện tại Campuchia.',
    summaryEn: 'Deep-dive into replacing legacy analog controls with Siemens AC Sinamics executed by NAVACO engineers in Cambodia.',
    categoryVi: 'Dự án',
    categoryEn: 'Projects',
    date: '15/10/2026',
    readTime: '4 phút'
  },
  {
    id: 'crane-wire-rope-standard',
    titleVi: 'Quy trình kiểm tra cáp cẩu và thử tải phanh an toàn Bubenzer theo chuẩn quốc tế',
    titleEn: 'International Standard Inspection for Crane Wire Ropes and Bubenzer Fail-Safe Brakes',
    summaryVi: 'Những lưu ý sống còn về kiểm tra độ mòn cáp ngầm, độ dày má phanh và lực hãm động lực học trên cẩu bờ container.',
    summaryEn: 'Vital guidelines on rope diameter reduction, brake lining wear, and dynamic torque calibration on STS cranes.',
    categoryVi: 'Kiến thức kỹ thuật',
    categoryEn: 'Technical Knowledge',
    date: '28/09/2026',
    readTime: '6 phút'
  },
  {
    id: 'shore-power-ops-siemens',
    titleVi: 'Giải pháp cấp điện bờ Onshore Power Supply (OPS): Bước ngoặt cảng xanh',
    titleEn: 'Onshore Power Supply (OPS) Solutions: A Turning Point for Green Port Decarbonization',
    summaryVi: 'Ứng dụng công nghệ biến đổi tần số tĩnh Siemens SFC giảm hơn 90% lượng khí thải lưu huỳnh và NOx khi tàu neo đậu.',
    summaryEn: 'Deploying Siemens SFC static frequency converter technology to slash SOx and NOx emissions by over 90% during vessel layovers.',
    categoryVi: 'Sự kiện & Xu hướng',
    categoryEn: 'Trends & Insights',
    date: '10/09/2026',
    readTime: '5 phút'
  }
];

export const WHY_NAVACO_POINTS = [
  {
    id: 'cert',
    titleVi: 'Kỹ thuật viên chứng chỉ quốc tế',
    titleEn: 'OEM Certified Engineers',
    descVi: 'Đội ngũ kỹ sư trưởng và kỹ thuật viên được đào tạo và cấp chứng chỉ trực tiếp từ các hãng hàng đầu như Siemens, Kalmar, Bromma, Bubenzer.',
    descEn: 'Lead engineers and field technicians formally certified by world-class manufacturers including Siemens, Kalmar, Bromma, and Bubenzer.',
    metric: '100% Certified'
  },
  {
    id: 'workshop',
    titleVi: 'Xưởng dịch vụ chuyên dụng tại Cái Mép',
    titleEn: 'Dedicated Cai Mep Overhaul Facility',
    descVi: 'Trung tâm sửa chữa, phục hồi cơ điện và chế tạo tủ E-House rộng hơn 5.000m² đặt ngay tâm điểm cụm cảng nước sâu lớn nhất Việt Nam.',
    descEn: 'Over 5,000m² specialized mechanical workshop and E-House manufacturing plant right at the heart of Vietnam\'s premier deep-water port gateway.',
    metric: '5,000+ m²'
  },
  {
    id: 'parts',
    titleVi: 'Phụ tùng chính hãng - Cam kết nguồn gốc',
    titleEn: '100% Genuine OEM Spare Parts',
    descVi: 'Nhập khẩu trực tiếp với đầy đủ CO/CQ chính hãng, loại bỏ hoàn toàn rủi ro hàng giả và đảm bảo thời gian giao hàng nhanh nhất.',
    descEn: 'Direct manufacturer imports with verified CO/CQ certificates, eliminating counterfeit risks and minimizing critical port downtime.',
    metric: '100% CO/CQ'
  },
  {
    id: 'regional',
    titleVi: 'Mạng lưới song phương Việt Nam & Cambodia',
    titleEn: 'Dual-Hub Presence: Vietnam & Cambodia',
    descVi: 'Văn phòng và trạm dịch vụ tại TP.HCM, Cái Mép, Hải Phòng và Phnom Penh/Sihanoukville, cơ động phản ứng nhanh trong mọi tình huống.',
    descEn: 'Strategic stations across HCMC, Cai Mep, Hai Phong and Phnom Penh/Sihanoukville for rapid multi-country field deployment.',
    metric: '4 Hubs'
  }
];
