"use client";

import Link from "next/link";
import { useState } from "react";

// Örnek veri tipi
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
}

// Örnek blog verisi
const mockBlogData: BlogPost[] = [
  {
    id: 1,
    title: "Android Geliştirme",
    author: "Gizem Tütüncü",
    date: "24.10.2024",
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 2,
    title: "Endüstri 4.0 ve Girişimcilik",
    author: "Dilan Çelebi",
    date: "24.10.2024",
    image: "https://picsum.photos/800/600?random=2",
  },
  {
    id: 3,
    title: "Endüstri 5.0",
    author: "Kerem Çakır",
    date: "24.10.2024",
    image: "https://picsum.photos/800/600?random=3",
  },
  {
    id: 4,
    title: "Google Ads ve Maksimum Performans Kampanyaları",
    author: "Dilan Çelebi",
    date: "24.10.2024",
    image: "https://picsum.photos/800/600?random=4",
  },
  {
    id: 5,
    title: "Google Cloud: Güçlü Bir Bulut Altyapısı",
    author: "Dilan Çelebi",
    date: "24.10.2024",
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 6,
    title: "GDG Community: Teknoloji Dünyasına Açılan Kapı",
    author: "Gizem Tütüncü",
    date: "24.10.2024",
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 7,
    title: "Google Workspace: Yeni Nesil İşbirliği ve Verimlilik Platformu",
    author: "Kerem Çakır",
    date: "24.10.2024",
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 8,
    title: "Google Yapay Zeka (AI): Endüstri Mühendisliği Perspektifinden Akıllı Çözümlerde Geleceği Şekillendirme",
    author: "Dilan Çelebi",
    date: "24.10.2024",
    image: "https://picsum.photos/800/600?random=1",
  },
];

export default function BlogList() {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Verileri sayfalara bölüyoruz
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = mockBlogData.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(mockBlogData.length / postsPerPage);

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Başlık veya açıklama (isteğe bağlı) */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Kulübümüz ile ilgili son gelişmeleri takip edin
      </h2>

      {/* Blog Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            <div className="w-full h-44 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mt-2 mb-1">
                {/* Basit ikonlar (user, calendar). react-icons ile de yapabilirsiniz. */}
                <svg
                  className="w-4 h-4 mr-1 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a6 6 0 00-5.2 9.216c.35.537.757 1.03 1.202 1.476.993 1.006 2.242 1.775 3.658 2.255a.75.75 0 10.68-1.348c-1.178-.464-2.156-1.087-2.936-1.887-.44-.446-.78-.93-1.027-1.434A4.5 4.5 0 1110 6.5a.75.75 0 000-1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <svg
                  className="w-4 h-4 mr-1 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10m-8 5h6m-7 5h8m2-12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
              currentPage === index + 1
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
