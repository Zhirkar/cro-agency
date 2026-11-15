import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpLeft } from 'lucide-react';
import { NAV_LINKS } from '../data/agencyData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'py-3 bg-[#F5E9DA]/95 backdrop-blur-xl border-b border-[#2E1606]/12 shadow-[0_8px_28px_rgba(46,22,6,0.06)]'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center group shrink-0" aria-label="سەرەتای وێبسایت">
          <div className="h-10 sm:h-12 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img
              src="/images/cro-logo.png"
              alt="CRO Agency Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#FFF5EA]/85 border border-[#2E1606]/12 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#2E1606]/80 hover:text-[#F06A06] rounded-full hover:bg-[#EFE0CE]/70 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F06A06] hover:bg-[#dc5e02] text-[#FFF5EA] text-sm font-bold active:scale-[0.98] transition-all shadow-[0_6px_18px_rgba(240,106,6,0.22)]"
          >
            <span>پڕۆژەکەت دەستپێبکە</span>
            <ArrowUpLeft className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="کردنەوەی مێنۆ"
            className="lg:hidden p-2.5 rounded-xl bg-[#FFF5EA] border border-[#2E1606]/12 text-[#2E1606] shrink-0"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 mx-4 p-4 rounded-2xl bg-[#FFF5EA] border border-[#2E1606]/14 shadow-xl max-h-[calc(100dvh-5rem)] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-[#2E1606] hover:text-[#F06A06] hover:bg-[#EFE0CE]/60 transition-colors text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F06A06] text-[#FFF5EA] font-bold"
            >
              <span>پڕۆژەکەت دەستپێبکە</span>
              <ArrowUpLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
