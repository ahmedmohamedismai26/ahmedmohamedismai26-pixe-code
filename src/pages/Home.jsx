function Home() {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px] items-center">
        <div>
          <p className="text-sky-600 font-semibold uppercase tracking-[0.3em]">Full Stack Developer</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">Ahmed Ismail</h1>
          <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300">
            I build modern React applications with Tailwind CSS, React Router, and Node.js backends. Let me show you how a real full-stack portfolio looks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/projects" className="rounded-full bg-sky-600 px-6 py-3 text-white shadow-lg transition hover:bg-sky-500">View Projects</a>
            <a href="/contact" className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">Contact Me</a>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-sky-600 to-cyan-400 p-1 shadow-2xl">
          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
            <h2 className="mt-6 text-3xl font-semibold">Modern web app design</h2>
            <p className="mt-4 text-slate-300">A React-based portfolio with clear navigation, responsive layout, and backend contact form integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
