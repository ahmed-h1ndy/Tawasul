import { cn } from "@/lib/utils";

type SectionIntroProps = {
  kicker: string;
  title: string;
  copy?: string;
  rtl?: boolean;
  light?: boolean;
  className?: string;
};

export function SectionIntro({
  kicker,
  title,
  copy,
  rtl = false,
  light = false,
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <p className="section-kicker">{kicker}</p>
      <h2
        className={cn(
          "section-heading-balanced max-w-3xl",
          light && "text-[color:var(--surface-ivory-foreground)]",
          rtl && "max-w-4xl"
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "section-copy",
            light && "text-[rgba(10,58,102,0.82)]"
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
