import Script from "next/script";

const IMPACT_LOADER =
  "https://utt.impactcdn.com/P-A7850373-b0ad-40e4-b6ec-b96e3263a1021.js";

/** Impact affiliate tag. Kept site-wide alongside visitor analytics. */
export function ImpactTracking() {
  return (
    <Script id="impact-affiliate" strategy="afterInteractive">
      {`(function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('${IMPACT_LOADER}','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');`}
    </Script>
  );
}
