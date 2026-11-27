import { useState } from 'react';

type IconName = 'arrow' | 'mail' | 'phone' | 'pin' | 'code' | 'check' | 'database' | 'tools' | 'menu' | 'close';

function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    phone: <path d="m7 3 3 5-3 2c1.5 3.5 3.5 5.5 7 7l2-3 5 3c0 3-2 4-4 4C10 20 4 14 3 7c0-2 1-4 4-4Z" />,
    pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 18" /></>,
    check: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
    tools: <><rect x="3" y="6" width="18" height="15" rx="2" /><path d="M8 6V3h8v3M3 12h18m-11 0v3h4v-3" /></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 shrink-0 ${className}`} aria-hidden="true">{paths[name]}</svg>;
}

const projects: { title: string; category: string; description: string; tags: string[]; kind: string; url?: string; note?: string }[] = [
  { title: 'KaBarangayConnect', category: 'COMMUNITY & PUBLIC SERVICE', description: 'A web-based barangay management and real-time incident reporting platform built for Barangay Labuin, Pila, Laguna.', tags: ['Web App', 'Database', 'System Design'], kind: 'community', url: 'https://main.d2frkcxjifwyv4.amplifyapp.com/' },
  { title: 'MotorPH Payroll System', category: 'EMPLOYEE MANAGEMENT & SECURITY', description: 'An employee management system for attendance, payroll, and employee information, enhanced with security logging, audit logging, and SQL injection protection.', tags: ['Employee Management', 'Security Logging', 'Audit Logging', 'SQL Injection Protection'], kind: 'security' },
  {
    title: 'Tray Tayo',
    category: 'FILIPINO FOOD DELIVERY',
    description: 'A modern Filipino food delivery web system.',
    tags: ['Web System', 'Food Delivery', 'Web Development'],
    kind: 'food',
    url: 'https://kneou.github.io/Web-System/login.html',
  },
  {
    title: 'FinMark',
    category: 'CONSULTING SERVICES · SD MILESTONE 2',
    description: 'A working prototype for a consulting services platform: sign in, browse services, choose a pricing plan, check out with GCash or Card, and review saved subscriptions. An admin dashboard provides subscriber analytics and order monitoring.',
    tags: ['Working Prototype', 'Input Validation', 'Subscription Workflow'],
    kind: 'consulting',
  },
];

const skills: { name: string; icon: IconName; items: string[] }[] = [
  { name: 'QA & Testing', icon: 'check', items: ['Manual Testing', 'Test Case & Test Plan Design', 'User Acceptance Testing (UAT)', 'Security & System Auditing'] },
  { name: 'Development & Cloud', icon: 'code', items: ['HTML/CSS & JavaScript', 'Mobile & Web App Development', 'Docker / Docker Compose', 'Firebase & AWS Serverless'] },
  { name: 'Systems & Databases', icon: 'database', items: ['SQL', 'Windows Server', 'VirtualBox', 'Git'] },
  { name: 'Productivity & Tools', icon: 'tools', items: ['Microsoft Office Suite', 'Google Workspace', 'Canva', 'Reaper'] },
];

const experience = [
  { role: 'Audiobook Editor', org: 'The Sound Team', date: 'May 2023 — Present', place: 'Remote', description: 'Multi-project audio editing in Reaper with strict quality control and deadline management.' },
  { role: 'Reservation Sales Specialist', org: 'IHG Hotels & Resorts, Inc.', date: 'Aug 2021 — Aug 2022', place: 'Makati', description: '' },
  { role: 'Support Executive', org: 'MyMenu', date: 'Feb 2021 — Jul 2021', place: 'Remote', description: 'Administrative operations, data entry, and basic SEO.' },
  { role: 'Earlier experience', org: 'Hospitality & Freelance', date: '2017 — 2021', place: '', description: 'Freelance Social Media Assistant at Upwork (2018); hospitality leadership and culinary roles at Nikkei, Grand Hyatt Manila, and Denny’s (2017–2021).' },
];

function ProjectArt({ kind }: { kind: string }) {
  const [imageFailed, setImageFailed] = useState(false);
  const screenshots: Record<string, { src: string; name: string; alt: string }> = {
    community: { src: '/images/kabarangayconnect.png', name: 'KaBarangayConnect', alt: 'KaBarangayConnect admin dashboard showing incidents, document requests, and user activity' },
    security: { src: '/images/motorph.png', name: 'MotorPH', alt: 'MotorPH employee portal, employee information, payroll, and leave management screens' },
    food: { src: '/images/tray-tayo.png', name: 'Tray Tayo', alt: 'Tray Tayo fried chicken product page with serving size, quantity selection, and add-to-cart action' },
    consulting: { src: '/images/finmark.png', name: 'FinMark', alt: 'FinMark admin dashboard showing consulting services, subscriptions, orders, and pending approvals' },
  };
  const screenshot = screenshots[kind];
  if (screenshot) {
    return (
      <div className="flex h-55 items-center justify-center border-b border-slate-200 bg-slate-100 p-3 md:h-64">
        {imageFailed ? <div className="flex flex-col items-center gap-3 text-slate-600"><Icon name="code" className="h-10 w-10 text-blue-600" /><p className="text-sm">Project screenshot unavailable</p></div> :
          <a href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`View full ${screenshot.name} screenshot (opens in a new tab)`} className="flex h-full w-full items-center justify-center rounded focus-visible:ring-2 focus-visible:ring-blue-600">
            <img src={screenshot.src} alt={screenshot.alt} className="h-full w-full object-contain" onError={() => setImageFailed(true)} />
          </a>}
      </div>
    );
  }
  return (
    <div className="flex h-55 items-center justify-center gap-3 overflow-hidden border-b border-slate-200 bg-[#f1f5f9] px-5 md:h-full md:min-h-62 md:border-r md:border-b-0" aria-hidden="true">
      {['</>', '{ }', '⌘'].map((symbol, i) => <div key={symbol} className={`flex h-19 w-19 items-center justify-center rounded-2xl border border-slate-200 bg-white font-mono text-3xl shadow-sm ${i === 1 ? '-translate-y-4 text-blue-600' : 'translate-y-3 text-slate-600'}`}>{symbol}</div>)}
    </div>
  );
}

function SectionHeading({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return <div className="mb-9 flex flex-wrap items-end justify-between gap-4"><div><div className="mb-3 flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-slate-600"><span className="text-blue-600">{number}</span><span className="h-px w-7 bg-slate-300" />{subtitle}</div><h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{title}</h2></div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const nav = ['Projects', 'Experience', 'Skills', 'Contact'];
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-blue-100">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex min-h-23 max-w-6xl items-center justify-between px-6 lg:px-10">
          <a href="#" className="flex min-h-11 items-center gap-2.5 text-base font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-blue-600"><span className="h-2 w-2 rounded-full bg-blue-600" />Monina Patiño<span className="text-blue-600">.</span></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="flex min-h-11 items-center text-sm text-slate-600 transition-colors hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600">{item}</a>)}
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-nav" className="flex h-11 w-11 items-center justify-center rounded-md focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        </div>
        {menuOpen && <nav id="mobile-nav" aria-label="Mobile navigation" className="grid border-t border-slate-200 px-6 pb-4 md:hidden">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center text-sm text-slate-600 focus-visible:ring-2 focus-visible:ring-blue-600">{item}</a>)}</nav>}
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-14 pb-14 md:pt-21 md:pb-18 lg:px-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_280px] lg:gap-12">
            <div className="min-w-0">
              <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-600">PORTFOLIO</p>
              <h1 className="text-[52px] leading-[1.08] font-semibold tracking-[-0.065em] sm:text-6xl lg:text-[86px]">Monina Angela<br />Patiño<span className="text-blue-600">.</span></h1>
            </div>
            <div className="w-52 rounded-[2rem] border border-slate-200 bg-blue-50 p-3 md:w-full">
              {portraitFailed ? <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl bg-blue-100"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="h-16 w-16 shrink-0 text-blue-700" role="img" aria-label="Portrait unavailable"><circle cx="32" cy="23" r="11" /><path d="M10 58a22 22 0 0 1 44 0" /></svg><span className="text-sm text-slate-600">Monina Patiño</span></div> : <img src="/images/monina-patino.png" alt="Monina Angela Patiño" width="385" height="378" onError={() => setPortraitFailed(true)} className="aspect-square w-full rounded-3xl object-cover" />}
            </div>
          </div>
          <p className="mt-7 max-w-2xl text-base leading-7 font-medium text-slate-900">BS Information Technology Major in Software Development<span className="block font-normal text-slate-600">Mapúa Malayan Digital Colleges</span></p>
          <p className="mt-4 max-w-185 text-base leading-7 text-slate-600">Detail-oriented 4th-year Software Development student specializing in Quality Assurance, Web & Mobile Development, and System Security, bringing strong analytical and cross-functional experience from remote audio production and hospitality operations.</p>
          <div className="mt-8 flex flex-wrap items-center gap-5"><a href="#projects" className="inline-flex min-h-12 items-center gap-6 rounded-md bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">View Projects <Icon name="arrow" className="h-4 w-4" /></a><a href="mailto:madrpatino@gmail.com" className="inline-flex min-h-11 items-center gap-2 text-sm text-slate-600 hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600"><Icon name="mail" className="h-4 w-4" />madrpatino@gmail.com</a></div>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-2 border-t border-slate-200 pt-5 text-sm text-slate-600"><a href="tel:+639632285519" className="flex min-h-11 items-center gap-2 hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600"><Icon name="phone" className="h-4 w-4" />(+63) 963-228-5519</a><span className="flex min-h-11 items-center gap-2"><Icon name="pin" className="h-4 w-4" />Quezon City, PH</span></div>
        </section>

        <section id="projects" className="scroll-mt-8 border-y border-slate-200 bg-slate-50/70">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <SectionHeading number="01" title="Featured projects" subtitle="SELECTED WORK" />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => <article key={project.title} className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg hover:shadow-slate-200/40">
                <ProjectArt kind={project.kind} />
                <div className="p-6 lg:p-7">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-xs font-medium tracking-[0.12em] text-slate-600">{project.category}</p>
                    <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.035em]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">{tag}</span>)}</div>
                  {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website (opens in a new tab)`} className="mt-5 inline-flex min-h-11 items-center gap-3 rounded text-sm font-medium text-blue-700 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-600">Visit website <Icon name="arrow" className="h-4 w-4 -rotate-45" /></a>}
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-16 lg:px-10 lg:py-20">
          <SectionHeading number="02" title="Technical toolkit" subtitle="SKILLS & CAPABILITIES" />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(skill => <div key={skill.name} className="min-w-0 border-t border-slate-200 pt-6"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600"><Icon name={skill.icon} /></div><h3 className="mb-4 text-base font-semibold tracking-tight">{skill.name}</h3><ul className="space-y-2.5">{skill.items.map(item => <li key={item} className="text-sm leading-6 text-slate-600">{item}</li>)}</ul></div>)}
          </div>
        </section>

        <section id="experience" className="scroll-mt-8 border-t border-slate-200 bg-slate-50/70">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <SectionHeading number="03" title="Experience & education" subtitle="THE JOURNEY SO FAR" />
            <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
              <div><h3 className="mb-7 text-sm font-semibold">Professional experience</h3><div className="ml-1 border-l border-slate-200">
                {experience.map((item, i) => <div key={item.role} className="relative pb-8 pl-6 last:pb-0"><span className={`absolute top-1.5 -left-[4.5px] h-2 w-2 rounded-full ring-4 ring-slate-50 ${i === 0 ? 'bg-blue-600' : 'bg-slate-300'}`} /><p className="mb-2 text-xs text-slate-600">{item.date}{item.place && ` · ${item.place}`}</p><h4 className="text-base font-semibold tracking-tight">{item.role}</h4><p className="mt-1 text-sm text-slate-600">{item.org}</p>{item.description && <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>}</div>)}
              </div></div>
              <div><h3 className="mb-7 text-sm font-semibold">Education</h3><div className="space-y-5">
                <div className="rounded-lg border border-slate-200 bg-white p-6"><div className="mb-4 flex flex-wrap items-center justify-between gap-2"><span className="text-xs text-slate-600">2023 — Present</span><span className="rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">In progress</span></div><h4 className="text-base leading-6 font-semibold">BS Information Technology</h4><p className="mt-1 text-sm text-blue-700">Major in Software Development</p><p className="mt-4 text-sm leading-6 text-slate-600">Mapúa Malayan Digital Colleges</p></div>
                <div className="rounded-lg border border-slate-200 bg-white p-6"><p className="mb-4 text-xs text-slate-600">Graduated 2017</p><h4 className="text-base font-semibold">BS Hospitality Management</h4><p className="mt-4 text-sm leading-6 text-slate-600">Polytechnic University of the Philippines</p></div>
              </div></div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-8 rounded-xl border border-blue-100 bg-blue-50 p-7 md:grid-cols-[1.15fr_1fr] md:gap-12 md:p-11">
            <div><p className="mb-4 text-xs font-medium tracking-[0.16em] text-blue-700">LET’S CONNECT</p><h2 className="text-3xl leading-tight font-semibold tracking-[-0.045em] md:text-4xl">Your next intern.<br />Ready to contribute<span className="text-blue-600">.</span></h2><p className="mt-4 max-w-96 text-sm leading-6 text-slate-600">Seeking BS IT Software Development / QA Internship roles.</p></div>
            <div className="flex flex-col justify-center gap-2">
              <a href="mailto:madrpatino@gmail.com" className="group flex min-h-12 items-center gap-3 text-sm font-medium hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600"><Icon name="mail" className="text-blue-600" />madrpatino@gmail.com<Icon name="arrow" className="ml-auto h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-1" /></a>
              <a href="mailto:lr.mapatino@mmdc.mcl.edu.ph" className="flex min-h-12 min-w-0 items-center gap-3 text-sm text-slate-600 hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600"><Icon name="mail" className="text-blue-600" /><span className="min-w-0"><span className="block text-xs font-medium text-blue-700">School email</span><span className="break-all">lr.mapatino@mmdc.mcl.edu.ph</span></span></a>
              <a href="tel:+639632285519" className="flex min-h-12 items-center gap-3 text-sm text-slate-600 hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600"><Icon name="phone" className="text-blue-600" />(+63) 963-228-5519</a>
              <p className="flex min-h-12 items-center gap-3 text-sm text-slate-600"><Icon name="pin" className="text-blue-600" />Quezon City, Metro Manila</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-slate-600 lg:px-10"><p>© {new Date().getFullYear()} Monina Angela Patiño</p><a href="#" className="flex min-h-11 items-center gap-2 hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600">Back to top <Icon name="arrow" className="h-3.5 w-3.5 -rotate-90" /></a></div></footer>
    </div>
  );
}

export default App;
