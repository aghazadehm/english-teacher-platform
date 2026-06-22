export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm mb-6">
          AI-Powered English Learning Platform
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Learn English <span className="text-sky-500">Smarter</span>,<br /> Not Harder
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          A modern learning experience for IELTS, TOEFL, TTC and academic English — powered by AI and real teaching expertise.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-sky-500 text-white font-medium hover:bg-sky-600 transition">Start Learning</button>
          <button className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-white transition">View Courses</button>
        </div>
      </section>
    </main>
  );
}