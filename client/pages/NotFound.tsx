import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-gray-500 mb-8 max-w-md">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full font-semibold text-gray-900 hover:shadow-lg transition-shadow"
            style={{ backgroundColor: '#FFC107' }}
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
