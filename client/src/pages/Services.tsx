import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

export default function Services() {
  const { content, rtl } = useI18n();

  return (
    <SiteLayout pageKey="services">
      <PageHero
        eyebrow={content.services.eyebrow}
        title={content.services.title}
        intro={content.services.intro}
        image={images.serviceNetwork}
        imageAlt="Global service network for outsourced support operations"
        rtl={rtl}
      />

      <section className="section-shell">
        <div className="container space-y-8">
          <SectionIntro
            kicker={content.shared.sectionLabels.services}
            title={content.services.catalogTitle}
            rtl={rtl}
          />

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {content.services.items.map((service, index) => (
              <Card key={service.id} className="surface-card h-full">
                <CardContent className="flex h-full flex-col gap-5 p-6 sm:p-7">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/84">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "text-2xl text-[color:var(--surface-ivory-foreground)]",
                        rtl ? "font-ar-heading text-xl leading-[1.55]" : "font-semibold"
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm leading-7 text-[rgba(10,58,102,0.82)]">{service.description}</p>
                  </div>

                  <div className="mt-auto space-y-3 border-t border-[rgba(209,213,216,0.9)] pt-5">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="detail-list-item">
                        <span className="detail-list-dot" />
                        <span className="text-sm text-[rgba(10,58,102,0.84)]">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="surface-light p-7 sm:p-9">
            <SectionIntro
              kicker={content.services.deliveryApproach}
              title={content.services.processTitle}
              copy={content.services.processIntro}
              rtl={rtl}
              light
            />

            <div className="grid gap-4 pt-8 md:grid-cols-2">
              {content.services.processSteps.map((step) => (
                <div key={step.step} className="light-metric-card">
                  <div className={cn("text-3xl text-primary", rtl ? "font-ar-heading" : "font-display")}>{step.step}</div>
                  <h3 className={cn("mt-4 text-lg text-[color:var(--surface-ivory-foreground)]", rtl ? "font-ar-heading" : "font-semibold")}>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(10,58,102,0.82)]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="surface-panel h-full border-white/10 bg-white/[0.04]">
            <CardContent className="space-y-5 p-7 sm:p-8">
              <p className="section-kicker">{content.shared.sectionLabels.overview}</p>
              <h3 className="section-heading-balanced text-[2rem]">{content.services.supportModelsTitle}</h3>
              <div className="detail-list">
                {content.services.supportModels.map((model) => (
                  <div key={model} className="detail-list-item">
                    <span className="detail-list-dot" />
                    <span>{model}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
