
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background -z-10">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-20">
          <div className="flex flex-col justify-center space-y-8 pt-12">
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-muted-foreground tracking-wide">
                THE LEADING SOURCE FOR INDEPENDENT DRONE
              </h4>
              <h3 className="text-xl font-medium text-muted-foreground tracking-wide">
                MARKET INTELLIGENCE
              </h3>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
                DRONE
              </h1>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
                INDUSTRY
              </h1>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
                INSIGHTS
              </h1>
            </div>
            
            <div className="flex flex-col gap-4 md:flex-row">
              <Link 
                to="/optimize" 
                className="bg-muted text-foreground px-8 py-4 rounded-md text-center font-medium tracking-wide uppercase"
              >
                Industry Reports
              </Link>
              <Link 
                to="/about" 
                className="bg-primary text-foreground px-8 py-4 rounded-md text-center font-medium tracking-wide uppercase"
              >
                On-Demand Services
              </Link>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0 flex items-center justify-center">
            <DroneTechVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

// Network visualization component for the drone
const DroneTechVisualization = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Hand element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <svg width="300" height="150" viewBox="0 0 300 150" className="opacity-90">
          <defs>
            <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#444" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>
          </defs>
          <path d="M50,10 C80,0 120,0 150,10 C180,20 220,20 250,10 C280,0 300,20 290,50 C280,80 270,110 260,130 C250,150 150,150 140,130 C130,110 120,80 110,50 C100,20 20,20 50,10" 
                fill="url(#handGradient)" />
        </svg>
      </div>

      {/* Drone visualization */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 animate-float-complex z-20">
        <svg width="300" height="300" viewBox="0 0 300 300">
          <defs>
            <linearGradient id="droneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066cc" />
              <stop offset="100%" stopColor="#0044aa" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Drone body */}
          <path d="M150,100 L120,130 L100,180 L150,200 L200,180 L180,130 Z" 
                fill="url(#droneGradient)" opacity="0.8" filter="url(#glow)" />
          
          {/* Drone arms */}
          <path d="M150,150 L80,80" stroke="#0066cc" strokeWidth="3" opacity="0.7" />
          <path d="M150,150 L220,80" stroke="#0066cc" strokeWidth="3" opacity="0.7" />
          <path d="M150,150 L80,220" stroke="#0066cc" strokeWidth="3" opacity="0.7" />
          <path d="M150,150 L220,220" stroke="#0066cc" strokeWidth="3" opacity="0.7" />
          
          {/* Rotors */}
          <circle cx="80" cy="80" r="20" fill="url(#droneGradient)" opacity="0.6" />
          <circle cx="220" cy="80" r="20" fill="url(#droneGradient)" opacity="0.6" />
          <circle cx="80" cy="220" r="20" fill="url(#droneGradient)" opacity="0.6" />
          <circle cx="220" cy="220" r="20" fill="url(#droneGradient)" opacity="0.6" />
          
          {/* Tech nodes */}
          <circle cx="50" cy="120" r="25" fill="#001a33" stroke="#0066cc" strokeWidth="1" className="animate-pulse-soft" />
          <circle cx="250" cy="120" r="25" fill="#001a33" stroke="#0066cc" strokeWidth="1" className="animate-pulse-soft" />
          <circle cx="75" cy="50" r="25" fill="#001a33" stroke="#0066cc" strokeWidth="1" className="animate-pulse-soft" />
          <circle cx="150" cy="40" r="25" fill="#001a33" stroke="#0066cc" strokeWidth="1" className="animate-pulse-soft" />
          <circle cx="230" cy="260" r="25" fill="#001a33" stroke="#0066cc" strokeWidth="1" className="animate-pulse-soft" />
          
          {/* Icons in nodes */}
          <text x="50" y="125" textAnchor="middle" fill="white" fontSize="12">📊</text>
          <text x="250" y="125" textAnchor="middle" fill="white" fontSize="12">🔄</text>
          <text x="75" y="55" textAnchor="middle" fill="white" fontSize="12">📱</text>
          <text x="150" y="45" textAnchor="middle" fill="white" fontSize="12">🏢</text>
          <text x="230" y="265" textAnchor="middle" fill="white" fontSize="12">💰</text>
          
          {/* Connection lines */}
          <path d="M80,80 L50,120" className="network-line" />
          <path d="M220,80 L250,120" className="network-line" />
          <path d="M80,80 L75,50" className="network-line" />
          <path d="M150,100 L150,65" className="network-line" />
          <path d="M220,220 L230,260" className="network-line" />
          
          {/* Network nodes */}
          <circle cx="80" cy="80" r="3" className="network-node" />
          <circle cx="50" cy="120" r="3" className="network-node" />
          <circle cx="220" cy="80" r="3" className="network-node" />
          <circle cx="250" cy="120" r="3" className="network-node" />
          <circle cx="75" cy="50" r="3" className="network-node" />
          <circle cx="150" cy="65" r="3" className="network-node" />
          <circle cx="220" cy="220" r="3" className="network-node" />
          <circle cx="230" cy="260" r="3" className="network-node" />
        </svg>
      </div>
      
      {/* Data visualization dots and lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 500 500">
        <g transform="translate(10,10)">
          {Array.from({ length: 30 }).map((_, i) => (
            <g key={i}>
              <line 
                x1={Math.random() * 480} 
                y1={Math.random() * 480} 
                x2={Math.random() * 480} 
                y2={Math.random() * 480} 
                stroke="#0066cc" 
                strokeWidth="0.5" 
                opacity={Math.random() * 0.5 + 0.2}
              />
              <circle 
                cx={Math.random() * 480} 
                cy={Math.random() * 480} 
                r={Math.random() * 2 + 1} 
                fill="#0066cc" 
                opacity={Math.random() * 0.7 + 0.3}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Hero;
