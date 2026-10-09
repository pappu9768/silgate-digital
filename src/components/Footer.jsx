import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight, ChevronDown, ArrowRight } from "lucide-react";
import { Linkedin, Instagram, Facebook } from "../assets/icons/SocialIcons";
import logoImg from "../assets/images/logo.png";

/* ================= FOOTER DATA (single source of truth) ================= */

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/automotive-digital-marketing-agency" },          // TODO: verify route
  { label: "Case Studies", to: "/case-studies" },      // TODO: verify route
  { label: "Blogs", to: "/blog" },
  { label: "Careers", to: "/career" },
  { label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", to: "/services/website-development-india" },
  { label: "SEO", to: "/services/seo-services" },
  { label: "Social Media Management", to: "/services/social-media-marketing" },
  { label: "Digital Marketing", to: "/performance-marketing-agency" },
  { label: "Creative & Graphic Design", to: "/services/creative-communication" },
  { label: "UGC & Content Creation", to: "/services/ugc-video-agency" },
];

// const industryLinks = [
//   { label: "BFSI", to: "/industries/bfsi" },                    // TODO: page pending
//   { label: "Fintech", to: "/industries/fintech" },              // TODO: page pending
//   { label: "Insurance", to: "/industries/insurance" },          // TODO: page pending
//   { label: "Real Estate", to: "/digital-marketing-agency-for-real-estate" },
//   { label: "Education", to: "/digital-marketing-agency-for-education-industry" },
//   { label: "Healthcare", to: "/digital-marketing-services-for-healthcare" },
//   { label: "Retail & E-commerce", to: "/digital-marketing-for-ecommerce-2" },
//   { label: "Travel & Hospitality", to: "/industries/travel-hospitality" }, // TODO: page pending
// ];

// Official social URLs — update here only if they change
const socialLinks = [
  { label: "LinkedIn", href: "https://in.linkedin.com/company/Silgate-media-pvt-ltd", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/Silgate.media/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/Silgatemedia", Icon: Facebook },
];

const CONTACT_PHONE = "+91 81088 10916";
const WHATSAPP_NUMBER = "918108810916";
const CONTACT_EMAIL = "info@silgatedigital.com";

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 2C6.516 2 2.03 6.484 2.03 12c0 1.954.562 3.844 1.63 5.474L2 22l4.672-1.614C8.24 21.36 10.1 21.92 12.031 21.92c5.516 0 10-4.484 10-9.92 0-5.516-4.484-10-10-10zm5.834 14.156c-.244.686-1.42 1.314-1.958 1.396-.494.075-1.127.108-3.642-.932-3.218-1.33-5.286-4.606-5.446-4.82-.16-.214-1.3-1.73-1.3-3.3 0-1.57.82-2.343 1.112-2.663.292-.32.64-.4.854-.4.214 0 .428.002.614.011.196.01.46-.074.72.55.268.643.914 2.23.994 2.39.08.16.134.348.026.562-.107.214-.16.348-.32.535-.16.187-.336.417-.48.56-.16.16-.327.334-.14.655.187.32.83 1.366 1.782 2.214 1.224 1.09 2.256 1.428 2.576 1.588.32.16.508.134.695-.08.187-.214.8-0.934 1.014-1.254.214-.32.428-.268.72-.16.293.107 1.85.872 2.168 1.033.32.16.534.24.614.374.08.134.08.775-.164 1.461z" />
    </svg>
  );
}

/* ================= MOBILE ACCORDION ================= */

function FooterAccordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left text-white font-bold text-xs uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36C3D] rounded-sm"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#F6C84A] transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ================= SHARED PIECES ================= */

function LinkList({ links }) {
  return (
    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="hover:text-[#F36C3D] transition-colors focus:outline-none focus-visible:text-[#F36C3D] inline-block py-0.5"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialIcons({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="w-9 h-9 rounded-lg bg-white/5 border border-[#1E3E6B] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#F36C3D] hover:border-[#F36C3D] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36C3D]"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

function GetInTouchContent() {
  return (
    <div className="space-y-3 text-xs sm:text-sm text-slate-300">
      {/* 1. WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:text-white transition-colors group"
      >
        <span className="w-8 h-8 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all shrink-0">
          <WhatsAppIcon className="w-4 h-4" />
        </span>
        <span className="font-medium">+91 81088 10916</span>
      </a>

      {/* 2. Email */}
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="flex items-center gap-3 hover:text-white transition-colors group"
      >
        <span className="w-8 h-8 rounded-lg bg-[#F36C3D]/15 border border-[#F36C3D]/30 flex items-center justify-center text-[#F36C3D] group-hover:bg-[#F36C3D] group-hover:text-white transition-all shrink-0">
          <Mail className="w-4 h-4" />
        </span>
        <span className="font-medium break-all">{CONTACT_EMAIL}</span>
      </a>

      {/* 3. Call */}
      <a
        href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
        className="flex items-center gap-3 hover:text-white transition-colors group"
      >
        <span className="w-8 h-8 rounded-lg bg-[#00529B]/25 border border-[#1E3E6B] flex items-center justify-center text-[#60a5fa] group-hover:bg-[#00529B] group-hover:text-white transition-all shrink-0">
          <Phone className="w-4 h-4" />
        </span>
        <span className="font-medium">{CONTACT_PHONE}</span>
      </a>

      {/* 4. Address */}
      <div className="flex items-start gap-3 pt-1 text-slate-400">
        <span className="w-8 h-8 rounded-lg bg-white/5 border border-[#1E3E6B] flex items-center justify-center text-[#F36C3D] shrink-0">
          <MapPin className="w-4 h-4" />
        </span>
        <p className="leading-relaxed text-xs pt-1">
          Road Number 8, S. G. Barve Road,
          <br />
          Wagle Estate, Thane, Maharashtra
        </p>
      </div>

      <div className="pt-2">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#F36C3D] hover:bg-[#D95627] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 group"
        >
          <span>Let's Talk</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

/* ================= FOOTER ================= */

export default function Footer() {
  return (
    <footer className="bg-[#07172C] text-slate-300 pt-16 pb-8 border-t border-[#132C4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ DESKTOP: 4-column balanced grid ============ */}
        <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#132C4E]">
          {/* Column 1 — Brand (col-span-4) */}
          <div className="col-span-4 pr-2">
            <Link to="/" className="inline-flex bg-white px-3.5 py-2 rounded-lg mb-4 hover:opacity-95 transition-opacity shadow-sm">
              <img src={logoImg} alt="Silgate Digital" className="h-7 w-auto object-contain" />
            </Link>
            <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Silgate Digital</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Technology, marketing and creative solutions designed to help
              businesses build, strengthen and grow their digital presence.
            </p>
            <SocialIcons />
          </div>

          {/* Column 2 — Quick Links (col-span-2) */}
          <div className="col-span-2">
            <h4 className="text-[#F6C84A] font-bold text-xs tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <LinkList links={quickLinks} />
          </div>

          {/* Column 3 — Services (col-span-3) */}
          <div className="col-span-3">
            <h4 className="text-[#F6C84A] font-bold text-xs tracking-wider uppercase mb-4">
              Services
            </h4>
            <LinkList links={serviceLinks} />
          </div>

          {/* Column 4 — Get in Touch (col-span-3) */}
          <div className="col-span-3">
            <h4 className="text-[#F6C84A] font-bold text-xs tracking-wider uppercase mb-4">
              Get in Touch
            </h4>
            <GetInTouchContent />
          </div>
        </div>

        {/* ============ MOBILE: Brand → Accordions → Social ============ */}
        <div className="lg:hidden pb-8 border-b border-[#132C4E]">
          {/* Brand */}
          <div className="pt-2 pb-6">
            <Link to="/" className="inline-flex bg-white px-3.5 py-2 rounded-lg mb-4 hover:opacity-95 transition-opacity shadow-sm">
              <img src={logoImg} alt="Silgate Digital" className="h-7 w-auto object-contain" />
            </Link>
            <h4 className="text-white font-bold text-lg mb-2">Silgate Digital</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Technology, marketing and creative solutions designed to help
              businesses build, strengthen and grow their digital presence.
            </p>
            <SocialIcons />
          </div>

          {/* Accordion groups — uniform gaps via divide-y */}
          <div className="divide-y divide-[#132C4E]">
            <FooterAccordion title="Quick Links">
              <LinkList links={quickLinks} />
            </FooterAccordion>
            <FooterAccordion title="Services">
              <LinkList links={serviceLinks} />
            </FooterAccordion>

            {/* Get in Touch — expanded by default */}
            <FooterAccordion title="Get in Touch" defaultOpen>
              <GetInTouchContent />
            </FooterAccordion>
          </div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>
            &copy; {new Date().getFullYear()} Silgate Digital. All Rights Reserved.
          </span>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-[#F36C3D] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link to="/terms-conditions" className="hover:text-[#F36C3D] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}