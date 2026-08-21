import {
  ArrowUpRight,
  Check,
  CircleAlert,
  Mail,
  ShieldCheck,
} from "lucide-react";

const policyPoints = [
  "Online consultation only",
  "Appointment required",
  "Advance payment is required",
  "Consultation requests are reviewed before acceptance",
  "The clinic accepts selected cases",
  "Serious inquiries are encouraged",
];

export default function Policy() {
  return (
    <section
      id="policy"
      className="bg-white py-24 text-[var(--text-dark)] md:py-28"
    >
      <div className="site-container">
        {/* Heading */}
        <div className="max-w-[760px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--gold)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b7746]">
              Consultation Policy
            </span>
          </div>

          <h2 className="mt-6 max-w-[700px] font-serif text-[clamp(38px,4.5vw,58px)] leading-[1.05] tracking-[-0.025em] text-[#111a2c]">
            Important terms before requesting a consultation.
          </h2>

          <p className="mt-6 max-w-[670px] text-[15px] leading-8 text-[#626b7b]">
            Please review these terms before submitting a consultation
            request. They explain the consultation format, fee, payment
            requirements, and important conditions.
          </p>
        </div>

        {/* Main policy */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Before you request */}
          <div className="border border-[#deded9] bg-[#fafaf7] p-8 md:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck
                size={20}
                strokeWidth={1.4}
                className="text-[#8b7746]"
              />

              <h3 className="font-serif text-[28px] text-[#162039]">
                Before you request
              </h3>
            </div>

            <div className="mt-8">
              {policyPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 border-b border-[#e5e4df] py-4 last:border-b-0"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eee8d7]">
                    <Check
                      size={12}
                      strokeWidth={1.8}
                      className="text-[#806d3d]"
                    />
                  </div>

                  <p className="text-[14px] leading-6 text-[#596274]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Main fee and payment card */}
          <div className="border border-[#d9d0b9] bg-[#f8f5eb] p-8 md:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b7746]">
              Initial Case Assessment Fee
            </p>

            <p className="mt-4 font-serif text-[48px] leading-none text-[#162039]">
              PKR 50,000
            </p>

            <p className="mt-5 text-[14px] leading-7 text-[#626b7b]">
              The assessment fee is payable in advance. Please review the
              applicable refund terms before making payment.
            </p>

            {/* Payment account */}
            <div className="mt-7 border border-[#ddd5c0] bg-[#fbf9f2] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b7746]">
                Payment Account
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#8b92a0]">
                    Account Name
                  </p>

                  <p className="mt-1 text-[14px] font-medium text-[#162039]">
                    MUHAMMAD SHOUKAT ALI
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#8b92a0]">
                    Bank
                  </p>

                  <p className="mt-1 text-[14px] font-medium text-[#162039]">
                    UBL
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#8b92a0]">
                    IBAN
                  </p>

                  <p className="mt-1 break-all font-mono text-[13px] font-medium tracking-[0.03em] text-[#162039]">
                    PK48 UNIL 0109 0002 2401 6672
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 border-t border-[#ddd5c0] pt-7">
              <CircleAlert
                size={18}
                strokeWidth={1.4}
                className="mt-0.5 shrink-0 text-[#8b7746]"
              />

              <p className="text-[13px] leading-7 text-[#626b7b]">
                Submitting a consultation request does not confirm an
                appointment or guarantee acceptance of a case.
              </p>
            </div>
          </div>
        </div>

        {/* Refund and communication */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Refund */}
          <div className="border border-[#deded9] bg-white p-8 md:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b7746]">
              Fee & Refunds
            </p>

            <h3 className="mt-4 font-serif text-[30px] leading-tight text-[#162039]">
              Clear terms for consultation payments.
            </h3>

            <div className="mt-6 space-y-5 text-[14px] leading-7 text-[#626b7b]">
              <p>
                Where the agreed consultation service is not provided by the
                clinic, the applicable fee may be refunded in accordance with
                the applicable refund terms.
              </p>

              <p>
                Where a client misses or cancels an arranged session for
                reasons attributable to the client, the applicable fee may not
                be refundable.
              </p>

              <p>
                The applicable refund conditions should be understood before
                payment is made.
              </p>
            </div>
          </div>

          {/* Client communication */}
          <div className="border border-[#deded9] bg-white p-8 md:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b7746]">
              Client Communication
            </p>

            <h3 className="mt-4 font-serif text-[30px] leading-tight text-[#162039]">
              Questions or objections
            </h3>

            <p className="mt-6 text-[14px] leading-7 text-[#626b7b]">
              Clients may raise questions, concerns, or objections regarding
              the consultation process or applicable charges through the
              clinic's professional communication channel.
            </p>

            <a
              href="mailto:info@babaalihomeopathicclinic.com"
              className="mt-7 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#7d6938] transition-colors hover:text-[#4d4023]"
            >
              <Mail size={16} strokeWidth={1.5} />
              info@babaalihomeopathicclinic.com
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 flex flex-col gap-7 border-t border-[#e4e3de] pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-[28px] text-[#162039]">
              Ready to make a consultation request?
            </p>

            <p className="mt-2 text-[13px] text-[#6a7281]">
              Please review these terms before submitting your request.
            </p>
          </div>

          <a
            href="#request"
            className="group inline-flex h-[52px] shrink-0 items-center justify-center gap-3 rounded-[9px] border border-[#c9b47a] bg-[#c9b47a] px-7 text-[11px] font-semibold uppercase tracking-[0.1em] !text-[#071127] shadow-[0_8px_24px_rgba(93,78,39,0.14)] transition-all duration-200 hover:bg-[#dfd2aa] hover:shadow-[0_10px_28px_rgba(93,78,39,0.18)]"
          >
            Request a Consultation

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}