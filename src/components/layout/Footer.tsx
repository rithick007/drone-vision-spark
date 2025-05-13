
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-gray-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-start gap-2 mb-4">
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">DRONE</span>
                <span className="text-sm font-medium text-muted-foreground">INDUSTRY INSIGHTS</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Independent drone market intelligence and insights for enterprise and commercial applications.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Industry Reports
                </Link>
              </li>
              <li>
                <Link to="/optimize" className="text-muted-foreground hover:text-foreground transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm tracking-wider">Contact</h3>
            <address className="not-italic text-muted-foreground text-sm space-y-2">
              <p>Drone Industry Insights UG</p>
              <p>Hamburg, Germany</p>
              <p>
                <a href="mailto:info@droneindustry.com" className="hover:text-foreground transition-colors">
                  info@droneindustry.com
                </a>
              </p>
              <p>
                <a href="tel:+4912345678" className="hover:text-foreground transition-colors">
                  +49 123 456 789
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Drone Industry Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
