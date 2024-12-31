"use client";

import Link from "next/link";
import { TypedText } from "@/components/home/TypedText";
import { useLocale, useTranslations } from "next-intl";

export function HomeHeroSection() {
  const t = useTranslations("HomeHeroSection");
  const locale = useLocale()
  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {/* Animated blobs */}
      <div className="absolute top-20 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-8 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>

      <div className="max-w-7xl mx-auto h-full relative z-10">
        <div className="h-full flex items-center">
          <main className="w-full px-4 sm:px-6 lg:px-8">
            <div className="lg:max-w-2xl lg:text-left text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <TypedText />
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl mx-auto lg:mx-0">
                {t("heroTitle")}
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <div>
                  <Link
                    href={`/${locale}/about`}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
                  >
                    {t("startNow")}
                  </Link>
                </div>
                <div>
                  <Link
                    href={`/${locale}/events`}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-500 bg-blue-50 hover:bg-blue-100 transition duration-300"
                  >
                    {t("viewEvents")}
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
