const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A modern portfolio built with React, Tailwind CSS, and React Router.',
    tags: ['Web Design', 'React', 'Tailwind']
  },
  {
    title: 'E-Commerce Website',
    description: 'A product catalog and checkout flow designed for performance and usability.',
    tags: ['React', 'Node.js', 'Express']
  },
  {
    title: 'Task Manager Web App',
    description: 'A productivity application with kanban-style task organization.',
    tags: ['React', 'State Management', 'Responsive']
  }
];

function Projects() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">
        <div>
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Selected projects demonstrating full-stack work with React and Node.js.</p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
