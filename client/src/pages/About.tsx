/*
Design reminder for this file: Aviation-informed luxury minimalism.
The about page should feel authoritative and reflective, using editorial spacing and premium material contrast.
*/

import { Compass, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

const aboutHero = images.team;

const valueIcons = [ShieldCheck, Handshake, Compass, Sparkles] as const;

export default function About() {
  const { content, rtl } = useI18n();

  return (
    <SiteLayout pageKey="about">
      <section className="relative isolate overflow-hidden pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10">
          <img src={aboutHero} alt="Professional outsourced support team" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,12,24,0.97),rgba(6,12,24,0.88),rgba(6,12,24,0.72))]" />
        </div>
        <div className="container pb-18 pt-8 sm:pb-20 lg:pb-24 lg:pt-14">
          <div className="max-w-4xl space-y-6">
            <p className="eyebrow-chip">{content.about.eyebrow}</p>
            <h1 className={cn("text-4xl text-white sm:text-5xl lg:text-6xl", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.04em]")}>
              {content.about.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{content.about.intro}</p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="surface-card overflow-hidden">
            <CardContent className="space-y-5 p-7 sm:p-8">
              <p className="section-kicker">{content.about.storyTitle}</p>
              <h2 className={cn("text-3xl text-white", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.03em]")}>
                {content.brand.tagline}
              </h2>
              <p className="text-base leading-8 text-white/72">{content.about.storyText}</p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="surface-panel border-primary/15 bg-primary/8">
              <CardContent className="space-y-4 p-7">
                <p className="section-kicker">{content.about.missionTitle}</p>
                <p className="text-base leading-8 text-white/76">{content.about.missionText}</p>
              </CardContent>
            </Card>
            <Card className="surface-panel border-white/12 bg-white/6">
              <CardContent className="space-y-4 p-7">
                <p className="section-kicker">{content.about.visionTitle}</p>
                <p className="text-base leading-8 text-white/76">{content.about.visionText}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-4">
            <p className="section-kicker">{content.shared.sectionLabels.values}</p>
            <h2 className={cn("text-3xl text-white sm:text-4xl", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.03em]")}>
              {content.about.valuesHeading}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.about.values.map((value, index) => {
              const Icon = valueIcons[index] ?? ShieldCheck;
              return (
                <Card key={value.title} className="surface-card h-full">
                  <CardContent className="flex h-full flex-col gap-5 p-6">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className={cn("text-xl text-white", rtl ? "font-ar-heading leading-8" : "font-semibold")}>{value.title}</h3>
                      <p className="text-sm leading-7 text-white/68">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
