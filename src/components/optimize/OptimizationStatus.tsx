
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface OptimizationStatusProps {
  isOptimizing?: boolean;
  progress?: number;
  isComplete?: boolean;
}

const OptimizationStatus = ({
  isOptimizing = false,
  progress = 0,
  isComplete = false,
}: OptimizationStatusProps) => {
  
  const getStatusText = () => {
    if (isComplete) return "Optimization Complete!";
    if (isOptimizing) return "Optimizing Your Model...";
    return "Ready to Optimize";
  };
  
  const getActionButton = () => {
    if (isComplete) {
      return (
        <Button className="w-full sm:w-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Optimized Model
        </Button>
      );
    }
    
    if (isOptimizing) {
      return (
        <Button variant="outline" disabled className="w-full sm:w-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin mr-2">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
          </svg>
          Processing...
        </Button>
      );
    }
    
    return (
      <Button className="w-full sm:w-auto">
        Start Optimization
      </Button>
    );
  };
  
  return (
    <div className="bg-card border rounded-lg p-6 w-full">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">{getStatusText()}</h3>
          {isOptimizing && !isComplete && (
            <p className="text-sm text-muted-foreground mt-1">
              This process may take a few minutes. Please don't close this page.
            </p>
          )}
          {isComplete && (
            <p className="text-sm text-muted-foreground mt-1">
              Your model has been successfully optimized and is ready for download.
            </p>
          )}
        </div>
        
        {(isOptimizing || isComplete) && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        )}
        
        <div className="flex justify-end pt-2">
          {getActionButton()}
        </div>
      </div>
    </div>
  );
};

export default OptimizationStatus;
