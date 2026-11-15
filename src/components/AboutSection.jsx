import { Sparkles, Target, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const PILLARS = [
  {
    icon: Sparkles,
    title: 'داهێنانی ڕەسەن و جیاواز',
    desc: 'هیچ قاڵبێکی دووبارە بەکارناهێنین؛ هەموو براندێک لە سفرەوە بە بیرۆکەی تایبەتی خۆی دروست دەکرێت.',
    badgeGrad: 'grad-orange-berry',
  },
  {
    icon: Target,
    title: 'ستراتیژی پێش جوانکاری',
    desc: 'دیزاینی جوان بێ ئامانج تەنها وێنەیە؛ ئێمە هەموو هێڵ و ڕەنگێک دەبەستینەوە بە گەشەی بازاڕەکەت.',
    badgeGrad: 'grad-orange-crimson',
  },
  {
    icon: ShieldCheck,
    title: 'ستانداردی جیهانی و وردبینی',
    desc: 'لە شاشەی مۆبایلەوە تا گەورەترین بۆردی شەقامەکان، وردەکارییەکان بە بەرزترین کوالیتی دەردەکەون.',
    badgeGrad: 'grad-slate-green',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-28 bg-[#EFE0CE]/75 border-y border-[#2E1606]/10 text-[#2E1606] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Right Intro */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 min-w-0 space-y-5 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#2E1606]">
              <span className="w-8 h-[2px] bg-[#2E1606]" />
              <span>دەربارەی ئاژانسی کرۆ</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.3] sm:leading-[1.25] text-[#2E1606]">
              ئاژانسێک کە تەنها دیزاین ناکات، کەلتووری براند دەنووسێتەوە
            </h2>

            <p className="text-[#2E1606]/78 leading-relaxed text-sm sm:text-lg">
              ئاژانسی کرۆ لە تیمێک لە دیزاینەری ناسنامە، ستراتیژیست، و گەشەپێدەری دیجیتاڵ پێکهاتووە.
              ئامانجمان یارمەتیدانی خاوەنکار و کۆمپانیا پێشەنگەکانە تا ببنە براندێک کە خەڵک خۆشی
              بوێت و متمانەی پێبکات.
            </p>
          </motion.div>

          {/* Left Pillars */}
          <div className="lg:col-span-7 min-w-0 grid sm:grid-cols-3 gap-4 sm:gap-5">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 55, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FFF5EA] border border-[#2E1606]/12 hover:border-[#F06A06] transition-all duration-300 group shadow-[0_8px_22px_rgba(46,22,6,0.04)]"
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${pillar.badgeGrad} flex items-center justify-center text-[#FFF5EA] mb-4 sm:mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#2E1606] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#2E1606]/75 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
