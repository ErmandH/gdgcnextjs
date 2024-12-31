"use client";

import { useTranslations } from "next-intl";

export function ContactHero() {
  const t = useTranslations("Contact.hero");

  return (
    <div className="bg-[#4285F4] h-72 relative overflow-hidden pt-[81px]">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-center text-blue-100 text-lg max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
