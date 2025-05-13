
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

const OptimizationOptions = () => {
  const [pruningEnabled, setPruningEnabled] = useState(true);
  const [quantizationEnabled, setQuantizationEnabled] = useState(true);
  const [compressionLevel, setCompressionLevel] = useState([50]);

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
              <div>
                <Label htmlFor="pruning" className="text-base">Pruning</Label>
                <p className="text-sm text-muted-foreground">
                  Remove redundant weights from your model
                </p>
              </div>
              <Switch
                id="pruning"
                checked={pruningEnabled}
                onCheckedChange={setPruningEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="quantization" className="text-base">Quantization</Label>
                <p className="text-sm text-muted-foreground">
                  Reduce numerical precision of weights
                </p>
              </div>
              <Switch
                id="quantization"
                checked={quantizationEnabled}
                onCheckedChange={setQuantizationEnabled}
              />
            </div>
            
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="compression-level">Compression Level</Label>
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
      </CardContent>
    </Card>
  );
};

export default OptimizationOptions;
