import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesComponents({
  id,
  img,
  title,
  heading,
  description,
  features = [],
  link,
  linkText,
  stackWords = false, // true = each word on its own line (e.g. Web / Development)
}) {
  return (
    <section
      id={id}
      className="rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 scroll-mt-10"
    >
      {/* Left Image Side */}
      <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-slate-900 group">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/30 pointer-events-none" />
        <div className="absolute top-1/4 left-6 sm:left-8 right-6 pointer-events-none">
          {stackWords ? (
            title.split(" ").map((word, idx) => (
              <span
                key={`${word}-${idx}`}
                className="block text-white text-xl sm:text-4xl font-black uppercase tracking-tight drop-shadow-md leading-tight"
              >
                {word}
              </span>
            ))
          ) : (
            <span className="text-white text-xl sm:text-4xl font-black uppercase tracking-tight drop-shadow-md">
              {title}
            </span>
          )}
        </div>
      </div>

      {/* Right Content Side */}
      <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-left">
        <span className="text-blue-400 text-xl font-bold uppercase tracking-widest mb-2">
          {title}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-snug">
          {heading}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Checklist — driven by the features prop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm text-slate-700 font-medium">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#00529B] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div>
          <Link
            to={link}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F36C3D] hover:bg-[#D95627] text-white text-sm font-semibold transition-all shadow-md hover:shadow-orange-500/20 group"
          >
            <span>{linkText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}