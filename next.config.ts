import type { NextConfig } from "next";

/**
 * Live Content-Security-Policy, plus the hosts required by the official
 * Cloudflare Web Analytics beacon and the GA4 gtag.js snippet.
 * script-src: static.cloudflareinsights.com, www.googletagmanager.com,
 * www.google-analytics.com.
 * connect-src: cloudflareinsights.com, www.google-analytics.com,
 * *.google-analytics.com, *.analytics.google.com, analytics.google.com
 * (the wildcard does not cover the apex), and www.googletagmanager.com.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  [
    "script-src",
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://utt.impactcdn.com",
    "https://static.cloudflareinsights.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
  ].join(" "),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  [
    "connect-src",
    "'self'",
    "https://discord.com",
    "https://*.discord.com",
    "https://developer.woot.com",
    "https://va.vercel-scripts.com",
    "https://vitals.vercel-insights.com",
    "https://vercel.live",
    "https://utt.impactcdn.com",
    "https://*.impactcdn.com",
    "https://*.impactradius.com",
    "https://*.impact.com",
    "https://cloudflareinsights.com",
    "https://www.google-analytics.com",
    "https://*.google-analytics.com",
    "https://analytics.google.com",
    "https://*.analytics.google.com",
    "https://www.googletagmanager.com",
  ].join(" "),
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
