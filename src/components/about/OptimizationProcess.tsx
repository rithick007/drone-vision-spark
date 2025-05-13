
import { Card, CardContent } from "@/components/ui/card";

const OptimizationProcess = () => {
  return (
    <div className="bg-muted/50 py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">The Optimization Process</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            How we transform your standard model into an efficient, drone-ready version
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 20a5 5 0 0 1 5-5h9a5 5 0 0 1 5 5v2h-19Z"></path>
                    <path d="M5.5 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
                    <path d="M12.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
                    <path d="M19.5 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">1. Analysis</h3>
                <p className="text-muted-foreground">
                  We analyze your model's architecture, identifying computational bottlenecks 
                  and opportunities for optimization.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left w-full">
                  <li>• Layer-by-layer examination</li>
                  <li>• Parameter density mapping</li>
                  <li>• Activation pattern analysis</li>
                  <li>• Computational profile generation</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M14.5 4.5v5H12a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h.5"></path>
                    <path d="M12 13.5V17"></path>
                    <path d="M12 7.5v-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">2. Optimization</h3>
                <p className="text-muted-foreground">
                  We apply state-of-the-art techniques to reduce model size and increase inference speed,
                  based on your selected parameters.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left w-full">
                  <li>• Structured and unstructured pruning</li>
                  <li>• Weight and activation quantization</li>
                  <li>• Knowledge distillation where applicable</li>
                  <li>• Layer fusion for computational efficiency</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">3. Fine-tuning</h3>
                <p className="text-muted-foreground">
                  We fine-tune the optimized model to regain any accuracy lost during the optimization process,
                  ensuring optimal performance.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left w-full">
                  <li>• Calibration with representative data distributions</li>
                  <li>• Post-training optimization</li>
                  <li>• Accuracy recovery techniques</li>
                  <li>• Platform-specific optimizations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            The entire process typically takes a few minutes, depending on your model's size and complexity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptimizationProcess;
