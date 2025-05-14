
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart } from "@/components/ui/bar-chart";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

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
  const [activeTab, setActiveTab] = useState("overview");
  
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

  // New radar chart data
  const radarData = [
    { metric: "Size Reduction", original: 50, optimized: 100 },
    { metric: "Speed Improvement", original: 50, optimized: 90 },
    { metric: "Accuracy Retention", original: 100, optimized: 97 },
    { metric: "Power Efficiency", original: 50, optimized: 85 },
    { metric: "Memory Usage", original: 70, optimized: 40 },
  ];

  // Hardware impact data
  const hardwareImpactData = [
    {
      name: "Battery Usage (mAh/hour)",
      original: 250,
      optimized: 120,
    },
    {
      name: "Memory Footprint (MB)",
      original: 450,
      optimized: 210,
    },
    {
      name: "CPU Load (%)",
      original: 65,
      optimized: 35,
    },
  ];

  // Layer-by-layer analysis data
  const layerAnalysisData = [
    { name: "Conv1", original: 2.5, optimized: 1.1 },
    { name: "Conv2", original: 5.3, optimized: 2.2 },
    { name: "Conv3", original: 8.7, optimized: 4.0 },
    { name: "FC1", original: 15.2, optimized: 6.8 },
    { name: "FC2", original: 10.9, optimized: 4.5 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Performance Comparison</h2>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="hardware">Hardware</TabsTrigger>
            <TabsTrigger value="detailed">Detailed</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <TabsContent value="overview" className={activeTab === "overview" ? "block" : "hidden"}>
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
        
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Performance Radar</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ChartContainer config={{}} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Original"
                    dataKey="original"
                    stroke="#64748B"
                    fill="#64748B"
                    fillOpacity={0.5}
                  />
                  <Radar
                    name="Optimized"
                    dataKey="optimized"
                    stroke="#0EA5E9"
                    fill="#0EA5E9"
                    fillOpacity={0.5}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="hardware" className={activeTab === "hardware" ? "block" : "hidden"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Hardware Resource Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={hardwareImpactData}
                index="name"
                categories={["original", "optimized"]}
                colors={["#64748B", "#0EA5E9"]}
                yAxisWidth={40}
                height={300}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Estimated Flight Time Impact</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-[300px]">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-primary">+45%</div>
                <div className="text-lg text-muted-foreground mt-2">Extended Flight Time</div>
              </div>
              <div className="w-full max-w-md space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Original Flight Time</span>
                  <span className="font-medium">~20 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Optimized Flight Time</span>
                  <span className="font-medium">~29 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Power Consumption</span>
                  <span className="font-medium text-green-500">-52% reduction</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="detailed" className={activeTab === "detailed" ? "block" : "hidden"}>
        <Card>
          <CardHeader>
            <CardTitle>Layer-by-layer Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                This chart shows the memory usage (MB) of each layer before and after optimization.
              </p>
            </div>
            <div className="h-[400px]">
              <BarChart 
                data={layerAnalysisData}
                index="name"
                categories={["original", "optimized"]}
                colors={["#64748B", "#0EA5E9"]}
                valueFormatter={(value) => `${value}MB`}
                yAxisWidth={30}
                height={350}
              />
            </div>
            <div className="mt-8 border-t pt-4">
              <h4 className="font-medium mb-2">Optimization Summary</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-32 font-medium">Conv Layers:</div>
                  <div className="flex-1">Weight quantization (8-bit) and channel pruning (30%)</div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 font-medium">FC Layers:</div>
                  <div className="flex-1">Aggressive pruning (60%) and quantization (4-bit)</div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 font-medium">Activation:</div>
                  <div className="flex-1">ReLU fusion and lookup table optimization</div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 font-medium">Memory:</div>
                  <div className="flex-1">Buffer sharing and alignment optimization</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
};

export default ModelComparison;
