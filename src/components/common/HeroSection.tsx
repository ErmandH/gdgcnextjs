"use client";

export function HeroSection({ title }: { title?: string }) {
  return (
    <div className="relative min-h-[30vh] overflow-hidden bg-white flex items-center justify-center">
      {/* Animated blobs */}
      <div className="absolute top-20 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-8 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>

      {/* İçerik: Ortada Başlık */}
      <div className="relative z-10 max-w-2xl px-4 text-center pt-[81px]">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          {title}
        </h1>
      </div>
    </div>
  );
}
