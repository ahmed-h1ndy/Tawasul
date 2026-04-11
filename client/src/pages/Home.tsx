/*
Design reminder for this file: Aviation-informed luxury minimalism.
The home page should feel like a premium corporate landing experience with asymmetry, atmosphere, and executive trust.
*/

import { Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Headset,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

const heroImage = images.hero;
const teamImage = images.team;

const icons = [Headset, BriefcaseBusiness, Languages, Clock3] as const;
const proofIcons = [BadgeCheck, Building2, Languages, Clock3] as const;

export default function Home() {
  const { content, prefix, rtl } = useI18n();

  return (
    <SiteLayout pageKey="home">
      <section className="relative isolate overflow-hidden pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10">
          <img src={heroImage} alt="Premium call center operations" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,20,0.96),rgba(5,10,20,0.82),rgba(5,10,20,0.65))]" />
        </div>

        <div className="container pb-20 pt-8 sm:pb-24 lg:pb-28 lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl space-y-8">
              <div className="eyebrow-chip">{content.home.eyebrow}</div>
              <div className="space-y-6">
                <h1 className={cn("max-w-3xl text-4xl leading-tight text-white sm:text-5xl lg:text-7xl", rtl ? "font-ar-heading leading-[1.45] lg:text-6xl" : "font-display tracking-[-0.04em]") }>
                  {content.home.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  {content.home.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href={`${prefix}/contact`.replace("//", "/")}>
                  <Button className="h-12 rounded-full bg-primary px-6 text-[color:var(--primary-foreground)] shadow-[0_18px_45px_rgba(217,175,84,0.26)] hover:bg-primary/92">
                    {content.shared.primaryCta}
                  </Button>
                </Link>
                <Link href={`${prefix}/services`.replace("//", "/")}>
                  <Button variant="outline" className="h-12 rounded-full border-white/20 bg-white/6 px-6 text-white hover:bg-white/10 hover:text-white">
                    {content.shared.secondaryCta}
                    <ArrowRight className={cn("size-4", rtl && "rotate-180")} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {content.home.stats.map((stat) => (
                <Card key={stat.label} className="surface-panel border-white/12 bg-white/6 shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
                  <CardContent className="p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary/85">{stat.label}</p>
                    <p className={cn("mt-3 text-3xl text-white", rtl ? "font-ar-heading" : "font-display")}>{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <p className="section-kicker">{content.shared.sectionLabels.overview}</p>
            <h2 className={cn("max-w-xl text-3xl text-white sm:text-4xl", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.03em]")}>
              {content.home.overviewTitle}
            </h2>
          </div>

          <div className="space-y-8">
            <p className="max-w-2xl text-base leading-8 text-white/72">{content.home.overviewText}</p>
            <div className="grid gap-4 md:grid-cols-2">
              {content.home.serviceHighlights.map((item, index) => {
                const Icon = icons[index] ?? Headset;
                return (
                  <Card key={item.title} className="surface-card">
                    <CardContent className="space-y-4 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <span className="text-xs uppercase tracking-[0.28em] text-white/35">0{index + 1}</span>
                      </div>
                      <h3 className={cn("text-xl text-white", rtl ? "font-ar-heading leading-8" : "font-semibold")}>{item.title}</h3>
                      <p className="text-sm leading-7 text-white/68">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
            <img src={teamImage} alt="Professional bilingual support team" className="h-full min-h-[24rem] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,21,0.06),rgba(7,11,21,0.58))]" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="section-kicker">{content.shared.sectionLabels.advantages}</p>
              <h2 className={cn("text-3xl text-white sm:text-4xl", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.03em]")}>
                {content.home.whyTitle}
              </h2>
            </div>

            <div className="grid gap-4">
              {content.home.whyItems.map((item, index) => {
                const Icon = proofIcons[index] ?? BadgeCheck;
                return (
                  <Card key={item.title} className="surface-card border-white/10 bg-white/[0.045]">
                    <CardContent className="flex gap-4 p-5 sm:p-6">
                      <div className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className={cn("text-lg text-white", rtl ? "font-ar-heading" : "font-semibold")}>{item.title}</h3>
                        <p className="text-sm leading-7 text-white/68">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-primary/18 bg-[linear-gradient(120deg,rgba(10,19,37,0.96),rgba(10,19,37,0.88),rgba(31,45,71,0.92))] px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.36)] sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[rgba(38,102,218,0.16)] blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4">
                <p className="section-kicker">{content.shared.sectionLabels.contact}</p>
                <h2 className={cn("max-w-3xl text-3xl text-white sm:text-4xl", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.03em]")}>
                  {content.home.ctaTitle}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/72">{content.home.ctaText}</p>
              </div>
              <Link href={`${prefix}/contact`.replace("//", "/")}>
                <Button className="h-12 rounded-full bg-primary px-6 text-[color:var(--primary-foreground)] hover:bg-primary/92">
                  {content.shared.primaryCta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
