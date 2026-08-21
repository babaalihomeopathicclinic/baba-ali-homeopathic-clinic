import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy-950)] text-white">
      <div className="site-container py-16">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          {/* Clinic identity */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-[52px] w-[52px] items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Baba Ali Homoeopathic Clinic"
                  className="h-[52px] w-[52px] object-contain"
                />
              </div>

              <div className="leading-none">
                <p className="font-serif text-[19px] text-white">
                  Baba Ali
                </p>

                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.26em] text-[var(--gold-soft)]">
                  Homoeopathic Clinic
                </p>
              </div>
            </div>

            <a
              href="mailto:info@babaalihomeopathicclinic.com"
              className="mt-7 inline-flex items-center gap-3 text-[12px] text-white/70 transition-colors hover:text-[var(--gold-soft)]"
            >
              <Mail
                size={16}
                strokeWidth={1.4}
                className="text-[var(--gold)]"
              />

              info@babaalihomeopathicclinic.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold-soft)]">
              Navigation
            </p>

            <nav className="mt-6 space-y-4">
              <a
                href="#about"
                className="block text-[13px] text-white/50 transition-colors hover:text-white"
              >
                About the Practitioner
              </a>

              <a
                href="#care"
                className="block text-[13px] text-white/50 transition-colors hover:text-white"
              >
                Areas of Consultation
              </a>

              <a
                href="#process"
                className="block text-[13px] text-white/50 transition-colors hover:text-white"
              >
                Consultation Process
              </a>

              <a
                href="#policy"
                className="block text-[13px] text-white/50 transition-colors hover:text-white"
              >
                Consultation Policy
              </a>

              <a
                href="#request"
                className="group mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--gold-soft)]"
              >
                Request a Consultation

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                />
              </a>
            </nav>
          </div>

          {/* Payment account */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold-soft)]">
              Payment Account
            </p>

            <div className="mt-6 space-y-5 border-t border-white/[0.08] pt-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
                  Account Name
                </p>

                <p className="mt-1 text-[13px] text-white/70">
                  MUHAMMAD SHOUKAT ALI
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
                  Bank
                </p>

                <p className="mt-1 text-[13px] text-white/70">
                  UBL
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
                  IBAN
                </p>

                <p className="mt-1 break-all font-mono text-[12px] leading-6 text-white/70">
                  PK48 UNIL 0109 0002 2401 6672
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials strip */}
        <div className="mt-14 border-y border-white/[0.08] py-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.14em] text-white/35">
            <span>20 Years of Experience</span>

            <span className="hidden h-1 w-1 rounded-full bg-[var(--gold)] sm:block" />

            <span>NCH Registration 104202</span>

            <span className="hidden h-1 w-1 rounded-full bg-[var(--gold)] sm:block" />

            <span>PHC Registration R-70787</span>

            <span className="hidden h-1 w-1 rounded-full bg-[var(--gold)] sm:block" />

            <span>FBR Registration 6864487</span>

            <span className="hidden h-1 w-1 rounded-full bg-[var(--gold)] sm:block" />

            <span>SECP CUIN 0224827</span>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-8 flex flex-col gap-6 border-b border-white/[0.08] pb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-white/40">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-white/75"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-and-conditions"
              className="transition-colors hover:text-white/75"
            >
              Terms & Conditions
            </a>

            <a
              href="/refund-policy"
              className="transition-colors hover:text-white/75"
            >
              Refund Policy
            </a>

            <a
              href="#policy"
              className="transition-colors hover:text-white/75"
            >
              Consultation Policy
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-white/35">
            <ShieldCheck
              size={15}
              strokeWidth={1.3}
              className="text-[var(--gold)]"
            />

            <span>Professional communication via email</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-7 flex flex-col gap-2 text-[10px] text-white/25 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Baba Ali Homoeopathic Clinic. All
            rights reserved.
          </p>

          <p>Baba Ali Homoeopathic Clinic (SMC-PVT) Ltd</p>
        </div>
      </div>
    </footer>
  );
}