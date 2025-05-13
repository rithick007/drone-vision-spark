
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L14 6H20V12L22 14L20 16V20H16L14 22L12 20L10 22L8 20H4V16L2 14L4 12V6H10L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-lg font-bold">DroneVision Optimizer</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/optimize" className="text-foreground/80 transition-colors hover:text-foreground">
            Optimize
          </Link>
          <Link to="/about" className="text-foreground/80 transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Button asChild>
            <Link to="/optimize">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-background border-b">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/optimize" 
              className="text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Optimize
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Button 
              asChild 
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/optimize">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
