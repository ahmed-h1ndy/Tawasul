import { cn } from "@/lib/utils";

type SectionIntroProps = {
  kicker: string;
  title: string;
  copy?: string;
  rtl?: boolean;
  className?: string;
};

export function SectionIntro({
  kicker,
  title,
  copy,
  rtl = false,
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="section-kicker">{kicker}</p>
      <h2
        className={cn(
          "section-heading-balanced max-w-3xl",
          rtl && "max-w-4xl"
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className="section-copy pt-1"
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
