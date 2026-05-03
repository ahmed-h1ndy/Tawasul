import { ArrowUpRight, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

const contactIcons = [Mail, MessageCircle, PhoneCall] as const;

export default function Contact() {
  const { content, rtl } = useI18n();

  return (
    <SiteLayout pageKey="contact">
      <PageHero
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        intro={content.contact.intro}
        image={images.contactLounge}
        imageAlt="Executive reception environment"
        rtl={rtl}
      />

      <section className="section-shell pb-20 sm:pb-24">
        <div className="container space-y-8">
          <Card className="surface-panel overflow-hidden">
            <CardContent className="space-y-6 p-7 sm:p-8">
              <SectionIntro
                kicker={content.contact.directTitle}
                title={content.contact.formHeading}
                copy={content.shared.contactPrompt}
                rtl={rtl}
                className="section-on-dark space-y-3"
              />
              <div className="grid gap-5 sm:grid-cols-3">
                {content.contact.directItems.map((item, index) => {
                  const Icon = contactIcons[index] ?? PhoneCall;
                  return (
                    <div key={item.label} className="text-white">
                      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-2xl border border-white/18 bg-white/10 text-primary">
                        <Icon className="size-4" />
                      </div>
                      <p className="text-sm font-semibold text-white/90">{item.label}</p>
                      <p className="mt-1 text-sm font-medium leading-6 text-white/75">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <Card className="surface-light">
              <CardContent className="space-y-5 p-7 sm:p-8">
                <p className="section-kicker">{content.shared.sectionLabels.overview}</p>
                <h2 className={cn("section-heading-balanced", rtl && "leading-[1.5]")}>
                  {content.contact.locationTitle}
                </h2>
                <p className="card-copy">{content.contact.locationText}</p>
                <div className="hero-badge">
                  <Mail className="size-4 text-primary" />
                  info@tawasul-eg.com
                </div>
              </CardContent>
            </Card>

            <Card className="surface-panel overflow-hidden border-primary/18 bg-primary/8">
              <CardContent className="space-y-5 p-7">
                <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div className="space-y-2">
                  <p className="section-kicker">{content.contact.locationTitle}</p>
                  <p className="card-copy">{content.contact.locationText}</p>
                </div>
                <img src={images.contactLounge} alt="Tawasul contact environment" className="h-56 w-full rounded-[1.5rem] object-cover" />
                <div className="flex items-center gap-2 text-sm font-medium text-white/72">
                  <ArrowUpRight className="size-4 text-primary" />
                  {content.shared.coverageLabel}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
