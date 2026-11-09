import Link from "next/link";
export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">My Resume</h1>
            <p className="mt-2 text-slate-400">Sanjida Akter Sima</p>
          </div>

          {/* Download Button */}
          <a
            href="/resume/Sima-Resume.pdf"
            download="Sima-Resume.pdf"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Download Resume
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
          <iframe
            src="/resume/Sima-Resume.pdf"
            title="Sanjida Akter Sima Resume"
            className="h-[85vh] w-full"
          />
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
