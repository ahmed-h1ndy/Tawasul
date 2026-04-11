/*
Design reminder for this file: Aviation-informed luxury minimalism.
The contact page should feel reassuring, polished, and conversion-oriented without becoming sales-heavy.
*/

import { FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { images } from "@/lib/assets";

const contactImage = images.contactLounge;

const contactIcons = [PhoneCall, Mail, MessageCircle] as const;

export default function Contact() {
  const { content, rtl } = useI18n();

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.info("[Contact Form] Submission data:", data);

    // TODO: Replace with actual backend endpoint when ready
    // try {
    //   await fetch("/api/contact", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });
    // } catch { toast.error("Something went wrong. Please try again."); return; }

    toast.success(content.contact.formFields.success);
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <SiteLayout pageKey="contact">
      <section className="relative isolate overflow-hidden pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10">
          <img src={contactImage} alt="Premium executive reception environment" className="h-full w-full object-cover opacity-26" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,11,21,0.97),rgba(7,11,21,0.88),rgba(7,11,21,0.75))]" />
        </div>
        <div className="container pb-18 pt-8 sm:pb-20 lg:pb-24 lg:pt-14">
          <div className="max-w-4xl space-y-6">
            <p className="eyebrow-chip">{content.contact.eyebrow}</p>
            <h1 className={cn("text-4xl text-white sm:text-5xl lg:text-6xl", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.04em]")}>
              {content.contact.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{content.contact.intro}</p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 sm:pb-24">
        <div className="container grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <Card className="surface-card overflow-hidden">
            <CardContent className="space-y-6 p-7 sm:p-8">
              <div className="space-y-3">
                <p className="section-kicker">{content.contact.formTitle}</p>
                <h2 className={cn("text-3xl text-white", rtl ? "font-ar-heading leading-[1.5]" : "font-display tracking-[-0.03em]")}>
                  {content.contact.formHeading}
                </h2>
              </div>

              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input required name="fullName" aria-label={content.contact.formFields.name} placeholder={content.contact.formFields.name} className="h-12 border-white/12 bg-white/6 text-white placeholder:text-white/35" />
                  <Input required name="company" aria-label={content.contact.formFields.company} placeholder={content.contact.formFields.company} className="h-12 border-white/12 bg-white/6 text-white placeholder:text-white/35" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input required name="email" type="email" dir="ltr" aria-label={content.contact.formFields.email} placeholder={content.contact.formFields.email} className="h-12 border-white/12 bg-white/6 text-white placeholder:text-white/35" />
                  <Input name="phone" aria-label={content.contact.formFields.phone} placeholder={content.contact.formFields.phone} className="h-12 border-white/12 bg-white/6 text-white placeholder:text-white/35" />
                </div>
                <Textarea required name="message" aria-label={content.contact.formFields.message} placeholder={content.contact.formFields.message} className="min-h-36 border-white/12 bg-white/6 text-white placeholder:text-white/35" />
                <Button type="submit" disabled={submitted} className="mt-2 h-12 rounded-full bg-primary text-[color:var(--primary-foreground)] hover:bg-primary/92 disabled:opacity-60">
                  {submitted
                    ? content.contact.formFields.success
                    : content.contact.formFields.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="surface-panel border-white/12 bg-white/6">
              <CardContent className="space-y-5 p-7">
                <p className="section-kicker">{content.contact.directTitle}</p>
                <div className="grid gap-3">
                  {content.contact.directItems.map((item, index) => {
                    const Icon = contactIcons[index] ?? PhoneCall;
                    return (
                      <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                        <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary">
                          <Icon className="size-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-white/52">{item.label}</p>
                          <p className="text-sm text-white">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
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
                  <p className="text-sm leading-7 text-white/72">{content.contact.locationText}</p>
                </div>
                <img src={contactImage} alt="Tawasul contact environment" className="h-56 w-full rounded-[1.5rem] object-cover" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
