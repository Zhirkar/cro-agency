import { useState } from 'react';
import { Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeIndex];

  return (
    <section
      id="process"
      className="py-16 sm:py-32 border-y border-[#2E1606]/10 bg-[#EFE0CE]/75 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F06A06]">
            <span className="w-8 h-[2px] bg-[#F06A06]" />
            <span>شێوازی کارکردنمان</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1606] leading-snug">
            ڕێگایەکی ڕوون لە <span className="brand-gradient-text">بیرۆکەوە تا ڕاستی</span>
          </h2>
          <p className="text-[#2E1606]/78 text-sm sm:text-base leading-relaxed">
            هەموو پڕۆژەیەک بە ٤ قۆناغی ستاندارددا تێدەپەڕێت بۆ دڵنیابوون لە وردبینی، داهێنان و
            ڕادەستکردنی بەرزترین کوالیتی لە کاتی دیاریکراودا.
          </p>
        </div>

        {/* Interactive Step Grid */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Step Selector List */}
          <div className="lg:col-span-5 min-w-0 flex flex-col gap-3">
            {PROCESS_STEPS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`text-right p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 sm:gap-4 ${
                    isActive
                      ? 'bg-[#FFF5EA] text-[#2E1606] border-[#F06A06] shadow-[0_10px_28px_rgba(46,22,6,0.08)]'
                      : 'bg-[#F5E9DA] text-[#2E1606] border-[#2E1606]/12 hover:border-[#F06A06]/50'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span
                      className={`font-display text-base sm:text-lg font-bold w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? `${item.gradientClass} text-[#FFF5EA]`
                          : 'bg-[#EFE0CE] border border-[#2E1606]/10 text-[#2E1606]/70'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-lg font-bold">{item.title}</div>
                      <div
                        className={`text-xs mt-0.5 ${
                          isActive ? 'text-[#F06A06] font-semibold' : 'text-[#2E1606]/60'
                        }`}
                      >
                        {item.duration}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail Card */}
          <div className="lg:col-span-7 min-w-0 p-6 sm:p-10 rounded-3xl bg-[#FFF5EA] border border-[#2E1606]/12 flex flex-col justify-between relative overflow-hidden shadow-[0_14px_38px_rgba(46,22,6,0.06)]">
            <div className={`absolute top-0 inset-x-0 h-2 ${activeStep.gradientClass}`} />

            <div className="space-y-4 sm:space-y-6 relative z-10 pt-2">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full ${activeStep.gradientClass} text-[#FFF5EA] text-xs font-bold`}
                >
                  {activeStep.duration}
                </span>
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#2E1606]/10">
                  {activeStep.step}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-[#2E1606]">
                {activeStep.title}
              </h3>
              <p className="text-[#2E1606]/80 text-sm sm:text-lg leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#2E1606]/10 relative z-10">
              <div className="text-xs font-semibold text-[#2E1606]/60 mb-3 sm:mb-4">
                بەرهەم و ئەنجامەکانی ئەم قۆناغە:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {activeStep.outputs.map((out, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-3.5 rounded-xl bg-[#F5E9DA] border border-[#2E1606]/10 flex items-center gap-2.5 text-xs sm:text-sm text-[#2E1606] font-medium"
                  >
                    <Check className="w-4 h-4 text-[#F06A06] shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
