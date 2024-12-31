"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

// Örnek blog verisi
// Gerçek projede, blog verilerini API'den veya bir veri kaynağından çekebilirsiniz.
const blogPosts = [
  {
    id: 1,
    title: "Android Geliştirme",
    excerpt: "Android dünyasına giriş yaparak uygulama geliştirmeye başlayın.",
    image: "https://picsum.photos/800/600?random=1",
    link: "/blog/android-gelistirme",
  },
  {
    id: 2,
    title: "Endüstri 4.0 ve Girişimcilik",
    excerpt:
      "Yeni nesil üretim teknolojilerinin girişimcilik ekosistemine etkilerini keşfedin.",
    image: "https://picsum.photos/800/600?random=1",
    link: "/blog/endustri-4",
  },
  {
    id: 3,
    title: "Endüstri 5.0",
    excerpt:
      "İnsan ve robot iş birliğine odaklanan Endüstri 5.0 hakkında bilgi edinin.",
    image: "https://picsum.photos/800/600?random=1",
    link: "/blog/endustri-5",
  },
];

export default function LatestBlogs() {
  const t = useTranslations("LatestBlogs");

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">{t("title")}</h2>
        </div>

        {/* Kartlar Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Görsel */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* İçerik */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link
                  href={post.link}
                  className="inline-block px-4 py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                >
                  {t("readMore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
