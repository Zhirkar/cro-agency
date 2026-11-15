import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  CheckCircle2,
  Clock,
  FileDown,
  Share2,
  MessageCircle,
  Loader2,
} from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/agencyData';

const WHATSAPP_NUMBER = '9647741784847';

const PACKAGE_OPTIONS = [
  ...SERVICE_PACKAGES.map((pkg) => `پاکێجی ${pkg.name}`),
  'پاکێجی تایبەت (Custom)',
];

function buildWhatsAppUrl({ selectedService, name, contact, company, message }) {
  const lines = [
    'سڵاو ئاژانسی کرۆ، داواکاری پڕۆژەی نوێم هەیە:',
    '',
    `• پاکێج: ${selectedService}`,
    `• ناو: ${name}`,
    `• پەیوەندی: ${contact}`,
    `• براند / کۆمپانیا: ${company?.trim() || 'دیاری نەکراوە'}`,
    `• وردەکاری: ${message?.trim() || '—'}`,
    '',
    '(فایلی PDFـی داواکارییەکە لەگەڵ ئەم نامەیە هاوپێچ دەکەم)',
  ];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export default function ContactSection({ preselectedService }) {
  const [selectedService, setSelectedService] = useState('پاکێجی PREMIUM');
  const [form, setForm] = useState({
    name: '',
    contact: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const payload = {
      selectedService,
      name: form.name.trim(),
      contact: form.contact.trim(),
      company: form.company.trim(),
      message: form.message.trim(),
    };

    try {
      const { generateBriefPdf } = await import('../utils/generateBriefPdf');
      const pdfResult = await generateBriefPdf(payload);
      pdfResult.download();

      const waUrl = buildWhatsAppUrl(payload);
      const canShareFile =
        typeof navigator !== 'undefined' &&
        typeof navigator.canShare === 'function' &&
        navigator.canShare({ files: [pdfResult.file] });

      setSubmittedData({
        ...payload,
        pdfResult,
        waUrl,
        canShareFile,
      });

      // Open WhatsApp with pre-filled details
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSharePdf = async () => {
    if (!submittedData?.pdfResult?.file) return;
    try {
      await navigator.share({
        title: `CRO Agency — ${submittedData.name}`,
        text: `داواکاری پڕۆژە (${submittedData.selectedService})`,
        files: [submittedData.pdfResult.file],
      });
    } catch {
      // User dismissed share sheet
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setForm({ name: '', contact: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-32 bg-[#F5E9DA] relative overflow-hidden">
      {/* Background Brand Wave Artwork (Screen 3 - Lower Right, extending under cards) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.95, x: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-16 sm:top-24 lg:top-20 -right-32 sm:-right-24 lg:-right-16 w-[700px] sm:w-[950px] lg:w-[1300px] xl:w-[1550px] aspect-[1888/1500] max-w-none z-0 select-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 95%)',
        }}
      >
        <div className="w-full h-full animate-wave-slow-3">
          <img
            src="/images/cro-wave-1-clean.png"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain object-right-top"
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Right Studio Info */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 min-w-0 space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#2E1606]">
                <span className="w-8 h-[2px] bg-[#2E1606]" />
                <span>پەیوەندیمان پێوە بکە</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1606] leading-tight">
                ئامادەیت براندەکەت ببەیتە ئاستی داهاتوو؟
              </h2>
              <p className="text-[#2E1606]/78 text-sm sm:text-base leading-relaxed">
                پێمان بڵێ بیرۆکەکەت چییە. لە ماوەی ٢٤ کاتژمێردا تیمی ستراتیژیست و دیزاینەرەکانمان
                پەیوەندیت پێوە دەکەنەوە بۆ ڕاوێژێکی بێبەرامبەر.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF5EA] border border-[#2E1606]/12 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl grad-slate-green flex items-center justify-center text-[#FFF5EA] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#2E1606]/60">تەلەفۆن و واتسئاپ</div>
                  <a
                    href="tel:+9647741784847"
                    className="block text-right text-sm sm:text-base font-bold text-[#2E1606] hover:text-[#F06A06] transition-colors"
                    dir="ltr"
                  >
                    0774 178 4847
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#2E1606]/70 pt-1">
                <Clock className="w-4 h-4 text-[#F06A06] shrink-0" />
                <span>کاتی کارکردن: شەممە تا پێنجشەممە • ٩:٠٠ بەیانی - ٦:٠٠ ئێوارە</span>
              </div>
            </div>
          </motion.div>

          {/* Left Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 55, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 min-w-0"
          >
            <div className="p-5 sm:p-9 rounded-3xl bg-[#FFF5EA] border border-[#2E1606]/12 shadow-[0_16px_45px_rgba(46,22,6,0.06)]">
              {submittedData ? (
                <div className="py-8 sm:py-10 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#027402]/15 border border-[#027402] flex items-center justify-center text-[#027402] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2E1606]">
                      فایلی PDF دروستکرا و داگیرا!
                    </h3>
                    <p className="text-[#2E1606]/75 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                      فایلەکە بە ناوی{' '}
                      <span className="font-semibold text-[#2E1606]" dir="ltr">
                        {submittedData.pdfResult.fileName}
                      </span>{' '}
                      داگیراوە. دەتوانیت لە واتسئاپ هاوپێچی بکەیت یان ڕاستەوخۆ بینێریت.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
                    {submittedData.canShareFile && (
                      <button
                        type="button"
                        onClick={handleSharePdf}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full grad-orange-berry text-[#FFF5EA] font-bold text-sm shadow-md cursor-pointer"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>ناردنی فایلی PDF بۆ واتساپ</span>
                      </button>
                    )}

                    <a
                      href={submittedData.waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#027402] hover:bg-[#026102] text-[#FFF5EA] font-bold text-sm transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>کردنەوەی واتساپ</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => submittedData.pdfResult.download()}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#F5E9DA] border border-[#2E1606]/15 text-[#2E1606] font-bold text-sm hover:border-[#F06A06] transition-colors cursor-pointer"
                    >
                      <FileDown className="w-4 h-4 text-[#F06A06]" />
                      <span>داگرتنەوەی PDF</span>
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-semibold text-[#2E1606]/60 hover:text-[#F06A06] underline underline-offset-4 cursor-pointer"
                    >
                      ناردنی داواکارییەکی تر
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Package Selector (Single Select) */}
                  <div>
                    <label className="block text-sm font-bold text-[#2E1606] mb-3">
                      کام پاکێجەت دەوێت؟
                    </label>
                    <div
                      className="flex flex-wrap gap-2"
                      role="radiogroup"
                      aria-label="هەڵبژاردنی پاکێج"
                    >
                      {PACKAGE_OPTIONS.map((pkgTitle) => {
                        const active = selectedService === pkgTitle;
                        return (
                          <button
                            key={pkgTitle}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => setSelectedService(pkgTitle)}
                            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                              active
                                ? 'bg-[#F06A06] text-[#FFF5EA]'
                                : 'bg-[#F5E9DA] text-[#2E1606]/80 border border-[#2E1606]/12 hover:border-[#F06A06]'
                            }`}
                          >
                            {pkgTitle}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Text Inputs */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2E1606]/75 mb-2">
                        ناوی تەواو *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="نموونە: زانست محەمەد"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F5E9DA] border border-[#2E1606]/14 text-[#2E1606] placeholder:text-[#2E1606]/40 focus:outline-none focus:border-[#F06A06] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#2E1606]/75 mb-2">
                        ژمارەی مۆبایل یان ئیمەیڵ *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.contact}
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                        placeholder="نموونە: 0774 XXX XXXX یان ئیمەیڵ"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F5E9DA] border border-[#2E1606]/14 text-[#2E1606] placeholder:text-[#2E1606]/40 focus:outline-none focus:border-[#F06A06] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2E1606]/75 mb-2">
                      ناوی براند یان کۆمپانیا (ئارەزوومەندانە)
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="ناوی پڕۆژە یان براندەکەت"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F5E9DA] border border-[#2E1606]/14 text-[#2E1606] placeholder:text-[#2E1606]/40 focus:outline-none focus:border-[#F06A06] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2E1606]/75 mb-2">
                      کورتەیەک دەربارەی پڕۆژەکەت
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="ئامانج، خزمەتگوزاری، یان کاتی دەستپێکردنمان پێ بڵێ..."
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F5E9DA] border border-[#2E1606]/14 text-[#2E1606] placeholder:text-[#2E1606]/40 focus:outline-none focus:border-[#F06A06] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl grad-orange-berry text-[#FFF5EA] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 hover:brightness-105 active:scale-[0.99] transition-all shadow-[0_10px_24px_rgba(240,106,6,0.22)] cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>خەریکی دروستکردنی PDF و کردنەوەی واتساپە...</span>
                      </>
                    ) : (
                      <>
                        <span>ناردن بۆ واتساپ و دروستکردنی PDF</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
