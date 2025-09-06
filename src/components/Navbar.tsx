import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Package, Truck, CreditCard, FileText, BarChart3 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", icon: BarChart3, path: "/" },
    { name: "Marketplace", icon: ShoppingCart, path: "/marketplace" },
    { name: "My Surplus", icon: Package, path: "/my-surplus" },
    { name: "Logistics", icon: Truck, path: "/logistics" },
    { name: "Transactions", icon: FileText, path: "/transactions" },
    { name: "Payments", icon: CreditCard, path: "/payments" },
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">ShareCart</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link to={item.path}>
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;