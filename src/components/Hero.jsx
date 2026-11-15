import { ArrowUpLeft, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden bg-[#F5E9DA]"
    >
      {/* Background Brand Wave Artwork (Screen 1 - Left, extending under content) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.95, x: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -top-16 -left-28 sm:-left-20 lg:-left-12 w-[680px] sm:w-[900px] lg:w-[1200px] xl:w-[1400px] aspect-[1888/1500] max-w-none z-0 select-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 96%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 96%)',
        }}
      >
        <div className="w-full h-full animate-wave-slow-1">
          <img
            src="/images/cro-wave-3-clean.png"
            alt=""
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-contain object-left-top"
          />
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF5EA] border border-[#2E1606]/12 text-[11px] sm:text-sm text-[#2E1606] max-w-full"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F06A06]" />
            </span>
            <span className="truncate">ستۆدیۆی داهێنان و ناسنامەی براند</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[30px] sm:text-5xl lg:text-6xl xl:text-[66px] font-extrabold leading-[1.25] sm:leading-[1.18] tracking-tight text-[#2E1606]"
          >
            ئێمە براندەکان دەکەینە ئەزموونێکی لەبیرنەکراو
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-lg text-[#2E1606]/78 leading-relaxed max-w-2xl mx-auto"
          >
            لە <strong className="text-[#2E1606] font-bold">ئاژانسی کرۆ</strong> ستراتیژی ورد،
            هونەری بینراو و تەکنەلۆژیای مۆدێرن تێکەڵ دەکەین بۆ ئەوەی ناسنامەی براند، وێبسایت
            و پاکێجینگێک دروست بکەین کە تۆ لە تەواوی بازاڕەکەتدا بکاتە یەکەم.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
