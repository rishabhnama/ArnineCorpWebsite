import React from 'react';

// Arnine Landing Page (single-file React component)
// Tailwind CSS assumed to be available in the project.
// Uses basic shadcn/ui components imports as placeholders; remove or replace if not available.

export default function ArnineLanding() {
  return (
    <div className="min-h-screen bg-[#071029] text-white antialiased">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#2fb7ff] to-[#1172c6] rounded-lg flex items-center justify-center shadow-md">
            {/* Placeholder glyph for 'A' inside a shield */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2L4 6v6c0 5 4 9 8 9s8-4 8-9V6l-8-4z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 15L12 8l2.5 7" stroke="#071029" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide">ARNINE</h1>
            <div className="text-xs text-sky-300 font-medium">Cybersecurity Consulting</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-gradient-to-r from-[#2fb7ff] to-[#1172c6] text-[#071029] px-4 py-2 rounded-lg font-semibold shadow">Get in Touch</a>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">We secure digital transformation — before threats do.</h2>
          <p className="mt-6 text-slate-300 max-w-xl">Arnine helps enterprises and fast-moving startups identify vulnerabilities, build resilient systems, and respond rapidly to incidents. We combine offensive testing, pragmatic engineering, and compliance-first thinking to reduce risk.</p>

          <div className="mt-8 flex gap-4">
            <a href="#services" className="px-5 py-3 bg-white text-[#071029] rounded-md font-semibold shadow">Our Services</a>
            <a href="#contact" className="px-5 py-3 border border-slate-600 rounded-md text-slate-200 hover:border-white">Request a Quote</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md text-sm text-slate-300">
            <div>
              <div className="text-xs uppercase tracking-wide text-sky-300">Experience</div>
              <div className="font-semibold">15+ years in security</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-sky-300">Approach</div>
              <div className="font-semibold">Offense + Engineering + Compliance</div>
            </div>
          </div>
        </div>

        {/* Hero visual / mockup card */}
        <div className="flex-1">
          <div className="bg-[#0b2238] rounded-2xl p-6 shadow-xl border border-slate-800">
            <h3 className="font-semibold text-lg">Sample Assessment Snapshot</h3>
            <div className="mt-4 grid gap-3">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>External Attack Surface</span>
                <span className="font-semibold text-white">Low</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Critical Vulnerabilities</span>
                <span className="font-semibold text-amber-400">2</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Mean Time to Remediate</span>
                <span className="font-semibold text-white">4 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">What we do</h3>
        <p className="mt-2 text-slate-300 max-w-2xl">Tailored security programs that scale with your business.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard title="Risk Assessment" desc="Comprehensive threat modeling, attack surface mapping, and prioritized remediation plans." />
          <ServiceCard title="Security Audits & Compliance" desc="PCI, SOC2, ISO 27001 readiness assessments and evidence-driven audit support." />
          <ServiceCard title="Incident Response & Forensics" desc="Rapid response, containment, root-cause analysis and remediation guidance." />
          <ServiceCard title="Penetration Testing" desc="External, internal, red-team exercises and simulated phishing campaigns." />
          <ServiceCard title="Cloud Security & DevSecOps" desc="Infrastructure as code review, secure CI/CD hardening, and cloud configuration audits." />
          <ServiceCard title="Managed Detection & Response" desc="24/7 monitoring, detection tuning, and playbook-driven triage." />
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">About Arnine</h3>
            <p className="mt-4 text-slate-300">We are a team of security engineers and former incident responders helping organizations turn security from a blocker into a business enabler. Our philosophy: measurable risk reduction, fast remediation, and clear communication.</p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <ul className="grid grid-cols-2 gap-4 text-sm text-slate-300">
              <li><strong className="text-white">Offensive Security</strong><div>Red team & penetration testing</div></li>
              <li><strong className="text-white">Engineering</strong><div>Secure architecture & IaC reviews</div></li>
              <li><strong className="text-white">Compliance</strong><div>Audit readiness & gap analysis</div></li>
              <li><strong className="text-white">Response</strong><div>Playbook & tabletop exercises</div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800">
        <div className="md:flex md:items-start md:gap-12">
          <div className="md:w-1/2">
            <h4 className="text-xl font-bold">Get in touch</h4>
            <p className="mt-2 text-slate-300">For consulting, assessments, or to discuss a tailored security program — reach out and we'll respond within one business day.</p>

            <div className="mt-6 text-sm text-slate-200">
              <div><strong>Email:</strong> hello@arnine.com</div>
              <div className="mt-1"><strong>Phone:</strong> +1 (555) 123-4567</div>
              <div className="mt-1"><strong>Website:</strong> www.arnine.com</div>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:w-1/2">
            <form className="space-y-4">
              <div>
                <label className="sr-only">Name</label>
                <input className="w-full rounded-md border border-slate-700 bg-[#061629] px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="sr-only">Email</label>
                <input className="w-full rounded-md border border-slate-700 bg-[#061629] px-3 py-2" placeholder="Your email" />
              </div>
              <div>
                <label className="sr-only">Message</label>
                <textarea className="w-full rounded-md border border-slate-700 bg-[#061629] px-3 py-2" rows={4} placeholder="Tell us about your needs"></textarea>
              </div>
              <div>
                <button type="button" className="px-4 py-2 rounded-md bg-gradient-to-r from-[#2fb7ff] to-[#1172c6] text-[#071029] font-semibold">Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} Arnine — All rights reserved.</div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc }){
  return (
    <div className="rounded-xl p-6 bg-[#071a2b] border border-slate-800">
      <div className="text-sky-300 text-sm font-semibold">{title}</div>
      <p className="mt-2 text-slate-300 text-sm">{desc}</p>
      <div className="mt-4">
        <a href="#contact" className="text-sm font-medium hover:underline">Contact us →</a>
      </div>
    </div>
  )
}
