import { ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '../data/agencyData';

export default function Footer() {
  return (
    <footer className="border-t border-[#2E1606]/12 bg-[#EFE0CE] pt-12 sm:pt-16 pb-8 sm:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-[#2E1606]/10">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <div className="h-10 sm:h-11 flex items-center justify-center">
                <img
                  src="/images/cro-logo.png"
                  alt="CRO Agency Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="font-display text-xl sm:text-3xl font-extrabold tracking-wider text-[#2E1606]">
                CRO <span className="text-[#F06A06]">AGENCY</span>
              </div>
            </div>
            <p className="text-sm text-[#2E1606]/70 leading-relaxed">
              ستۆدیۆی داهێنان و ناسنامەی براند — دروستکردنی ئەزموونی دیجیتاڵی و بینراوی بەرز بۆ
              براندە پێشەنگەکان.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-[#2E1606]/75">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#F06A06] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#hero"
            aria-label="گەڕانەوە بۆ سەرەوە"
            className="w-11 h-11 rounded-full bg-[#FFF5EA] border border-[#2E1606]/15 flex items-center justify-center text-[#2E1606] hover:bg-[#F06A06] hover:text-[#FFF5EA] hover:border-[#F06A06] transition-all self-start lg:self-auto"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>

        <div className="pt-6 sm:pt-8 text-center text-xs text-[#2E1606]/60">
          <p>© ٢٠٢٦ کرۆ ئەجنسی (CRO Agency). هەموو مافەکان پارێزراون.</p>
        </div>
      </div>
    </footer>
  );
}
