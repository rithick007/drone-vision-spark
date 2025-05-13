
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "@/components/ui/chart";

interface ModelComparisonProps {
  originalSize?: number;
  optimizedSize?: number;
  originalSpeed?: number;
  optimizedSpeed?: number;
  originalAccuracy?: number;
  optimizedAccuracy?: number;
}

const ModelComparison = ({
  originalSize = 100,
  optimizedSize = 45,
  originalSpeed = 100,
  optimizedSpeed = 220,
  originalAccuracy = 100,
  optimizedAccuracy = 97,
}: ModelComparisonProps) => {
  
  const sizeData = [
    {
      name: "Model Size (MB)",
      original: originalSize,
      optimized: optimizedSize,
    },
  ];
  
  const speedData = [
    {
      name: "Inference Speed (FPS)",
      original: originalSpeed,
      optimized: optimizedSpeed,
    },
  ];
  
  const accuracyData = [
    {
      name: "Model Accuracy (%)",
      original: originalAccuracy,
      optimized: optimizedAccuracy,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Performance Comparison</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-center">
              {`${Math.round(100 - (optimizedSize / originalSize * 100))}%`}
              <span className="text-sm font-normal text-muted-foreground"> smaller</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={sizeData}
              index="name"
              categories={["original", "optimized"]}
              colors={["#64748B", "#0EA5E9"]}
              valueFormatter={(value) => `${value}MB`}
              yAxisWidth={30}
              height={180}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-center">
              {`${Math.round((optimizedSpeed / originalSpeed * 100) - 100)}%`}
              <span className="text-sm font-normal text-muted-foreground"> faster</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={speedData}
              index="name"
              categories={["original", "optimized"]}
              colors={["#64748B", "#0EA5E9"]}
              valueFormatter={(value) => `${value}FPS`}
              yAxisWidth={30}
              height={180}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-center">
              {`${Math.round(optimizedAccuracy / originalAccuracy * 100)}%`}
              <span className="text-sm font-normal text-muted-foreground"> accuracy retention</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={accuracyData}
              index="name"
              categories={["original", "optimized"]}
              colors={["#64748B", "#0EA5E9"]}
              valueFormatter={(value) => `${value}%`}
              yAxisWidth={30}
              height={180}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModelComparison;
