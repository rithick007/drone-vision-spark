
import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import ModelUploader from "../components/optimize/ModelUploader";
import OptimizationOptions from "../components/optimize/OptimizationOptions";
import OptimizationStatus from "../components/optimize/OptimizationStatus";
import ModelComparison from "../components/optimize/ModelComparison";

const Optimize = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // This would actually be hooked up to a real optimization process
  // For now it's just mocking the UI flow
  const handleStartOptimization = () => {
    setIsOptimizing(true);
    
    // Mock progress updates
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 500);
  };
  
  return (
    <PageLayout>
      <div className="container px-4 md:px-6 py-12 space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Optimize Your Model</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Upload and optimize your computer vision model for drone deployment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ModelUploader />
          <OptimizationOptions />
        </div>
        
        <OptimizationStatus 
          isOptimizing={isOptimizing} 
          progress={progress} 
          isComplete={isComplete} 
        />
        
        {isComplete && <ModelComparison />}
      </div>
    </PageLayout>
  );
};

export default Optimize;
