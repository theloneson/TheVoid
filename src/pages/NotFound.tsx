import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-6xl font-display font-bold text-cosmic mb-4">404</div>
          <h1 className="text-2xl font-heading font-bold text-foreground mb-2">
            Lost in The Void
          </h1>
          <p className="text-muted font-body">
            This page seems to have drifted into the cosmic unknown. Let's get you back on track.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button className="btn-cosmic w-full group">
              <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Return to Home
            </Button>
          </Link>
          
          <Link to="/shop">
            <Button variant="outline" className="btn-outline-cosmic w-full group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Explore Shop
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
