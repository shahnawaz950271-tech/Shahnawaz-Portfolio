import Layout from "@/components/Layout";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-160px)] py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-lg sm:text-xl text-gray-600">Always open to meaningful collaborations and new opportunities</p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email */}
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-600 mb-2">Send me a message and I'll respond as soon as possible</p>
              <a href="mailto:shahnawaz950271@gmail.com" className="text-slate-900 font-semibold hover:underline">
                shahnawaz950271@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Phone</h3>
              </div>
              <p className="text-gray-600 mb-2">Available for calls and discussions</p>
              <p className="text-gray-900 font-semibold">+91 9502713861</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center py-16 border-y border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Connect On Social</h2>
            <div className="flex justify-center gap-6">
              <a
              href="https://www.linkedin.com/in/mohammed-shahnawaz-9459b9269/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Let's Connect</h3>
            <p className="text-gray-700 mb-6">
              Whether you're looking to discuss data analytics projects, process improvements, or collaboration opportunities in finance and business operations, I'd love to hear from you. Let's explore how we can work together.
            </p>
            <a
              href="mailto:shahnawaz950271@gmail.com"
              className="inline-block px-8 py-3 rounded-full font-semibold text-gray-900 hover:shadow-lg transition-shadow"
              style={{ backgroundColor: '#4DD0E1' }}
            >
              Send Email
            </a>
          </div>

        </div>
      </div>
    </Layout>
  );
}
