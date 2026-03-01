// components/PulsingOrb.tsx
import { cn } from "@/lib/utils";

type OrbMode = "idle" | "listening" | "talking";
type OrbSize = "xs" | "sm" | "md";

const modeConfig: Record<OrbMode, { label: string }> = {
  idle: { label: "Not Listening" },
  listening: { label: "Listening" },
  talking: { label: "Talking" },
};

const sizeConfig: Record<
  OrbSize,
  {
    core: Record<OrbMode, string>;
    glow: Record<OrbMode, string>;
    ripple: { a: string; b: string; c: string };
    label: string;
  }
> = {
  xs: {
    core: {
      idle: "w-20 h-20",
      listening: "w-24 h-24",
      talking: "w-28 h-28",
    },
    glow: {
      idle: "w-24 h-24",
      listening: "w-28 h-28",
      talking: "w-32 h-32",
    },
    ripple: { a: "w-32 h-32", b: "w-40 h-40", c: "w-48 h-48" },
    label: "text-xs",
  },
  sm: {
    core: {
      idle: "w-24 h-24",
      listening: "w-28 h-28",
      talking: "w-32 h-32",
    },
    glow: {
      idle: "w-28 h-28",
      listening: "w-32 h-32",
      talking: "w-36 h-36",
    },
    ripple: { a: "w-36 h-36", b: "w-44 h-44", c: "w-52 h-52" },
    label: "text-sm",
  },
  md: {
    core: {
      idle: "w-32 h-32",
      listening: "w-40 h-40",
      talking: "w-44 h-44",
    },
    glow: {
      idle: "w-36 h-36",
      listening: "w-48 h-48",
      talking: "w-56 h-56",
    },
    ripple: { a: "w-52 h-52", b: "w-64 h-64", c: "w-80 h-80" },
    label: "text-lg",
  },
};

// ← Remove useState, accept mode as a prop
const PulsingOrb = ({
  mode = "idle",
  size = "md",
  className,
}: {
  mode: OrbMode;
  size?: OrbSize;
  className?: string;
}) => {
  const sizes = sizeConfig[size];
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-6",
        className,
      )}
    >
      <div className="relative flex items-center justify-center">
        {(mode === "listening" || mode === "talking") && (
          <>
            <span className={cn(
              "absolute rounded-full border border-orb-rose/30 animate-orb-ripple",
              sizes.ripple.a
            )} />
            <span className={cn(
              "absolute rounded-full border border-orb-magenta/20 animate-orb-ripple-delayed",
              sizes.ripple.b
            )} />
          </>
        )}
        {mode === "talking" && (
          <span className={cn(
            "absolute rounded-full border border-orb-pink/10 animate-orb-ripple-slow",
            sizes.ripple.c,
          )} />
        )}
        <div className={cn(
          "absolute rounded-full blur-2xl transition-all duration-700",
          mode === "idle"      && cn(sizes.glow.idle, "bg-orb-rose/20"),
          mode === "listening" && cn(sizes.glow.listening, "bg-orb-magenta/30"),
          mode === "talking"   && cn(sizes.glow.talking, "bg-orb-pink/40")
        )} />
        <div className={cn(
          "relative rounded-full bg-gradient-to-br from-orb-rose via-orb-pink to-orb-magenta transition-all duration-500",
          sizes.core[mode],
          mode === "idle"      && "animate-orb-breathe shadow-orb-idle",
          mode === "listening" && "animate-orb-pulse shadow-orb-listening",
          mode === "talking"   && "animate-orb-talk shadow-orb-talking"
        )}>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/30 via-orb-rose/20 to-transparent" />
        </div>
      </div>
      <p className={cn("font-medium tracking-widest uppercase text-orb-rose/80", sizes.label)}>
        {modeConfig[mode].label}
      </p>
    </div>
  );
};

export default PulsingOrb;
