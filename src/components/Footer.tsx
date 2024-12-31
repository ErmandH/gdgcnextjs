"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Üst Kısım: 4 Sütunlu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* 1. Sütun: Sosyal Medya */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Sosyal Medya</h3>
          <ul className="space-y-2 text-sm">
            <li>
              {/* İsteğe bağlı: ikonu kendiniz ekleyebilirsiniz */}
              <Link href="https://instagram.com" className="hover:underline">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" className="hover:underline">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        {/* 2. Sütun: Biz Kimiz? */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Biz Kimiz?</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            GDG on Campus IUC, İstanbul Üniversitesi-Cerrahpaşa çatısı altında
            kurulmuş Google tabanlı global bir öğrenci kulübüdür.
          </p>
        </div>

        {/* 3. Sütun: İletişim */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">İletişim</h3>
          <p className="text-sm text-gray-300">contact@gdgoncampusiuc.com</p>
        </div>

        {/* 4. Sütun: Son Yazılar */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Son Yazılar</h3>
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
        <p className="text-center text-sm text-gray-400">
          2024 Google Developer Groups on Campus İstanbul Üniversitesi-Cerrahpaşa
        </p>
      </div>
    </footer>
  );
}
