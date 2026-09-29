'use client';

import {
  ArrowUpRight,
  Mail,
  Code2,
  Download,
  FolderGit2,
} from 'lucide-react';

const projects = [
  {
    n: '01',
    title: 'Network Traffic Analysis',
    desc: 'Exploring network traffic patterns and comparing conditions before and after MAC Address Filtering.',
    tags: ['Python', 'Pandas', 'Wireshark'],
    stat: '242,834 records',
  },
  {
    n: '02',
    title: 'Web Information System',
    desc: 'A practical web application focused on structured data, user flows, database management and a clean interface.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    stat: 'Full-stack project',
  },
  {
    n: '03',
    title: 'Machine Learning Experiment',
    desc: 'An experiment for presenting dataset preparation, model training, evaluation and machine learning results.',
    tags: ['Python', 'Scikit-learn', 'ML'],
    stat: 'Experiment #001',
  },
];

const skills = [
  ['Python', 'Data analysis / Machine Learning'],
  ['JavaScript', 'Interactive web development'],
  ['PHP', 'Backend development'],
  ['SQL', 'Data & database management'],
  ['React', 'User interface development'],
  ['Git', 'Version control'],
];

const approaches = [
  ['01', 'DISCOVER', 'Understand the problem'],
  ['02', 'ANALYZE', 'Explore the data'],
  ['03', 'BUILD', 'Develop the solution'],
  ['04', 'TEST', 'Validate the result'],
  ['05', 'SHIP', 'Make it usable'],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#08090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-widest"
          >
            JFR<span className="text-blue-400"></span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-400 sm:flex">

            <a href="#work" className="transition hover:text-white">
              PROJECTS
            </a>

            <a href="#lab" className="transition hover:text-white">
              LAB
            </a>

            <a href="#about" className="transition hover:text-white">
              ABOUT
            </a>

            <a href="#contact" className="transition hover:text-white">
              CONTACT
            </a>

          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section
        id="top"
        className="relative overflow-hidden border-b border-white/5 pt-32"
      >

        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-28">

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-blue-300">

              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                <span>JOE FAUZSANNO RETTOB</span>

            </div>


            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">

              I BUILD.

              <br />

              <span className="text-slate-500">
                I ANALYZE.
              </span>

              <br />

              I SOLVE.

            </h1>


            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">

              Web Developer, Data Scientist and Machine Learning Enthusiast.
              I turn problems, data and ideas into practical digital
              products.

            </p>


            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-gray-300 px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-gray-400"
              >
                <span className="text-black">Explore my work</span>

                <ArrowUpRight className="ml-1 h-4 w-4 text-black" />

              </a>


              <a
                href="#contact"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:bg-white/5"
              >
                Let's connect
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <div className="grid gap-8 md:grid-cols-2">

          <div>

            <p className="font-mono text-xs tracking-[0.25em] text-blue-300">
              01 / WHOAMI
            </p>


            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              A portfolio that shows the work, not just the words.
            </h2>


            <p className="mt-6 max-w-xl leading-7 text-slate-400">
              I enjoy building practical systems, exploring data and
              experimenting with technology to solve real-world problems.
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 font-mono text-sm leading-8 shadow-2xl shadow-blue-500/5">

            <div>
              <span className="text-blue-300">$</span> whoami
            </div>

            <div className="mt-2 text-white">
              Joe Rettob
            </div>

            <div className="mt-4 text-slate-500">
              ROLE
            </div>

            <div>
              → Web Developer
            </div>

            <div>
              → Data Analyst
            </div>

            <div>
              → ML Enthusiast
            </div>

            <div className="mt-4 text-slate-500">
              FOCUS
            </div>

            <div>
              → Build useful systems
            </div>

            <div>
              → Analyze meaningful data
            </div>

            <div>
              → Learn by shipping
            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="work"
        className="border-y border-white/5 bg-[#0a0c10] py-24"
      >

        <div className="mx-auto max-w-6xl px-6">

          <p className="font-mono text-xs tracking-[0.25em] text-blue-300">
            02 / SELECTED WORK
          </p>


          <h2 className="mt-4 text-4xl font-semibold">
            Projects as evidence.
          </h2>


          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A selection of projects that demonstrate my experience with
            programming, data analysis, databases and machine learning.
          </p>


          <div className="mt-10 grid gap-5 lg:grid-cols-3">

            {projects.map((project) => (

              <article
                key={project.n}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.04]"
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-xs text-slate-500">
                    {project.n}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-blue-300" />

                </div>


                <div className="mt-16 h-32 rounded-xl border border-white/5 bg-black/30 p-4">

                  <div className="font-mono text-[10px] text-slate-500">
                    PROJECT PREVIEW
                  </div>

                  <div className="mt-3 h-2 w-4/5 rounded bg-slate-700/70" />

                  <div className="mt-2 h-2 w-3/5 rounded bg-slate-800" />

                  <div className="mt-5 flex gap-2">

                    <span className="h-8 w-8 rounded-lg border border-white/5" />

                    <span className="h-8 w-12 rounded-lg border border-white/5" />

                    <span className="h-8 w-16 rounded-lg border border-white/5" />

                  </div>

                </div>


                <h3 className="mt-6 text-xl font-semibold">
                  {project.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.desc}
                </p>


                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>

                  ))}

                </div>


                <div className="mt-5 border-t border-white/5 pt-4 font-mono text-xs text-blue-300">
                  {project.stat}
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= DIGITAL LAB ================= */}

      <section
        id="lab"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="font-mono text-xs tracking-[0.25em] text-blue-300">
              03 / DIGITAL LAB
            </p>


            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Skills become useful when they solve a real problem.
            </h2>


            <p className="mt-5 leading-7 text-slate-400">
              This section represents the technologies I use to build
              applications, analyze data and experiment with machine
              learning.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2">

            {skills.map(([name, description], index) => (

              <div
                key={name}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-blue-400/30 hover:bg-white/[0.04]"
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-xs text-slate-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <Code2 className="h-4 w-4 text-blue-300" />

                </div>


                <h3 className="mt-7 text-lg font-semibold">
                  {name}
                </h3>


                <p className="mt-1 text-sm text-slate-500">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= APPROACH ================= */}

      <section className="border-y border-white/5 bg-[#0a0c10] py-24">

        <div className="mx-auto max-w-6xl px-6">

          <p className="font-mono text-xs tracking-[0.25em] text-blue-300">
            04 / APPROACH
          </p>


          <h2 className="mt-4 text-4xl font-semibold">
            How I approach a problem.
          </h2>


          <div className="mt-8 grid gap-4 md:grid-cols-5">

            {approaches.map(([number, title, description]) => (

              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-blue-400/30"
              >

                <span className="font-mono text-xs text-slate-500">
                  {number}
                </span>


                <h3 className="mt-8 font-semibold">
                  {title}
                </h3>


                <p className="mt-2 text-sm leading-5 text-slate-500">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-28"
      >

        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-blue-500/5 md:grid-cols-[1fr_auto] md:p-12">

          <div>

            <div className="font-mono text-xs text-blue-300">
              $ connect --with Joe
            </div>


            <h2 className="mt-5 text-4xl font-semibold leading-tight">
              Have a project, idea, or problem to explore?
            </h2>


            <p className="mt-4 max-w-xl text-slate-400">
              Feel free to connect with me through email or GitHub.
            </p>

          </div>


          <div className="flex flex-col gap-3">

            {/* EMAIL */}

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm transition hover:bg-white/5"
            >

              <Mail className="h-4 w-4" />

              your@email.com

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm transition hover:bg-white/5"
            >

              <FolderGit2 className="h-4 w-4" />

              GitHub

            </a>


            {/* DOWNLOAD CV */}

            <a
              href="/cv/Joe-Rettob-CV.pdf"
              download
              className="flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm transition hover:bg-white/5"
            >

              <Download className="h-4 w-4" />

              Download CV

            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/5 py-8">

        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <span className="font-mono">
            JOE.LAB © 2026
          </span>

          <span className="font-mono">
            BUILT WITH NEXT.JS
          </span>

        </div>

      </footer>

    </main>
  );
}

