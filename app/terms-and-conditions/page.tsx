import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditionsPage() {
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
        <div className="mt-12 max-w-[850px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--gold)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b7746]">
              Terms
            </span>
          </div>

          <h1 className="mt-6 font-serif text-[clamp(42px,5vw,64px)] leading-[1.05] tracking-[-0.025em]">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-[760px] text-[15px] leading-8 text-[#626b7b]">
            These terms describe the general conditions for using the Baba Ali
            Homoeopathic Clinic website and submitting a consultation request.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 max-w-[900px] space-y-12">
          <section>
            <h2 className="font-serif text-[30px]">
              1. Website use
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              This website provides information about Baba Ali Homoeopathic
              Clinic, its consultation model, areas of consultation, and the
              process for requesting a consultation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              2. Consultation requests
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Submitting the consultation request form does not by itself
              confirm an appointment or guarantee that a request will be
              accepted. Requests are reviewed by the clinic before the next
              step is arranged.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              3. Consultation model
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              The clinic operates an appointment-based consultation model.
              The consultation process, including case suitability and
              appointment arrangements, is subject to the clinic's applicable
              consultation policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              4. Assessment fee
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              The initial case assessment fee is PKR 50,000. Where payment is
              required, the applicable amount and payment instructions are
              communicated as part of the consultation process.
            </p>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Payment does not by itself guarantee acceptance of a case or the
              provision of a consultation outside the agreed process.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              5. Refunds and cancellations
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Refunds and cancellation matters are governed by the applicable
              consultation and refund terms communicated before payment.
              Where the agreed service is not provided by the clinic, the
              applicable refund terms may apply.
            </p>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Where a client misses or cancels an arranged session for reasons
              attributable to the client, the applicable refund terms may
              differ.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              6. Information submitted by visitors
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Visitors should provide information that is accurate and
              reasonably necessary for an initial consultation request. The
              initial form is not intended to collect a complete medical
              history.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              7. Professional communication
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Consultation-related communication is handled through the
              clinic's designated professional communication channel.
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
              8. Medical and healthcare information
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Information presented on this website is intended to describe
              the clinic and its consultation model. Nothing on the website
              should be interpreted as a guarantee of a particular outcome or
              recovery.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              9. Changes to these terms
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              The clinic may update these terms when necessary. The version
              published on the website will apply to use of the website and
              consultation-request process from its effective date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[30px]">
              10. Contact
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Questions regarding these terms may be directed to:
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