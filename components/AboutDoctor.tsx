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
        <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          {/* Left introduction */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--gold)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b7746]">
                The Practitioner
              </span>
            </div>

            <h2 className="mt-6 max-w-[430px] font-serif text-[clamp(38px,4vw,54px)] leading-[1.06] tracking-[-0.025em] text-[#111a2c]">
              A thoughtful and established approach to consultation.
            </h2>

            <p className="mt-6 max-w-[470px] text-[15px] leading-8 text-[#626b7b]">
              The clinic is led by Dr. Muhammad Shoukat Ali, a qualified
              Homoeopathic Doctor. The consultation approach is centered on
              careful listening, individual consideration, and a structured
              process.
            </p>

            <div className="mt-8 h-px w-14 bg-[#c9b47a]" />
          </div>

          {/* Right content */}
          <div>
            <div className="border border-[#dddcd7] bg-white p-8 md:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b7746]">
                    Dr. Muhammad Shoukat Ali
                  </p>

                  <h3 className="mt-3 font-serif text-[34px] leading-tight text-[#111a2c]">
                    Consultant Homoeopath
                  </h3>

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

              <p className="mt-8 max-w-[720px] text-[15px] leading-8 text-[#5e6778]">
                The clinic's approach is centered on careful listening,
                individual consideration, and a structured consultation model.
                Professional credentials and registration information are
                presented as part of the clinic's professional profile.
              </p>

              {/* Credential grid */}
              <div className="mt-10 grid gap-px border border-[#e2e1dc] bg-[#e2e1dc] sm:grid-cols-2">
                {credentials.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="bg-white p-5"
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