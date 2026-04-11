/*
Design reminder for this file: Aviation-informed luxury minimalism.
The services page should communicate operational sophistication, clarity, and scalable business utility.
*/

import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

const servicesImage = images.serviceNetwork;

export default function Services() {
  const { content, rtl } = useI18n();

  return (
    <SiteLayout pageKey="services">
      <section className="relative isolate overflow-hidden pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10">
          <img src={servicesImage} alt="Global service network for outsourced call center operations" className="h-full w-full object-cover opacity-24" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,11,21,0.97),rgba(7,11,21,0.88),rgba(7,11,21,0.75))]" />
        </div>
        <div className="container pb-18 pt-8 sm:pb-20 lg:pb-24 lg:pt-14">
          <div className="max-w-4xl space-y-6">
            <p className="eyebrow-chip">{content.services.eyebrow}</p>
            <h1 className={cn("text-4xl text-white sm:text-5xl lg:text-6xl", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.04em]")}>
              {content.services.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{content.services.intro}</p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {content.services.items.map((service, index) => (
            <Card key={service.id} className={cn("surface-card h-full", index % 3 === 1 && "xl:-translate-y-6") }>
              <CardContent className="flex h-full flex-col gap-5 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="section-kicker">{service.id.replace(/-/g, " ")}</span>
                  <span className="text-xs uppercase tracking-[0.28em] text-white/32">0{index + 1}</span>
                </div>
                <div className="space-y-3">
                  <h2 className={cn("text-2xl text-white", rtl ? "font-ar-heading leading-[1.55] text-xl" : "font-semibold")}>
                    {service.title}
                  </h2>
                  <p className="text-sm leading-7 text-white/68">{service.description}</p>
                </div>
                <div className="mt-auto space-y-3 border-t border-white/10 pt-5">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm text-white/72">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-4">
            <p className="section-kicker">{content.services.deliveryApproach}</p>
            <h2 className={cn("text-3xl text-white sm:text-4xl", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.03em]")}>
              {content.services.processTitle}
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {content.services.processSteps.map((step) => (
              <Card key={step.step} className="surface-panel border-white/12 bg-white/6">
                <CardContent className="space-y-4 p-6">
                  <div className={cn("text-3xl text-primary", rtl ? "font-ar-heading" : "font-display")}>{step.step}</div>
                  <h3 className={cn("text-lg text-white", rtl ? "font-ar-heading" : "font-semibold")}>{step.title}</h3>
                  <p className="text-sm leading-7 text-white/68">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
