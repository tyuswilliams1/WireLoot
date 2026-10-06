import Script from "next/script";

/**
 * Cloudflare Web Analytics beacon and GA4 (gtag).
 *
 * NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN and NEXT_PUBLIC_GA_MEASUREMENT_ID are
 * inlined at Next.js / OpenNext build time. Set them before the Worker
 * deploy; wrangler runtime secrets alone do not reach this component.
 * A missing or empty value skips that tracker.
 */

const CF_TOKEN_PATTERN = /^[A-Za-z0-9_-]{8,128}$/;
const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

function publicEnv(
  name: "NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN" | "NEXT_PUBLIC_GA_MEASUREMENT_ID",
  pattern: RegExp,
) {
  const value = process.env[name]?.trim();
  if (!value || !pattern.test(value)) return undefined;
  return value;
}

export function Analytics() {
  const cfToken = publicEnv("NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN", CF_TOKEN_PATTERN);
  const measurementId = publicEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID", GA_ID_PATTERN);

  return (
    <>
      {cfToken ? (
        <Script
          id="cf-web-analytics"
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: cfToken })}
        />
      ) : null}
      {measurementId ? (
        <>
          <Script
            id="ga4-loader"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />
          <Script id="ga4-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}');
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
