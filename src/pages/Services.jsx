import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Search,
  Share2,
  Megaphone,
  Palette,
  Video,
  Layers,
  Settings,
  Boxes,
  Code2,
  PenTool,
} from "lucide-react";

import { services } from "../data/servicesData";
import ServicesComponents from "../components/ServiceComponents";

export default function Services() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Section 10 analytics click tracking
  const handlePrimaryCtaClick = () => {
    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", "cta_click", {
          cta_name: "discuss_your_requirement",
          cta_location: "services_section_10",
          destination: "/contact",
        });
      }
      window.dispatchEvent(
        new CustomEvent("analytics_cta_click", {
          detail: {
            cta: "discuss_your_requirement",
            section: "section_10_discuss_digital_requirement",
            timestamp: Date.now(),
          },
        })
      );
    }
  };

  const handleSecondaryCtaClick = () => {
    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", "cta_click", {
          cta_name: "contact_us",
          cta_location: "services_section_10",
          destination: "/contact",
        });
      }
      window.dispatchEvent(
        new CustomEvent("analytics_cta_click", {
          detail: {
            cta: "contact_us",
            section: "section_10_discuss_digital_requirement",
            timestamp: Date.now(),
          },
        })
      );
    }
  };

  // Section 2: 6 tailored digital solution selector items
  const digitalSolutionServices = [
    {
      number: "01",
      id: "web-development",
      title: "Web Development",
      positioning: "Build your digital foundation.",
      description:
        "Responsive, scalable and business-focused websites and web solutions.",
      icon: Code2,
    },
    {
      number: "02",
      id: "seo",
      title: "SEO",
      positioning: "Strengthen your search visibility.",
      description:
        "Improve organic visibility and help relevant audiences discover your business online.",
      icon: Search,
    },
    {
      number: "03",
      id: "social-media-management",
      title: "Social Media Management",
      positioning: "Build and manage your social presence.",
      description:
        "Strategy, publishing, community engagement, campaigns and ongoing channel management.",
      icon: Share2,
    },
    {
      number: "04",
      id: "digital-marketing",
      title: "Digital Marketing",
      positioning: "Reach, engage and generate opportunities.",
      description:
        "Integrated digital campaigns focused on audience reach, engagement, lead generation and growth.",
      icon: Megaphone,
    },
    {
      number: "05",
      id: "creative-graphic-design",
      title: "Creative & Graphic Design",
      positioning: "Communicate your brand with impact.",
      description:
        "Creative design solutions for digital campaigns, brand communication and marketing requirements.",
      icon: PenTool,
    },
    {
      number: "06",
      id: "ugc-content-creation",
      title: "UGC & Content Creation",
      positioning: "Create content that connects.",
      description:
        "UGC, reels, short-form videos and digital content designed for modern audiences and platforms.",
      icon: Video,
    },
  ];

  // Six connected service capabilities for the integrated ecosystem visual
  const ecosystemLeftServices = [
    {
      id: "web-development",
      title: "Web Development",
      pillar: "Technology",
      icon: Globe,
    },
    {
      id: "seo",
      title: "SEO",
      pillar: "Marketing",
      icon: Search,
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      pillar: "Marketing",
      icon: Megaphone,
    },
  ];

  const ecosystemRightServices = [
    {
      id: "social-media-management",
      title: "Social Media Management",
      pillar: "Content",
      icon: Share2,
    },
    {
      id: "creative-graphic-design",
      title: "Creative & Graphic Design",
      pillar: "Creative",
      icon: Palette,
    },
    {
      id: "ugc-content-creation",
      title: "UGC & Content Creation",
      pillar: "Content",
      icon: Video,
    },
  ];

  const allEcosystemServices = [
    ...ecosystemLeftServices,
    ...ecosystemRightServices,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#F36C3D]/20 selection:text-[#F36C3D]">
      <main className="flex-1">
        {/* ================= 1. SERVICES HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#030B17] via-[#07172C] to-[#0A1E38] text-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 border-b border-slate-800/80">
          {/* Subtle tech digital blueprint grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Controlled ambient background glows */}
          <div className="absolute top-1/4 right-1/4 w-[460px] h-[460px] bg-[#00529B]/15 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute bottom-8 left-8 w-[380px] h-[380px] bg-[#F36C3D]/10 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* 50:50 Desktop Composition, responsive stack on mobile/tablet */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
              {/* Left Column: Section label, headline, supporting copy, CTA */}
              <div className="lg:col-span-6 space-y-6 text-left">
                {/* Tag pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#F36C3D]">
                  <span className="w-2 h-2 rounded-full bg-[#F36C3D] animate-pulse" />
                  <span>OUR SERVICES</span>
                </div>

                {/* Headline: The strongest element on the left */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.12] text-white">
                  Integrated Digital Services for a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C3D] to-[#E04826]">
                    Stronger, Smarter
                  </span>{" "}
                  Tomorrow
                </h1>

                {/* Supporting copy */}
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  From technology and marketing to creative and content, we
                  provide integrated digital services designed to help
                  businesses build, engage and grow in the digital world.
                </p>

                {/* Primary CTA button */}
                <div className="pt-2">
                  <button
                    onClick={() => scrollToSection("solutions")}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F36C3D] to-[#E04826] hover:from-[#E04826] hover:to-[#D95627] text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer group"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Column: Integrated Digital-Services Visual */}
              <div className="lg:col-span-6 w-full">
                {/* ----------------- DESKTOP & LAPTOP VISUAL (lg and above) ----------------- */}
                <div className="hidden lg:flex items-center justify-between relative max-w-[580px] mx-auto py-2">
                  {/* Left Service Nodes Column (3 connected capabilities) */}
                  <div className="flex flex-col justify-between gap-6 w-[170px] shrink-0 z-10">
                    {ecosystemLeftServices.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          key={service.id}
                          onClick={() => scrollToSection(service.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              scrollToSection(service.id);
                            }
                          }}
                          className="group relative p-3 rounded-xl bg-[#091A33]/90 border border-slate-700/80 hover:border-[#F36C3D] hover:bg-[#0C2244] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-orange-500/10 flex items-center gap-3 select-none"
                        >
                          {/* Consistent Lucide Icon container */}
                          <div className="w-9 h-9 rounded-lg bg-[#0E284E] border border-slate-700/60 flex items-center justify-center text-[#F36C3D] group-hover:bg-[#F36C3D] group-hover:text-white transition-colors duration-300 shrink-0">
                            <IconComponent className="w-4 h-4 stroke-[1.9]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 block truncate">
                              {service.pillar}
                            </span>
                            <span className="text-xs font-bold text-white group-hover:text-[#F36C3D] transition-colors block leading-tight">
                              {service.title}
                            </span>
                          </div>
                          {/* Connection port dot with orange accent */}
                          <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F36C3D] border-2 border-[#07172C] shadow-[0_0_8px_#F36C3D] group-hover:scale-125 transition-transform" />
                        </div>
                      );
                    })}
                  </div>

                  {/* Left SVG Connection Pathways */}
                  <svg
                    className="w-12 h-64 shrink-0 text-slate-600/70 pointer-events-none"
                    viewBox="0 0 48 240"
                    fill="none"
                  >
                    {/* Top path */}
                    <path
                      d="M 0 35 C 24 35, 24 90, 48 90"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    {/* Middle path */}
                    <path
                      d="M 0 120 L 48 120"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    {/* Bottom path */}
                    <path
                      d="M 0 205 C 24 205, 24 150, 48 150"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>

                  {/* Central Digital Screen / Interface */}
                  <div className="w-[200px] shrink-0 rounded-2xl bg-gradient-to-b from-[#091D38] to-[#061427] border border-slate-700/80 p-4 shadow-2xl relative z-20 text-center backdrop-blur-md">
                    {/* Screen Header Bar */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#F36C3D]" />
                        <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                      </div>
                      <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase">
                        SILGATE ECOSYSTEM
                      </span>
                    </div>

                    {/* Central Digital Emblem */}
                    <div className="relative mx-auto my-1 w-12 h-12 rounded-full bg-gradient-to-br from-[#F36C3D] to-[#D95627] flex items-center justify-center text-white shadow-lg shadow-orange-500/25">
                      <Layers className="w-6 h-6 stroke-[1.9]" />
                      <div className="absolute -inset-1.5 rounded-full border border-orange-500/30 animate-pulse pointer-events-none" />
                    </div>

                    <h2 className="text-xs font-black text-white uppercase tracking-tight mt-2.5">
                      Integrated Digital Services
                    </h2>

                    {/* Communicates: Technology + Marketing + Creative + Content */}
                    <div className="mt-2.5 pt-2 border-t border-slate-800/80 space-y-1">
                      <div className="text-[9px] font-semibold text-slate-300 leading-tight">
                        <span className="text-[#F36C3D]">Tech</span> +{" "}
                        <span className="text-[#F36C3D]">Marketing</span> +{" "}
                        <span className="text-[#F36C3D]">Creative</span> +{" "}
                        <span className="text-[#F36C3D]">Content</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">
                        <span>→</span>
                        <span>Unified Growth</span>
                      </div>
                    </div>

                    {/* Synchronization status */}
                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[8.5px] font-mono text-slate-400 uppercase">
                        6 Capabilities Active
                      </span>
                    </div>
                  </div>

                  {/* Right SVG Connection Pathways */}
                  <svg
                    className="w-12 h-64 shrink-0 text-slate-600/70 pointer-events-none"
                    viewBox="0 0 48 240"
                    fill="none"
                  >
                    {/* Top path */}
                    <path
                      d="M 0 90 C 24 90, 24 35, 48 35"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    {/* Middle path */}
                    <path
                      d="M 0 120 L 48 120"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    {/* Bottom path */}
                    <path
                      d="M 0 150 C 24 150, 24 205, 48 205"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>

                  {/* Right Service Nodes Column (3 connected capabilities) */}
                  <div className="flex flex-col justify-between gap-6 w-[170px] shrink-0 z-10">
                    {ecosystemRightServices.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          key={service.id}
                          onClick={() => scrollToSection(service.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              scrollToSection(service.id);
                            }
                          }}
                          className="group relative p-3 rounded-xl bg-[#091A33]/90 border border-slate-700/80 hover:border-[#F36C3D] hover:bg-[#0C2244] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-orange-500/10 flex items-center gap-3 select-none"
                        >
                          {/* Connection port dot with orange accent */}
                          <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F36C3D] border-2 border-[#07172C] shadow-[0_0_8px_#F36C3D] group-hover:scale-125 transition-transform" />
                          <div className="w-9 h-9 rounded-lg bg-[#0E284E] border border-slate-700/60 flex items-center justify-center text-[#F36C3D] group-hover:bg-[#F36C3D] group-hover:text-white transition-colors duration-300 shrink-0">
                            <IconComponent className="w-4 h-4 stroke-[1.9]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 block truncate">
                              {service.pillar}
                            </span>
                            <span className="text-xs font-bold text-white group-hover:text-[#F36C3D] transition-colors block leading-tight">
                              {service.title}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ----------------- MOBILE & TABLET VISUAL (< lg) ----------------- */}
                {/* Placed below CTA, simplified so all 6 service concepts remain recognizable without excessive height */}
                <div className="block lg:hidden w-full mt-4 sm:mt-6 space-y-4">
                  {/* Central Digital Screen Interface (Compact on mobile) */}
                  <div className="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-b from-[#091D38] to-[#061427] border border-slate-700/80 p-4 shadow-xl text-center backdrop-blur-md">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#F36C3D]" />
                        <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                        SILGATE ECOSYSTEM CORE
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-3 py-1">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F36C3D] to-[#D95627] flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-500/20">
                        <Layers className="w-5 h-5 stroke-[1.9]" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight">
                          Integrated Digital Services
                        </h2>
                        <p className="text-[10px] text-slate-300 font-medium">
                          <span className="text-[#F36C3D]">Technology</span> +{" "}
                          <span className="text-[#F36C3D]">Marketing</span> +{" "}
                          <span className="text-[#F36C3D]">Creative</span> +{" "}
                          <span className="text-[#F36C3D]">Content</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vertical Connection Circuit line */}
                  <div className="flex justify-center -my-2 relative z-10 pointer-events-none">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-[#F36C3D] to-slate-700" />
                  </div>

                  {/* 6 Connected Service Nodes in a clean, compact 2-column or 3-column layout */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-md mx-auto">
                    {allEcosystemServices.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          key={service.id}
                          onClick={() => scrollToSection(service.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              scrollToSection(service.id);
                            }
                          }}
                          className="p-2.5 rounded-xl bg-[#091A33]/90 border border-slate-700/80 hover:border-[#F36C3D] active:border-[#F36C3D] transition-all flex items-center gap-2.5 text-left cursor-pointer shadow-sm relative group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#0E284E] border border-slate-700/60 flex items-center justify-center text-[#F36C3D] group-hover:bg-[#F36C3D] group-hover:text-white transition-colors shrink-0">
                            <IconComponent className="w-3.5 h-3.5 stroke-[1.9]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[9px] font-semibold text-slate-400 block uppercase leading-none">
                              {service.pillar}
                            </span>
                            <span className="text-[11px] font-bold text-white group-hover:text-[#F36C3D] transition-colors block leading-tight truncate">
                              {service.title}
                            </span>
                          </div>
                          {/* Controlled orange connection indicator dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F36C3D] shrink-0" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. FIND THE RIGHT DIGITAL SOLUTION ================= */}
        <section
          id="solutions"
          className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80 scroll-mt-12 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-xs font-bold uppercase tracking-widest text-[#F36C3D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F36C3D]" />
                <span>Service Selector</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black text-[#0A1E38] tracking-tight leading-tight">
                Find the Right Digital Solution for Your Business
              </h2>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                Every business has different digital requirements. Whether you’re
                building your online presence, improving visibility,
                strengthening audience engagement or creating content, our
                services can be tailored around your specific business needs.
              </p>
            </div>

            {/* Service-Selector Grid: 3x2 on desktop, 2-col on tablet, 1-col on narrow mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
              {digitalSolutionServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => scrollToSection(service.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        scrollToSection(service.id);
                      }
                    }}
                    className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00529B]/40 hover:bg-[#FAFCFF] shadow-sm hover:shadow-xl hover:shadow-[#00529B]/5 hover:-translate-y-1 active:scale-[0.99] active:bg-slate-50 transition-all duration-300 cursor-pointer flex flex-col justify-between select-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00529B] focus-visible:ring-offset-2"
                  >
                    {/* Subtle top accent gradient line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-[#00529B] group-hover:to-[#F36C3D] transition-all duration-500 rounded-t-2xl" />

                    <div>
                      {/* Top Bar: Outline Icon + Number Badge + Arrow */}
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100/90 flex items-center justify-center text-[#00529B] group-hover:bg-[#00529B] group-hover:text-white group-hover:border-[#00529B] transition-all duration-300 shrink-0 shadow-sm">
                          <IconComponent className="w-5 h-5 stroke-[1.8]" />
                        </div>

                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold tracking-wider text-slate-400 group-hover:text-[#F36C3D] transition-colors">
                            {service.number}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-400 group-hover:text-[#F36C3D] group-hover:border-orange-200 group-hover:bg-orange-50/60 transition-all duration-300">
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#0A1E38] group-hover:text-[#00529B] transition-colors tracking-tight leading-snug">
                        {service.title}
                      </h3>

                      {/* Short Positioning Line */}
                      <p className="text-xs sm:text-sm font-semibold text-[#F36C3D] mt-1.5 leading-tight">
                        {service.positioning}
                      </p>

                      {/* Descriptive Sentence */}
                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Micro-Interaction Cue */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-[#00529B] transition-colors">
                      <span>View details</span>
                      <span className="text-[#F36C3D] font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= DETAILED SERVICE SECTIONS (SECTIONS 3 - 8) ================= */}
        <div>
          {services.map((service) => (
            <ServicesComponents key={service.id} {...service} />
          ))}
        </div>

        {/* ================= 9. FLEXIBLE SERVICE ENGAGEMENT ================= */}
        <section
          id="flexible-engagement"
          className="py-20 lg:py-24 bg-[#F8FAFC] border-y border-slate-200/80 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-[#F36C3D]/20 text-[#F36C3D] text-xs font-bold uppercase tracking-wider">
                Flexible Service Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1E38] tracking-tight leading-tight">
                Choose the Right Digital Support for Your Business
              </h2>
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                <p>
                  Every business has different digital priorities. Some may need
                  support for a specific requirement, while others may require
                  multiple digital capabilities working together.
                </p>
                <p>
                  Silgate Digital offers flexible engagement based on your
                  business needs—allowing you to start with the services you
                  require and expand the scope as your digital requirements
                  evolve.
                </p>
              </div>
            </div>

            {/* Subtle Independent Paths Indicator (Desktop Only) */}
            <div className="hidden lg:block mb-10">
              <div className="relative flex items-center justify-between max-w-3xl mx-auto px-6">
                {/* Connecting Line (Communicates independent choices, not mandatory progression) */}
                <div
                  className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-orange-200 via-slate-200 to-orange-200 z-0"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#F36C3D]" />
                  <span>Single Requirement</span>
                </div>
                <div className="relative z-10 flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#00529B]" />
                  <span>Multiple Requirements</span>
                </div>
                <div className="relative z-10 flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#0A1E38]" />
                  <span>Customized Solution</span>
                </div>
              </div>
            </div>

            {/* Three-Path Structure with Three Equal-Width Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Option 01: Single Service Engagement */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#F36C3D]/40 transition-all duration-300 group">
                <div>
                  {/* Top Bar: 01 Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-black text-[#F36C3D] font-mono tracking-tighter">
                      01
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-[#F36C3D] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Layers className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A1E38] tracking-tight">
                      Single Service Engagement
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#F36C3D] leading-snug">
                      Focused expertise for a specific requirement.
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mt-4">
                    Choose an individual service when you have a clearly defined
                    digital requirement.
                  </p>

                  {/* Examples */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Examples
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Web Development",
                        "SEO",
                        "Social Media Management",
                        "Digital Marketing",
                        "Creative Design",
                        "UGC & Content Creation",
                      ].map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/70 rounded-lg px-2.5 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Context Note */}
                <div className="mt-8 pt-4 border-t border-slate-100 bg-slate-50/60 -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <span className="font-semibold text-slate-700">Best for: </span>
                    Businesses that already manage other digital functions internally or through existing partners.
                  </p>
                </div>
              </div>

              {/* Option 02: Multiple Services Engagement */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#00529B]/40 transition-all duration-300 group">
                <div>
                  {/* Top Bar: 02 Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-black text-[#F36C3D] font-mono tracking-tighter">
                      02
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#00529B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Boxes className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A1E38] tracking-tight">
                      Multiple Services Engagement
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#00529B] leading-snug">
                      Bring connected digital capabilities together.
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mt-4">
                    Combine relevant services when your requirement involves
                    multiple areas of digital execution.
                  </p>

                  {/* Examples */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Examples
                    </span>
                    <div className="space-y-2">
                      {[
                        "Web Development + SEO",
                        "Social Media Management + Creative Design + UGC & Content Creation",
                        "Digital Marketing + Landing Page Support + Creative Assets",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/70 rounded-lg p-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00529B] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Context Note */}
                <div className="mt-8 pt-4 border-t border-slate-100 bg-slate-50/60 -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <span className="font-semibold text-slate-700">Key principle: </span>
                    The combination should always be based on the actual business requirement rather than a predefined bundle.
                  </p>
                </div>
              </div>

              {/* Option 03: Customized Digital Solution */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#0A1E38]/40 transition-all duration-300 group">
                <div>
                  {/* Top Bar: 03 Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-black text-[#F36C3D] font-mono tracking-tighter">
                      03
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 text-[#0A1E38] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Settings className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A1E38] tracking-tight">
                      Customized Digital Solution
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#0A1E38] leading-snug">
                      Build the engagement around your business needs.
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mt-4">
                    For requirements that do not fit neatly into one service
                    category, Silgate Digital can define a customized scope by
                    bringing together the relevant technology, marketing, creative
                    and content capabilities.
                  </p>

                  {/* Scope Structure */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Scope Tailoring
                    </span>
                    <div className="space-y-2">
                      {[
                        "Business Objective Alignment",
                        "Tailored Cross-Functional Capabilities",
                        "Clear Deliverables & Scope of Work",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/70 rounded-lg p-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0A1E38] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Context Note */}
                <div className="mt-8 pt-4 border-t border-slate-100 bg-slate-50/60 -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <span className="font-semibold text-slate-700">Structure: </span>
                    The engagement can be structured around the business objective, required deliverables and scope of work.
                  </p>
                </div>
              </div>
            </div>

            {/* Consultative Closing Statement */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F36C3D] shrink-0" />
                <p className="text-base sm:text-lg font-bold text-[#0A1E38] tracking-tight">
                  “Start with what you need. Scale when you need.”
                </p>
                <span className="hidden sm:inline text-slate-300">•</span>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Consultative, flexible engagement designed around your real requirements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 10. DISCUSS YOUR DIGITAL REQUIREMENT ================= */}
        <section
          id="discuss-requirement"
          className="relative overflow-hidden bg-gradient-to-b from-[#061426] via-[#0A1E38] to-[#040C18] text-white py-16 sm:py-20 lg:py-24 text-center border-t border-slate-800/60"
        >
          {/* Subtle gradient glow & digital ambiance (does not compete with CTA) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[260px] bg-[#00529B]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            {/* Eyebrow badge: Order: LET'S WORK TOGETHER */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F36C3D] text-xs font-bold uppercase tracking-widest">
                Let’s Work Together
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Have a Digital Requirement? Let’s Find the Right Solution.
            </h2>

            {/* Supporting Copy */}
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you need support for a specific digital service or a
              combination of capabilities, tell us what you’re looking to
              achieve. Our team will understand your requirements and explore
              the right way forward for your business.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto w-full">
              {/* Primary CTA: Orange/Red Gradient with stronger visual prominence */}
              <Link
                to="/contact"
                onClick={handlePrimaryCtaClick}
                data-analytics-cta="discuss-your-requirement"
                aria-label="Discuss Your Requirement with Silgate Digital"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F36C3D] via-[#F15E2C] to-[#E55325] hover:from-[#E55325] hover:to-[#D44015] text-white text-base font-semibold tracking-wide transition-all duration-200 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#F36C3D] focus:ring-offset-2 focus:ring-offset-[#0A1E38] group w-full sm:w-auto"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA: White/Transparent Outline */}
              <Link
                to="/contact"
                onClick={handleSecondaryCtaClick}
                data-analytics-cta="contact-us"
                aria-label="Contact Us directly"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white text-base font-semibold tracking-wide border border-white/30 hover:border-white/60 transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0A1E38] group w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
