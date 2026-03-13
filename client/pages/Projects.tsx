import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-160px)] py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Recognition</h1>
            <p className="text-lg sm:text-xl text-gray-600">Professional achievements and recognition</p>
          </div>

          {/* Main Achievement */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-12 hover:shadow-lg transition-shadow mb-8 sm:mb-12">
            <div className="border-l-4 border-slate-900 pl-4 sm:pl-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Certificate of Appreciation</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 font-semibold">Cognizant Technology Solutions</p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Recognized for high accuracy in compliance workflows and consistently improving data review efficiency.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Full Professional Profile</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              For a comprehensive view of my complete professional background, education, and detailed experience, please visit my full resume.
            </p>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-gray-900 hover:shadow-lg transition-shadow"
              style={{ backgroundColor: '#FFC107' }}
            >
              View Full Resume <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
