const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark base background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Grainy texture overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      
      {/* SVG Network Background */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic gradients for realistic spheres */}
          <radialGradient id="metallicGradient1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#4a9eff" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#1e5799" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0a2e5c" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="metallicGradient2">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#7c4dff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3a1f5c" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="metallicGradient3">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#ff9a56" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c26b2d" stopOpacity="0.15" />
          </radialGradient>
          
          {/* Line glow gradient */}
          <linearGradient id="lineGlow">
            <stop offset="0%" stopColor="#4a9eff" stopOpacity="0" />
            <stop offset="50%" stopColor="#4a9eff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4a9eff" stopOpacity="0" />
          </linearGradient>
          
          {/* Blur filters for depth perspective */}
          <filter id="nearBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodOpacity="0.3" floodColor="#4a9eff" />
          </filter>
          <filter id="midBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodOpacity="0.2" floodColor="#4a9eff" />
          </filter>
          <filter id="farBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>
          
          {/* Enhanced metallic effect */}
          <filter id="metallicEffect">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
            <feSpecularLighting result="specOut" specularExponent="60" lighting-color="#ffffff" surfaceScale="2">
              <fePointLight x="50" y="50" z="300"/>
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2"/>
            <feComposite in="specOut2" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
          </filter>
        </defs>

        {/* Enhanced network connections with glow */}
        <g className="opacity-40">
          <line x1="20%" y1="30%" x2="35%" y2="25%" stroke="url(#lineGlow)" strokeWidth="1.5" />
          <line x1="35%" y1="25%" x2="50%" y2="40%" stroke="url(#lineGlow)" strokeWidth="1.5" />
          <line x1="50%" y1="40%" x2="65%" y2="35%" stroke="url(#lineGlow)" strokeWidth="1.5" />
          <line x1="65%" y1="35%" x2="80%" y2="45%" stroke="url(#lineGlow)" strokeWidth="1.5" />
          <line x1="35%" y1="25%" x2="40%" y2="60%" stroke="#4a9eff" strokeWidth="0.8" opacity="0.3" />
          <line x1="40%" y1="60%" x2="60%" y2="70%" stroke="#4a9eff" strokeWidth="0.8" opacity="0.3" />
          <line x1="60%" y1="70%" x2="75%" y2="65%" stroke="#4a9eff" strokeWidth="0.8" opacity="0.3" />
          <line x1="20%" y1="30%" x2="25%" y2="50%" stroke="#4a9eff" strokeWidth="0.5" opacity="0.2" />
          <line x1="25%" y1="50%" x2="45%" y2="75%" stroke="#4a9eff" strokeWidth="0.5" opacity="0.2" />
          <line x1="80%" y1="45%" x2="85%" y2="30%" stroke="#4a9eff" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* Far nodes (background) - heavily blurred */}
        <g filter="url(#farBlur)" opacity="0.4">
          <circle cx="25%" cy="50%" r="12" fill="url(#metallicGradient1)" />
          <circle cx="70%" cy="20%" r="10" fill="url(#metallicGradient2)" />
          <circle cx="85%" cy="60%" r="11" fill="url(#metallicGradient3)" />
          <circle cx="15%" cy="80%" r="8" fill="url(#metallicGradient1)" />
        </g>

        {/* Mid nodes - slightly blurred */}
        <g filter="url(#midBlur)" opacity="0.6">
          <circle cx="40%" cy="60%" r="18" fill="url(#metallicGradient2)" />
          <circle cx="60%" cy="70%" r="16" fill="url(#metallicGradient1)" />
          <circle cx="75%" cy="65%" r="17" fill="url(#metallicGradient3)" />
          <circle cx="45%" cy="75%" r="14" fill="url(#metallicGradient2)" />
        </g>

        {/* Near nodes (foreground) - sharp and detailed */}
        <g filter="url(#nearBlur)">
          <circle cx="20%" cy="30%" r="26" fill="url(#metallicGradient1)" filter="url(#metallicEffect)" />
          <circle cx="35%" cy="25%" r="24" fill="url(#metallicGradient2)" filter="url(#metallicEffect)" />
          <circle cx="50%" cy="40%" r="30" fill="url(#metallicGradient3)" filter="url(#metallicEffect)" />
          <circle cx="65%" cy="35%" r="22" fill="url(#metallicGradient1)" filter="url(#metallicEffect)" />
          <circle cx="80%" cy="45%" r="25" fill="url(#metallicGradient2)" filter="url(#metallicEffect)" />
        </g>

        {/* Additional highlight on nearest nodes */}
        <g className="opacity-50">
          <circle cx="20%" cy="30%" r="26" fill="none" stroke="#ffffff" strokeWidth="0.3" />
          <circle cx="50%" cy="40%" r="30" fill="none" stroke="#ffffff" strokeWidth="0.3" />
        </g>
      </svg>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/30 to-black/50" />
    </div>
  );
};

export default HeroBackground;