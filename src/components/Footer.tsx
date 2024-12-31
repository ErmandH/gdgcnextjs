"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Üst Kısım: 4 Sütunlu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* 1. Sütun: Sosyal Medya */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">{t("socialMedia")}</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <Instagram className="w-5 h-5 text-gray-300" />
                {t("instagram")}
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
                {t("linkedin")}
              </Link>
            </li>
          </ul>
        </div>

        {/* 2. Sütun: Biz Kimiz? */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">{t("aboutUs")}</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            {t("aboutUsDescription")}
          </p>
        </div>

        {/* 3. Sütun: İletişim */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">{t("contact")}</h3>
          <p className="text-sm text-gray-300">contact@gdgoncampusiuc.com</p>
        </div>

        {/* 4. Sütun: Son Yazılar */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">{t("latestPosts")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/android-gelistirme" className="hover:underline">
                Android Geliştirme
              </Link>
            </li>
            <li>
              <Link
                href="/blog/endustri-4-girisimcilik"
                className="hover:underline"
              >
                Endüstri 4.0 ve Girişimcilik
              </Link>
            </li>
            <li>
              <Link href="/blog/endustri-5" className="hover:underline">
                Endüstri 5.0
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Kısım: Telif / Copyright metni */}
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-sm text-gray-400">{t("copyright")}</p>
      </div>
    </footer>
  );
}
