import { BarChart3, Clock3, Coins, Languages, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

const icons = [Languages, Clock3, Workflow, BarChart3, Coins, ShieldCheck] as const;

export default function WhyChooseUs() {
  const { content, prefix, rtl } = useI18n();

  return (
    <SiteLayout pageKey="why">
      <PageHero
        eyebrow={content.why.eyebrow}
        title={content.why.title}
        intro={content.why.intro}
        image={images.team}
        imageAlt="Professional multilingual support environment"
        rtl={rtl}
      />

      <section className="section-shell">
        <div className="container space-y-8">
          <SectionIntro
            kicker={content.shared.sectionLabels.advantages}
            title={content.why.proofHeading}
            copy={content.why.proofText}
            rtl={rtl}
          />

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {content.why.items.map((item, index) => {
              const Icon = icons[index] ?? ShieldCheck;
              return (
                <Card key={item.title} className="surface-card h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6 sm:p-7">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-4">
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

      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="container grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="surface-light p-7 sm:p-9">
            <SectionIntro
              kicker={content.why.proofTitle}
              title={content.why.proofHeading}
              copy={content.why.proofText}
              rtl={rtl}
            />
            <div className="detail-list pt-6">
              {content.why.proofPoints.map((point) => (
                <div key={point} className="detail-list-item">
                  <span className="detail-list-dot" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel overflow-hidden p-5 sm:p-7">
            <img src={images.team} alt="Premium corporate support team" className="h-[26rem] w-full rounded-[1.5rem] object-cover" />
            <div className="flex flex-wrap items-center justify-between gap-5 pt-5 sm:pt-6">
              <p className="max-w-md card-copy">{content.shared.contactPrompt}</p>
              <Button
                asChild
                className="w-full rounded-full bg-white px-5 font-semibold text-[#0A3A66] shadow-[0_16px_40px_rgba(10,58,102,0.12)] hover:bg-white/92 hover:text-[#0A3A66] sm:w-auto"
              >
                <Link href={`${prefix}/contact`.replace("//", "/")}>
                  {content.why.ctaLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
