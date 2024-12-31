import React from "react";
import { BlogPost } from "@/app/[locale]/blog/page";
import { User, Calendar } from "lucide-react"; // Lucide React ikonları
function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col cursor-pointer">
      {/* Blog Görseli */}
      <img
        src={blog.image} // BlogPost içinde 'image' alanı olduğu varsayılıyor
        alt={blog.title}
        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Blog İçeriği */}
      <div className="px-4 py-4 flex flex-col flex-1 justify-between">
        {/* Başlık */}
        <h3 className="font-bold text-lg">{blog.title}</h3>

        {/* Yazar ve Tarih Bilgisi */}
        <div className="flex gap-3 items-center mt-2">
          {/* Yazar */}
          <div className="flex gap-1 items-center">
            <User className="w-4 h-4 text-gray-500" /> {/* Lucide User İkonu */}
            <span className="text-gray-500 text-sm">{blog.author}</span>
          </div>

          {/* Ayrım Çizgisi */}
          <span className="text-gray-500 text-sm">-</span>

          {/* Tarih */}
          <div className="flex gap-1 items-center">
            <Calendar className="w-4 h-4 text-gray-500" />{" "}
            {/* Lucide Calendar İkonu */}
            <span className="text-gray-500 text-sm">{blog.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
