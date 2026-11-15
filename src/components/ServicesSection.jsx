import { Check, Sparkles, ArrowUpLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICE_PACKAGES } from '../data/agencyData';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-16 sm:py-32 relative bg-[#F5E9DA] overflow-hidden">
      {/* Background Brand Wave Artwork (Screen 2 - Right, extending under package cards) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.95, x: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-12 sm:top-16 lg:top-12 -right-32 sm:-right-24 lg:-right-16 w-[700px] sm:w-[950px] lg:w-[1300px] xl:w-[1550px] aspect-[1888/1500] max-w-none z-0 select-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 68%, transparent 94%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 68%, transparent 94%)',
        }}
      >
        <div className="w-full h-full animate-wave-slow-2">
          <img
            src="/images/cro-wave-2-clean.png"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain object-right-top"
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header matching CRO Agency's tagline */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#2E1606]">
            <span className="w-6 sm:w-8 h-[2px] bg-[#2E1606]" />
            <span>خزمەتگوزاری و پاکێجەکانمان</span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#2E1606]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1606] leading-snug">
            لەگەڵ کرۆ — سۆشیال میدیاکەت بە جیاوازی بهێڵەرەوە
          </h2>
          <p className="text-[#2E1606]/75 text-sm sm:text-base leading-relaxed">
            سێ پاکێجی تەواو بۆ بەڕێوەبردن، دیزاین و براندینگی پەیج و هەژمارەکانت بە کوالیتییەکی
            جیاواز و پیشەیی.
          </p>
        </motion.div>

        {/* 3 Package Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {SERVICE_PACKAGES.map((pkg, idx) => {
            const isFeatured = pkg.featured;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 65, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.16, ease: [0.16, 1, 0.3, 1] }}
                className={`relative min-w-0 rounded-3xl p-5 sm:p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden bg-[#FFF5EA] ${
                  isFeatured
                    ? 'border-2 border-[#F06A06] shadow-[0_20px_50px_rgba(46,22,6,0.1)] lg:-translate-y-3'
                    : 'border border-[#2E1606]/14 hover:border-[#F06A06]/70 shadow-[0_10px_28px_rgba(46,22,6,0.05)]'
                }`}
              >
                {/* Top Gradient Bar */}
                <div className={`absolute top-0 inset-x-0 h-2 ${pkg.gradientClass}`} />

                <div>
                  {/* Package Title Header */}
                  <div className="flex items-start justify-between gap-3 pt-2 pb-4 sm:pb-5 border-b border-[#2E1606]/10">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider text-[#2E1606]">
                          {pkg.name}
                        </h3>
                        {isFeatured && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full grad-orange-berry text-[#FFF5EA] text-[11px] font-bold">
                            <Sparkles className="w-3 h-3" />
                            <span>باشترین</span>
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold mt-1 text-[#F06A06]">{pkg.kuTitle}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm mt-4 mb-5 sm:mb-6 leading-relaxed text-[#2E1606]/75">
                    {pkg.subtitle}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 sm:space-y-3 mb-7 sm:mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? 'bg-[#F06A06] text-[#FFF5EA]'
                              : 'bg-[#EFE0CE] border border-[#F06A06]/30 text-[#F06A06]'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[#2E1606] font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={() => onSelectService?.(`پاکێجی ${pkg.name}`)}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    isFeatured
                      ? 'grad-orange-berry text-[#FFF5EA] shadow-[0_8px_22px_rgba(240,106,6,0.25)] hover:brightness-105'
                      : 'bg-[#F06A06] hover:bg-[#dc5e02] text-[#FFF5EA]'
                  }`}
                >
                  <span>دەستپێبکە</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
