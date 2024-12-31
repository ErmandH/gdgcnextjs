"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("Contact.form");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("successTitle"),
      description: t("successDescription"),
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-6">{t("title")}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              {t("firstName")}
            </label>
            <Input
              id="firstName"
              placeholder={t("firstName")}
              required
              className="border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-[#4285F4]/20"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              {t("lastName")}
            </label>
            <Input
              id="lastName"
              placeholder={t("lastName")}
              required
              className="border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-[#4285F4]/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {t("email")}
          </label>
          <Input
            id="email"
            type="email"
            placeholder={t("email")}
            required
            className="border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-[#4285F4]/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            {t("message")}
          </label>
          <Textarea
            id="message"
            placeholder={t("message")}
            required
            className="min-h-[150px] border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-[#4285F4]/20"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#4285F4] hover:bg-[#4285F4]/90 rounded-lg h-12 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("sending") : t("submitButton")}
        </Button>
      </form>
    </div>
  );
}
