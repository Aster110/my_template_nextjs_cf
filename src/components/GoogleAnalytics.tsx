'use client';

import Script from 'next/script';
import { SITE_CONFIG } from '@/lib/config';

export default function GoogleAnalytics() {
  // 如果分析功能未启用，则不渲染任何内容
  if (!SITE_CONFIG.enableAnalytics) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YH7QWHWEG8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YH7QWHWEG8');
        `}
      </Script>
    </>
  );
} 