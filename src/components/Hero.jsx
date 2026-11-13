import { ArrowUpLeft, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden bg-[#F5E9DA]"
    >
      {/* Very subtle matte ambient blurs */}
      <div className="pointer-events-none absolute -top-28 right-1/4 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-[#F06A06]/7 blur-[140px]" />
      <div className="pointer-events-none absolute top-32 left-1/4 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] rounded-full bg-[#BA4685]/6 blur-[140px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF5EA] border border-[#2E1606]/12 text-[11px] sm:text-sm text-[#2E1606] max-w-full">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F06A06]" />
            </span>
            <span className="truncate">ستۆدیۆی داهێنان و ناسنامەی براند • کوردستان و جیهان</span>
          </div>

          <h1 className="text-[30px] sm:text-5xl lg:text-6xl xl:text-[66px] font-extrabold leading-[1.25] sm:leading-[1.18] tracking-tight text-[#2E1606]">
            ئێمە براندەکان دەکەینە{' '}
            <span className="brand-gradient-text">ئەزموونێکی لەبیرنەکراو</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#2E1606]/78 leading-relaxed max-w-2xl mx-auto">
            لە <strong className="text-[#2E1606] font-bold">کرۆ ئەجنسی</strong> ستراتیژی ورد،
            هونەری بینراو و تەکنەلۆژیای مۆدێرن تێکەڵ دەکەین بۆ ئەوەی ناسنامەی براند، وێبسایت
            و پاکێجینگێک دروست بکەین کە تۆ لە تەواوی بازاڕەکەتدا بکاتە یەکەم.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full grad-orange-berry text-[#FFF5EA] font-bold text-sm sm:text-base hover:brightness-105 active:scale-[0.98] transition-all shadow-[0_10px_24px_rgba(240,106,6,0.22)]"
            >
              <span>دەستپێکردنی پڕۆژەی نوێ</span>
              <ArrowUpLeft className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FFF5EA] hover:bg-[#EFE0CE] border border-[#2E1606]/14 text-[#2E1606] font-bold text-sm sm:text-base transition-all"
            >
              <Play className="w-4 h-4 text-[#F06A06] fill-[#F06A06]" />
              <span>بینینی پاکێجەکانمان</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
