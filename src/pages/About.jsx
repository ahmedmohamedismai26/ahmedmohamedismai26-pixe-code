function About() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          I'm a full-stack developer focusing on React, Tailwind CSS, React Router, and Node.js. I create polished web applications with strong UX and clean backend integrations.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">
          <h3 className="text-xl font-semibold">Experience</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Over 3 years delivering web apps and UI experiences.</p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">
          <h3 className="text-xl font-semibold">Skills</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">React, Tailwind, Node.js, Express, REST APIs, responsive design.</p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">
          <h3 className="text-xl font-semibold">Approach</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">I combine clean design and secure backend logic to build real full-stack applications.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
