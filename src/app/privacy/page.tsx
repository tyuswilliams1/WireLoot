import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy · WireLoot",
  description:
    "How WireLoot measures traffic with Cloudflare Web Analytics and Google Analytics, and how to reach us about information you have shared.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          Privacy
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          Privacy notice
        </h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            WireLoot measures site traffic with Cloudflare Web Analytics and
            Google Analytics 4 (GA4). These tools record page views and related
            visit information, such as browser, device, and approximate
            location, so we can see how the site is used. Cloudflare Web
            Analytics uses a privacy-friendly beacon. Google Analytics is
            provided by Google. We use both for traffic measurement. We do not
            sell personal data.
          </p>
          <p>
            <strong>What we may store locally:</strong> digest signup emails and
            frequency preferences (
            <code className="rounded bg-slate-100 px-1 text-xs">
              data/digest-signups.json
            </code>
            ), and deal tips you submit (
            <code className="rounded bg-slate-100 px-1 text-xs">
              data/deal-submissions.json
            </code>
            ). These files live on the server filesystem for this preview and
            are not a production security commitment.
          </p>
          <p>
            <strong>What we do not do:</strong> send marketing email or sell
            personal data. Clicking a deal may use an ordinary retailer
            affiliate redirect. Traffic measurement is the Cloudflare Web
            Analytics beacon and Google Analytics (GA4) described above, not a
            separate advertising network.
          </p>
          <p>
            For legal terms governing use of the Service—including affiliate
            disclosure, deal accuracy disclaimers, and governing law (Texas /
            USA)—see our{" "}
            <a
              className="font-semibold text-blue-700 underline underline-offset-2"
              href="/terms"
            >
              Terms of Service
            </a>
            .
          </p>
          <p>
            <strong>Privacy requests:</strong> to ask about, correct, or delete
            information you&apos;ve shared with us, email{" "}
            <a
              href="mailto:wirelootsupport@gmail.com"
              className="font-semibold text-blue-700 underline underline-offset-2"
            >
              wirelootsupport@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
