
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechExplanation = () => {
  return (
    <div className="container px-4 md:px-6 py-12 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">How It Works</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Understanding the technologies behind model optimization for resource-constrained devices
        </p>
      </div>
      
      <Tabs defaultValue="pruning" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
          <TabsTrigger value="pruning">Pruning</TabsTrigger>
          <TabsTrigger value="quantization">Quantization</TabsTrigger>
          <TabsTrigger value="edge-ai">Edge AI</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pruning" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Neural Network Pruning</h2>
              <p className="text-muted-foreground">
                Pruning is like removing the least important connections in your neural network's "brain," 
                making it more efficient without significantly affecting its intelligence.
              </p>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">How it works:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>We identify weights in your model that contribute little to the final output</li>
                  <li>These weights are systematically removed, creating a sparser network</li>
                  <li>The model is fine-tuned to recover any lost accuracy</li>
                  <li>The result is a smaller model that requires less memory and computational power</li>
                </ul>
              </div>
            </div>
            
            <Card className="bg-muted/30 border-0">
              <CardContent className="pt-6">
                <div className="relative">
                  <svg viewBox="0 0 400 300" className="w-full h-auto">
                    {/* Original Network */}
                    <g opacity="0.3">
                      {/* Input Layer Nodes */}
                      <circle cx="50" cy="60" r="10" fill="#64748B" />
                      <circle cx="50" cy="120" r="10" fill="#64748B" />
                      <circle cx="50" cy="180" r="10" fill="#64748B" />
                      <circle cx="50" cy="240" r="10" fill="#64748B" />
                      
                      {/* Hidden Layer Nodes */}
                      <circle cx="150" cy="60" r="10" fill="#64748B" />
                      <circle cx="150" cy="120" r="10" fill="#64748B" />
                      <circle cx="150" cy="180" r="10" fill="#64748B" />
                      <circle cx="150" cy="240" r="10" fill="#64748B" />
                      
                      <circle cx="250" cy="60" r="10" fill="#64748B" />
                      <circle cx="250" cy="120" r="10" fill="#64748B" />
                      <circle cx="250" cy="180" r="10" fill="#64748B" />
                      <circle cx="250" cy="240" r="10" fill="#64748B" />
                      
                      {/* Output Layer Nodes */}
                      <circle cx="350" cy="120" r="10" fill="#64748B" />
                      <circle cx="350" cy="180" r="10" fill="#64748B" />
                      
                      {/* Connections - All */}
                      {/* Input to first hidden */}
                      <line x1="60" y1="60" x2="140" y2="60" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="60" x2="140" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="60" x2="140" y2="180" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="60" x2="140" y2="240" stroke="#64748B" strokeWidth="1" />
                      
                      <line x1="60" y1="120" x2="140" y2="60" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="120" x2="140" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="120" x2="140" y2="180" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="120" x2="140" y2="240" stroke="#64748B" strokeWidth="1" />
                      
                      <line x1="60" y1="180" x2="140" y2="60" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="180" x2="140" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="180" x2="140" y2="180" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="180" x2="140" y2="240" stroke="#64748B" strokeWidth="1" />
                      
                      <line x1="60" y1="240" x2="140" y2="60" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="240" x2="140" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="240" x2="140" y2="180" stroke="#64748B" strokeWidth="1" />
                      <line x1="60" y1="240" x2="140" y2="240" stroke="#64748B" strokeWidth="1" />
                      
                      {/* First hidden to second hidden */}
                      <line x1="160" y1="60" x2="240" y2="60" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="60" x2="240" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="60" x2="240" y2="180" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="60" x2="240" y2="240" stroke="#64748B" strokeWidth="1" />
                      
                      <line x1="160" y1="120" x2="240" y2="60" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="120" x2="240" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="120" x2="240" y2="180" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="120" x2="240" y2="240" stroke="#64748B" strokeWidth="1" />
                      
                      <line x1="160" y1="180" x2="240" y2="60" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="180" x2="240" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="180" x2="240" y2="180" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="180" x2="240" y2="240" stroke="#64748B" strokeWidth="1" />
                      
                      <line x1="160" y1="240" x2="240" y2="60" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="240" x2="240" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="240" x2="240" y2="180" stroke="#64748B" strokeWidth="1" />
                      <line x1="160" y1="240" x2="240" y2="240" stroke="#64748B" strokeWidth="1" />
                      
                      {/* Second hidden to output */}
                      <line x1="260" y1="60" x2="340" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="260" y1="60" x2="340" y2="180" stroke="#64748B" strokeWidth="1" />
                      
                      <line x1="260" y1="120" x2="340" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="260" y1="120" x2="340" y2="180" stroke="#64748B" strokeWidth="1" />
                      
                      <line x1="260" y1="180" x2="340" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="260" y1="180" x2="340" y2="180" stroke="#64748B" strokeWidth="1" />
                      
                      <line x1="260" y1="240" x2="340" y2="120" stroke="#64748B" strokeWidth="1" />
                      <line x1="260" y1="240" x2="340" y2="180" stroke="#64748B" strokeWidth="1" />
                    </g>
                    
                    {/* Pruned Network - Highlighted */}
                    {/* Input Layer Nodes */}
                    <circle cx="50" cy="60" r="12" fill="#0EA5E9" />
                    <circle cx="50" cy="120" r="12" fill="#0EA5E9" />
                    <circle cx="50" cy="180" r="12" fill="#0EA5E9" />
                    <circle cx="50" cy="240" r="12" fill="#0EA5E9" />
                    
                    {/* Hidden Layer Nodes */}
                    <circle cx="150" cy="60" r="12" fill="#0EA5E9" />
                    <circle cx="150" cy="120" r="12" fill="#0EA5E9" />
                    <circle cx="150" cy="180" r="12" fill="#0EA5E9" />
                    <circle cx="150" cy="240" r="12" fill="#0EA5E9" />
                    
                    <circle cx="250" cy="60" r="12" fill="#0EA5E9" />
                    <circle cx="250" cy="120" r="12" fill="#0EA5E9" />
                    <circle cx="250" cy="180" r="12" fill="#0EA5E9" />
                    <circle cx="250" cy="240" r="12" fill="#0EA5E9" />
                    
                    {/* Output Layer Nodes */}
                    <circle cx="350" cy="120" r="12" fill="#0EA5E9" />
                    <circle cx="350" cy="180" r="12" fill="#0EA5E9" />
                    
                    {/* Selected Connections - Only the important ones */}
                    <line x1="60" y1="60" x2="140" y2="60" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="60" y1="120" x2="140" y2="120" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="60" y1="180" x2="140" y2="180" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="60" y1="240" x2="140" y2="240" stroke="#0EA5E9" strokeWidth="3" />
                    
                    <line x1="60" y1="120" x2="140" y2="60" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="60" y1="180" x2="140" y2="120" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="60" y1="240" x2="140" y2="180" stroke="#0EA5E9" strokeWidth="3" />
                    
                    <line x1="160" y1="60" x2="240" y2="60" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="160" y1="120" x2="240" y2="120" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="160" y1="180" x2="240" y2="180" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="160" y1="240" x2="240" y2="240" stroke="#0EA5E9" strokeWidth="3" />
                    
                    <line x1="160" y1="120" x2="240" y2="60" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="160" y1="180" x2="240" y2="120" stroke="#0EA5E9" strokeWidth="3" />
                    
                    <line x1="260" y1="60" x2="340" y2="120" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="260" y1="120" x2="340" y2="120" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="260" y1="180" x2="340" y2="180" stroke="#0EA5E9" strokeWidth="3" />
                    <line x1="260" y1="240" x2="340" y2="180" stroke="#0EA5E9" strokeWidth="3" />
                  </svg>
                  
                  {/* Labels */}
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                    <div className="bg-background/80 backdrop-blur-sm rounded-md px-3 py-1 text-xs font-medium">
                      Important connections preserved
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Pruning removes less important connections (gray) while preserving critical paths (blue)
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="quantization" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Quantization</h2>
              <p className="text-muted-foreground">
                Quantization reduces the precision of numbers used in your model, similar to compressing an image 
                while preserving the most important visual details.
              </p>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">How it works:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Full precision floating point numbers (32-bit) are converted to lower precision formats (8-bit integers)</li>
                  <li>This dramatically reduces memory requirements and computational complexity</li>
                  <li>Careful calibration ensures minimal loss in model accuracy</li>
                  <li>The resulting model runs faster and requires less memory</li>
                </ul>
              </div>
            </div>
            
            <Card className="bg-muted/30 border-0">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="text-center font-medium text-sm">32-bit Float (Original)</div>
                    <div className="bg-muted rounded p-2 space-y-2 h-56 overflow-y-auto">
                      <div className="text-xs font-mono">1.8234519958</div>
                      <div className="text-xs font-mono">-2.7410583496</div>
                      <div className="text-xs font-mono">0.0089372649</div>
                      <div className="text-xs font-mono">-1.3764295578</div>
                      <div className="text-xs font-mono">0.4518296719</div>
                      <div className="text-xs font-mono">-0.7619034052</div>
                      <div className="text-xs font-mono">2.1923751831</div>
                      <div className="text-xs font-mono">-0.0034571268</div>
                      <div className="text-xs font-mono">1.0156297684</div>
                      <div className="text-xs font-mono">-1.9284651184</div>
                      <div className="text-xs font-mono">0.3746182594</div>
                      <div className="text-xs font-mono">-0.8651327491</div>
                    </div>
                    <div className="text-center text-xs text-muted-foreground">
                      4x larger file size
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-center font-medium text-sm">8-bit Int (Quantized)</div>
                    <div className="bg-primary/10 rounded p-2 space-y-2 h-56 overflow-y-auto">
                      <div className="text-xs font-mono">2</div>
                      <div className="text-xs font-mono">-3</div>
                      <div className="text-xs font-mono">0</div>
                      <div className="text-xs font-mono">-1</div>
                      <div className="text-xs font-mono">0</div>
                      <div className="text-xs font-mono">-1</div>
                      <div className="text-xs font-mono">2</div>
                      <div className="text-xs font-mono">0</div>
                      <div className="text-xs font-mono">1</div>
                      <div className="text-xs font-mono">-2</div>
                      <div className="text-xs font-mono">0</div>
                      <div className="text-xs font-mono">-1</div>
                    </div>
                    <div className="text-center text-xs text-primary font-medium">
                      75% smaller file size
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Quantization reduces numerical precision while preserving approximate values
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="edge-ai" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Edge AI for Drones</h2>
              <p className="text-muted-foreground">
                Edge AI refers to running AI algorithms locally on hardware devices rather than in the cloud, 
                critical for drones that need to make real-time decisions with limited connectivity.
              </p>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Key benefits:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Real-time processing with minimal latency</li>
                  <li>Operation in areas with limited or no connectivity</li>
                  <li>Reduced power consumption compared to continuous data streaming</li>
                  <li>Enhanced privacy by keeping data processing on-device</li>
                  <li>Improved autonomous capabilities for mission-critical operations</li>
                </ul>
              </div>
            </div>
            
            <Card className="bg-muted/30 border-0">
              <CardContent className="pt-6">
                <div className="relative">
                  <svg viewBox="0 0 400 250" className="w-full h-auto">
                    {/* Cloud */}
                    <path d="M350,50 C363,50 375,57 380,67 C390,62 400,67 400,77 C400,87 390,97 380,97 C380,107 370,117 350,117 C335,117 325,107 320,97 C315,102 305,102 300,97 C295,107 285,112 270,112 C250,112 240,97 240,82 C240,77 240,72 245,67 C235,57 240,42 250,37 C260,32 275,37 280,47 C285,37 300,27 320,32 C335,37 345,47 350,50" 
                      fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
                    <text x="320" y="85" textAnchor="middle" fontSize="12" fontWeight="bold">Cloud</text>
                    
                    {/* Server */}
                    <rect x="280" y="150" width="80" height="40" rx="5" fill="#0EA5E9" opacity="0.2" stroke="#0EA5E9" />
                    <text x="320" y="175" textAnchor="middle" fontSize="12" fontWeight="bold">Server</text>
                    
                    {/* Drone with edge processing */}
                    <g transform="translate(50, 80)">
                      {/* Drone Body */}
                      <rect x="40" y="40" width="60" height="30" rx="5" fill="url(#paint_edge)" />
                      
                      {/* Camera */}
                      <circle cx="70" cy="60" r="8" fill="#1E293B" />
                      <circle cx="70" cy="60" r="4" fill="#0EA5E9" opacity="0.8" />
                      
                      {/* Arms */}
                      <rect x="0" y="50" width="40" height="5" rx="2" fill="#334155" />
                      <rect x="100" y="50" width="40" height="5" rx="2" fill="#334155" />
                      
                      {/* Propellers */}
                      <circle cx="0" cy="50" r="15" fill="#475569" />
                      <ellipse cx="0" cy="50" rx="25" ry="3" fill="#94A3B8" opacity="0.5" />
                      
                      <circle cx="140" cy="50" r="15" fill="#475569" />
                      <ellipse cx="140" cy="50" rx="25" ry="3" fill="#94A3B8" opacity="0.5" />
                    </g>
                    
                    {/* Edge Computing */}
                    <rect x="40" y="150" width="100" height="50" rx="5" fill="#10B981" opacity="0.2" stroke="#10B981" />
                    <text x="90" y="175" textAnchor="middle" fontSize="12" fontWeight="bold">Edge Processing</text>
                    <text x="90" y="190" textAnchor="middle" fontSize="10">On-device AI</text>
                    
                    {/* Connection lines */}
                    <path d="M100,120 C160,110 250,120 280,160" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="190" y="125" textAnchor="middle" fontSize="10" fill="#64748B">Cloud Processing</text>
                    <text x="190" y="138" textAnchor="middle" fontSize="10" fill="#64748B">(high latency)</text>
                    
                    <path d="M90,120 C90,130 90,140 90,150" stroke="#10B981" strokeWidth="2" />
                    <text x="50" y="135" textAnchor="middle" fontSize="10" fill="#10B981">Edge Processing</text>
                    <text x="50" y="148" textAnchor="middle" fontSize="10" fill="#10B981">(real-time)</text>
                  </svg>
                  
                  <defs>
                    <linearGradient id="paint_edge" x1="40" y1="40" x2="100" y2="70" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0EA5E9" />
                      <stop offset="1" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Edge AI processes data locally on the drone rather than relying on cloud servers
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TechExplanation;
