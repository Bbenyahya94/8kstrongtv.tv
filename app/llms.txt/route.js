export const dynamic = 'force-static';

export function GET() {
  const content = `# 8K Strong TV

> 8K Strong TV provides personal 8K IPTV subscriptions and reseller panel credit packages, with setup guidance for supported devices.

## Main pages
- / — 8K Strong IPTV subscriptions and reseller plans
- /reseller — 8K Strong reseller panels, credits, account creation, trials and support
- /free-trial — choose a device and preferred app, then request a 24-hour test line on WhatsApp
- /setup-guide — setup guidance for TiviMate, IPTV Smarters Pro, IBO Player and FireStick
- /contact — WhatsApp, Telegram and email support

## Product information
- Personal subscription options: 1, 3, 6, 12 and 24 months
- Reseller credit options: 120, 240, 360 and 600 credits, plus Super Reseller options
- Supported devices include FireStick, Android TV, Apple TV, MAG, Samsung and LG Smart TVs

## Contact
- WhatsApp: +212 670-779271
- Telegram: @premiumiptvpanelscom
- Email: support@reselleriptv.com

## Policies
See /terms, /privacy-policy and /refund-policy for the applicable policies.
`;
  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } });
}
