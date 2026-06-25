import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="text-2xl font-semibold">Ahmed<span className="text-sky-600">.</span></div>
          <nav className="flex items-center gap-3">
            <NavLink className={({ isActive }) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-700 dark:text-slate-300'} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-700 dark:text-slate-300'} to="/projects">Projects</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-700 dark:text-slate-300'} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-700 dark:text-slate-300'} to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
