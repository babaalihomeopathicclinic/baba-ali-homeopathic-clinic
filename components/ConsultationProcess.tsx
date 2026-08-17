import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  CreditCard,
  CalendarCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Understand",
    description:
      "Review the clinic's consultation model, areas of consultation, and policy before making a request.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Request",
    description:
      "Submit the structured consultation request form with the information needed for an initial review.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Review",
    description:
      "The clinic reviews the submitted request and determines the appropriate next step.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Assessment Fee",
    description:
      "The initial case assessment fee is PKR 50,000 and is payable in advance according to the consultation process.",
  },
  {
    number: "05",
    icon: CalendarCheck,
    title: "Appointment",
    description:
      "After the required process and payment confirmation, the consultation time is arranged.",
  },
];

export default function ConsultationProcess() {
  return (
    <section
      id="process"
      className="bg-[#f7f6f2] py-24 text-[var(--text-dark)]"
    >
      <div className="site-container">
        {/* Heading */}
        <div className="max-w-[720px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--gold)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b7746]">
              Consultation Process
            </span>
          </div>

          <h2 className="mt-6 max-w-[650px] font-serif text-[clamp(38px,4.5vw,58px)] leading-[1.05] tracking-[-0.025em] text-[#111a2c]">
            A clear and structured path to consultation.
          </h2>

          <p className="mt-6 max-w-[640px] text-[15px] leading-8 text-[#626b7b]">
            The clinic follows a defined process so that consultation
            requests can be reviewed carefully before an appointment is
            arranged.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16">
          <div className="grid border-y border-[#dfddd7] md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className={`relative px-6 py-9 ${
                    index !== steps.length - 1
                      ? "border-b border-[#dfddd7] md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-[#9a8550]">
                      {step.number}
                    </span>

                    <Icon
                      size={19}
                      strokeWidth={1.35}
                      className="text-[#9a8550]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 font-serif text-[25px] leading-tight text-[#162039]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-[13px] leading-7 text-[#6a7281]">
                    {step.description}
                  </p>

                  {/* Connector */}
                  {index !== steps.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      size={15}
                      strokeWidth={1.25}
                      className="absolute -bottom-[7px] left-1/2 hidden translate-x-[-50%] bg-[#f7f6f2] px-0.5 text-[#c4af72] md:-right-[8px] md:left-auto md:top-1/2 md:block md:translate-y-[-50%] md:translate-x-0"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Fee emphasis */}
        <div className="mt-12 flex flex-col gap-5 border border-[#ddd9cc] bg-[#faf9f4] p-7 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b7746]">
              Initial Case Assessment Fee
            </p>

            <p className="mt-2 font-serif text-[30px] text-[#162039]">
              PKR 50,000
            </p>
          </div>

          <p className="max-w-[560px] text-[13px] leading-7 text-[#6a7281]">
            The fee is payable in advance. Payment confirmation forms part of
            the process before the consultation appointment is arranged.
          </p>
        </div>
      </div>
    </section>
  );
}