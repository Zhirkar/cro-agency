import { Check, Sparkles, ArrowUpLeft } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/agencyData';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-16 sm:py-32 relative bg-[#F5E9DA] overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[680px] h-[280px] sm:h-[380px] bg-[#F06A06]/6 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header matching CRO Agency's tagline */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F06A06]">
            <span className="w-6 sm:w-8 h-[2px] bg-[#F06A06]" />
            <span>خزمەتگوزاری و پاکێجەکانمان</span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#F06A06]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1606] leading-snug">
            لەگەڵ کرۆ —{' '}
            <span className="brand-gradient-text">سۆشیال میدیاکەت بە جیاوازی بهێڵەرەوە</span>
          </h2>
          <p className="text-[#2E1606]/75 text-sm sm:text-base leading-relaxed">
            سێ پاکێجی تەواو بۆ بەڕێوەبردن، دیزاین و براندینگی پەیج و هەژمارەکانت بە کوالیتییەکی
            جیاواز و پیشەیی.
          </p>
        </div>

        {/* 3 Package Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => {
            const isFeatured = pkg.featured;
            return (
              <div
                key={pkg.id}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
