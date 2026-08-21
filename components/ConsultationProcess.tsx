import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  FileText,
  CreditCard,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Understand",
    description:
      "Review the consultation information and policy before making a request.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Request",
    description:
      "Submit the consultation request with the information needed for initial review.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Review",
    description:
      "The clinic reviews the request and determines the appropriate next step.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Assessment",
    description:
      "Complete the required assessment and payment process.",
  },
  {
    number: "05",
    icon: CalendarCheck,
    title: "Appointment",
    description:
      "Following completion of the required process, a consultation time is arranged.",
  },
];

export default function ConsultationProcess() {
  return (
    <section
      id="process"
      className="bg-[#f7f6f2] py-24 text-[#111a2c] md:py-28"
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
            A clear path from request to consultation.
          </h2>

          <p className="mt-6 max-w-[640px] text-[15px] leading-8 text-[#626b7b]">
            Each consultation request moves through a defined sequence before
            an appointment is arranged.
          </p>
        </div>

        {/* Process */}
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
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.22em] text-[#9a8550]">
                      {step.number}
                    </span>

                    <Icon
                      size={18}
                      strokeWidth={1.35}
                      className="text-[#9a8550]"
                    />
                  </div>

                  <h3 className="mt-7 font-serif text-[25px] leading-tight text-[#162039]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-[#6a7281]">
                    {step.description}
                  </p>

                  {index !== steps.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      size={15}
                      strokeWidth={1.25}
                      className="absolute -bottom-[7px] left-1/2 hidden translate-x-[-50%] bg-[#f7f6f2] text-[#c4af72] md:-right-[8px] md:left-auto md:top-1/2 md:block md:translate-x-0 md:translate-y-[-50%]"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}