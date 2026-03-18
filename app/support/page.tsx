import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Support · Roof",
};

export default function SupportPage() {
  return (
    <main>
      <SiteHeader dark={false} />

      <article className="bg-[#F4F2EE] pt-32 pb-24 px-6">
        <div className="mx-auto max-w-[680px]">
          <h1
            className="font-[family-name:var(--font-playfair)] font-normal text-[#111] mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Support
          </h1>
          <p className="text-[16px] leading-[1.8] text-[#555] mb-12">
            We&rsquo;re a small team and we genuinely read every message. If
            something&rsquo;s not working or you just want to say hi, reach out.
          </p>

          <div className="space-y-10 text-[16px] leading-[1.8] text-[#555]">
            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Get in touch</h2>
              <p>
                Email us at{" "}
                <a
                  href="mailto:hello@getroof.app"
                  className="text-[#111] underline underline-offset-4"
                >
                  hello@getroof.app
                </a>{" "}
                and we&rsquo;ll get back to you within 24 hours.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Common questions</h2>

              <p className="font-medium text-[#111]">How do I change my search preferences?</p>
              <p className="mt-1">
                Open the app, go to your profile, and update your city, budget, or
                housing type. Your alerts will adjust immediately.
              </p>

              <p className="font-medium text-[#111] mt-6">Why did I get an alert for a listing that&rsquo;s already gone?</p>
              <p className="mt-1">
                Listings in the Netherlands move fast. We send alerts the moment a
                listing appears, but popular places can be taken within minutes.
                That&rsquo;s exactly why speed matters.
              </p>

              <p className="font-medium text-[#111] mt-6">Which platforms does Roof monitor?</p>
              <p className="mt-1">
                We currently scrape Kamernet, Pararius, Funda, HousingAnywhere,
                and more. We&rsquo;re always adding new sources.
              </p>

              <p className="font-medium text-[#111] mt-6">How do I delete my account?</p>
              <p className="mt-1">
                You can delete your account from the app settings. All your
                personal data will be removed within 30 days. You can also email
                us and we&rsquo;ll handle it for you.
              </p>

              <p className="font-medium text-[#111] mt-6">Is Roof free?</p>
              <p className="mt-1">
                Yes. Roof is free to download and use.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Report a bug</h2>
              <p>
                Found something broken? Let us know at{" "}
                <a
                  href="mailto:hello@getroof.app"
                  className="text-[#111] underline underline-offset-4"
                >
                  hello@getroof.app
                </a>{" "}
                with a screenshot if possible. We fix things fast.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Privacy concerns</h2>
              <p>
                For anything related to your data or GDPR rights, email{" "}
                <a
                  href="mailto:privacy@getroof.app"
                  className="text-[#111] underline underline-offset-4"
                >
                  privacy@getroof.app
                </a>
                . You can also read our{" "}
                <a
                  href="/privacy"
                  className="text-[#111] underline underline-offset-4"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
