
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8 md:p-12">
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Ready to Optimize Your Computer Vision Models?
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Get started today and experience the performance benefits of optimized models 
              for your resource-constrained drones.
            </p>
            <Button asChild size="lg">
              <Link to="/optimize">Upload a Model Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
