import React from 'react';

interface NavacoLogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'symbol-only';
  theme?: 'dark' | 'light' | 'mono-white' | 'mono-graphite';
  height?: number;
}

export const NavacoLogo: React.FC<NavacoLogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'light',
  height = 36
}) => {
  // Brand colors
  const redColor = theme === 'mono-white' ? '#FFFFFF' : theme === 'mono-graphite' ? '#42454A' : '#D6011E';
  const textColor = theme === 'dark' || theme === 'mono-white' ? '#FFFFFF' : '#42454A';

  // The distinctive NAVACO stylized 'N' mark
  const symbolSvg = (
    <svg
      viewBox="0 0 100 85"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      style={{ height: `${height}px`, width: 'auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NAVACO Symbol"
    >
      {/* Primary dynamic angled slash: left leg */}
      <path
        d="M24 80L4 80L38 6L58 6L24 80Z"
        fill={redColor}
      />
      {/* Secondary dynamic connected upward slash: right leg */}
      <path
        d="M44 80L64 80L98 6L78 6L44 80Z"
        fill={redColor}
      />
      {/* Center bridge connecting the two energetic slashes */}
      <path
        d="M27 50L45 50L75 6L57 6L27 50Z"
        fill={redColor}
      />
    </svg>
  );

  // The NAVACO bespoke geometric wordmark (with stylized inverted 'V' for 'A')
  const wordmarkSvg = (
    <svg
      viewBox="0 0 280 44"
      className="shrink-0"
      style={{ height: `${height * 0.72}px`, width: 'auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NAVACO"
    >
      {/* N */}
      <path
        d="M6 38V6H13L29 27.5V6H36V38H29L13 16.5V38H6Z"
        fill={textColor}
      />
      {/* A (chevron / inverted V style from brand guideline) */}
      <path
        d="M44 38L62 6H69L87 38H79L65.5 13.5L52 38H44Z"
        fill={textColor}
      />
      {/* V */}
      <path
        d="M93 6H101L114.5 30.5L128 6H136L118 38H111L93 6Z"
        fill={textColor}
      />
      {/* A (chevron / inverted V style) */}
      <path
        d="M142 38L160 6H167L185 38H177L163.5 13.5L150 38H142Z"
        fill={textColor}
      />
      {/* C */}
      <path
        d="M228 12.5C224 8.5 218 6 211 6C197.5 6 189 15.5 189 22C189 28.5 197.5 38 211 38C218 38 224 35.5 228 31.5L223.5 27C220.5 29.8 216 31.5 211 31.5C202 31.5 196 26.5 196 22C196 17.5 202 12.5 211 12.5C216 12.5 220.5 14.2 223.5 17L228 12.5Z"
        fill={textColor}
      />
      {/* O (rounded rectangular / geometric) */}
      <path
        d="M246 6H264C273.5 6 279 11.5 279 22C279 32.5 273.5 38 264 38H246C236.5 38 231 32.5 231 22C231 11.5 236.5 6 246 6ZM246 12.5C241 12.5 238 16 238 22C238 28 241 31.5 246 31.5H264C269 31.5 272 28 272 22C272 16 269 12.5 264 12.5H246Z"
        fill={textColor}
      />
    </svg>
  );

  if (variant === 'symbol-only') {
    return <div className={`inline-flex items-center ${className}`}>{symbolSvg}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
        {symbolSvg}
        {wordmarkSvg}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {symbolSvg}
      {wordmarkSvg}
    </div>
  );
};
