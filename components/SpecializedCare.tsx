import {
  Brain,
  Moon,
  Heart,
  ShieldAlert,
  Wind,
  MessageCircle,
} from "lucide-react";

const consultationAreas = [
  {
    icon: Wind,
    title: "Anxiety & Panic",
    description:
      "Anxiety, panic attacks, fears and related concerns.",
  },
  {
    icon: Heart,
    title: "Low Mood",
    description:
      "Depression / low mood and related emotional concerns.",
  },
  {
    icon: Brain,
    title: "Intrusive Thoughts",
    description:
      "OCD / intrusive thoughts and selected related cases.",
  },
  {
    icon: Moon,
    title: "Sleep Concerns",
    description:
      "Insomnia and other sleep-related concerns.",
  },
  {
    icon: ShieldAlert,
    title: "Trauma & Fears",
    description:
      "PTSD / trauma-related concerns, fears and phobias.",
  },
  {
    icon: MessageCircle,
    title: "Overthinking",
    description:
      "Overthinking and other selected psychological and emotional concerns.",
  },
];

export default function SpecializedCare() {
  return (
    <section
      id="care"
      className="bg-[var(--navy-950)] py-24 text-white"
    >
      <div className="site-container">
        {/* Section heading */}
        <div className="max-w-[700px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--gold)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-soft)]">
              Specialized Care
            </span>
          </div>

          <h2 className="mt-6 max-w-[650px] font-serif text-[clamp(38px,4.5vw,58px)] leading-[1.05] tracking-[-0.025em] text-white">
            Areas of consultation
          </h2>

          <p className="mt-6 max-w-[650px] text-[15px] leading-8 text-white/55">
            Consultation may be considered for selected psychological,
            emotional and related concerns. Each case is considered
            individually within the clinic's consultation model.
          </p>
        </div>

        {/* Consultation cards */}
        <div className="mt-14 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {consultationAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group bg-[var(--navy-950)] p-7 transition-colors duration-300 hover:bg-[var(--navy-850)]"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center border border-[var(--gold)]/25 bg-[var(--gold)]/[0.035]">
                  <Icon
                    size={19}
                    strokeWidth={1.35}
                    className="text-[var(--gold-soft)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Number */}
                <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/30">
                  Consultation area
                </p>

                {/* Title */}
                <h3 className="mt-3 font-serif text-[25px] leading-tight text-white">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[320px] text-[13px] leading-7 text-white/50">
                  {area.description}
                </p>

                {/* Accent */}
                <div className="mt-7 h-px w-7 bg-[var(--gold)]/50 transition-all duration-300 group-hover:w-12" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}