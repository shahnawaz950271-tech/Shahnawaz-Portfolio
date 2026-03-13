import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo and Name */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Link to="/" className="text-lg sm:text-xl font-bold text-gray-900 hover:text-gray-700 transition">
            Mohammed Shahnawaz Ali
          </Link>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">Financial Data Professional</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="text-gray-700 hover:text-gray-900 transition font-medium text-sm"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
