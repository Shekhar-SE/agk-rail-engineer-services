"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const highlights = [
  { title: "Quality Assurance", value: "100%" },
  { title: "Safety First", value: "Priority" },
  { title: "Standards Compliant", value: "Certified" },
  { title: "Timely Delivery", value: "Guaranteed" },
];

const services = [
  {
    title: "Railway Signalling Works",
    description:
      "End-to-end design and implementation of modern signalling systems.",
  },
  {
    title: "MSDAC Installation",
    description:
      "Testing & Commissioning of Multi Section Digital Axle Counters.",
  },
  {
    title: "Indoor & Outdoor Works",
    description:
      "Complete signalling execution for both indoor relay rooms and field gears.",
  },
  {
    title: "Civil & Cable Works",
    description:
      "Trenching, laying, and termination related to signalling networks.",
  },
  {
    title: "Project Execution",
    description:
      "Expert supervision and management from conception to handover.",
  },
  {
    title: "Annual Maintenance",
    description:
      "Reliable AMC services ensuring zero-downtime operations.",
  },
];

function ArrowUpRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="m4.5 7 7.5 5.5L19.5 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.2 3.8h3l1.3 4.1-2 1.5a15 15 0 0 0 5.1 5.1l1.5-2 4.1 1.3v3c0 .9-.7 1.7-1.7 1.7A15.7 15.7 0 0 1 5.5 5.5c0-.9.8-1.7 1.7-1.7Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
    </svg>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-clip bg-white font-sans text-slate-900 selection:bg-sky-200 selection:text-blue-950">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-white px-4 py-3 text-sm font-semibold text-blue-950 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      {/* Premium, motion-led navigation */}
      <header className="sticky top-0 z-50">
        <div data-scrolled={isScrolled} className={`relative border-b transition-all duration-500 ease-out ${
          isScrolled
            ? "border-blue-100 bg-white shadow-[0_12px_36px_rgba(7,35,79,0.14)]"
            : "border-slate-200/80 bg-white shadow-[0_5px_24px_rgba(7,35,79,0.07)]"
        }`}>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-80%,rgba(56,189,248,0.14),transparent_65%)]" />
          <nav aria-label="Main navigation" className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
            <div className={`flex items-center justify-between gap-4 transition-[height] duration-500 ease-out ${
              isScrolled ? "h-[66px] sm:h-[70px]" : "h-[78px] sm:h-[86px]"
            }`}>
              <a
                href="#top"
                aria-label="AGK Rail Engineer Services home"
                className="agk-nav-reveal agk-nav-reveal-1 group relative z-10 flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4"
              >
                <Image
                  src="/logo.png"
                  alt="AGK Rail Engineer Services Pvt. Ltd."
                  width={168}
                  height={54}
                  priority
                  className={`w-auto object-contain transition-all duration-500 ease-out group-hover:scale-[1.035] ${
                    isScrolled ? "h-8 sm:h-9" : "h-9 sm:h-11"
                  }`}
                />
              </a>

              {/* Quiet, editorial navigation with an animated rail-line underline */}
              <div className="agk-nav-reveal agk-nav-reveal-2 hidden items-center gap-2 md:flex lg:gap-5">
                {[
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="agk-nav-item group relative inline-flex items-center px-3 py-3 text-[14px] font-semibold tracking-[-0.01em] text-slate-600 transition-colors duration-300 hover:text-[#013A8D] focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 lg:px-4 lg:text-[15px]"
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">{item.label}</span>
                    <span aria-hidden="true" className="absolute inset-x-3 bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#013A8D] via-blue-500 to-sky-300 transition-transform duration-300 ease-out group-hover:scale-x-100 lg:inset-x-4" />
                    <span aria-hidden="true" className="absolute bottom-1 right-2 h-1 w-1 scale-0 rounded-full bg-sky-400 transition-transform duration-300 delay-75 group-hover:scale-100" />
                  </a>
                ))}
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <a
                  href="#contact"
                  className="agk-nav-reveal agk-nav-reveal-3 group relative inline-flex min-h-10 items-center justify-center overflow-hidden rounded-full border border-blue-300/25 bg-gradient-to-b from-[#08479B] to-[#06377E] px-6 py-1.5 text-[12px] font-semibold tracking-[0.01em] text-white shadow-[0_5px_16px_rgba(1,58,141,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/50 hover:from-[#0A50AC] hover:to-[#073F91] hover:shadow-[0_9px_22px_rgba(1,58,141,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 sm:min-h-11 sm:px-6 sm:text-sm"
                >
                  <span aria-hidden="true" className="agk-cta-sheen pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                  <span className="relative">Contact Us</span>
                </a>

                <button
                  type="button"
                  aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileOpen}
                  aria-controls="agk-mobile-navigation"
                  onClick={() => setMobileOpen((open) => !open)}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#063F91] shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 md:hidden"
                >
                  <span className="sr-only">Menu</span>
                  <span className="relative block h-4 w-4">
                    <span className={`absolute left-0 top-[3px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${mobileOpen ? "translate-y-[4.5px] rotate-45" : ""}`} />
                    <span className={`absolute left-0 top-[7.5px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-200 ${mobileOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"}`} />
                    <span className={`absolute left-0 top-[12px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
                  </span>
                </button>
              </div>
            </div>

            {/* Compact animated mobile menu; no extra copy or utility strip */}
            <div
              id="agk-mobile-navigation"
              aria-hidden={!mobileOpen}
              className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out md:hidden ${
                mobileOpen ? "max-h-40 border-t border-slate-100 pb-3 pt-2 opacity-100" : "max-h-0 border-t border-transparent p-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Contact", href: "#contact" },
                ].map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    tabIndex={mobileOpen ? 0 : -1}
                    onClick={() => setMobileOpen(false)}
                    className="group inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg px-2 text-xs font-semibold text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-[#013A8D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                  >
                    <span className="text-[9px] font-bold text-blue-700/55 transition-colors group-hover:text-blue-700">0{index + 1}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
          <div aria-hidden="true" className="agk-nav-beam pointer-events-none absolute bottom-0 left-0 h-[3px] w-[28%] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        </div>
        <style jsx global>{`
          @keyframes agk-nav-beam {
            0% { transform: translateX(-110%); opacity: 0; }
            8% { opacity: 1; }
            88% { opacity: 1; }
            100% { transform: translateX(470%); opacity: 0; }
          }
          @keyframes agk-nav-enter {
            0% { opacity: 0; transform: translateY(-11px); filter: blur(3px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes agk-cta-sheen {
            0%, 58% { transform: translateX(-180%) skewX(-12deg); opacity: 0; }
            64% { opacity: 1; }
            84% { transform: translateX(520%) skewX(-12deg); opacity: 0; }
            100% { transform: translateX(520%) skewX(-12deg); opacity: 0; }
          }
          .agk-nav-beam {
            animation: agk-nav-beam 3.8s cubic-bezier(.45, 0, .55, 1) infinite;
            filter: drop-shadow(0 0 5px rgba(56, 189, 248, .85));
          }
          .agk-nav-reveal { animation: agk-nav-enter 720ms cubic-bezier(.18, .72, .24, 1) both; }
          .agk-nav-reveal-1 { animation-delay: 80ms; }
          .agk-nav-reveal-2 { animation-delay: 170ms; }
          .agk-nav-reveal-3 { animation-delay: 270ms; }
          .agk-nav-item { animation: agk-nav-enter 620ms cubic-bezier(.18, .72, .24, 1) both; }
          .agk-nav-item:nth-child(1) { animation-delay: 180ms; }
          .agk-nav-item:nth-child(2) { animation-delay: 250ms; }
          .agk-nav-item:nth-child(3) { animation-delay: 320ms; }
          .agk-cta-sheen { animation: agk-cta-sheen 4.6s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) {
            .agk-nav-beam, .agk-nav-reveal, .agk-nav-item, .agk-cta-sheen { animation: none !important; }
          }
        `}</style>
      </header>

      <main id="main-content">
        {/* Hero */}
        <section id="top" aria-labelledby="hero-title" className="relative isolate flex min-h-[650px] items-center justify-center overflow-hidden bg-slate-950 text-center sm:min-h-[690px] lg:min-h-[calc(100svh-76px)]">
          <div className="absolute inset-0 -z-20">
            <Image
              src="/train1.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,12,29,0.84)_0%,rgba(4,17,39,0.66)_48%,rgba(3,12,29,0.72)_100%)]" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(3,12,29,0.72)_0%,transparent_45%,rgba(3,12,29,0.20)_100%)]" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-24 sm:px-8 sm:py-28">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-slate-950/30 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-sky-100 shadow-lg backdrop-blur-md sm:text-xs">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              Railway Infrastructure &amp; Signalling
            </div>

            <h1 id="hero-title" className="max-w-5xl text-4xl font-extrabold leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">AGK RAIL ENGINEER</span>
              <span className="mt-1 block">
                SERVICES <span className="bg-gradient-to-r from-sky-200 via-cyan-300 to-blue-300 bg-clip-text text-transparent">PVT. LTD.</span>
              </span>
            </h1>

            <div aria-hidden="true" className="my-7 h-px w-20 bg-gradient-to-r from-transparent via-sky-300 to-transparent sm:my-8" />

            <p className="max-w-2xl text-base font-light leading-8 text-slate-200 sm:text-xl sm:leading-9">
              Building robust railway networks. <span className="font-semibold text-white">Connecting futures.</span>
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#services"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-950 shadow-xl transition duration-200 hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 motion-reduce:transform-none motion-reduce:transition-none"
              >
                Explore Our Services
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </a>
              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
              >
                Discover AGK
              </a>
            </div>
          </div>

          <a href="#about" aria-label="Scroll to about section" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:flex">
            <span>Scroll to explore</span>
            <span aria-hidden="true" className="flex h-8 w-5 items-start justify-center rounded-full border border-white/50 p-1">
              <span className="h-1.5 w-1 rounded-full bg-white" />
            </span>
          </a>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-[#F7F9FC] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div aria-hidden="true" className="absolute inset-0 opacity-50 [background-image:radial-gradient(#cbd5e1_0.7px,transparent_0.7px)] [background-size:21px_21px]" />
          <div aria-hidden="true" className="absolute -right-40 top-8 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <div>
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-800">
                <span className="h-px w-8 bg-blue-700" />
                01 / Who We Are
              </p>
              <h2 id="about-title" className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                Engineering the <span className="text-blue-800">Future of Railways</span>
              </h2>
              <div aria-hidden="true" className="mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-blue-800 to-sky-400" />
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We specialize in delivering high-quality railway engineering, infrastructure, and comprehensive signalling solutions.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We are dedicated to building robust railway networks while ensuring strict compliance with national railway standards, focusing on safety, precision, and timely delivery.
              </p>
              <a href="#services" className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-800 transition-colors hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4">
                Explore our capabilities
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </a>
            </div>

            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-3 rounded-[1.6rem] border border-blue-200/70" />
              <div className="relative grid grid-cols-1 auto-rows-fr gap-3 sm:grid-cols-2 sm:gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="group relative flex h-full min-h-[118px] flex-col justify-center overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950 p-5 shadow-[0_10px_25px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/60 hover:shadow-[0_14px_30px_rgba(15,23,42,0.14)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[145px] sm:rounded-2xl sm:p-6"
                  >
                    <div aria-hidden="true" className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-500/[0.08] blur-2xl transition-colors group-hover:bg-sky-400/15" />
                    <div className="relative">
                      <p className="text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">{item.value}</p>
                      <p className="mt-2 text-sm font-medium text-sky-200 sm:text-base">{item.title}</p>
                    </div>
                    <div aria-hidden="true" className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-400/80 via-blue-400/50 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:left-6 sm:right-6" />
                  </div>
                ))}
              </div>
              <div aria-hidden="true" className="absolute -bottom-9 -left-9 -z-10 h-40 w-40 rounded-full bg-slate-300/50 blur-3xl" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" aria-labelledby="services-title" className="relative isolate overflow-hidden bg-[#071326] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.13] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:54px_54px]" />
          <div aria-hidden="true" className="absolute -left-48 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-blue-700/15 blur-[100px]" />
          <div aria-hidden="true" className="absolute -bottom-56 -right-32 -z-10 h-[38rem] w-[38rem] rounded-full bg-cyan-500/10 blur-[110px]" />

          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end">
              <div>
                <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                  <span className="h-px w-8 bg-sky-300" />
                  02 / What We Do
                </p>
                <h2 id="services-title" className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                  Our Core Services
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:pb-1">
                Comprehensive solutions for modern railway infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group relative flex min-h-[232px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.075] hover:shadow-[0_20px_42px_rgba(0,0,0,0.22)] sm:p-7 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-8 flex items-center">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/[0.08] text-sm font-bold text-sky-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug tracking-[-0.015em] text-white sm:text-xl">{service.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">{service.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-2xl text-sm leading-6 text-slate-400">
                From signalling works to ongoing maintenance, our services support railway infrastructure through every stage of execution.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Contact and Footer */}
      <footer id="contact" className="scroll-mt-20 bg-white px-5 pb-6 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-slate-200 pb-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:gap-16 lg:pb-16">
            <div className="max-w-sm">
              <a href="#top" aria-label="AGK Rail Engineer Services home" className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4">
                <Image src="/logo.png" alt="AGK Rail Engineer Services Pvt. Ltd." width={156} height={50} className="h-10 w-auto object-contain" />
              </a>
              <p className="mt-6 text-sm leading-7 text-slate-600">
                Building Railways <span className="px-1 text-blue-700">•</span> Connecting Futures. Delivering excellence in railway engineering and infrastructure development across India.
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">Corporate Office</p>
              <address className="space-y-2 text-sm not-italic leading-6 text-slate-600">
                <p className="font-semibold text-slate-900">Alla Gopi Krishna, Director</p>
                <p>Plot No. 57, Flat No. 102</p>
                <p>Sai Madhava Residency, Kukatpally</p>
                <p>Hyderabad – 500072</p>
              </address>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">Connect With Us</p>
              <div className="space-y-4">
                <a href="mailto:info@agkrails.com" className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-800 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50"><MailIcon /></span>
                  <span>info@agkrails.com</span>
                </a>
                <a href="tel:+919618368300" className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-800 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50"><PhoneIcon /></span>
                  <span>+91-9618368300</span>
                </a>
                <a href="https://www.agkrails.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-800 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50"><GlobeIcon /></span>
                  <span>www.agkrails.com</span>
                  <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-5 py-6 sm:flex-row sm:items-center">
            <p className="text-xs leading-5 text-slate-500">
              © {new Date().getFullYear()} AGK Rail Engineer Services Pvt. Ltd. All rights reserved.
            </p>

            <a
              href="https://dotsixlabs.in/business"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 transition-colors hover:border-blue-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              aria-label="Website designed by dotSixLabs"
            >
              <span className="text-xs text-slate-500">Built with precision by</span>
              <span className="flex items-center gap-2">
                {/* Animated dot mark — part of the dotSixLabs identity */}
                <span
                  aria-hidden="true"
                  className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-70 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-700 ring-2 ring-blue-100 transition-colors group-hover:bg-blue-500" />
                </span>
                <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-sm font-extrabold tracking-tight text-transparent">dotSixLabs</span>
                <ArrowUpRightIcon className="h-3.5 w-3.5 text-blue-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
