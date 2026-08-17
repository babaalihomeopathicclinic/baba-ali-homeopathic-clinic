import Image from "next/image";
import { Menu, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Specialized Care", href: "#care" },
  { label: "Consultation", href: "#process" },
  { label: "Policy", href: "#policy" },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/[0.08] bg-[var(--navy-950)]">
      <div className="mx-auto flex h-[88px] w-[min(1240px,calc(100%-48px))] items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          aria-label="Baba Ali Homoeopathic Clinic"
          className="group flex items-center gap-4"
        >
          <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Baba Ali Homoeopathic Clinic"
              width={52}
              height={52}
              priority
              className="h-[52px] w-[52px] object-contain"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-serif text-[18px] tracking-[0.01em] text-white">
              Baba Ali
            </span>

            <span className="mt-[7px] text-[9px] font-medium uppercase tracking-[0.26em] text-[var(--gold-soft)]">
              Homoeopathic Clinic
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center lg:flex"
        >
          <div className="flex items-center gap-8">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative py-3 text-[13px] font-medium tracking-[0.01em] transition-colors duration-200 ${
                  index === 0
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[var(--gold)] transition-all duration-200 ${
                    index === 0
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="mx-8 h-7 w-px bg-white/10" />

          {/* Consultation CTA */}
          <a
            href="#request"
            className="group inline-flex h-[46px] items-center gap-3 rounded-[10px] border border-[var(--gold)]/45 bg-[var(--gold)]/[0.07] px-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--gold-soft)] transition-all duration-200 hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy-950)]"
          >
            Request Consultation

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-white/20 hover:bg-white/5 lg:hidden"
        >
          <Menu size={21} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}