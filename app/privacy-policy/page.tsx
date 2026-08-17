import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#111a2c]">
      <div className="site-container py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d6938] transition-colors hover:text-[#4d4023]"
        >
          <ArrowLeft size={15} strokeWidth={1.5} />
          Back to website
        </Link>

        {/* Header */}
        <div className="mt-12 max-w-[820px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--gold)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b7746]">
              Privacy
            </span>
          </div>

          <h1 className="mt-6 font-serif text-[clamp(42px,5vw,64px)] leading-[1.05] tracking-[-0.025em]">
            Privacy Policy
          </h1>

          <p className="mt-6 text-[15px] leading-8 text-[#626b7b]">
            This page explains how information submitted through the Baba Ali
            Homoeopathic Clinic website may be handled in connection with a
            consultation request.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 max-w-[850px] space-y-12">
          <section>
            <h2 className="font-serif text-[30px]">
              1. Information we may receive
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              When you submit a consultation request, the website may receive
              information such as your name, age, email address, phone number,
              city or country, main concern, and the limited background
              information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              2. Purpose of the information
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              The information submitted through the consultation request form
              is intended to help the clinic review the initial request and
              communicate the appropriate next step.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              3. Limited information collection
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              The initial consultation request form is not intended to collect
              a complete medical history. Visitors are asked to provide only
              information that is reasonably necessary for the initial request.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              4. Communication
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Consultation requests are intended to be reviewed through the
              clinic's professional communication channel:
            </p>

            <a
              href="mailto:info@babaalihomeopathicclinic.com"
              className="mt-4 inline-block text-[13px] font-medium text-[#7d6938] hover:text-[#4d4023]"
            >
              info@babaalihomeopathicclinic.com
            </a>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              5. Protection of information
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              The website is designed so that consultation requests are
              submitted through a server-side process rather than exposing
              submitted form information in the browser address bar.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              6. Third-party services
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              The website may use third-party infrastructure and services for
              hosting, email delivery, security, analytics, or other technical
              functions. Final third-party service details should be reviewed
              and listed before launch where applicable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              7. Contact regarding privacy
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Questions or concerns about information submitted through the
              website may be directed to the clinic through the professional
              email address.
            </p>

            <a
              href="mailto:info@babaalihomeopathicclinic.com"
              className="mt-4 inline-block text-[13px] font-medium text-[#7d6938] hover:text-[#4d4023]"
            >
              info@babaalihomeopathicclinic.com
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}