
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  return (
    <section className="py-16 gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Optimize Your Models?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Drones have limited computational resources, but our optimization techniques ensure your
            computer vision models run efficiently without sacrificing performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg bg-white/50 backdrop-blur-sm">
            <CardContent className="grid gap-4 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Reduced Latency</h3>
                  <p className="text-muted-foreground mt-2">
                    Optimized models run up to 80% faster, enabling real-time object detection even on devices 
                    with limited processing power.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Extended Battery Life</h3>
                  <p className="text-muted-foreground mt-2">
                    Lower computational demands translate to reduced power consumption, allowing your drone 
                    to fly longer between charges.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg bg-white/50 backdrop-blur-sm">
            <CardContent className="grid gap-4 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 7H3.41a2 2 0 0 0-1.73 1A6.72 6.72 0 0 0 1 12a6.72 6.72 0 0 0 .68 4 2 2 0 0 0 1.73 1H12"></path>
                    <path d="M20.59 7A2 2 0 0 1 22.32 8 6.72 6.72 0 0 1 23 12a6.72 6.72 0 0 1-.68 4 2 2 0 0 1-1.73 1H12"></path>
                    <path d="M12 7v10"></path>
                    <path d="M19 7v10"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Minimal Accuracy Loss</h3>
                  <p className="text-muted-foreground mt-2">
                    Our optimization techniques maintain high detection accuracy while significantly reducing 
                    model size and computational requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Seamless Deployment</h3>
                  <p className="text-muted-foreground mt-2">
                    Download optimized models in the same format as your upload, ready to integrate with 
                    your existing drone software without compatibility issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
