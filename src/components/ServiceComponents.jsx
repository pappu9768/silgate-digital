import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Code2,
  Smartphone,
  Search,
  CheckCircle2,
  TrendingUp,
  Share2,
  Calendar,
  Layers,
  Megaphone,
  Target,
  Palette,
  PenTool,
  Video,
  Play,
  Volume2,
  Sparkles,
} from "lucide-react";

/**
 * Visual Showcase Component specifically tailored for each service's Visual Direction
 */
function VisualShowcase({ type, img, title }) {
  if (type === "web-development") {
    return (
      <div className="relative group">
        {/* Desktop Browser Window Mockup */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60 overflow-hidden">
          {/* Browser Header Bar */}
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="px-3 py-1 rounded-md bg-white border border-slate-200/80 text-[10px] font-mono text-slate-500 max-w-[210px] truncate">
              silgate.digital/web-experience
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-medium text-slate-400">Live</span>
            </div>
          </div>

          {/* Browser Content Area with Image */}
          <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Inset Label */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#F36C3D] block">
                  Responsive Web Solutions
                </span>
                <span className="text-white text-base sm:text-lg font-black tracking-tight drop-shadow-md">
                  Custom & Business-Focused
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold">
                100% Scalable
              </span>
            </div>
          </div>
        </div>

        {/* Floating Mobile Responsive Viewport Card */}
        <div className="hidden sm:flex absolute -bottom-4 -right-4 p-3 rounded-xl bg-white border border-slate-200 shadow-xl items-center gap-2.5 backdrop-blur-md z-10 animate-fade-in">
          <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F36C3D] flex items-center justify-center shrink-0">
            <Smartphone className="w-4 h-4 stroke-[2]" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase block">
              Multi-Device
            </span>
            <span className="text-xs font-bold text-[#0A1E38] block leading-tight">
              Mobile-First Architecture
            </span>
          </div>
        </div>

        {/* Floating Code Badge */}
        <div className="hidden sm:flex absolute -top-3 -left-3 px-3 py-1.5 rounded-lg bg-[#0A1E38] text-white shadow-lg items-center gap-2 z-10 text-xs font-mono">
          <Code2 className="w-3.5 h-3.5 text-[#F36C3D]" />
          <span>Clean Code & UI/UX</span>
        </div>
      </div>
    );
  }

  if (type === "seo") {
    return (
      <div className="relative group">
        {/* Search & Optimization Showcase */}
        <div className="rounded-2xl border border-blue-100 bg-white shadow-xl shadow-blue-500/5 overflow-hidden">
          {/* Clean Search Interface Bar */}
          <div className="p-4 bg-slate-50 border-b border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-inner">
              <Search className="w-4 h-4 text-[#00529B] shrink-0" />
              <span className="font-medium text-slate-800 truncate">
                search: enterprise digital services & organic visibility
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium px-1">
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Technical Health: Optimized
              </span>
              <span>Crawling & Indexing Active</span>
            </div>
          </div>

          {/* Illustrative Search Result Snippet with Visual */}
          <div className="p-5 space-y-3 bg-white">
            <div className="p-3.5 rounded-xl border border-slate-100 bg-[#FAFCFF] space-y-1">
              <div className="text-[10px] text-slate-400 font-mono truncate">
                https://silgate.digital › services › seo
              </div>
              <h4 className="text-sm font-bold text-[#00529B] hover:underline cursor-pointer">
                Silgate Digital | Structured Search Engine Optimization
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                Organic visibility strategies, on-page optimization, technical crawling architecture, and intent-focused discovery.
              </p>
            </div>

            {/* Illustrative Upward Organic Trend Indicator */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50 to-orange-50/40 border border-blue-100/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#00529B] text-white flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    Organic Search Trajectory
                  </span>
                  <span className="text-xs font-bold text-[#0A1E38]">
                    Sustainable Traffic Growth
                  </span>
                </div>
              </div>
              <svg className="w-20 h-8 text-[#00529B]" viewBox="0 0 80 32" fill="none">
                <path
                  d="M 2 28 Q 20 26, 35 18 T 78 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Sub-image banner */}
          <div className="relative aspect-[21/9] bg-slate-900 overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
              <span>Keyword Strategy & Intent</span>
              <span className="text-[#F36C3D]">Organic Performance</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "social-media") {
    return (
      <div className="relative group">
        {/* Multi-Channel Operations Workflow Showcase */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60 overflow-hidden">
          {/* Workflow Header */}
          <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#F36C3D]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A1E38]">
                Social Channel Operations
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 text-[#F36C3D] font-bold">
              Multi-Channel Active
            </span>
          </div>

          {/* Central Message: Plan → Publish → Engage → Manage → Measure */}
          <div className="px-4 py-2.5 bg-[#0A1E38] text-white flex items-center justify-between text-[10px] font-semibold tracking-wide overflow-x-auto">
            <span>Plan</span>
            <span className="text-orange-400">→</span>
            <span>Publish</span>
            <span className="text-orange-400">→</span>
            <span>Engage</span>
            <span className="text-orange-400">→</span>
            <span>Manage</span>
            <span className="text-orange-400">→</span>
            <span>Measure</span>
          </div>

          {/* Media preview with calendar schedule card overlay */}
          <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Calendar Scheduled Item Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between text-left">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#00529B] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    Structured Calendar
                  </span>
                  <span className="text-xs font-bold text-[#0A1E38] block truncate">
                    Scheduled Brand Publishing & Community
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold shrink-0">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "digital-marketing") {
    return (
      <div className="relative group">
        {/* Campaign & Audience Optimization Showcase */}
        <div className="rounded-2xl border border-blue-100 bg-white shadow-xl shadow-blue-500/5 overflow-hidden">
          {/* Header Bar */}
          <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Megaphone className="w-4 h-4 text-[#00529B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A1E38]">
                Digital Marketing Engine
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-[#00529B] font-bold">
              Audience & Leads
            </span>
          </div>

          {/* Workflow Pipeline */}
          <div className="px-4 py-2 bg-gradient-to-r from-[#00529B] to-[#0A1E38] text-white flex items-center justify-between text-[10px] font-semibold tracking-wider">
            <span>Audience</span>
            <span className="text-[#F36C3D]">→</span>
            <span>Campaigns</span>
            <span className="text-[#F36C3D]">→</span>
            <span>Traffic / Leads</span>
            <span className="text-[#F36C3D]">→</span>
            <span>Optimization</span>
          </div>

          {/* Media with Campaign Performance Overlay */}
          <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Campaign Optimization Card */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F36C3D] flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    Targeted Campaigns
                  </span>
                  <span className="text-xs font-bold text-[#0A1E38] block">
                    High-Intent Lead Generation
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#00529B] text-[10px] font-bold">
                Monitored
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "creative-design") {
    return (
      <div className="relative group">
        {/* Coordinated Creative System Showcase */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60 overflow-hidden">
          {/* Header Bar */}
          <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#F36C3D]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A1E38]">
                Creative Design System
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00529B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F36C3D]" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            </div>
          </div>

          {/* Workflow Message: Brand → Idea → Design → Communication */}
          <div className="px-4 py-2 bg-[#0A1E38] text-white flex items-center justify-between text-[10px] font-semibold tracking-wide">
            <span>Brand</span>
            <span className="text-orange-400">→</span>
            <span>Idea</span>
            <span className="text-orange-400">→</span>
            <span>Design</span>
            <span className="text-orange-400">→</span>
            <span>Communication</span>
          </div>

          {/* Main Visual Image */}
          <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Creative Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F36C3D] flex items-center justify-center shrink-0">
                  <PenTool className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    Coordinated Assets
                  </span>
                  <span className="text-xs font-bold text-[#0A1E38] block">
                    Brand Collateral & Digital Creatives
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-[#F36C3D] text-[10px] font-bold">
                Vector & Print
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ugc-content") {
    return (
      <div className="relative group">
        {/* Vertical & Short-Form Video Showcase */}
        <div className="rounded-2xl border border-blue-100 bg-white shadow-xl shadow-blue-500/5 overflow-hidden">
          {/* Header Bar */}
          <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-[#F36C3D]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A1E38]">
                UGC & Short-Form Video
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 text-[#F36C3D] font-bold">
              Vertical 9:16
            </span>
          </div>

          {/* Workflow Message: Idea → Create → Adapt → Publish-Ready Content */}
          <div className="px-4 py-2 bg-gradient-to-r from-[#00529B] to-[#0A1E38] text-white flex items-center justify-between text-[10px] font-semibold tracking-wide">
            <span>Idea</span>
            <span className="text-[#F36C3D]">→</span>
            <span>Create</span>
            <span className="text-[#F36C3D]">→</span>
            <span>Adapt</span>
            <span className="text-[#F36C3D]">→</span>
            <span>Publish-Ready</span>
          </div>

          {/* Media with Video Player Overlay */}
          <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Play Button Indicator in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </div>

            {/* Content Format Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#00529B] flex items-center justify-center shrink-0">
                  <Volume2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    Authentic Production
                  </span>
                  <span className="text-xs font-bold text-[#0A1E38] block">
                    Reels, TikTok & Social Short-Form
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                Platform-Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback visual
  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 aspect-[16/10]">
      <img src={img} alt={title} className="w-full h-full object-cover opacity-90" />
    </div>
  );
}

/**
 * Common Content Column: Label, Heading, Paragraphs, Capabilities Grid, and CTA
 */
function ContentColumn({
  sectionLabel,
  heading,
  descriptionParagraphs = [],
  capabilitiesTitle,
  capabilities = [],
  link,
  linkText,
}) {
  return (
    <div className="space-y-6 text-left">
      {/* Service Label Pill: Orange/Red accent */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-xs font-bold uppercase tracking-widest text-[#F36C3D]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F36C3D]" />
          <span>{sectionLabel}</span>
        </div>
      </div>

      {/* Heading: Silgate Navy */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1E38] tracking-tight leading-tight">
        {heading}
      </h2>

      {/* Supporting Copy (Paragraphs) */}
      <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
        {descriptionParagraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Capabilities Section Title & 2-Column Grid on Desktop */}
      <div className="pt-2">
        <h3 className="text-sm sm:text-base font-bold text-[#0A1E38] mb-4 tracking-tight uppercase">
          {capabilitiesTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {capabilities.map((cap) => (
            <div key={cap.number} className="flex items-start gap-3 group/item">
              <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200/70 text-[#00529B] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#F36C3D] group-hover/item:border-[#F36C3D] group-hover/item:text-white transition-colors duration-200">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-[#0A1E38] flex items-baseline gap-1.5 leading-snug">
                  <span className="text-[11px] font-mono text-[#F36C3D] font-bold shrink-0">
                    {cap.number}
                  </span>
                  <span>{cap.title}</span>
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dedicated CTA Button */}
      <div className="pt-4">
        <Link
          to={link}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F36C3D] hover:bg-[#D95627] text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-orange-500/20 hover:-translate-y-0.5 group cursor-pointer"
        >
          <span>{linkText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

/**
 * Main ServicesComponents section
 */
export default function ServicesComponents({
  id,
  sectionLabel,
  title,
  heading,
  descriptionParagraphs = [],
  capabilitiesTitle,
  capabilities = [],
  visualType,
  visualLeft = false,
  bgClass = "bg-white",
  img,
  link,
  linkText,
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 lg:py-24 border-b border-slate-200/80 scroll-mt-24 transition-colors ${bgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= MOBILE RESPONSIVE LAYOUT (< lg) ================= */}
        {/* Strict order: label → headline → supporting copy → visual → 6 capabilities vertically → CTA */}
        <div className="block lg:hidden space-y-6 text-left">
          {/* 1. Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-xs font-bold uppercase tracking-widest text-[#F36C3D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F36C3D]" />
            <span>{sectionLabel}</span>
          </div>

          {/* 2. Headline */}
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A1E38] tracking-tight leading-tight">
            {heading}
          </h2>

          {/* 3. Supporting Copy */}
          <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {descriptionParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* 4. Visual (Mobile optimized) */}
          <div className="pt-2 pb-2">
            <VisualShowcase type={visualType} img={img} title={title} />
          </div>

          {/* 5. Six capabilities in a single vertical sequence */}
          <div className="pt-2">
            <h3 className="text-sm font-bold text-[#0A1E38] mb-4 uppercase tracking-wider">
              {capabilitiesTitle}
            </h3>
            <div className="space-y-4">
              {capabilities.map((cap) => (
                <div key={cap.number} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200/70 text-[#00529B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A1E38] flex items-baseline gap-1.5">
                      <span className="text-[11px] font-mono text-[#F36C3D] font-bold shrink-0">
                        {cap.number}
                      </span>
                      <span>{cap.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. CTA */}
          <div className="pt-4">
            <Link
              to={link}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F36C3D] hover:bg-[#D95627] text-white text-sm font-semibold tracking-wide transition-all shadow-md group"
            >
              <span>{linkText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT (>= lg) ================= */}
        {/* 42% visual / 58% content (5 cols / 7 cols) with alternating alignment */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {visualLeft ? (
            <>
              {/* Visual Left: ~42% (5 columns) */}
              <div className="lg:col-span-5">
                <VisualShowcase type={visualType} img={img} title={title} />
              </div>

              {/* Content Right: ~58% (7 columns) */}
              <div className="lg:col-span-7">
                <ContentColumn
                  sectionLabel={sectionLabel}
                  heading={heading}
                  descriptionParagraphs={descriptionParagraphs}
                  capabilitiesTitle={capabilitiesTitle}
                  capabilities={capabilities}
                  link={link}
                  linkText={linkText}
                />
              </div>
            </>
          ) : (
            <>
              {/* Content Left: ~58% (7 columns) */}
              <div className="lg:col-span-7">
                <ContentColumn
                  sectionLabel={sectionLabel}
                  heading={heading}
                  descriptionParagraphs={descriptionParagraphs}
                  capabilitiesTitle={capabilitiesTitle}
                  capabilities={capabilities}
                  link={link}
                  linkText={linkText}
                />
              </div>

              {/* Visual Right: ~42% (5 columns) */}
              <div className="lg:col-span-5">
                <VisualShowcase type={visualType} img={img} title={title} />
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}