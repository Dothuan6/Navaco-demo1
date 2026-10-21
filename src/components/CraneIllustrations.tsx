import React from 'react';

interface CraneIllustrationProps {
  type: 'STS' | 'RTG' | 'RS' | 'ECH' | 'TT' | 'MHC';
  className?: string;
  theme?: 'dark' | 'light';
}

export const CraneIllustration: React.FC<CraneIllustrationProps> = ({
  type,
  className = 'w-full h-48',
  theme = 'light'
}) => {
  const strokeColor = theme === 'dark' ? '#94A3B8' : '#42454A';
  const accentRed = '#D6011E';
  const fillSubtle = theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)';

  switch (type) {
    case 'STS':
      // Ship-to-Shore Crane vector
      return (
        <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="260" fill={fillSubtle} rx="8" />
          {/* Waterline and dock line */}
          <line x1="10" y1="230" x2="390" y2="230" stroke={strokeColor} strokeWidth="2" />
          <line x1="20" y1="240" x2="160" y2="240" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Quay crane legs */}
          <line x1="60" y1="230" x2="110" y2="90" stroke={strokeColor} strokeWidth="3.5" />
          <line x1="160" y1="230" x2="110" y2="90" stroke={strokeColor} strokeWidth="3.5" />
          <line x1="110" y1="90" x2="160" y2="90" stroke={strokeColor} strokeWidth="3" />
          <line x1="160" y1="90" x2="210" y2="230" stroke={strokeColor} strokeWidth="3.5" />
          <line x1="110" y1="230" x2="160" y2="90" stroke={strokeColor} strokeWidth="3.5" />
          {/* Cross bracings */}
          <line x1="75" y1="180" x2="145" y2="180" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="125" y1="180" x2="195" y2="180" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="88" y1="135" x2="132" y2="135" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="138" y1="135" x2="182" y2="135" stroke={strokeColor} strokeWidth="1.5" />

          {/* Boom (outreach over vessel) */}
          <line x1="40" y1="90" x2="360" y2="90" stroke={strokeColor} strokeWidth="4" />
          <line x1="40" y1="75" x2="360" y2="75" stroke={strokeColor} strokeWidth="2" />
          {/* Boom trusses */}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={i} x1={60 + i * 30} y1="75" x2={75 + i * 30} y2="90" stroke={strokeColor} strokeWidth="1" />
          ))}

          {/* A-frame apex */}
          <line x1="110" y1="75" x2="135" y2="20" stroke={strokeColor} strokeWidth="3" />
          <line x1="160" y1="75" x2="135" y2="20" stroke={strokeColor} strokeWidth="3" />
          {/* Forestay & Backstay forestay tension ropes */}
          <line x1="135" y1="20" x2="340" y2="75" stroke={accentRed} strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="135" y1="20" x2="50" y2="75" stroke={accentRed} strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Trolley and Spreader */}
          <rect x="250" y="85" width="28" height="12" fill={strokeColor} rx="2" />
          <line x1="258" y1="97" x2="258" y2="160" stroke={strokeColor} strokeWidth="1" />
          <line x1="270" y1="97" x2="270" y2="160" stroke={strokeColor} strokeWidth="1" />
          
          {/* Spreader holding 40ft container */}
          <rect x="240" y="160" width="48" height="8" fill={accentRed} />
          <rect x="236" y="168" width="56" height="34" fill="#3B82F6" stroke={strokeColor} strokeWidth="1.5" rx="1" />
          {/* Container corrugation details */}
          <line x1="248" y1="172" x2="248" y2="198" stroke="#1D4ED8" strokeWidth="1" />
          <line x1="258" y1="172" x2="258" y2="198" stroke="#1D4ED8" strokeWidth="1" />
          <line x1="268" y1="172" x2="268" y2="198" stroke="#1D4ED8" strokeWidth="1" />
          <line x1="278" y1="172" x2="278" y2="198" stroke="#1D4ED8" strokeWidth="1" />

          {/* Wheels / Gantry bogies */}
          <circle cx="65" cy="233" r="5" fill={strokeColor} />
          <circle cx="80" cy="233" r="5" fill={strokeColor} />
          <circle cx="190" cy="233" r="5" fill={strokeColor} />
          <circle cx="205" cy="233" r="5" fill={strokeColor} />
        </svg>
      );

    case 'RTG':
      // Rubber-Tyred Gantry Crane
      return (
        <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="260" fill={fillSubtle} rx="8" />
          <line x1="20" y1="230" x2="380" y2="230" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="6 4" />

          {/* Gantry Main Horizontal Beams */}
          <rect x="60" y="50" width="280" height="18" fill={strokeColor} rx="2" />
          <line x1="60" y1="58" x2="340" y2="58" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />

          {/* Left Vertical Portal Leg */}
          <line x1="90" y1="68" x2="75" y2="210" stroke={strokeColor} strokeWidth="5" />
          <line x1="120" y1="68" x2="105" y2="210" stroke={strokeColor} strokeWidth="5" />
          <line x1="82" y1="135" x2="112" y2="135" stroke={strokeColor} strokeWidth="3" />

          {/* Right Vertical Portal Leg */}
          <line x1="280" y1="68" x2="295" y2="210" stroke={strokeColor} strokeWidth="5" />
          <line x1="310" y1="68" x2="325" y2="210" stroke={strokeColor} strokeWidth="5" />
          <line x1="288" y1="135" x2="318" y2="135" stroke={strokeColor} strokeWidth="3" />

          {/* Diesel Genset & E-House on top/side */}
          <rect x="65" y="32" width="55" height="18" fill={accentRed} rx="2" />
          <rect x="125" y="34" width="40" height="16" fill={strokeColor} rx="1" />

          {/* Trolley and Hoist Mechanism */}
          <rect x="180" y="68" width="40" height="14" fill={strokeColor} rx="2" />
          <line x1="190" y1="82" x2="190" y2="135" stroke={strokeColor} strokeWidth="1.2" />
          <line x1="210" y1="82" x2="210" y2="135" stroke={strokeColor} strokeWidth="1.2" />

          {/* Spreader & Stacked Containers below */}
          <rect x="175" y="135" width="50" height="8" fill={accentRed} rx="1" />
          {/* Container suspended */}
          <rect x="168" y="143" width="64" height="30" fill="#E2E8F0" stroke={strokeColor} strokeWidth="1.5" rx="1" />
          
          {/* Rubber Tyre Bogies (4 corners) */}
          {/* Left tyres */}
          <rect x="68" y="210" width="45" height="18" fill={strokeColor} rx="3" />
          <circle cx="78" cy="225" r="9" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          <circle cx="102" cy="225" r="9" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />

          {/* Right tyres */}
          <rect x="288" y="210" width="45" height="18" fill={strokeColor} rx="3" />
          <circle cx="298" cy="225" r="9" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          <circle cx="322" cy="225" r="9" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        </svg>
      );

    case 'RS':
      // Reach Stacker
      return (
        <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="260" fill={fillSubtle} rx="8" />
          <line x1="20" y1="230" x2="380" y2="230" stroke={strokeColor} strokeWidth="1.5" />

          {/* Heavy Chassis Frame */}
          <path d="M50 185H220L240 215H45L50 185Z" fill={strokeColor} />
          {/* Counterweight rear */}
          <rect x="40" y="150" width="45" height="40" fill={accentRed} rx="3" />
          {/* Operator Cabin */}
          <rect x="110" y="140" width="45" height="35" fill={theme === 'dark' ? '#334155' : '#E2E8F0'} stroke={strokeColor} strokeWidth="2" rx="3" />
          <rect x="120" y="146" width="28" height="16" fill="#93C5FD" opacity="0.6" rx="2" />

          {/* Telescopic Boom extending upwards */}
          <line x1="85" y1="165" x2="280" y2="65" stroke={accentRed} strokeWidth="18" strokeLinecap="round" />
          <line x1="85" y1="165" x2="280" y2="65" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
          {/* Boom hydraulic lift cylinder */}
          <line x1="140" y1="185" x2="195" y2="110" stroke={strokeColor} strokeWidth="7" />

          {/* Spreader suspended over container */}
          <line x1="280" y1="65" x2="285" y2="95" stroke={strokeColor} strokeWidth="4" />
          <rect x="245" y="95" width="80" height="12" fill={accentRed} rx="2" />
          {/* 40ft Container held */}
          <rect x="235" y="107" width="100" height="42" fill="#0284C7" stroke={strokeColor} strokeWidth="1.5" rx="2" />
          <line x1="260" y1="112" x2="260" y2="144" stroke="#0369A1" strokeWidth="1" />
          <line x1="285" y1="112" x2="285" y2="144" stroke="#0369A1" strokeWidth="1" />
          <line x1="310" y1="112" x2="310" y2="144" stroke="#0369A1" strokeWidth="1" />

          {/* Front heavy drive axle & wheels */}
          <circle cx="215" cy="215" r="22" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
          <circle cx="215" cy="215" r="9" fill="#94A3B8" />

          {/* Rear steer axle & wheels */}
          <circle cx="80" cy="218" r="18" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
          <circle cx="80" cy="218" r="7" fill="#94A3B8" />
        </svg>
      );

    case 'ECH':
      // Empty Container Handler with high mast
      return (
        <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="260" fill={fillSubtle} rx="8" />
          <line x1="20" y1="230" x2="380" y2="230" stroke={strokeColor} strokeWidth="1.5" />

          {/* High Stacking Mast (Vertical) */}
          <line x1="225" y1="25" x2="225" y2="215" stroke={strokeColor} strokeWidth="6" />
          <line x1="245" y1="25" x2="245" y2="215" stroke={strokeColor} strokeWidth="6" />
          {/* Mast horizontal bracing */}
          <line x1="225" y1="70" x2="245" y2="70" stroke={strokeColor} strokeWidth="2" />
          <line x1="225" y1="120" x2="245" y2="120" stroke={strokeColor} strokeWidth="2" />
          <line x1="225" y1="170" x2="245" y2="170" stroke={strokeColor} strokeWidth="2" />

          {/* Carriage & Side-Pick Spreader at height */}
          <rect x="235" y="45" width="16" height="20" fill={accentRed} />
          <rect x="248" y="50" width="75" height="10" fill={accentRed} rx="1" />
          {/* High empty container held */}
          <rect x="245" y="60" width="90" height="34" fill="#10B981" stroke={strokeColor} strokeWidth="1.5" rx="1" />

          {/* Heavy Truck Body */}
          <path d="M70 170H220L230 215H60L70 170Z" fill={strokeColor} />
          <rect x="55" y="145" width="40" height="35" fill={accentRed} rx="2" />
          {/* Elevated Cabin for view */}
          <rect x="125" y="115" width="45" height="45" fill={theme === 'dark' ? '#334155' : '#E2E8F0'} stroke={strokeColor} strokeWidth="2" rx="3" />
          <rect x="135" y="122" width="28" height="22" fill="#93C5FD" opacity="0.6" rx="2" />

          {/* Big front drive wheels */}
          <circle cx="215" cy="215" r="22" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
          <circle cx="215" cy="215" r="9" fill="#94A3B8" />

          {/* Rear steer wheels */}
          <circle cx="85" cy="218" r="18" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
          <circle cx="85" cy="218" r="7" fill="#94A3B8" />
        </svg>
      );

    case 'TT':
      // Terminal Tractor with 5th wheel
      return (
        <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="260" fill={fillSubtle} rx="8" />
          <line x1="20" y1="230" x2="380" y2="230" stroke={strokeColor} strokeWidth="1.5" />

          {/* Chassis */}
          <rect x="70" y="180" width="180" height="25" fill={strokeColor} rx="3" />
          
          {/* Distinctive Offset High-Visibility Cabin */}
          <path d="M190 110H240V185H175V150L190 110Z" fill={accentRed} stroke={strokeColor} strokeWidth="1.5" />
          {/* Panoramic sliding door & glass */}
          <rect x="195" y="118" width="36" height="32" fill="#93C5FD" opacity="0.6" rx="2" />
          <line x1="240" y1="130" x2="250" y2="140" stroke={strokeColor} strokeWidth="2" />

          {/* Hydraulic 5th wheel plate */}
          <path d="M95 165L125 160L125 178L95 178Z" fill={accentRed} />
          {/* Chassis gooseneck trailer hitch preview */}
          <line x1="110" y1="160" x2="40" y2="155" stroke={strokeColor} strokeWidth="4" strokeDasharray="4 2" />

          {/* Heavy Rear Dual Tyres */}
          <circle cx="115" cy="215" r="20" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <circle cx="115" cy="215" r="8" fill="#94A3B8" />

          {/* Front Steer Wheel */}
          <circle cx="215" cy="215" r="19" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <circle cx="215" cy="215" r="8" fill="#94A3B8" />
        </svg>
      );

    case 'MHC':
      // Mobile Harbour Crane
      return (
        <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="260" fill={fillSubtle} rx="8" />
          <line x1="20" y1="230" x2="380" y2="230" stroke={strokeColor} strokeWidth="1.5" />

          {/* Multi-Axle Mobile Undercarriage with Outriggers */}
          <rect x="90" y="200" width="130" height="18" fill={strokeColor} rx="3" />
          {/* Outrigger hydraulic pads */}
          <line x1="75" y1="210" x2="90" y2="210" stroke={accentRed} strokeWidth="4" />
          <line x1="75" y1="210" x2="75" y2="228" stroke={strokeColor} strokeWidth="4" />
          <rect x="68" y="228" width="16" height="4" fill={strokeColor} />

          <line x1="220" y1="210" x2="235" y2="210" stroke={accentRed} strokeWidth="4" />
          <line x1="235" y1="210" x2="235" y2="228" stroke={strokeColor} strokeWidth="4" />
          <rect x="228" y="228" width="16" height="4" fill={strokeColor} />

          {/* Multi-wheels on undercarriage */}
          <circle cx="105" cy="222" r="9" fill="#1E293B" />
          <circle cx="125" cy="222" r="9" fill="#1E293B" />
          <circle cx="145" cy="222" r="9" fill="#1E293B" />
          <circle cx="165" cy="222" r="9" fill="#1E293B" />
          <circle cx="185" cy="222" r="9" fill="#1E293B" />
          <circle cx="205" cy="222" r="9" fill="#1E293B" />

          {/* Slewing Turntable & Tower */}
          <rect x="135" y="185" width="40" height="15" fill={accentRed} rx="2" />
          <line x1="155" y1="185" x2="155" y2="70" stroke={strokeColor} strokeWidth="8" />
          
          {/* Tower Top & Operator Cabin */}
          <rect x="145" y="55" width="28" height="24" fill={strokeColor} rx="2" />
          <rect x="160" y="85" width="22" height="26" fill={theme === 'dark' ? '#334155' : '#E2E8F0'} stroke={strokeColor} strokeWidth="1.5" rx="2" />
          <rect x="165" y="90" width="12" height="15" fill="#93C5FD" opacity="0.6" />

          {/* Heavy Lattice Boom reaching outward */}
          <line x1="160" y1="70" x2="330" y2="35" stroke={accentRed} strokeWidth="5" />
          <line x1="160" y1="85" x2="330" y2="35" stroke={strokeColor} strokeWidth="4" />
          <line x1="145" y1="55" x2="330" y2="35" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Hoist Rope & Heavy Clamshell / Hook */}
          <line x1="330" y1="35" x2="330" y2="140" stroke={strokeColor} strokeWidth="1.2" />
          <path d="M320 140L340 140L335 158L325 158Z" fill={strokeColor} />
          {/* Cargo Grab Bucket */}
          <path d="M315 158L330 178L345 158Z" fill={accentRed} stroke={strokeColor} strokeWidth="1" />
        </svg>
      );

    default:
      return null;
  }
};
