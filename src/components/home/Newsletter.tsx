"use client";

import { useTranslations } from "next-intl";

export default function NewsletterSection() {
  const t = useTranslations("NewsletterSection");

  return (
    <div className="relative min-h-[50vh] overflow-hidden bg-white flex items-center justify-center">
      {/* Animated blobs */}
      <div className="absolute top-20 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-8 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>

      {/* İçerik */}
      <div className="relative z-10 max-w-4xl w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-base text-gray-600 sm:text-lg md:text-xl mx-auto max-w-2xl">
          {t("description")}
        </p>

        {/* Form Alanı */}
        <div className="mt-8 w-full max-w-xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3">
          <input
            type="email"
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            placeholder={t("emailPlaceholder")}
          />
          <button className="px-8 py-3 font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition duration-300">
            {t("button")}
          </button>
        </div>
      </div>
    </div>
  );
}
