import { useState } from 'react';

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Resources', '#resources'],
  ['Contact', '#contact'],
];

const trustItems = [
  {
    icon: 'trust',
    title: 'Trust & Integrity',
    text: 'Careful guidance with structure and responsibility.',
  },
  {
    icon: 'clarity',
    title: 'Clarity & Guidance',
    text: 'Plain-language support before key decisions.',
  },
  {
    icon: 'care',
    title: 'Connection & Care',
    text: 'Canada, Asia, education, and newcomer experience.',
  },
];

const experienceHighlights = [
  'Settlement and employment services',
  'University and education settings',
  'Lecturer, counsellor, curriculum developer, and program facilitator',
  'Experience with international and community organizations, including YMCA and Canadian Red Cross-related work',
  'Work across Canada and Asia',
];

const serviceCategories = [
  {
    title: 'Temporary Residence',
    items: [
      ['Study permits', 'Guidance for study plans, documents, timing, and eligibility.'],
      ['Visitor visas', 'Support for travel purpose, ties, finances, and supporting evidence.'],
      ['Work permits', 'Review of work permit options, requirements, and next steps.'],
      ['Extensions and status issues', 'Help understanding status, timing, and available pathways.'],
    ],
  },
  {
    title: 'Permanent Residence',
    items: [
      ['Express Entry', 'Assessment of profile factors, documents, and application readiness.'],
      ['Provincial Nominee Programs', 'Guidance on province-based options where suitable.'],
      ['Family Class', 'Support with family-related eligibility and document preparation.'],
      ['Humanitarian and compassionate considerations, if applicable', 'Careful review where personal circumstances may be relevant.'],
    ],
  },
  {
    title: 'Refugee and Protection Matters',
    items: [
      ['Refugee hearings', 'Preparation support for the hearing process where applicable.'],
      ['Refugee claim preparation', 'Structured help organizing facts, documents, and timelines.'],
      ['Evidence and document organization', 'Support making records clear, consistent, and accessible.'],
      ['Hearing preparation support', 'Plain-language preparation for questions, process, and responsibilities.'],
    ],
  },
  {
    title: 'Appeals and Admissibility Matters',
    items: [
      ['Immigration appeals', 'Review and support for appeal-related steps where applicable.'],
      ['Refugee appeals', 'Guidance on records, deadlines, and appeal preparation.'],
      ['Detention reviews', 'Support understanding the process and preparing relevant information.'],
      ['Inadmissibility hearings', 'Careful preparation for admissibility-related concerns.'],
      ['Procedural fairness response support, if applicable', 'Help responding clearly to concerns raised by authorities.'],
    ],
  },
  {
    title: 'Students and Newcomers',
    items: [
      ['Study-to-work planning', 'Early planning for study choices and possible work transitions.'],
      ['Post-graduation pathway planning', 'Review of future options before important education decisions.'],
      ['Settlement-related immigration planning', 'Practical guidance connected to life and planning in Canada.'],
      ['Family planning considerations', 'Support for families making education, financial, and timing decisions.'],
    ],
  },
];

const processSteps = [
  ['Listen', 'Understand your story, goals, timeline, and concerns.'],
  ['Assess', 'Review eligibility, documents, history, and risk factors.'],
  ['Plan', 'Explain options, responsibilities, and next steps.'],
  ['Support', 'Provide preparation, representation, or follow-up where applicable.'],
];

const faqs = [
  [
    'What is an RCIC-IRB licensed practitioner?',
    'An RCIC-IRB licensed practitioner is authorized to provide Canadian immigration advice and represent clients in certain immigration and refugee matters, including applicable matters before the Immigration and Refugee Board of Canada.',
  ],
  [
    'When should I speak with an immigration practitioner?',
    'It is helpful before making major decisions, such as choosing a school, preparing an application, responding to a refusal, attending a hearing, or planning a long-term pathway.',
  ],
  [
    'Do you work with international students?',
    'Yes. Students often need guidance on study permits, documents, timing, and long-term planning.',
  ],
  [
    'Can parents or family members join a consultation?',
    'Yes. Parents or family members may join when appropriate, especially when they are helping with education, financial, or family decisions.',
  ],
  [
    'Do you work with agencies or international partners?',
    'Yes, where roles are clear. Partners may support education or client coordination, while regulated immigration advice remains with the licensed practitioner.',
  ],
  [
    'Do you help with refugee hearings and appeals?',
    'The firm may provide support for refugee, appeal, detention, and admissibility-related matters where applicable. The first step is to review the situation carefully.',
  ],
  [
    'Is website information immigration advice?',
    'No. Website information is general education only. Immigration advice depends on individual facts and requires a formal consultation or client relationship.',
  ],
  [
    'How are immigration outcomes decided?',
    'Immigration outcomes are decided by Canadian authorities and depend on each person\'s circumstances, eligibility, documents, and applicable law or policy. A licensed practitioner can provide careful assessment, clear guidance, preparation, and representation where applicable, but no representative can guarantee a specific outcome.',
  ],
];

const socialLinks = ['LinkedIn', 'Instagram', 'Facebook', 'YouTube', 'TikTok, if applicable'];

function LineIcon({ type }) {
  const paths = {
    trust: (
      <>
        <path d="M12 3.5 5.5 6v5.4c0 3.5 2.7 6.8 6.5 8.1 3.8-1.3 6.5-4.6 6.5-8.1V6L12 3.5Z" />
        <path d="m9.2 12 1.8 1.8 3.9-4" />
      </>
    ),
    clarity: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
        <path d="M8.5 11h5" />
      </>
    ),
    care: (
      <>
        <path d="M12 20s-7-4.3-7-10.2A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 2.8C19 15.7 12 20 12 20Z" />
        <path d="M9 11.2h6" />
      </>
    ),
  };

  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

function LogoPlaceholder({ dark = false }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className={`logo-mark ${dark ? 'border-white/25 bg-white/10 text-white' : ''}`}>CP</span>
      <span className="grid min-w-0">
        <span className={`hidden text-[0.62rem] uppercase tracking-[0.22em] sm:block ${dark ? 'text-white/60' : 'text-bronze'}`}>
          [Company logo placeholder]
        </span>
        <span className={`max-w-[12.5rem] truncate text-sm font-medium sm:max-w-none ${dark ? 'text-white' : 'text-ink'}`}>
          Cross Pacific Immigration Consulting Inc.
        </span>
      </span>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ivory/95 backdrop-blur-xl">
      <nav className="section-shell flex min-h-[78px] items-center justify-between gap-5" aria-label="Main navigation">
        <a href="#home" className="min-w-0 text-ink" onClick={() => setOpen(false)}>
          <LogoPlaceholder />
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-[0.84rem] text-mist transition hover:text-ink">
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="primary-button hidden min-h-11 px-5 lg:inline-flex">
          Book a Consultation
        </a>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 text-ink lg:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px w-5 bg-ink transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-px w-5 bg-ink transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px w-5 bg-ink transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-line/80 bg-ivory/95 lg:hidden">
          <div className="section-shell grid gap-1 py-5">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-md px-3 py-3 text-sm text-ink hover:bg-white/80"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="#contact" className="primary-button mt-3" onClick={() => setOpen(false)}>
              Book a Consultation
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function SectionHeading({ eyebrow, title, intro, light = false, centered = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow ? <p className={light ? 'eyebrow text-bronze' : 'eyebrow'}>{eyebrow}</p> : null}
      <h2 className={`text-balance mt-4 font-serif text-[2.25rem] font-medium leading-[1.02] tracking-[-0.025em] sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-5 text-base leading-8 sm:text-[1.05rem] ${light ? 'text-white/70' : 'text-mist'}`}>{intro}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[calc(100svh-78px)] overflow-hidden bg-ink text-white">
      <div
        className="hero-cinema absolute inset-0"
        role="img"
        aria-label="Hero visual placeholder: calm Vancouver coastline, Pacific water route, and soft mountain horizon"
      >
        <span>[Hero visual placeholder: calm Vancouver coastline / Pacific water route / soft mountain horizon]</span>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,32,0.96)_0%,rgba(7,24,42,0.76)_46%,rgba(7,24,42,0.24)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[calc(100svh-78px)] items-center py-14 sm:py-20 lg:grid-cols-[0.7fr_0.3fr]">
        <div className="fade-up max-w-4xl pb-12 pt-6 sm:pb-6">
          <p className="eyebrow text-bronze">Cross Pacific Immigration Consulting Inc.</p>
          <h1 className="hero-title mt-6 font-serif text-[3.6rem] font-medium leading-[0.88] tracking-[-0.035em] text-white sm:text-7xl lg:text-[7.2rem]">
            <span className="block">Guiding your journey.</span>
            <span className="block italic text-white/90">Building your future.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
            Licensed Canadian immigration guidance for students, families, and individuals navigating important decisions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="primary-button bg-white text-ink hover:bg-bronze hover:text-ink">
              Book a Consultation
            </a>
            <a href="#services" className="secondary-link text-white">
              View Services
            </a>
          </div>
          <p className="mt-9 text-sm leading-6 text-white/60">
            RCIC-IRB licensed practitioner <span aria-hidden="true">&middot;</span> Vancouver area
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="relative z-10 bg-ivory pb-14">
      <div className="section-shell -mt-9">
        <div className="trust-panel">
          {trustItems.map((item) => (
            <article key={item.title} className="trust-item">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bronze/25 bg-white text-bronze">
                <LineIcon type={item.icon} />
              </span>
              <div>
                <h2 className="text-base font-medium tracking-[-0.01em] text-ink">{item.title}</h2>
                <p className="mt-1.5 max-w-xs text-sm leading-6 text-mist">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-y bg-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="relative">
          <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder">
            <span>[Portrait placeholder]</span>
          </div>
          <div className="license-card">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-bronze">Professional license</p>
            <p className="mt-2 text-sm font-medium text-ink">[Approved RCIC-IRB insignia placeholder]</p>
            <p className="mt-4 text-sm text-mist">License number: [Insert official license number]</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="About" title="A practitioner shaped by immigration, education, and community work." />
          <div className="mt-8 grid gap-5 text-[1.02rem] leading-8 text-mist">
            <p>I came to Canada as an international student. That experience shaped how I understand newcomer and family decisions.</p>
            <p>
              My background includes work in settlement and employment services, university settings, counselling, teaching, curriculum
              development, and program facilitation across Canada and Asia.
            </p>
            <p>
              Academic background includes Queen's University, the University of Saskatchewan, and the University of British Columbia.
            </p>
          </div>
          <div className="mt-9 rounded-md border border-line bg-ivory p-6">
            <p className="eyebrow">Experience highlights</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {experienceHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-mist">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="section-y bg-ivory">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Immigration services and hearing support"
            intro="Select a category to explore common areas of support."
          />
          <p className="max-w-md text-base leading-8 text-mist lg:justify-self-end">Start with the facts, risks, and next step.</p>
        </div>
        <div className="mt-12 grid gap-4">
          {serviceCategories.map((category, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={category.title} className="accordion-card">
                <button
                  className="flex w-full items-center justify-between gap-5 px-5 py-6 text-left sm:px-8"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="grid gap-2">
                    <span className="text-xs font-medium text-bronze">{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-2xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                      {category.title}
                    </span>
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-white text-xl text-ink">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-3 border-t border-line px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
                      {category.items.map(([title, text]) => (
                        <div key={title} className="rounded-md bg-white p-4">
                          <h3 className="text-sm font-medium text-ink">{title}</h3>
                          <p className="mt-2 text-sm leading-6 text-mist">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section-y bg-[#eef1f3]">
      <div className="section-shell">
        <SectionHeading eyebrow="Process" title="A clear process before action." intro="Simple steps before important decisions." centered />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([title, text], index) => (
            <article key={title} className="group rounded-md border border-white/80 bg-white/75 p-6 transition hover:-translate-y-1 hover:bg-white">
              <span className="font-serif text-6xl font-medium leading-none text-bronze/60">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 text-xl font-medium tracking-[-0.02em] text-ink">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-mist">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="resources" className="section-y bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionHeading eyebrow="Resources" title="Common questions about Canadian immigration" />
        <div className="grid gap-3">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;

            return (
              <article key={question} className="rounded-md border border-line bg-ivory/70">
                <button
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-medium leading-6 text-ink">{question}</span>
                  <span className="mt-0.5 text-lg text-bronze">{isOpen ? '-' : '+'}</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="border-t border-line px-5 py-5 text-sm leading-7 text-mist">{answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer-cinematic relative overflow-hidden bg-ink text-white">
      <div className="section-shell relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <LogoPlaceholder dark />
            <h2 className="mt-10 max-w-2xl font-serif text-[3.2rem] font-medium leading-[0.94] tracking-[-0.035em] sm:text-6xl">
              Guiding your journey.
              <span className="block italic text-white/80">Building your future.</span>
            </h2>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="primary-button bg-white text-ink hover:bg-bronze">
                Book a Consultation
              </a>
              <a href="#services" className="secondary-link text-white">
                View Services
              </a>
            </div>
          </div>
          <div className="footer-panel grid gap-8 sm:grid-cols-2">
            <div>
              <p className="footer-label">Address</p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                907-1026 Queens Avenue
                <br />
                New Westminster, BC
                <br />
                Vancouver Area
              </p>
            </div>
            <div>
              <p className="footer-label">Contact</p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                [Insert phone number]
                <br />
                [Insert email address]
              </p>
              <p className="mt-5 text-sm leading-7 text-white/70">
                [Approved RCIC-IRB insignia placeholder]
                <br />
                License number: [Insert official license number]
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-10 border-b border-white/10 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a key={item} href="#contact" className="social-link" aria-label={item}>
                {item.split(',')[0].slice(0, 2)}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-white/60 transition hover:text-white">
                {label}
              </a>
            ))}
            <a href="#contact" className="text-sm text-white/60 transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#contact" className="text-sm text-white/60 transition hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
        <p className="pt-8 text-sm leading-7 text-white/60">
          Information on this website is for general educational purposes only and does not constitute immigration advice or legal advice
          until a formal client relationship is established.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Process />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
