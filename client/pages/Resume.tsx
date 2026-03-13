import Layout from "@/components/Layout";


export default function Resume() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-160px)] py-16 font-sans bg-gray-50 flex items-center justify-center">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Resume</h1>
            <p className="text-lg text-gray-600 mb-8">
              Click the button below to view my professional background, education, and detailed experience in a separate tab.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://files.catbox.moe/l52dag.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Open Resume
              </a>
              <a 
                href="https://files.catbox.moe/l52dag.pdf" 
                download
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all hover:-translate-y-1"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
