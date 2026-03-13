import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">shahnawaz950271@gmail.com</p>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h3>
            <p className="text-gray-600 text-sm">Finance, Process Improvement, Operations</p>
          </div>

          {/* Follow Me */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/mohammed-shahnawaz-9459b9269/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-left sm:text-right lg:col-span-1">
            <p className="text-gray-600 text-xs mb-1">© 2026 Mohammed Shahnawaz Ali</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
