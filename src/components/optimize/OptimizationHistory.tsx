
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Clock, Download, MoreHorizontal, ArrowDown, ArrowUp } from "lucide-react";

// Define the history item type
interface OptimizationHistoryItem {
  id: string;
  date: string;
  modelType: string;
  sizeReduction: number;
  speedImprovement: number;
  accuracyRetention: number;
  methods: string[];
}

// Sample data
const sampleHistory: OptimizationHistoryItem[] = [
  {
    id: "opt-001",
    date: "2025-05-14 14:30",
    modelType: "YOLO v8",
    sizeReduction: 55,
    speedImprovement: 120,
    accuracyRetention: 97,
    methods: ["Pruning", "Quantization", "Layer Fusion"]
  },
  {
    id: "opt-002",
    date: "2025-05-13 11:15",
    modelType: "YOLO v8",
    sizeReduction: 65,
    speedImprovement: 90,
    accuracyRetention: 94,
    methods: ["Aggressive Pruning", "4-bit Quantization"]
  },
  {
    id: "opt-003", 
    date: "2025-05-10 09:45",
    modelType: "MobileNet",
    sizeReduction: 40,
    speedImprovement: 150,
    accuracyRetention: 98,
    methods: ["Knowledge Distillation", "Quantization"]
  }
];

const OptimizationHistory = () => {
  const [history, setHistory] = useState<OptimizationHistoryItem[]>(sampleHistory);
  const [sortField, setSortField] = useState<keyof OptimizationHistoryItem>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);

  const handleSort = (field: keyof OptimizationHistoryItem) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedHistory = [...history].sort((a, b) => {
    if (typeof a[sortField] === "string" && typeof b[sortField] === "string") {
      return sortDirection === "asc" 
        ? (a[sortField] as string).localeCompare(b[sortField] as string)
        : (b[sortField] as string).localeCompare(a[sortField] as string);
    } else {
      return sortDirection === "asc" 
        ? (a[sortField] as number) - (b[sortField] as number)
        : (b[sortField] as number) - (a[sortField] as number);
    }
  });

  const toggleItemSelection = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleCompare = () => {
    setCompareMode(true);
    // In a real app, this would handle showing comparison between selected items
  };

  const renderSortIcon = (field: keyof OptimizationHistoryItem) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? <ArrowUp className="h-3 w-3 ml-1" /> : <ArrowDown className="h-3 w-3 ml-1" />;
  };

  return (
    <Card className="w-full mt-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <Clock className="mr-2 h-5 w-5" /> 
          Optimization History
        </CardTitle>
        <div className="flex gap-2">
          {selectedItems.length > 1 && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCompare}
            >
              Compare Selected
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <span>Export</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Export Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" /> Export as CSV
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" /> Export as JSON
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {compareMode && <TableHead className="w-[50px]"></TableHead>}
                <TableHead 
                  className="cursor-pointer" 
                  onClick={() => handleSort("date")}
                >
                  <div className="flex items-center">
                    Date {renderSortIcon("date")}
                  </div>
                </TableHead>
                <TableHead>Model Type</TableHead>
                <TableHead 
                  className="cursor-pointer"
                  onClick={() => handleSort("sizeReduction")}
                >
                  <div className="flex items-center">
                    Size Reduction {renderSortIcon("sizeReduction")}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer"
                  onClick={() => handleSort("speedImprovement")}
                >
                  <div className="flex items-center">
                    Speed Improvement {renderSortIcon("speedImprovement")}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer"
                  onClick={() => handleSort("accuracyRetention")}
                >
                  <div className="flex items-center">
                    Accuracy Retention {renderSortIcon("accuracyRetention")}
                  </div>
                </TableHead>
                <TableHead>Methods</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedHistory.map((item) => (
                <TableRow 
                  key={item.id}
                  className={selectedItems.includes(item.id) ? "bg-muted/50" : ""}
                >
                  {compareMode && (
                    <TableCell>
                      <input 
                        type="checkbox" 
                        checked={selectedItems.includes(item.id)} 
                        onChange={() => toggleItemSelection(item.id)}
                        className="rounded border-gray-300"
                      />
                    </TableCell>
                  )}
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.modelType}</TableCell>
                  <TableCell>{item.sizeReduction}%</TableCell>
                  <TableCell>{item.speedImprovement}%</TableCell>
                  <TableCell>{item.accuracyRetention}%</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {item.methods.map(method => (
                        <span 
                          key={method} 
                          className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => toggleItemSelection(item.id)}>
                          {selectedItems.includes(item.id) ? "Deselect" : "Select"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Apply This Configuration</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default OptimizationHistory;
