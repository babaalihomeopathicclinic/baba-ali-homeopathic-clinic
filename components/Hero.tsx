import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-950)]">
      {/* Subtle atmospheric lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#1a2c57]/20 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-[#b59b5d]/[0.035] blur-[130px]"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-88px)] w-[min(1240px,calc(100%-48px))] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-20">
        {/* LEFT CONTENT */}
        <div className="max-w-[650px]">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-11 bg-[var(--gold)]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--gold-soft)]">
              Baba Ali Homoeopathic Clinic
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-[680px] font-serif text-[clamp(42px,4.7vw,60px)] leading-[1.02] tracking-[-0.025em] text-white">
            Specialized homoeopathic consultation for{" "}
            <span className="text-[var(--gold-soft)]">
              psychological & emotional concerns.
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="mt-7 max-w-[570px] text-[16px] leading-8 text-white/60">
            A private, appointment-based consultation approach centered on
            understanding each case individually and proceeding through a
            structured consultation process.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#request"
              className="group inline-flex h-[49px] items-center gap-3 rounded-[9px] border border-[var(--gold)]/55 bg-[var(--gold)] px-5 text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--navy-950)] transition-all duration-200 hover:bg-[var(--gold-soft)]"
            >
              Request a Consultation

              <ArrowUpRight
                size={15}
                strokeWidth={1.6}
                className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </a>

            <a
              href="#policy"
              className="inline-flex h-[49px] items-center rounded-[9px] border border-white/[0.13] px-5 text-[11px] font-medium uppercase tracking-[0.09em] text-white/75 transition-colors duration-200 hover:border-white/20 hover:text-white"
            >
              Consultation Policy
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] text-white/40">
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={14}
                strokeWidth={1.5}
                className="text-[var(--gold)]"
              />
              <span>20 years of experience</span>
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-[var(--gold)]/70 sm:block" />

            <span>Private consultation</span>

            <span className="hidden h-1 w-1 rounded-full bg-[var(--gold)]/70 sm:block" />

            <span>Selected cases</span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-[450px] lg:justify-self-end">
          <div className="relative aspect-[0.88] overflow-hidden border border-white/[0.09] bg-[#09152f]">
            {/* Background atmosphere */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_58%_30%,rgba(91,119,184,0.16),transparent_34%),linear-gradient(145deg,#0d1c38,#071127)]"
            />

            {/* Architectural arch */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[13%] h-[68%] w-[57%] -translate-x-1/2 rounded-t-[220px] border border-[var(--gold)]/40"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[18%] h-[63%] w-[49%] -translate-x-1/2 rounded-t-[200px] border border-white/[0.055]"
            />

            {/* Soft centered glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[38%] h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#6883bd]/10 blur-[55px]"
            />

            {/* Actual emblem, used very subtly */}
            <div className="absolute inset-0 flex items-center justify-center pb-14">
              <div className="flex h-[175px] w-[175px] items-center justify-center rounded-full border border-white/[0.045]">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={115}
                  height={115}
                  className="h-[115px] w-[115px] object-contain opacity-[0.10]"
                />
              </div>
            </div>

            {/* Fine horizon line */}
            <div
              aria-hidden="true"
              className="absolute bottom-[24%] left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/25 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[24%] left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full border border-[var(--gold)]/70 bg-[var(--navy-950)]"
            />

            {/* Philosophy statement */}
            <div className="absolute bottom-6 left-6 right-6 border border-white/[0.08] bg-[#071127]/92 px-5 py-4 backdrop-blur-md">
              <p className="font-serif text-[17px] leading-6 text-white/90">
                Every case deserves to be understood individually.
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="h-px w-7 bg-[var(--gold)]" />

                <span className="text-[9px] uppercase tracking-[0.22em] text-[var(--gold-soft)]">
                  Understanding before advising
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}