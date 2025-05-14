
import { useState, useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import ModelUploader from "../components/optimize/ModelUploader";
import OptimizationOptions from "../components/optimize/OptimizationOptions";
import OptimizationStatus from "../components/optimize/OptimizationStatus";
import ModelComparison from "../components/optimize/ModelComparison";
import OptimizationHistory from "../components/optimize/OptimizationHistory";
import ModelSuggestions from "../components/optimize/ModelSuggestions";
import { useToast } from "@/hooks/use-toast";

const Optimize = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modelType, setModelType] = useState("yolo");
  const [optimizationSettings, setOptimizationSettings] = useState({});
  const { toast } = useToast();
  
  // This would actually be hooked up to a real optimization process
  // For now it's just mocking the UI flow
  const handleStartOptimization = () => {
    setIsOptimizing(true);
    
    toast({
      title: "Optimization Started",
      description: "Your model is now being optimized using the selected parameters.",
    });

    // Mock progress updates
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      // Add status updates at certain points
      if (currentProgress === 25) {
        toast({
          title: "Analyzing model structure",
          description: "Identifying optimization opportunities...",
        });
      }
      
      if (currentProgress === 50) {
        toast({
          title: "Applying optimizations",
          description: "Pruning and quantizing model layers...",
        });
      }
      
      if (currentProgress === 75) {
        toast({
          title: "Fine-tuning model",
          description: "Recovering accuracy after optimization...",
        });
      }
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsComplete(true);
        toast({
          title: "Optimization Complete",
          description: "Your model has been successfully optimized!",
          variant: "default", // Changed from "success" to "default"
        });
      }
    }, 500);
  };
  
  // Handle applying optimization suggestions
  const handleApplySuggestions = (suggestions) => {
    setOptimizationSettings(suggestions);
    toast({
      title: "Applied Optimization Suggestions",
      description: "The recommended settings have been applied.",
    });
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
          <ModelSuggestions 
            modelType={modelType} 
            onApplySuggestions={handleApplySuggestions} 
          />
        </div>
        
        <OptimizationOptions onStartOptimization={handleStartOptimization} />
        
        <OptimizationStatus 
          isOptimizing={isOptimizing} 
          progress={progress} 
          isComplete={isComplete} 
        />
        
        {isComplete && <ModelComparison />}
        
        <OptimizationHistory />
      </div>
    </PageLayout>
  );
};

export default Optimize;
