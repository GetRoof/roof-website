import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const APP_STORE_URL = "https://apps.apple.com/us/app/getroof/id6760582452";

const steps = [
  {
    number: "01",
    title: "Set your search once",
    description:
      "Tell us your city, budget, and housing type. Takes 2 minutes.",
  },
  {
    number: "02",
    title: "We hunt while you sleep",
    description:
      "Roof scrapes Kamernet, Pararius, Funda and more. Continuously, day and night. Never misses a listing.",
  },
  {
    number: "03",
    title: "You're always first",
    description:
      "The second a match appears you get an alert with all the details and a direct link to apply.",
  },
];

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Roof</h1>
      <SiteHeader />

      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Two friends celebrating with keys on an Amsterdam canal"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 text-center animate-fade-up">
          <Badge
            variant="outline"
            className="mb-8 border-white/60 bg-transparent text-white tracking-[0.12em] text-[11px] font-normal px-4 py-1.5 rounded-full"
          >
            NOW AVAILABLE IN THE NETHERLANDS
          </Badge>

          <h1
            className="font-[family-name:var(--font-playfair)] font-normal text-white leading-[1.05] max-w-[900px]"
            style={{ fontSize: "clamp(36px, 8vw, 96px)" }}
          >
            While you slept,
            <br />
            <em>we found your place.</em>
          </h1>

          <p
            className="mt-6 max-w-[520px] leading-[1.6] text-[#F4F2EE]/75"
            style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
          >
            We stalk Kamernet, Pararius, Funda and more so you
            don&rsquo;t have to. You sleep. We refresh. You win.
          </p>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 transition-opacity hover:opacity-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-[48px] w-auto"
            />
          </a>

          <p className="mt-4 text-[13px] text-[#F4F2EE]/50">
            Free · The Netherlands
          </p>
        </div>
      </section>

      {/* ─── Ticker Bar ─── */}
      <section className="overflow-hidden bg-[#111] py-[18px]">
        <div className="flex animate-ticker whitespace-nowrap">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="shrink-0 text-[14px] tracking-[0.04em] text-white px-8"
            >
              Monitoring Kamernet · Pararius · Funda · HousingAnywhere ·
              Kamernet · Pararius · and more · 24/7&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section
        className="bg-[#F4F2EE]"
        style={{ padding: "clamp(80px, 12vw, 140px) 24px" }}
      >
        <h2
          className="font-[family-name:var(--font-playfair)] font-normal text-[#111] text-center"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          The easiest keys you&rsquo;ll ever get.
        </h2>

        <div className="mx-auto mt-[72px] grid max-w-[960px] grid-cols-1 gap-12 md:grid-cols-3 md:gap-12">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-[family-name:var(--font-playfair)] italic text-[72px] leading-none text-[#E8E5DF] block mb-4">
                {step.number}
              </span>
              <Separator className="mb-5 h-px w-8 bg-[#111]" />
              <h3 className="mb-2.5 text-[17px] font-medium text-[#111]">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-[#555]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section
        data-section="cta"
        className="bg-[#111] text-center"
        style={{ padding: "clamp(100px, 14vw, 160px) 24px" }}
      >
        <div className="mx-auto max-w-[700px]">
          <h2
            className="font-[family-name:var(--font-playfair)] font-normal text-white leading-[1.05]"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            Stop refreshing.
            <br />
            <em>We do it for you.</em>
          </h2>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block transition-opacity hover:opacity-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-[48px] w-auto"
            />
          </a>

          <p className="mt-4 text-[13px] text-white/35">
            Free · The Netherlands
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
