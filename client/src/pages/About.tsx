import { Compass, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

const valueIcons = [ShieldCheck, Handshake, Compass, Sparkles] as const;

export default function About() {
  const { content, rtl } = useI18n();

  return (
    <SiteLayout pageKey="about">
      <PageHero
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        intro={content.about.intro}
        image={images.team}
        imageAlt="Professional outsourced support team"
        rtl={rtl}
      />

      <section className="section-shell">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Card className="surface-card overflow-hidden">
            <CardContent className="space-y-5 p-7 sm:p-8">
              <p className="section-kicker">{content.about.storyTitle}</p>
              <h2 className="section-heading-balanced">{content.brand.tagline}</h2>
              <p className="section-copy">{content.about.storyText}</p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="surface-panel border-primary/15 bg-primary/8">
              <CardContent className="space-y-2 p-7">
                <h3 className={cn("card-heading", rtl ? "font-ar-heading" : "")}>{content.about.missionTitle}</h3>
                <p className="card-copy">{content.about.missionText}</p>
              </CardContent>
            </Card>
            <Card className="surface-light">
              <CardContent className="space-y-2 p-7">
                <h3 className={cn("card-heading", rtl ? "font-ar-heading" : "")}>{content.about.visionTitle}</h3>
                <p className="card-copy">{content.about.visionText}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="container space-y-8">
          <SectionIntro
            kicker={content.shared.sectionLabels.values}
            title={content.about.valuesHeading}
            rtl={rtl}
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.about.values.map((value, index) => {
              const Icon = valueIcons[index] ?? ShieldCheck;
              return (
                <Card key={value.title} className="surface-card h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-3">
                      <h3
                        className={cn(
                          "card-heading",
                          rtl ? "font-ar-heading leading-8" : ""
                        )}
                      >
                        {value.title}
                      </h3>
                      <p className="card-copy">{value.description}</p>
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
