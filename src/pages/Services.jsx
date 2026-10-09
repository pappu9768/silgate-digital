import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Globe,
  Search,
  Share2,
  Megaphone,
  Palette,
  Video,
  Layers,
  Sparkles,
  Settings,
  Boxes,
  HelpCircle,
} from "lucide-react";

// Service images
import heroImg from "../assets/images/hero-img-services.png";
import webDevImg from "../assets/images/web-dev-services.png";
import seoImg from "../assets/images/seo-services.png";
import socialMediaImg from "../assets/images/social-media-management-services.png";
import digitalMarketingImg from "../assets/images/social-media-services.png";
import creativeDesignImg from "../assets/images/digital-marketing-services.png";
import ugcImg from "../assets/images/ugc-services.png";
import flexibleImg from "../assets/images/flexible-services.png";
import { services } from "../data/servicesData";
import ServicesComponents from "../components/ServiceComponents";


export default function Services() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


const quickNavServices = services.map(({ id, title, icon }) => ({
    id,
    title,
    icon,
  }));
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#F36C3D]/20 selection:text-[#F36C3D]">
      <main className="flex-1">
        {/* ================= 1. SERVICES HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#040C18] via-[#07172C] to-[#0A1E38] text-white py-16 md:py-24 lg:py-28 border-b border-slate-800/60">
          {/* Full-section background image layer */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <img
              src={heroImg}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay gradient for text readability — tune opacity here */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040C18]/80 via-[#07172C]/50 to-[#0A1E38]/30" />
          </div>

          {/* Subtle ambient glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00529B]/20 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F36C3D]/10 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl space-y-6 text-left">
              {/* Tag pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#F36C3D]">
                <span className="w-2 h-2 rounded-full bg-[#F36C3D] animate-pulse" />
                <span>Our Services</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-white">
                Integrated Digital Services for a Stronger,{" "}
                <span className="text-[#F36C3D]">Smarter</span> Tomorrow
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                From technology and marketing to creative and content, we provide
                integrated digital services to help your business build, engage and
                grow in the digital world.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F36C3D] hover:bg-[#D95627] text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. FIND THE RIGHT DIGITAL SOLUTION ================= */}
        <section id="solutions" className="py-16 md:py-24 bg-white scroll-mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-[#F36C3D] text-xs font-bold uppercase tracking-widest">
                Our Services
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Find the Right Digital Solution for Your Business
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We offer a complete range of digital services designed to help
                businesses build their online presence, connect with their
                audience and achieve their goals. Explore our service areas
                below to find the right solution for your needs.
              </p>
            </div>

            {/* Quick Solution Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {quickNavServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => scrollToSection(service.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        scrollToSection(service.id);
                      }
                    }}
                    className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-[#F36C3D]/50 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[170px] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F36C3D]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#F36C3D] group-hover:bg-[#F36C3D] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#F36C3D] transition-colors leading-snug px-1">
                      {service.title}
                    </h3>

                    <div className="text-[#F36C3D] text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= DETAILED SERVICE BLOCKS CONTAINER ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10 sm:space-y-12">

          {services.map((service) => (
            <ServicesComponents key={service.id} {...service} />
          ))}
          
        </div>

        {/* ================= 9. FLEXIBLE SERVICE ENGAGEMENT ================= */}
        <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Image */}
              <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={flexibleImg}
                  alt="Flexible Service Engagement"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Middle Copy */}
              <div className="lg:col-span-5 space-y-3 text-left">
                <span className="text-[#F36C3D] text-xs font-bold uppercase tracking-widest">
                  Flexible Engagement
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Choose the Right Engagement for Your Business
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  You can work with Silgate Digital for a single service or a
                  combination of services depending on your business
                  requirements. We'll understand your goals and recommend the
                  right approach to deliver the best results.
                </p>
              </div>

              {/* Right Engagement Options */}
              <div className="lg:col-span-3 flex flex-col gap-3.5">
                <div className="p-3.5 rounded-xl border border-slate-200/90 bg-[#F8FAFC] hover:border-[#F36C3D]/50 hover:bg-white transition-all flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#F36C3D] flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Single Service Engagement
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200/90 bg-[#F8FAFC] hover:border-[#F36C3D]/50 hover:bg-white transition-all flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#F36C3D] flex items-center justify-center shrink-0">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Multiple Services Engagement
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200/90 bg-[#F8FAFC] hover:border-[#F36C3D]/50 hover:bg-white transition-all flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#F36C3D] flex items-center justify-center shrink-0">
                    <Settings className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Customized Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 10. FINAL CTA ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#040C18] via-[#07172C] to-[#0A1E38] text-white py-20 md:py-24 text-center">
          {/* Ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00529B]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
            <span className="text-[#F36C3D] text-xs font-bold uppercase tracking-widest">
              Discuss Your Digital Requirement
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Let's Build the Right Digital Solution for Your Business
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you need a new website, better visibility, stronger social
              media presence, creative brand content, or an integrated digital
              strategy, we're here to help. Get in touch with us to discuss your
              requirements.
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F36C3D] hover:bg-[#D95627] text-white text-base font-semibold tracking-wide transition-all duration-200 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 group"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
