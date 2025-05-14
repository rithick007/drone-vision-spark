
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const OptimizationOptions = ({ onStartOptimization }) => {
  const [pruningEnabled, setPruningEnabled] = useState(true);
  const [quantizationEnabled, setQuantizationEnabled] = useState(true);
  const [compressionLevel, setCompressionLevel] = useState([50]);
  
  // Advanced options states
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [gradualPruning, setGradualPruning] = useState(false);
  const [pruningSchedule, setPruningSchedule] = useState("linear");
  const [useCalibrationData, setUseCalibrationData] = useState(false);
  const [perChannelQuantization, setPerChannelQuantization] = useState(false);
  const [learningRate, setLearningRate] = useState([0.001]);
  const [useKnowledgeDistillation, setUseKnowledgeDistillation] = useState(false);
  const [applyLayerFusion, setApplyLayerFusion] = useState(false);
  const [optimizeMemoryLayout, setOptimizeMemoryLayout] = useState(false);

  // Help tooltip content
  const tooltips = {
    pruning: "Removes redundant weights to reduce model size.",
    gradualPruning: "Applies pruning gradually during training for better accuracy retention.",
    pruningSchedule: "Determines how aggressively pruning is applied over time.",
    quantization: "Reduces the numerical precision of weights to decrease model size.",
    calibrationData: "Uses calibration data to improve quantization accuracy.",
    perChannelQuantization: "Applies quantization per channel rather than per tensor for better accuracy.",
    compressionLevel: "Sets the overall aggressiveness of optimization techniques.",
    learningRate: "Controls the step size during fine-tuning optimization.",
    knowledgeDistillation: "Uses a teacher model to guide the optimization process.",
    layerFusion: "Combines consecutive layers to reduce computational overhead.",
    memoryLayout: "Reorganizes model memory for optimal hardware access patterns."
  };

  const renderTooltip = (id, content) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="h-4 w-4 ml-2 text-muted-foreground inline-block cursor-help" />
        </TooltipTrigger>
        <TooltipContent side="right" align="start" className="max-w-[250px]">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Optimization Options</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="methods" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="methods">Methods</TabsTrigger>
            <TabsTrigger value="model">Model Type</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="methods" className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Label htmlFor="pruning" className="text-base">Pruning</Label>
                {renderTooltip("pruning", tooltips.pruning)}
              </div>
              <Switch
                id="pruning"
                checked={pruningEnabled}
                onCheckedChange={setPruningEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Label htmlFor="quantization" className="text-base">Quantization</Label>
                {renderTooltip("quantization", tooltips.quantization)}
              </div>
              <Switch
                id="quantization"
                checked={quantizationEnabled}
                onCheckedChange={setQuantizationEnabled}
              />
            </div>
            
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Label htmlFor="compression-level">Compression Level</Label>
                  {renderTooltip("compression", tooltips.compressionLevel)}
                </div>
                <span className="text-sm text-muted-foreground w-12 text-right">
                  {compressionLevel[0]}%
                </span>
              </div>
              <Slider
                id="compression-level"
                value={compressionLevel}
                onValueChange={setCompressionLevel}
                min={10}
                max={90}
                step={5}
              />
              <div className="flex justify-between text-xs text-muted-foreground pt-1">
                <span>Balanced</span>
                <span>Aggressive</span>
              </div>
            </div>

            <Collapsible open={showAdvanced} onOpenChange={setShowAdvanced} className="mt-6 space-y-4 border-t pt-4">
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-sm font-medium">Advanced Options</h4>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showAdvanced ? "transform rotate-180" : ""}`} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4">
                {pruningEnabled && (
                  <div className="space-y-4 border-l-2 pl-4 border-muted">
                    <h5 className="text-sm font-medium">Pruning Options</h5>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Label htmlFor="gradual-pruning" className="text-sm">Gradual Pruning</Label>
                        {renderTooltip("gradualPruning", tooltips.gradualPruning)}
                      </div>
                      <Switch
                        id="gradual-pruning"
                        checked={gradualPruning}
                        onCheckedChange={setGradualPruning}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="pruning-schedule" className="text-sm">Pruning Schedule</Label>
                        {renderTooltip("pruningSchedule", tooltips.pruningSchedule)}
                      </div>
                      <Select value={pruningSchedule} onValueChange={setPruningSchedule}>
                        <SelectTrigger id="pruning-schedule" className="w-full">
                          <SelectValue placeholder="Select schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="linear">Linear</SelectItem>
                          <SelectItem value="exponential">Exponential</SelectItem>
                          <SelectItem value="cubic">Cubic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {quantizationEnabled && (
                  <div className="space-y-4 border-l-2 pl-4 border-muted">
                    <h5 className="text-sm font-medium">Quantization Options</h5>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Label htmlFor="calibration-data" className="text-sm">Use Calibration Data</Label>
                        {renderTooltip("calibrationData", tooltips.calibrationData)}
                      </div>
                      <Switch
                        id="calibration-data"
                        checked={useCalibrationData}
                        onCheckedChange={setUseCalibrationData}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Label htmlFor="per-channel" className="text-sm">Per-Channel Quantization</Label>
                        {renderTooltip("perChannel", tooltips.perChannelQuantization)}
                      </div>
                      <Switch
                        id="per-channel"
                        checked={perChannelQuantization}
                        onCheckedChange={setPerChannelQuantization}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-4 border-l-2 pl-4 border-muted">
                  <h5 className="text-sm font-medium">Fine-tuning Options</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Label htmlFor="learning-rate" className="text-sm">Learning Rate</Label>
                        {renderTooltip("learningRate", tooltips.learningRate)}
                      </div>
                      <span className="text-sm text-muted-foreground w-16 text-right">
                        {learningRate[0].toFixed(4)}
                      </span>
                    </div>
                    <Slider
                      id="learning-rate"
                      value={learningRate}
                      onValueChange={setLearningRate}
                      min={0.0001}
                      max={0.01}
                      step={0.0001}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Label htmlFor="knowledge-distillation" className="text-sm">Use Knowledge Distillation</Label>
                      {renderTooltip("knowledgeDistillation", tooltips.knowledgeDistillation)}
                    </div>
                    <Switch
                      id="knowledge-distillation"
                      checked={useKnowledgeDistillation}
                      onCheckedChange={setUseKnowledgeDistillation}
                    />
                  </div>
                </div>

                <div className="space-y-4 border-l-2 pl-4 border-muted">
                  <h5 className="text-sm font-medium">Post-processing Options</h5>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Label htmlFor="layer-fusion" className="text-sm">Apply Layer Fusion</Label>
                      {renderTooltip("layerFusion", tooltips.layerFusion)}
                    </div>
                    <Switch
                      id="layer-fusion"
                      checked={applyLayerFusion}
                      onCheckedChange={setApplyLayerFusion}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Label htmlFor="memory-layout" className="text-sm">Optimize Memory Layout</Label>
                      {renderTooltip("memoryLayout", tooltips.memoryLayout)}
                    </div>
                    <Switch
                      id="memory-layout"
                      checked={optimizeMemoryLayout}
                      onCheckedChange={setOptimizeMemoryLayout}
                    />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </TabsContent>
          
          <TabsContent value="model" className="py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="model-type">Model Architecture</Label>
                <Select defaultValue="yolo">
                  <SelectTrigger id="model-type">
                    <SelectValue placeholder="Select model type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yolo">YOLO (v5, v7, v8)</SelectItem>
                    <SelectItem value="mobilenet">MobileNet</SelectItem>
                    <SelectItem value="efficientdet">EfficientDet</SelectItem>
                    <SelectItem value="ssd">SSD</SelectItem>
                    <SelectItem value="custom">Custom / Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="target-hardware">Target Hardware</Label>
                <Select defaultValue="generic">
                  <SelectTrigger id="target-hardware">
                    <SelectValue placeholder="Select target hardware" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="generic">Generic Drone</SelectItem>
                    <SelectItem value="raspberry-pi">Raspberry Pi</SelectItem>
                    <SelectItem value="jetson-nano">NVIDIA Jetson Nano</SelectItem>
                    <SelectItem value="intel-ncs">Intel Neural Compute Stick</SelectItem>
                    <SelectItem value="coral-tpu">Google Coral TPU</SelectItem>
                    <SelectItem value="custom">Custom / Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="export-format">Export Format</Label>
                <Select defaultValue="same">
                  <SelectTrigger id="export-format">
                    <SelectValue placeholder="Select export format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="same">Same as Input</SelectItem>
                    <SelectItem value="pt">PyTorch (.pt)</SelectItem>
                    <SelectItem value="onnx">ONNX (.onnx)</SelectItem>
                    <SelectItem value="tflite">TensorFlow Lite (.tflite)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="fine-tuning" className="text-base">Fine-tuning Pass</Label>
                  <p className="text-sm text-muted-foreground">
                    Run a fine-tuning pass to recover accuracy
                  </p>
                </div>
                <Switch id="fine-tuning" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="performance-benchmark" className="text-base">Performance Benchmark</Label>
                  <p className="text-sm text-muted-foreground">
                    Run benchmarks on optimized model
                  </p>
                </div>
                <Switch id="performance-benchmark" defaultChecked />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8">
          <Button 
            className="w-full" 
            onClick={onStartOptimization}
          >
            Start Optimization
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OptimizationOptions;
