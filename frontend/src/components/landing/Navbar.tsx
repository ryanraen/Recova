import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-primary backdrop-blur-md sticky top-0 z-50 shadow-md">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center shadow-md">
          <span className="text-lg font-bold text-primary">P</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <a
          href="#features"
          className="text-white/90 hover:text-white transition-colors text-sm font-medium"
        >
          Platform
        </a>
        <a
          href="#features"
          className="text-white/90 hover:text-white transition-colors text-sm font-medium"
        >
          Assessment
        </a>
        <a
          href="#journey"
          className="text-white/90 hover:text-white transition-colors text-sm font-medium"
        >
          Case Studies
        </a>
        <a
          href="#journey"
          className="text-white/90 hover:text-white transition-colors text-sm font-medium"
        >
          Pricing
        </a>
      </div>

      <Link to="/session" className="hidden md:block">
        <Button variant="default" size="default" className="bg-white text-primary hover:bg-white/90 font-medium rounded-full px-6">
          Request Demo
        </Button>
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-t border-white/10 shadow-lg p-6 flex flex-col gap-4 md:hidden">
          <a
            href="#features"
            className="text-white font-medium text-sm py-2"
          >
            Platform
          </a>
          <a
            href="#features"
            className="text-white font-medium text-sm py-2"
          >
            Assessment
          </a>
          <a
            href="#journey"
            className="text-white font-medium text-sm py-2"
          >
            Case Studies
          </a>
          <a
            href="#journey"
            className="text-white font-medium text-sm py-2"
          >
            Pricing
          </a>
          <Link to="/session">
            <Button variant="default" size="default" className="w-full bg-white text-primary hover:bg-white/90 font-medium rounded-full">
              Request Demo
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
