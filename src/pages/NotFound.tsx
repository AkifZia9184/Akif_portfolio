
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{ zIndex: 3 }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-gray-300 mb-4">Oops! Page not found</p>
        <a 
          href="/" 
          className="text-electric-400 hover:text-electric-300 underline transition-colors duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
