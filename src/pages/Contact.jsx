import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: 'Web Development',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (response.ok && result.success) {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: 'Web Development',
        message: ''
      });
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Send a message about your next full-stack project and I will reply quickly.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</span>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>
          </div>
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Service</span>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            >
              <option>Web Development</option>
              <option>Web Design</option>
              <option>UI/UX Design</option>
              <option>Branding</option>
              <option>Other</option>
            </select>
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-500"
          >
            Send Message
          </button>
          {status === 'success' && (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
              Message sent successfully.
            </div>
          )}
          {status === 'error' && (
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-4 text-rose-700 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-200">
              There was an error sending your message.
            </div>
          )}
        </form>

        <div className="rounded-3xl bg-gradient-to-br from-sky-600 to-cyan-400 p-8 text-white shadow-lg">
          <h3 className="text-2xl font-semibold">Let's build something great</h3>
          <p className="mt-4 text-slate-100/90">I can help with full-stack web apps, API design, and UI implementation using modern tools.</p>
          <div className="mt-8 space-y-3">
            <div className="rounded-3xl bg-white/10 p-4">
              <p className="font-semibold">Full-stack</p>
              <p className="text-sm text-slate-200/90">React + Node.js + Tailwind.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-4">
              <p className="font-semibold">Responsive design</p>
              <p className="text-sm text-slate-200/90">Mobile-first experiences with React Router navigation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
