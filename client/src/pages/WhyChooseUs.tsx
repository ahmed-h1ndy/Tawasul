/*
Design reminder for this file: Aviation-informed luxury minimalism.
This page should emphasize confidence, measurable advantage, and strategic control rather than generic marketing claims.
*/

import { BarChart3, Clock3, Coins, Languages, ShieldCheck, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

const whyImage = images.team;

const icons = [Workflow, Clock3, Languages, BarChart3, Coins, ShieldCheck] as const;

export default function WhyChooseUs() {
  const { content, rtl } = useI18n();

  return (
    <SiteLayout pageKey="why">
      <section className="relative isolate overflow-hidden pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10">
          <img src={whyImage} alt="Professional multilingual support environment" className="h-full w-full object-cover opacity-24" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,11,21,0.97),rgba(7,11,21,0.9),rgba(7,11,21,0.74))]" />
        </div>
        <div className="container pb-18 pt-8 sm:pb-20 lg:pb-24 lg:pt-14">
          <div className="max-w-4xl space-y-6">
            <p className="eyebrow-chip">{content.why.eyebrow}</p>
            <h1 className={cn("text-4xl text-white sm:text-5xl lg:text-6xl", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.04em]")}>
              {content.why.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{content.why.intro}</p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {content.why.items.map((item, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <Card key={item.title} className={cn("surface-card h-full", index === 1 && "xl:translate-y-6", index === 4 && "xl:-translate-y-6") }>
                <CardContent className="flex h-full flex-col gap-5 p-6 sm:p-7">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-3">
                    <h2 className={cn("text-xl text-white", rtl ? "font-ar-heading leading-8" : "font-semibold")}>{item.title}</h2>
                    <p className="text-sm leading-7 text-white/68">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Card className="surface-panel border-primary/18 bg-primary/8">
            <CardContent className="space-y-5 p-7 sm:p-8">
              <p className="section-kicker">{content.why.proofTitle}</p>
              <h2 className={cn("text-3xl text-white", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.03em]")}>
                {content.why.proofHeading}
              </h2>
              <div className="grid gap-3 pt-2">
                {content.why.proofPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/72">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="rounded-[2rem] border border-white/12 bg-white/5 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
            <img src={whyImage} alt="Premium corporate support team" className="h-[26rem] w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
