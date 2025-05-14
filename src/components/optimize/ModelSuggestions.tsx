
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, AlertCircle } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SuggestionProps {
  modelType: string;
  onApplySuggestions: (suggestions: any) => void;
}

const modelOptimizationStrategies = {
  yolo: {
    name: "YOLO",
    description: "YOLO models benefit from pruning and post-training quantization.",
    recommendations: [
      {
        id: "yolo-rec-1",
        title: "Channel Pruning",
        description: "Remove up to 50% of channels in the middle layers with minimal accuracy impact.",
        settings: { pruningEnabled: true, compressionLevel: 50, gradualPruning: true, pruningSchedule: "exponential" }
      },
      {
        id: "yolo-rec-2",
        title: "Post-Training Quantization",
        description: "Quantize weights to 8-bit with calibration data for minimal accuracy loss.",
        settings: { quantizationEnabled: true, useCalibrationData: true }
      },
      {
        id: "yolo-rec-3",
        title: "YOLO-specific Post-processing",
        description: "Optimize non-max suppression and detection post-processing for target hardware.",
        settings: { applyLayerFusion: true, optimizeMemoryLayout: true }
      }
    ]
  },
  mobilenet: {
    name: "MobileNet",
    description: "MobileNets are already optimized for mobile. Further gains can be made with quantization.",
    recommendations: [
      {
        id: "mobilenet-rec-1",
        title: "Depthwise Separable Conv Optimization",
        description: "These layers can be optimized further with specialized hardware kernels.",
        settings: { optimizeMemoryLayout: true }
      },
      {
        id: "mobilenet-rec-2",
        title: "Per-channel Quantization",
        description: "MobileNets benefit from per-channel quantization rather than per-tensor.",
        settings: { quantizationEnabled: true, perChannelQuantization: true }
      },
      {
        id: "mobilenet-rec-3",
        title: "Knowledge Distillation",
        description: "Use a teacher model to train a smaller student MobileNet.",
        settings: { useKnowledgeDistillation: true, learningRate: 0.001 }
      }
    ]
  },
  efficientdet: {
    name: "EfficientDet",
    description: "EfficientDet models need careful optimization to maintain accuracy.",
    recommendations: [
      {
        id: "efficientdet-rec-1",
        title: "BiFPN Optimization",
        description: "Focus optimizations on the BiFPN layers which can be quantized safely.",
        settings: { quantizationEnabled: true }
      },
      {
        id: "efficientdet-rec-2",
        title: "Light Pruning",
        description: "Apply conservative pruning to avoid accuracy loss.",
        settings: { pruningEnabled: true, compressionLevel: 30 }
      }
    ]
  },
  ssd: {
    name: "SSD",
    description: "SSD models can be optimized well with pruning and quantization.",
    recommendations: [
      {
        id: "ssd-rec-1",
        title: "Backbone Pruning",
        description: "Prune the backbone network while preserving the detection heads.",
        settings: { pruningEnabled: true, compressionLevel: 40 }
      },
      {
        id: "ssd-rec-2",
        title: "Layer Fusion",
        description: "Fuse convolution and activation layers for better inference speed.",
        settings: { applyLayerFusion: true }
      }
    ]
  },
  custom: {
    name: "Custom/Other",
    description: "General optimization techniques that work for most model architectures.",
    recommendations: [
      {
        id: "custom-rec-1",
        title: "Balanced Optimization",
        description: "Apply moderate pruning and quantization for a good balance.",
        settings: { pruningEnabled: true, quantizationEnabled: true, compressionLevel: 40 }
      },
      {
        id: "custom-rec-2",
        title: "Start Conservative",
        description: "Begin with light optimization and gradually increase if results are acceptable.",
        settings: { compressionLevel: 30 }
      }
    ]
  }
};

const ModelSuggestions = ({ modelType = "yolo", onApplySuggestions }: SuggestionProps) => {
  const [selectedModel, setSelectedModel] = useState(modelType);
  const [modelInfo, setModelInfo] = useState(modelOptimizationStrategies[selectedModel as keyof typeof modelOptimizationStrategies]);

  useEffect(() => {
    if (modelType in modelOptimizationStrategies) {
      setSelectedModel(modelType);
      setModelInfo(modelOptimizationStrategies[modelType as keyof typeof modelOptimizationStrategies]);
    }
  }, [modelType]);

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    setModelInfo(modelOptimizationStrategies[model as keyof typeof modelOptimizationStrategies]);
  };

  const handleApplyRecommendation = (settings: any) => {
    onApplySuggestions(settings);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
          Optimization Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Tabs value={selectedModel} onValueChange={handleModelChange} className="w-full">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="yolo">YOLO</TabsTrigger>
              <TabsTrigger value="mobilenet">MobileNet</TabsTrigger>
              <TabsTrigger value="efficientdet">EfficientDet</TabsTrigger>
              <TabsTrigger value="ssd">SSD</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-md mb-6">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-900">{modelInfo.name} Detection</h4>
              <p className="text-sm text-blue-700">{modelInfo.description}</p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {modelInfo.recommendations.map((rec) => (
            <AccordionItem key={rec.id} value={rec.id}>
              <AccordionTrigger className="text-left">
                {rec.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {rec.description}
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => handleApplyRecommendation(rec.settings)}
                  >
                    Apply This Recommendation
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ModelSuggestions;
