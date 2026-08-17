import Link from "next/link";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";

const refundPrinciples = [
  {
    title: "Advance payment",
    text: "The initial case assessment fee of PKR 50,000 is payable in advance as part of the consultation process.",
  },
  {
    title: "Clinic does not provide the agreed service",
    text: "Where the agreed consultation service is not provided by the clinic, the applicable fee may be refunded in accordance with these terms.",
  },
  {
    title: "Client misses or cancels",
    text: "Where a client misses or cancels an arranged session for reasons attributable to the client, the applicable fee may not be refundable.",
  },
  {
    title: "Before payment",
    text: "The applicable consultation and refund conditions should be understood before payment is made.",
  },
];

export default function RefundPolicyPage() {
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
              Refunds
            </span>
          </div>

          <h1 className="mt-6 font-serif text-[clamp(42px,5vw,64px)] leading-[1.05] tracking-[-0.025em]">
            Refund Policy
          </h1>

          <p className="mt-6 max-w-[760px] text-[15px] leading-8 text-[#626b7b]">
            This policy explains the general refund conditions associated with
            the clinic&apos;s consultation process and initial case assessment
            fee.
          </p>
        </div>

        {/* Fee highlight */}
        <div className="mt-14 max-w-[900px] border border-[#d9d0b9] bg-[#f8f5eb] p-8 md:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b7746]">
            Initial Case Assessment Fee
          </p>

          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <p className="font-serif text-[48px] leading-none text-[#162039]">
              PKR 50,000
            </p>

            <p className="max-w-[430px] text-[13px] leading-7 text-[#626b7b]">
              The fee is payable in advance as part of the consultation
              process.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-10 max-w-[900px] space-y-5">
          {refundPrinciples.map((item) => (
            <section
              key={item.title}
              className="border border-[#deded9] bg-white p-7 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e3dcc8] bg-[#faf8f0]">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.4}
                    className="text-[#8b7746]"
                  />
                </div>

                <div>
                  <h2 className="font-serif text-[28px] text-[#162039]">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-[14px] leading-8 text-[#626b7b]">
                    {item.text}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Additional terms */}
        <div className="mt-10 max-w-[900px] grid gap-5 md:grid-cols-2">
          <section className="border border-[#deded9] bg-white p-7">
            <h2 className="font-serif text-[28px] text-[#162039]">
              Appointment arrangements
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              An appointment is arranged after the required consultation
              process and payment confirmation have been completed.
            </p>
          </section>

          <section className="border border-[#deded9] bg-white p-7">
            <h2 className="font-serif text-[28px] text-[#162039]">
              Questions or objections
            </h2>

            <p className="mt-4 text-[14px] leading-8 text-[#626b7b]">
              Clients may raise questions, concerns, or objections regarding
              the consultation process or applicable charges through the
              clinic&apos;s professional communication channel.
            </p>

            <a
              href="mailto:info@babaalihomeopathicclinic.com"
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#7d6938] hover:text-[#4d4023]"
            >
              <Mail size={15} strokeWidth={1.4} />
              info@babaalihomeopathicclinic.com
            </a>
          </section>
        </div>

        {/* Contact */}
        <div className="mt-10 max-w-[900px] border-t border-[#dfddd7] pt-8">
          <p className="text-[13px] leading-7 text-[#6a7281]">
            The applicable refund terms should be understood before payment is
            made. Questions about a specific payment or appointment can be
            directed to the clinic through its professional email address.
          </p>

          <a
            href="mailto:info@babaalihomeopathicclinic.com"
            className="mt-4 inline-block text-[13px] font-medium text-[#7d6938] hover:text-[#4d4023]"
          >
            info@babaalihomeopathicclinic.com
          </a>
        </div>
      </div>
    </main>
  );
}