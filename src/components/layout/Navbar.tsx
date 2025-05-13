
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">DRONE</span>
            <span className="text-sm font-medium text-muted-foreground">INDUSTRY INSIGHTS</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground uppercase">
            Services
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground uppercase">
            Industry Reports
          </Link>
          <Link to="/optimize" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground uppercase">
            Free Resources
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground uppercase">
            Events
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground uppercase">
            About
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground uppercase">
            Contact
          </Link>
          <div className="flex items-center gap-4 ml-4">
            <button aria-label="Search">
              <Search size={20} />
            </button>
            <button aria-label="Cart" className="relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
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
        <div className="md:hidden py-4 px-6 bg-card border-b border-gray-800">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground/80 transition-colors hover:text-foreground uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/80 transition-colors hover:text-foreground uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industry Reports
            </Link>
            <Link 
              to="/optimize" 
              className="text-foreground/80 transition-colors hover:text-foreground uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Resources
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/80 transition-colors hover:text-foreground uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/80 transition-colors hover:text-foreground uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/80 transition-colors hover:text-foreground uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center gap-4 pt-2">
              <button aria-label="Search">
                <Search size={20} />
              </button>
              <button aria-label="Cart" className="relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
