import Image from "next/image";
import {
  Building2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const credentials = [
  {
    icon: Clock3,
    label: "Experience",
    value: "20 years",
    note: "Professional experience",
  },
  {
    icon: ShieldCheck,
    label: "NCH Registration",
    value: "104202",
    note: "Registration information",
  },
  {
    icon: ShieldCheck,
    label: "PHC Registration",
    value: "R-70787",
    note: "Registration information",
  },
  {
    icon: Building2,
    label: "SECP CUIN",
    value: "0224827",
    note: "Company registration",
  },
  {
    icon: Building2,
    label: "FBR Registration",
    value: "6864487",
    note: "Federal Board of Revenue",
  },
];

export default function AboutDoctor() {
  return (
    <section
      id="about"
      className="bg-[#f7f6f2] py-24 text-[var(--text-dark)]"
    >
      <div className="site-container">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">

          {/* Doctor Portrait */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--gold)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b7746]">
                The Practitioner
              </span>
            </div>

            <div className="relative mt-6 overflow-hidden border border-[#d8d2c0] bg-[#111a2c] p-2 shadow-[0_20px_60px_rgba(17,26,44,0.10)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/doctor.png"
                  alt="Dr. Muhammad Shoukat Ali, Consultant Homoeopath"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />

                {/* Subtle premium overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1322]/20 via-transparent to-transparent" />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-[#dcd9d0] pt-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b7746]">
                Consultant Homoeopath
              </span>

              <span className="text-[11px] text-[#7a8290]">
                20 years of experience
              </span>
            </div>
          </div>

          {/* Practitioner Information */}
          <div>
            <div className="border border-[#dddcd7] bg-white p-7 md:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b7746]">
                    Dr. Muhammad Shoukat Ali
                  </p>

                  <h2 className="mt-3 font-serif text-[34px] leading-tight text-[#111a2c] md:text-[40px]">
                    Consultant Homoeopath
                  </h2>

                  <p className="mt-2 text-[14px] text-[#687184]">
                    Qualified Homoeopathic Doctor
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#ded9c9] bg-[#faf8f0]">
                  <ShieldCheck
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#8b7746]"
                  />
                </div>
              </div>

              <div className="mt-7 h-px w-14 bg-[#c9b47a]" />

              <p className="mt-7 max-w-[720px] text-[15px] leading-8 text-[#5e6778]">
                Dr. Muhammad Shoukat Ali is a qualified Homoeopathic Doctor
                and Consultant Homoeopath with 20 years of professional
                experience. His practice is supported by a careful,
                professional approach to consultation and case assessment.
              </p>

              {/* Credential Grid */}
              <div className="mt-10 grid gap-px border border-[#e2e1dc] bg-[#e2e1dc] sm:grid-cols-2">
                {credentials.map((item) => {
                  const Icon = item.icon;
                  const isFbr = item.label === "FBR Registration";

                  return (
                    <div
                      key={item.label}
                      className={`bg-white p-5 ${
                        isFbr ? "sm:col-span-2" : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e3dfd1] bg-[#faf8f0]">
                          <Icon
                            size={16}
                            strokeWidth={1.4}
                            className="text-[#8b7746]"
                          />
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a92a1]">
                            {item.label}
                          </p>

                          <p className="mt-1 font-serif text-[20px] text-[#162039]">
                            {item.value}
                          </p>

                          <p className="mt-1 text-[12px] text-[#778092]">
                            {item.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}