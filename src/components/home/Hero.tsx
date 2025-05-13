
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { CloudSun } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
      
      {/* Moving clouds */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <MovingClouds />
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Smarter Models for Drones — <span className="gradient-text">Directly From Your Browser.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Upload your object detection models and simulate pruning & quantization online 
                for drone and edge AI use cases.
              </p>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mt-2">
                <CloudSun className="w-3 h-3 mr-1" /> 100% Web-Based, No Hardware Required
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="font-medium">
                <Link to="/optimize">Upload a Model to Optimize</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <EnhancedDroneAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

// Moving clouds component with more cloud elements
const MovingClouds = () => {
  return (
    <div className="absolute inset-0">
      <div className="cloud cloud-1 opacity-70"></div>
      <div className="cloud cloud-2 opacity-60"></div>
      <div className="cloud cloud-3 opacity-80"></div>
      <div className="cloud cloud-4 opacity-50"></div>
      <div className="cloud cloud-5 opacity-70"></div>
      {/* Additional clouds */}
      <div className="cloud cloud-6 opacity-65"></div>
      <div className="cloud cloud-7 opacity-55"></div>
      <div className="cloud cloud-8 opacity-75"></div>
      <div className="cloud cloud-9 opacity-40"></div>
    </div>
  );
};

// Enhanced drone animation with more movement
const EnhancedDroneAnimation = () => {
  const propellerRef1 = useRef<SVGEllipseElement>(null);
  const propellerRef2 = useRef<SVGEllipseElement>(null);
  const propellerRef3 = useRef<SVGEllipseElement>(null);
  const propellerRef4 = useRef<SVGEllipseElement>(null);
  
  useEffect(() => {
    // Offset propeller speeds slightly to create more natural movement
    const propellers = [propellerRef1, propellerRef2, propellerRef3, propellerRef4];
    const speeds = [0.15, 0.16, 0.14, 0.17]; // slightly different speeds
    
    propellers.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.animationDuration = `${speeds[i]}s`;
      }
    });
  }, []);
  
  return (
    <div className="animate-float-complex">
      <svg 
        width="500" 
        height="400" 
        viewBox="0 0 800 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Cloud element to show simulation */}
        <path d="M600 180 C630 180 650 160 650 130 C650 100 630 80 600 80 C585 80 570 90 565 105 C560 85 540 70 515 70 C485 70 460 95 460 125 C460 135 463 145 470 155 C450 160 435 180 435 200 C435 225 455 245 480 245 L600 245 C625 245 645 225 645 200 C645 190 640 180 630 175" 
          fill="#E2E8F0" fillOpacity="0.5" stroke="#94A3B8" strokeWidth="2" />
        
        {/* Drone Body - sleeker design */}
        <rect x="350" y="250" width="100" height="50" rx="15" fill="url(#paint0_linear)" />
        <ellipse cx="400" cy="250" rx="50" ry="15" fill="url(#paint0_linear)" />
        
        {/* Camera Lens with improved detail */}
        <circle cx="400" cy="285" r="15" fill="#1E293B" />
        <circle cx="400" cy="285" r="10" fill="#0EA5E9" opacity="0.8" />
        <circle cx="400" cy="285" r="5" fill="white" opacity="0.6" />
        <circle cx="400" cy="285" r="2" fill="#FFFFFF" />

        {/* Arms with improved design */}
        <rect x="450" y="265" width="100" height="10" rx="5" fill="#334155" />
        <rect x="250" y="265" width="100" height="10" rx="5" fill="#334155" />
        <rect x="390" y="165" width="20" height="100" rx="10" fill="#334155" />
        <rect x="390" y="300" width="20" height="100" rx="10" fill="#334155" />

        {/* Motors and Propellers */}
        <circle cx="250" cy="265" r="20" fill="url(#paint1_radial)" />
        <ellipse ref={propellerRef1} cx="250" cy="265" rx="45" ry="5" fill="#94A3B8" opacity="0.6" className="animate-spin" style={{ transformOrigin: '250px 265px' }} />
        
        <circle cx="550" cy="265" r="20" fill="url(#paint1_radial)" />
        <ellipse ref={propellerRef2} cx="550" cy="265" rx="45" ry="5" fill="#94A3B8" opacity="0.6" className="animate-spin" style={{ transformOrigin: '550px 265px' }} />
        
        <circle cx="400" cy="165" r="20" fill="url(#paint1_radial)" />
        <ellipse ref={propellerRef3} cx="400" cy="165" rx="45" ry="5" fill="#94A3B8" opacity="0.6" className="animate-spin" style={{ transformOrigin: '400px 165px' }} />
        
        <circle cx="400" cy="400" r="20" fill="url(#paint1_radial)" />
        <ellipse ref={propellerRef4} cx="400" cy="400" rx="45" ry="5" fill="#94A3B8" opacity="0.6" className="animate-spin" style={{ transformOrigin: '400px 400px' }} />

        {/* Signal Beams Animation - Connecting to cloud with pulsing effect */}
        <path className="animate-pulse" d="M400 310 L435 210" stroke="#0EA5E9" strokeWidth="3" strokeDasharray="5,5" opacity="0.8" />
        <path className="animate-pulse-soft" d="M450 265 L480 200" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
        <path className="animate-pulse" d="M350 265 L520 190" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />

        {/* Detection Boxes - Multiple to show activity */}
        <rect x="370" y="350" width="60" height="60" rx="5" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" fill="none" className="animate-pulse-soft" />
        <rect x="320" y="380" width="40" height="40" rx="5" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="5,5" fill="none" className="animate-pulse" />
        
        {/* LED indicator lights on drone body */}
        <circle cx="360" cy="260" r="3" fill="#EF4444" className="animate-pulse" />
        <circle cx="440" cy="260" r="3" fill="#10B981" className="animate-pulse-soft" />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="paint0_linear" x1="350" y1="250" x2="450" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0EA5E9" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 265) rotate(90) scale(20)">
            <stop stopColor="#64748B" />
            <stop offset="1" stopColor="#334155" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
