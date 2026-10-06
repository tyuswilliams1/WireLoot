import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "../components/Analytics";
import { ImpactTracking } from "../components/ImpactTracking";

/**
 * ImpactTracking and SpeedInsights stay mounted. Analytics loads the
 * Cloudflare beacon and GA4 only when their NEXT_PUBLIC_ build-time env
 * vars are set. The deployed page shell is not in this repository; when
 * that tree is merged, keep this tracker order inside the existing layout
 * instead of dropping the shell.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ImpactTracking />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
