import './globals.css';
import Script from 'next/script';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: '8K Strong IPTV Reseller Subscription', template: '%s | 8K Strong TV' },
  keywords: ['8K Strong', 'Strong 8K', '8K Strong reseller plans', '8K Strong reseller panels', '8K Strong IPTV subscription', 'My 8K', '8K IPTV', '8K IPTV subscription', '8K reseller plans', '8K Strong IPTV reseller', '8K Strong panel', '8K Strong IPTV plans', '8K Strong provider', '8K Stream'],
  description: '8K Strong IPTV reseller subscription provider with 8K IPTV plans, Strong 8K panels, 8K reseller plans and 8K Stream device setup. Explore free trials, support and subscription options.',
  openGraph: { type: 'website', siteName: '8K Strong TV', title: '8K Strong IPTV Subscription & Reseller Panels', description: 'Explore 8K Strong IPTV plans, 8K reseller panels, credit packages, free trials and device support.' },
  twitter: { card: 'summary_large_image' },
  verification: { google: 'pCtHRHAi3duOYXzFkji1xTJDKQ4TxpuKV6OAFiFT_Kk' },
  robots: { index: true, follow: true }
};
const structuredData = { '@context':'https://schema.org', '@graph':[{'@type':'Organization',name:'8K Strong TV',url:siteUrl,email:'support@reselleriptv.com',contactPoint:{'@type':'ContactPoint',telephone:'+212670779271',contactType:'customer support',availableLanguage:['English','French','Arabic']},sameAs:['https://wa.me/212670779271','https://t.me/premiumiptvpanelscom']},{'@type':'WebSite',name:'8K Strong TV',url:siteUrl}] };
export default function RootLayout({ children }) { return <html lang="en"><body>{children}<Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(structuredData)}</Script><Script src="https://www.googletagmanager.com/gtag/js?id=G-FBW3BSV8GS" strategy="lazyOnload"/><Script id="google-analytics" strategy="lazyOnload">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-FBW3BSV8GS');`}</Script></body></html>; }
