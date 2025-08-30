const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark background with grain texture */}
      <div 
        className="absolute inset-0 bg-[#0a0a0a]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")
          `
        }}
      />
      
      {/* SVG Network Background */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions for nodes */}
          <radialGradient id="nodeGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#c084fc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </radialGradient>
          
          <radialGradient id="nodeGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
          </radialGradient>
          
          <radialGradient id="nodeGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#9333ea" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.3" />
          </radialGradient>

          <radialGradient id="nodeGradient4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.6" />
            <stop offset="45%" stopColor="#b45cf7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
          </radialGradient>

          {/* Blur filters for depth */}
          <filter id="nearBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#fb923c" floodOpacity="0.3"/>
          </filter>
          
          <filter id="midBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5"/>
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#a855f7" floodOpacity="0.2"/>
          </filter>
          
          <filter id="farBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#3b82f6" floodOpacity="0.1"/>
          </filter>

          {/* Metallic glow filter */}
          <filter id="metallicGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
            <feColorMatrix values="1 0 0 0 0.8  0 1 0 0 0.9  0 0 1 0 1  0 0 0 1 0"/>
          </filter>
        </defs>

        {/* Connection lines (behind nodes) */}
        <g stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none">
          {/* Lines connecting near nodes */}
          <line x1="300" y1="200" x2="600" y2="350" strokeWidth="0.8" opacity="0.6" />
          <line x1="600" y1="350" x2="1100" y2="180" strokeWidth="0.6" opacity="0.5" />
          <line x1="1100" y1="180" x2="1500" y2="400" strokeWidth="0.7" opacity="0.5" />
          
          {/* Lines connecting mid-distance nodes */}
          <line x1="150" y1="500" x2="450" y2="650" strokeWidth="0.4" opacity="0.3" />
          <line x1="450" y1="650" x2="900" y2="550" strokeWidth="0.5" opacity="0.4" />
          <line x1="900" y1="550" x2="1300" y2="700" strokeWidth="0.4" opacity="0.3" />
          <line x1="1300" y1="700" x2="1650" y2="600" strokeWidth="0.3" opacity="0.3" />
          
          {/* Lines connecting far nodes (very subtle) */}
          <line x1="800" y1="100" x2="1200" y2="900" strokeWidth="0.2" opacity="0.2" />
          <line x1="200" y1="800" x2="1700" y2="300" strokeWidth="0.2" opacity="0.2" />
          <line x1="50" y1="300" x2="400" y2="450" strokeWidth="0.2" opacity="0.1" />
          <line x1="1400" y1="150" x2="1800" y2="800" strokeWidth="0.2" opacity="0.1" />
        </g>

        {/* Far nodes (most blurred, largest) */}
        <g filter="url(#farBlur)">
          <circle cx="800" cy="100" r="45" fill="url(#nodeGradient4)" opacity="0.3" />
          <circle cx="200" cy="800" r="40" fill="url(#nodeGradient3)" opacity="0.25" />
          <circle cx="1700" cy="300" r="50" fill="url(#nodeGradient2)" opacity="0.3" />
          <circle cx="50" cy="300" r="35" fill="url(#nodeGradient1)" opacity="0.2" />
          <circle cx="1800" cy="800" r="42" fill="url(#nodeGradient4)" opacity="0.25" />
        </g>

        {/* Mid-distance nodes */}
        <g filter="url(#midBlur)">
          <circle cx="150" cy="500" r="28" fill="url(#nodeGradient2)" opacity="0.5" />
          <circle cx="450" cy="650" r="32" fill="url(#nodeGradient1)" opacity="0.6" />
          <circle cx="900" cy="550" r="30" fill="url(#nodeGradient3)" opacity="0.5" />
          <circle cx="1300" cy="700" r="26" fill="url(#nodeGradient4)" opacity="0.4" />
          <circle cx="1650" cy="600" r="24" fill="url(#nodeGradient2)" opacity="0.4" />
        </g>

        {/* Near nodes (sharpest, most prominent) */}
        <g filter="url(#nearBlur)">
          <circle cx="300" cy="200" r="20" fill="url(#nodeGradient1)" opacity="0.8" />
          <circle cx="600" cy="350" r="24" fill="url(#nodeGradient2)" opacity="0.9" />
          <circle cx="1100" cy="180" r="18" fill="url(#nodeGradient3)" opacity="0.7" />
          <circle cx="1500" cy="400" r="22" fill="url(#nodeGradient1)" opacity="0.8" />
        </g>

        {/* Additional metallic edge highlights */}
        <g filter="url(#metallicGlow)" opacity="0.3">
          <circle cx="300" cy="200" r="20" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
          <circle cx="600" cy="350" r="24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
          <circle cx="1100" cy="180" r="18" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
          <circle cx="1500" cy="400" r="22" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        </g>
      </svg>

      {/* Additional dark overlay to maintain text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
    </div>
  );
};

export default HeroBackground;
