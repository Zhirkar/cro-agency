import { jsPDF } from 'jspdf';

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapRtlText(ctx, text, maxWidth) {
  const paragraphs = (text || '—').split(/\r?\n/);
  const lines = [];

  for (const paragraph of paragraphs) {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      lines.push('');
      continue;
    }

    let current = words[0];
    for (let i = 1; i < words.length; i++) {
      const candidate = `${current} ${words[i]}`;
      if (ctx.measureText(candidate).width <= maxWidth) {
        current = candidate;
      } else {
        lines.push(current);
        current = words[i];
      }
    }
    lines.push(current);
  }

  return lines.length ? lines : ['—'];
}

export async function generateBriefPdf({ selectedService, name, contact, company, message }) {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  // A4 at ~150 DPI for crisp Kurdish typography
  const W = 1240;
  const H = 1754;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Matte off-white background
  ctx.fillStyle = '#F5E9DA';
  ctx.fillRect(0, 0, W, H);

  // Top brand gradient accent strip
  const topGrad = ctx.createLinearGradient(0, 0, W, 0);
  topGrad.addColorStop(0, '#F06A06');
  topGrad.addColorStop(1, '#DE5500');
  ctx.fillStyle = topGrad;
  ctx.fillRect(0, 0, W, 18);

  const logo = await loadImage('/images/cro-logo.png');

  // Header card
  drawRoundedRect(ctx, 72, 70, W - 144, 210, 28);
  ctx.fillStyle = '#FFF5EA';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(46, 22, 6, 0.12)';
  ctx.stroke();

  if (logo) {
    const logoH = 120;
    const logoW = (logo.width / logo.height) * logoH;
    ctx.drawImage(logo, W - 120 - logoW, 115, logoW, logoH);
  }

  // Header text (RTL right-aligned)
  ctx.direction = 'rtl';
  ctx.textAlign = 'right';

  const textRightX = logo ? W - 245 : W - 115;
  ctx.fillStyle = '#F06A06';
  ctx.font = 'bold 28px "Alumni Sans", "IBM Plex Sans Arabic", "Noto Sans Arabic", sans-serif';
  ctx.fillText('CRO AGENCY • ئاژانسی کرۆ', textRightX, 138);

  ctx.fillStyle = '#2E1606';
  ctx.font = 'bold 42px "Alumni Sans", "IBM Plex Sans Arabic", "Noto Sans Arabic", sans-serif';
  ctx.fillText('فۆڕمی داواکاری پڕۆژەی نوێ', textRightX, 200);

  const dateStr = new Date().toLocaleDateString('en-GB');
  ctx.textAlign = 'left';
  ctx.direction = 'ltr';
  ctx.fillStyle = 'rgba(46, 22, 6, 0.6)';
  ctx.font = '700 24px "Alumni Sans", "IBM Plex Sans Arabic", sans-serif';
  ctx.fillText(`Date: ${dateStr}`, 115, 145);
  ctx.fillText('0774 178 4847', 115, 182);

  // Selected package banner
  drawRoundedRect(ctx, 72, 318, W - 144, 132, 24);
  const pkgGrad = ctx.createLinearGradient(72, 318, W - 72, 450);
  pkgGrad.addColorStop(0, '#F06A06');
  pkgGrad.addColorStop(1, '#DE5500');
  ctx.fillStyle = pkgGrad;
  ctx.fill();

  ctx.direction = 'rtl';
  ctx.textAlign = 'right';
  ctx.fillStyle = 'rgba(255, 245, 234, 0.85)';
  ctx.font = '600 24px "IBM Plex Sans Arabic", sans-serif';
  ctx.fillText('پاکێجی هەڵبژێردراو', W - 115, 366);

  ctx.fillStyle = '#FFF5EA';
  ctx.font = 'bold 44px "Alumni Sans", "IBM Plex Sans Arabic", sans-serif';
  ctx.fillText(selectedService || 'پاکێجی PREMIUM', W - 115, 420);

  // Details Card
  const detailsY = 486;
  const detailsH = 1090;
  drawRoundedRect(ctx, 72, detailsY, W - 144, detailsH, 28);
  ctx.fillStyle = '#FFF5EA';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(46, 22, 6, 0.12)';
  ctx.stroke();

  const fields = [
    { label: 'ناوی تەواو', value: name || '—' },
    { label: 'ژمارەی مۆبایل یان ئیمەیڵ', value: contact || '—' },
    { label: 'ناوی براند یان کۆمپانیا', value: company?.trim() || 'دیاری نەکراوە' },
  ];

  let cursorY = detailsY + 70;
  for (const field of fields) {
    ctx.direction = 'rtl';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#F06A06';
    ctx.font = 'bold 24px "IBM Plex Sans Arabic", sans-serif';
    ctx.fillText(field.label, W - 120, cursorY);

    cursorY += 46;
    ctx.fillStyle = '#2E1606';
    ctx.font = 'bold 32px "IBM Plex Sans Arabic", sans-serif';
    ctx.fillText(field.value, W - 120, cursorY);

    cursorY += 34;
    ctx.strokeStyle = 'rgba(46, 22, 6, 0.1)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(120, cursorY);
    ctx.lineTo(W - 120, cursorY);
    ctx.stroke();

    cursorY += 56;
  }

  // Project Brief / Message box
  ctx.direction = 'rtl';
  ctx.textAlign = 'right';
  ctx.fillStyle = '#F06A06';
  ctx.font = 'bold 24px "IBM Plex Sans Arabic", sans-serif';
  ctx.fillText('کورتەی پڕۆژە و زانیارییەکان', W - 120, cursorY);

  cursorY += 26;
  const boxH = detailsY + detailsH - cursorY - 46;
  drawRoundedRect(ctx, 120, cursorY, W - 240, boxH, 20);
  ctx.fillStyle = '#F5E9DA';
  ctx.fill();

  ctx.fillStyle = '#2E1606';
  ctx.font = '500 28px "IBM Plex Sans Arabic", sans-serif';
  const wrappedLines = wrapRtlText(ctx, message?.trim() || 'هیچ تێبینییەک نەنووسراوە.', W - 310);

  let textY = cursorY + 56;
  const maxLines = Math.floor((boxH - 60) / 46);
  for (const line of wrappedLines.slice(0, maxLines)) {
    ctx.fillText(line, W - 155, textY);
    textY += 46;
  }

  // Footer
  ctx.direction = 'rtl';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(46, 22, 6, 0.55)';
  ctx.font = '600 22px "IBM Plex Sans Arabic", sans-serif';
  ctx.fillText(
    'ئەم فۆڕمە بە شێوەی خۆکار لە وێبسایتی CRO Agency دروستکراوە • 0774 178 4847',
    W / 2,
    H - 68
  );

  // Convert canvas to crisp A4 PDF
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  const imgData = canvas.toDataURL('image/png', 1.0);
  pdf.addImage(imgData, 'PNG', 0, 0, 210, 297, undefined, 'FAST');

  const safeSlug = (name || 'client')
    .trim()
    .replace(/[^\p{L}\p{N}_-]+/gu, '-')
    .replace(/^-+|-+$/g, '') || 'client';
  const fileName = `CRO-Brief-${safeSlug}.pdf`;
  const blob = pdf.output('blob');
  const file = new File([blob], fileName, { type: 'application/pdf' });

  return {
    blob,
    file,
    fileName,
    download: () => pdf.save(fileName),
  };
}

