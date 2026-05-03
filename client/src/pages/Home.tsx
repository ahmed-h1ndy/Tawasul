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
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

const icons = [Headset, BriefcaseBusiness, Languages, Clock3] as const;
const proofIcons = [BadgeCheck, Building2, Languages, Clock3] as const;

export default function Home() {
  const { content, prefix, rtl } = useI18n();

  return (
    <SiteLayout pageKey="home">
      <PageHero
        eyebrow={content.home.eyebrow}
        title={content.home.title}
        intro={content.home.subtitle}
        image={images.hero}
        imageAlt="Bilingual customer support operations"
        rtl={rtl}
        aside={
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {content.home.stats.map((stat) => (
              <Card key={stat.label} className="surface-panel border-white/10 bg-white/[0.055]">
                <CardContent className="space-y-3 p-6">
                  <p className={cn("stat-value text-white", rtl ? "font-ar-heading leading-9" : "")}>
                    {stat.label}
                  </p>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/60">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            asChild
            variant="outline"
            className="h-12 w-full rounded-full border-white/18 bg-white/10 px-6 font-semibold text-white hover:bg-white/14 hover:text-white sm:w-auto"
          >
            <Link href={`${prefix}/services`.replace("//", "/")}>
              {content.shared.secondaryCta}
              <ArrowRight className={cn("size-4", rtl && "rotate-180")} />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-shell pt-0">
        <div className="container">
          <div className="surface-light grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:p-10">
            <div className="space-y-4">
              <p className="section-kicker">{content.shared.sectionLabels.advantages}</p>
              <h2 className={cn("section-heading-balanced", rtl && "leading-[1.5]")}>
                {content.home.proofTitle}
              </h2>
              <p className="card-copy">{content.home.proofIntro}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.home.proofItems.map((item) => (
                <div key={item} className="light-metric-card">
                  <p className="card-copy">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            kicker={content.shared.sectionLabels.overview}
            title={content.home.overviewTitle}
            copy={content.home.overviewText}
            rtl={rtl}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {content.home.serviceHighlights.map((item, index) => {
              const Icon = icons[index] ?? Headset;
              return (
                <Card key={item.title} className="surface-card h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary/50">0{index + 1}</span>
                    </div>
                    <div className="space-y-3">
                      <h3
                        className={cn(
                          "card-heading",
                          rtl ? "font-ar-heading leading-8" : ""
                        )}
                      >
                        {item.title}
                      </h3>
                      <p className="card-copy">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="surface-light p-7 sm:p-9">
              <SectionIntro
                kicker={content.shared.sectionLabels.services}
                title={content.home.industryTitle}
                copy={content.home.industryIntro}
                rtl={rtl}
              />
              <div className="detail-list pt-6">
                {content.home.industries.map((item) => (
                  <div key={item} className="detail-list-item light-list-item">
                    <span className="detail-list-dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(209,213,216,0.92)] bg-white/88 shadow-[0_28px_80px_rgba(10,58,102,0.1)]">
              <img src={images.team} alt="Professional bilingual support team" className="h-full min-h-[25rem] w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,58,102,0.05),rgba(10,58,102,0.38))]" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            kicker={content.shared.sectionLabels.advantages}
            title={content.home.whyTitle}
            rtl={rtl}
          />

          <div className="grid gap-5">
            {content.home.whyItems.map((item, index) => {
              const Icon = proofIcons[index] ?? BadgeCheck;
              return (
                <Card key={item.title} className="surface-card">
                  <CardContent className="flex gap-4 p-5 sm:p-6">
                    <div className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-3">
                      <h3
                        className={cn(
                          "card-heading",
                          rtl ? "font-ar-heading" : ""
                        )}
                      >
                        {item.title}
                      </h3>
                      <p className="card-copy">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container">
          <div className="section-on-dark relative overflow-hidden rounded-[2.25rem] border border-[rgba(209,213,216,0.18)] bg-[linear-gradient(120deg,rgba(10,58,102,0.98),rgba(10,58,102,0.94),rgba(10,58,102,0.88))] px-6 py-10 shadow-[0_30px_80px_rgba(10,58,102,0.22)] sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[rgba(209,213,216,0.14)] blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4">
                <p className="section-kicker">{content.shared.sectionLabels.contact}</p>
                <h2 className="section-heading-balanced">{content.home.ctaTitle}</h2>
                <p className="section-copy max-w-2xl">{content.home.ctaText}</p>
              </div>
              <Button
                asChild
                className="h-12 w-full rounded-full bg-white px-6 font-semibold text-[#0A3A66] shadow-[0_16px_40px_rgba(10,58,102,0.12)] hover:bg-white/92 hover:text-[#0A3A66] sm:w-auto"
              >
                <Link href={`${prefix}/contact`.replace("//", "/")}>
                  {content.home.ctaButtonLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
