export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://8kstrongtv.tv';
  return ['','/reseller','/free-trial','/setup-guide','/about','/contact','/terms','/privacy-policy','/refund-policy'].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : 0.7 }));
}
