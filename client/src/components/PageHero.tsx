import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  rtl?: boolean;
  children?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  rtl = false,
  children,
  aside,
}: PageHeroProps) {
  return (
    <section className="page-hero relative isolate overflow-hidden pt-2 sm:pt-3">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover opacity-22" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(10,58,102,0.94),rgba(10,58,102,0.86),rgba(10,58,102,0.62))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,106,31,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(209,213,216,0.16),transparent_22%)]" />
      </div>

      <div className="container pb-16 pt-4 sm:pb-20 lg:pb-24 lg:pt-6">
        <div
          className={cn(
            "grid gap-8",
            aside ? "lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start" : "lg:grid-cols-[minmax(0,56rem)]"
          )}
        >
          <div className="max-w-4xl space-y-6">
            <p className="eyebrow-chip">{eyebrow}</p>
            <h1 className={cn("section-heading", rtl && "max-w-4xl")}>{title}</h1>
            <p className="section-copy max-w-3xl text-base sm:text-lg">{intro}</p>
            {children}
          </div>

          {aside ? <div className="w-full lg:max-w-[22rem] lg:justify-self-end">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
