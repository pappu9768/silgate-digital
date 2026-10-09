import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Users,
  CheckCircle,
  Globe,
  Target,
  Compass,
  Code2,
  TrendingUp,
  Palette,
  Briefcase,
  Sliders,
  Share2,
  UserCheck,
  RefreshCw,
  Search,
  Megaphone,
  Video,
  Landmark,
  Wallet,
  ShieldCheck,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Plane,
  ChevronRight,
} from "lucide-react";

// Visual Assets
import heroPuzzleImg from "../assets/images/heroPuzzleImg.png";
import whoWeAreVisual from "../assets/images/who_we_are_visual.jpg";

// Client Logos
import amazonLogo from "../assets/images/clients/amazon.svg";
import flipkartLogo from "../assets/images/clients/flipkart.svg";
import godrejLogo from "../assets/images/clients/godrej.svg";
import hdfcLogo from "../assets/images/clients/hdfc-bank.svg";
import mahindraLogo from "../assets/images/clients/mahindra.svg";
import bajajLogo from "../assets/images/clients/bajaj.svg";
import tataLogo from "../assets/images/clients/tata.svg";
import dlfLogo from "../assets/images/clients/dlf.svg";
import mgLogo from "../assets/images/MG-logo-1.png";
import amityLogo from "../assets/images/Amity-logo.png";
import sircaLogo from "../assets/images/sirca.webp";
import vegaLogo from "../assets/images/vega.webp";
import xonLogo from "../assets/images/xon-logo.webp";
import metsoLogo from "../assets/images/metso.png.webp";
import jaksonLogo from "../assets/images/jakson.png.webp";
import omaxeLogo from "../assets/images/omaxe.webp";

export default function AboutUs() {
  // Section 2: Three Pillars
  const pillars = [
    {
      num: "01",
      title: "TECHNOLOGY",
      desc: "Building reliable and scalable digital experiences",
      icon: Code2,
    },
    {
      num: "02",
      title: "MARKETING",
      desc: "Creating strategies that improve visibility, reach and engagement",
      icon: TrendingUp,
    },
    {
      num: "03",
      title: "CREATIVE",
      desc: "Developing impactful content and designs that strengthen brand communication",
      icon: Palette,
    },
  ];

  // Section 3: Company Snapshot Metrics
  const snapshotMetrics = [
    {
      val: "7+",
      label: "Years of Experience",
      icon: Clock,
    },
    {
      val: "50+",
      label: "Clients Served",
      icon: Users,
    },
    {
      val: "125+",
      label: "Projects Delivered",
      icon: CheckCircle,
    },
    {
      val: "8+",
      label: "Industries Served",
      icon: Globe,
    },
  ];

  // Section 4: Approach Core Elements
  const approachElements = [
    {
      num: "01",
      title: "Strategy",
      subtitle: "Turning business objectives into a clear digital direction.",
      desc: "We understand the business, audience and requirements before defining the right approach, channels and priorities.",
      icon: Target,
    },
    {
      num: "02",
      title: "Creativity",
      subtitle: "Transforming ideas into engaging digital communication.",
      desc: "Creative thinking helps us build experiences, content and communication that are relevant to the brand and its audience.",
      icon: Palette,
    },
    {
      num: "03",
      title: "Technology",
      subtitle: "Building the foundation for scalable digital execution.",
      desc: "We use the right technologies and digital platforms to turn strategy and creative ideas into reliable, effective solutions.",
      icon: Code2,
    },
  ];

  // Section 6: What We Bring (6 Strengths)
  const strengths = [
    {
      num: "01",
      title: "Business Understanding",
      sub: "Solutions begin with understanding the business.",
      desc: "We take time to understand your objectives, audience, requirements and challenges so that every digital initiative has a clear business purpose.",
      icon: Briefcase,
    },
    {
      num: "02",
      title: "Customized Solutions",
      sub: "Built around your requirements, not standard templates.",
      desc: "Our solutions are tailored to the specific needs of each business, allowing us to recommend the right combination of strategy, technology and creative execution.",
      icon: Sliders,
    },
    {
      num: "03",
      title: "Multi-Disciplinary Expertise",
      sub: "Multiple digital capabilities working together.",
      desc: "Our expertise across technology, marketing, SEO, social media, design and content enables us to approach digital requirements from multiple perspectives.",
      icon: Share2,
    },
    {
      num: "04",
      title: "Flexible & Scalable Execution",
      sub: "Solutions that can evolve with your business.",
      desc: "Whether the requirement is focused or involves multiple digital capabilities, our execution can adapt and scale as business requirements change.",
      icon: TrendingUp,
    },
    {
      num: "05",
      title: "Collaborative Working",
      sub: "Clear communication throughout the engagement.",
      desc: "We work closely with our clients, maintaining transparency around requirements, deliverables and progress throughout the project.",
      icon: UserCheck,
    },
    {
      num: "06",
      title: "Continuous Improvement",
      sub: "Learning, measuring and improving over time.",
      desc: "Digital requirements continue to evolve. We use performance insights and ongoing learning to identify opportunities for refinement and improvement.",
      icon: RefreshCw,
    },
  ];

  // Section 7: Our Capabilities (6 Capabilities)
  const capabilities = [
    {
      num: "01",
      title: "Web Development",
      sub: "Building reliable and scalable digital experiences.",
      desc: "Custom, responsive and business-focused websites and web solutions designed around usability, performance and evolving requirements.",
      icon: Code2,
      link: "/services/website-development-india",
    },
    {
      num: "02",
      title: "SEO",
      sub: "Improving visibility where your audience is searching.",
      desc: "Strategic search optimization focused on strengthening organic visibility, relevant traffic and long-term digital presence.",
      icon: Search,
      link: "/services/seo-services",
    },
    {
      num: "03",
      title: "Social Media Management",
      sub: "Building consistent and engaging brand presence.",
      desc: "Social media strategy, publishing, community engagement, campaigns and performance management across relevant platforms.",
      icon: Share2,
      link: "/services/social-media-marketing",
    },
    {
      num: "04",
      title: "Digital Marketing",
      sub: "Connecting businesses with the right digital audience.",
      desc: "Integrated digital campaigns focused on improving reach, engagement, lead generation and online growth.",
      icon: Megaphone,
      link: "/services/digital-marketing",
    },
    {
      num: "05",
      title: "Creative & Graphic Design",
      sub: "Turning brand communication into impactful visuals.",
      desc: "Creative solutions for digital campaigns, brand communication, marketing collateral and other business requirements.",
      icon: Palette,
      link: "/services/creative-communication",
    },
    {
      num: "06",
      title: "UGC & Content Creation",
      sub: "Creating authentic content built for digital platforms.",
      desc: "UGC, reels, short-form videos and brand storytelling designed to communicate naturally and engage digital audiences.",
      icon: Video,
      link: "/services/ugc-video-agency",
    },
  ];

  // Section 8: Industries We Understand (8 Industries)
  const industries = [
    {
      num: "01",
      name: "BFSI",
      sub: "Building stronger digital engagement across financial services.",
      desc: "Digital solutions aligned with the communication, visibility and customer engagement requirements of financial businesses.",
      icon: Landmark,
      link: "/digital-marketing-for-financial-services",
    },
    {
      num: "02",
      name: "Fintech",
      sub: "Supporting fast-moving, technology-led businesses.",
      desc: "Digital experiences and growth-focused solutions designed for evolving fintech audiences and business models.",
      icon: Wallet,
      link: "/services/web-application-development",
    },
    {
      num: "03",
      name: "Insurance",
      sub: "Strengthening digital communication and customer reach.",
      desc: "Digital solutions that support awareness, engagement and online presence across insurance businesses.",
      icon: ShieldCheck,
      link: "/digital-marketing-for-financial-services",
    },
    {
      num: "04",
      name: "Real Estate",
      sub: "Helping projects and brands stand out digitally.",
      desc: "Digital experiences, campaigns and content designed to showcase projects, build visibility and generate customer interest.",
      icon: Building2,
      link: "/digital-marketing-agency-for-real-estate",
    },
    {
      num: "05",
      name: "Education",
      sub: "Connecting learning businesses with their audiences.",
      desc: "Digital platforms, content and marketing solutions supporting institutions, training businesses and education brands.",
      icon: GraduationCap,
      link: "/digital-marketing-agency-for-education-industry",
    },
    {
      num: "06",
      name: "Healthcare",
      sub: "Creating accessible and professional digital experiences.",
      desc: "Digital solutions designed to improve information delivery, visibility and audience engagement.",
      icon: HeartPulse,
      link: "/digital-marketing-services-for-healthcare",
    },
    {
      num: "07",
      name: "Retail & E-commerce",
      sub: "Supporting digital discovery and online conversions.",
      desc: "Digital experiences and marketing solutions that strengthen product visibility, customer engagement and online growth.",
      icon: ShoppingCart,
      link: "/digital-marketing-for-ecommerce",
    },
    {
      num: "08",
      name: "Travel & Hospitality",
      sub: "Improving digital discovery and customer engagement.",
      desc: "Digital experiences, content and marketing solutions designed to improve reach, engagement and brand visibility.",
      icon: Plane,
      link: "/digital-marketing-for-travel-tourism",
    },
  ];

  // Section 9: Why Businesses Work With Us (5 Reasons)
  const reasons = [
    {
      num: "01",
      title: "We Listen Before We Recommend",
      sub: "Understanding comes before execution.",
      desc: "We begin by understanding the requirement, business objective and audience before recommending the right digital direction.",
    },
    {
      num: "02",
      title: "We Keep Solutions Relevant",
      sub: "No unnecessary complexity.",
      desc: "Our recommendations are based on what the business actually needs, helping keep solutions practical, focused and aligned with the objective.",
    },
    {
      num: "03",
      title: "We Bring Capabilities Together",
      sub: "One partner across multiple digital requirements.",
      desc: "Technology, marketing, creative and content capabilities can work together, helping create a more connected digital presence.",
    },
    {
      num: "04",
      title: "We Work Transparently",
      sub: "Clear communication throughout the engagement.",
      desc: "Defined requirements, deliverables and regular communication help maintain clarity between our team and the client.",
    },
    {
      num: "05",
      title: "We Stay Ready to Evolve",
      sub: "Supporting changing digital requirements.",
      desc: "As businesses, platforms and digital behaviours evolve, we remain flexible in adapting our capabilities and execution to changing requirements.",
    },
  ];

  // Section 10: Approved Client Logos (16 Logos)
  const clientLogos = [
    { name: "Amazon", logo: amazonLogo },
    { name: "Flipkart", logo: flipkartLogo },
    { name: "Godrej", logo: godrejLogo },
    { name: "HDFC Bank", logo: hdfcLogo },
    { name: "Mahindra EV", logo: mahindraLogo },
    { name: "Bajaj", logo: bajajLogo },
    { name: "Tata", logo: tataLogo },
    { name: "DLF", logo: dlfLogo },
    { name: "MG Motor", logo: mgLogo },
    { name: "Amity Online", logo: amityLogo },
    { name: "Sirca Paints", logo: sircaLogo },
    { name: "Vega", logo: vegaLogo },
    { name: "XONN", logo: xonLogo },
    { name: "Metso", logo: metsoLogo },
    { name: "Jakson Solar", logo: jaksonLogo },
    { name: "Omaxe", logo: omaxeLogo },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#00529B] selection:text-white">
      <main className="flex-1">
        {/* =========================================================================
            SECTION 1 — ABOUT US HERO [LOCKED]
        ========================================================================= */}
        <section className="relative overflow-hidden bg-[#07172C] text-white py-14 sm:py-20 lg:py-24 border-b border-[#132C4E]">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00529B]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#F36C3D]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-6 text-center lg:text-left">
                <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
                  ABOUT SILGATE DIGITAL
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-5">
                  Digital Expertise Built Around Business Growth
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                  We combine technology, creativity and strategy to help
                  businesses build stronger digital experiences and create
                  meaningful opportunities for growth.
                </p>

                <div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#F36C3D] hover:bg-[#D95627] text-white font-bold text-sm shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Hero Branded Concept Visual */}
              <div className="lg:col-span-6">
                <div className="relative max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm group">
                  <img
                    src={heroPuzzleImg}
                    alt="Strategy + Creativity + Technology -> Growth"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07172C]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2 — WHO WE ARE [LOCKED]
        ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Content (approx 55-60%) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase">
                  WHO WE ARE
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091E3A] tracking-tight leading-tight">
                  A Digital Partner for Today’s Business Needs
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                  <p>
                    Silgate Digital is a technology, marketing and creative
                    solutions company focused on helping businesses build,
                    strengthen and grow their digital presence.
                  </p>
                  <p>
                    We combine strategic thinking, creative ideas and technology
                    expertise to deliver digital solutions aligned with real
                    business requirements. Our approach begins with
                    understanding the business, its audience and objectives
                    before defining the right digital direction.
                  </p>
                  <p>
                    From building a strong digital foundation to improving
                    visibility, engagement and growth, we work closely with our
                    clients as an extended digital partner—bringing together the
                    right capabilities to support their evolving digital needs.
                  </p>
                </div>
              </div>

              {/* Right Branded Digital Visual (approx 40-45%) */}
              <div className="lg:col-span-5">
                <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-[#F8FAFC]">
                  <img
                    src={whoWeAreVisual}
                    alt="Technology + Marketing + Creative -> Digital Growth"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Three Pillars spanning underneath */}
            <div className="mt-12 sm:mt-16 pt-10 border-t border-slate-200/80">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.num}
                      className="bg-[#F8FAFC] hover:bg-[#F0F6FC] rounded-2xl p-6 border border-slate-200/80 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-[#F36C3D] tracking-wider">
                          {pillar.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white text-[#00529B] group-hover:text-[#F36C3D] shadow-sm flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-[#091E3A] mb-2 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3 — OUR JOURNEY / COMPANY SNAPSHOT [LOCKED]
        ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                OUR JOURNEY
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091E3A] tracking-tight leading-tight mb-4">
                A Journey of Growth, Built on Trust and Delivery
              </h2>
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Over the years, we have had the opportunity to work with
                  businesses across diverse industries, delivering digital
                  solutions and building long-term relationships.
                </p>
                <p>
                  Our journey continues to be driven by evolving technology,
                  changing digital trends and one consistent objective—helping
                  businesses strengthen their digital presence through practical
                  and effective solutions.
                </p>
              </div>
            </div>

            {/* Journey-style horizontal progression line on desktop, vertical on mobile */}
            <div className="relative">
              {/* Subtle connecting horizontal line behind milestone circles on desktop */}
              <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-200 via-orange-300 to-blue-200 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {snapshotMetrics.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] group-hover:bg-[#FFF1EC] group-hover:text-[#F36C3D] flex items-center justify-center mb-4 transition-colors">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#00529B] leading-none mb-2">
                        {item.val}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4 — OUR APPROACH [LOCKED]
        ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                OUR APPROACH
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091E3A] tracking-tight leading-tight mb-4">
                Strategy, Creativity and Technology for Real Business Growth
              </h2>
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  We believe effective digital solutions are created when the
                  right strategy, creative thinking and technology work together.
                </p>
                <p>
                  Our approach begins with understanding the business objective
                  and audience. We then combine strategic direction, creative
                  execution and the right technology to build digital solutions
                  that are relevant, practical and scalable.
                </p>
                <p>
                  Every initiative is focused on creating meaningful digital
                  experiences while supporting measurable business objectives.
                </p>
              </div>
            </div>

            {/* Strategy + Creativity + Technology -> Business Growth Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {approachElements.map((elem) => {
                const Icon = elem.icon;
                return (
                  <div
                    key={elem.num}
                    className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-[#F36C3D] tracking-wider">
                          {elem.num} — {elem.title}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white text-[#00529B] shadow-sm flex items-center justify-center">
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#091E3A] mb-2 leading-snug">
                        {elem.subtitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {elem.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Outcome — Business Growth Banner */}
            <div className="bg-gradient-to-r from-[#07172C] to-[#091E3A] text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F36C3D] block mb-1">
                    Outcome — Business Growth
                  </span>
                  <p className="text-sm sm:text-base text-slate-200 font-medium">
                    The three elements come together to support:
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
                  <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white">
                    Stronger Digital Presence
                  </span>
                  <span className="text-[#F36C3D] font-bold">•</span>
                  <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white">
                    Better Visibility
                  </span>
                  <span className="text-[#F36C3D] font-bold">•</span>
                  <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white">
                    Higher Engagement
                  </span>
                  <span className="text-[#F36C3D] font-bold">•</span>
                  <span className="px-4 py-2 rounded-xl bg-[#F36C3D]/30 border border-[#F36C3D]/40 text-[#FDBA74]">
                    Sustainable Growth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5 — OUR MISSION & VISION [LOCKED]
        ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                OUR PURPOSE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091E3A] tracking-tight leading-tight mb-4">
                Driven by Purpose. Focused on Digital Growth.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our purpose is to help businesses navigate the evolving digital
                landscape with solutions that bring together business
                understanding, creativity and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Mission Panel */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF1EC] text-[#F36C3D] flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-xs font-bold text-[#F36C3D] uppercase tracking-wider block mb-1">
                    Our Mission
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#091E3A] mb-3 leading-snug">
                    Empowering Businesses Through Meaningful Digital Solutions
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Our mission is to understand our clients’ business needs and
                    deliver practical, customized and scalable digital solutions
                    that strengthen their online presence, improve audience
                    engagement and support sustainable business growth.
                  </p>
                </div>
              </div>

              {/* Vision Panel */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] flex items-center justify-center mb-5">
                    <Compass className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-xs font-bold text-[#00529B] uppercase tracking-wider block mb-1">
                    Our Vision
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#091E3A] mb-3 leading-snug">
                    To Be a Trusted Digital Partner for Growing Businesses
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Our vision is to build long-term partnerships with
                    businesses by continuously evolving our capabilities,
                    embracing new technologies and delivering digital solutions
                    that create meaningful and measurable value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6 — WHAT WE BRING TO THE TABLE [LOCKED]
        ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                WHAT WE BRING
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091E3A] tracking-tight leading-tight mb-4">
                The Right Expertise. The Right Approach. Built Around Your
                Business.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Successful digital initiatives require more than individual
                services. We bring together business understanding, specialized
                expertise and flexible execution to create solutions that are
                aligned with your requirements and capable of evolving with your
                business.
              </p>
            </div>

            {/* 6 Numbered Strengths Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="bg-[#F8FAFC] hover:bg-[#F0F6FC] rounded-2xl p-6 sm:p-7 border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-[#F36C3D] tracking-wider">
                          {item.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white text-[#00529B] group-hover:text-[#F36C3D] shadow-sm flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#091E3A] mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#00529B] mb-3 leading-snug">
                        {item.sub}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7 — OUR CAPABILITIES [LOCKED]
        ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                OUR CAPABILITIES
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091E3A] tracking-tight leading-tight mb-4">
                Integrated Digital Expertise Under One Roof
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our capabilities bring together technology, marketing, creative
                and content expertise to support businesses across different
                stages of their digital journey—from building a strong digital
                foundation to increasing visibility, engagement and growth.
              </p>
            </div>

            {/* 6 Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <Link
                    key={cap.num}
                    to={cap.link}
                    className="bg-white hover:bg-blue-50/40 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-[#F36C3D] tracking-wider">
                          {cap.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#EBF3FB] text-[#00529B] group-hover:bg-[#FFF1EC] group-hover:text-[#F36C3D] shadow-sm flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#091E3A] mb-1 group-hover:text-[#00529B] transition-colors leading-snug">
                        {cap.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#F36C3D] mb-3 leading-snug">
                        {cap.sub}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-[#00529B] group-hover:text-[#F36C3D] transition-colors pt-2 border-t border-slate-100">
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00529B] hover:bg-[#003D75] text-white font-bold text-sm shadow-md transition-colors"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8 — INDUSTRIES WE UNDERSTAND [LOCKED]
        ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                INDUSTRIES WE UNDERSTAND
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091E3A] tracking-tight leading-tight mb-4">
                Digital Solutions Shaped Around Different Business Landscapes
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every industry has different audiences, priorities and digital
                challenges. Our cross-industry experience helps us understand
                these differences and shape digital solutions around the
                specific requirements of each business.
              </p>
            </div>

            {/* Two balanced columns with 4 industries each */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <Link
                    key={ind.num}
                    to={ind.link}
                    className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] hover:bg-[#F0F6FC] border border-slate-200/80 hover:border-blue-200 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white text-[#00529B] group-hover:text-[#F36C3D] shadow-sm flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#F36C3D]">
                          {ind.num}
                        </span>
                        <h3 className="text-base font-bold text-[#091E3A] group-hover:text-[#00529B] transition-colors">
                          {ind.name}
                        </h3>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 mb-1 leading-snug">
                        {ind.sub}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00529B] hover:bg-[#003D75] text-white font-bold text-sm shadow-md transition-colors"
              >
                <span>Explore Industries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9 — WHY BUSINESSES WORK WITH US [LOCKED]
        ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column (approx 40%) */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
                <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase">
                  WHY BUSINESSES WORK WITH US
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091E3A] tracking-tight leading-tight">
                  Built on Understanding. Strengthened Through Collaboration.
                </h2>
                <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                  <p>
                    We believe strong digital partnerships are built through
                    understanding, transparency and consistent execution. We
                    work closely with our clients to understand what they need,
                    align our capabilities with their objectives and maintain
                    clear communication throughout the engagement.
                  </p>
                  <p>
                    Our focus is not simply on completing a digital requirement,
                    but on becoming a dependable partner businesses can work with
                    as their digital needs continue to evolve.
                  </p>
                </div>
              </div>

              {/* Right Column: 5 Reasons (approx 60%) */}
              <div className="lg:col-span-7 divide-y divide-slate-200/90">
                {reasons.map((reason) => (
                  <div key={reason.num} className="py-6 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-sm font-extrabold text-[#F36C3D]">
                        {reason.num}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#091E3A]">
                        {reason.title}
                      </h3>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#00529B] mb-2 pl-7">
                      {reason.sub}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                      {reason.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10 — OUR CLIENTS [LOCKED]
        ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                OUR CLIENTS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091E3A] tracking-tight leading-tight mb-4">
                Relationships Built Through Trust and Delivery
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Over the years, we have had the opportunity to work with
                businesses across diverse industries and digital requirements.
                Every engagement strengthens our experience and reinforces our
                commitment to building relationships through collaboration,
                consistent delivery and dependable support.
              </p>
            </div>

            {/* Clean Logo Wall (4x4 on desktop, 2-column on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
              {clientLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] hover:bg-white rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all duration-300 h-24 sm:h-28 flex items-center justify-center p-4 group"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-12 max-w-[130px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/clients"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00529B] hover:text-[#F36C3D] transition-colors"
              >
                <span>View Our Clients</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11 — FINAL CTA / LET'S WORK TOGETHER [LOCKED]
        ========================================================================= */}
        <section className="relative overflow-hidden bg-[#07172C] text-white py-16 sm:py-24">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00529B]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#F36C3D]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Technology subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase">
              LET'S WORK TOGETHER
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white leading-tight tracking-tight">
              Ready to Build What’s Next for Your Business?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you’re looking to strengthen your digital presence, build a
              new digital solution or explore opportunities to grow your business
              online, we’d be happy to understand your requirements and discuss
              how Silgate Digital can support you.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#F36C3D] hover:bg-[#D95627] text-white font-bold text-sm shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/40 hover:border-white hover:bg-white/10 text-white font-bold text-sm transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
