"use client";

import { useState, useRef, useEffect } from "react";

export default function LanguageDropdown() {
  const [currentLanguage, setCurrentLanguage] = useState<"tr" | "en">("tr");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dropdown butonuna tıklayınca aç/kapa
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Menüden seçilen dil
  const handleLanguageSelect = (lang: "tr" | "en") => {
    setCurrentLanguage(lang);
    setIsOpen(false);
    // Burada dil değişiminde yapılacak diğer işlemleri (örn. i18n, yönlendirme vb.) ekleyebilirsiniz
  };

  // Kullanıcı menü dışına tıklarsa dropdown’ı kapat
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Açılır menüyü tetikleyen buton */}
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
      >
        {/* Seçili dili gösteren bölüm */}
        {currentLanguage === "tr" ? (
          <div className="flex items-center gap-2">
            {/* --- Türk Bayrağı (inline SVG) --- */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5">
              <g fillRule="evenodd">
                <path fill="#e30a17" d="M0 0h640v480H0z" />
                <path
                  fill="#fff"
                  d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"
                />
                <path
                  fill="#e30a17"
                  d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"
                />
                <path
                  fill="#fff"
                  d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"
                />
              </g>
            </svg>
            TR
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {/* --- İngiliz Bayrağı (inline SVG) --- */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5">
              <path fill="#012169" d="M0 0h640v480H0z" />
              <path
                fill="#FFF"
                d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
              />
              <path
                fill="#C8102E"
                d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
              />
              <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
              <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
            </svg>
            EN
          </div>
        )}

        {/* Ok (Chevron) İkonu */}
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.7.3l6 6a1 1 0 01-1.4 1.4L10 5.42 4.7 10.7a1 1 0 01-1.4-1.4l6-6A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown içeriği */}
      {isOpen && (
        <div className="absolute right-[-40px] z-10 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg">
          <button
            onClick={() => handleLanguageSelect("tr")}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5 mr-2">
              <g fillRule="evenodd">
                <path fill="#e30a17" d="M0 0h640v480H0z" />
                <path
                  fill="#fff"
                  d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"
                />
                <path
                  fill="#e30a17"
                  d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"
                />
                <path
                  fill="#fff"
                  d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"
                />
              </g>
            </svg>
            TR
          </button>
          <button
            onClick={() => handleLanguageSelect("en")}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5 mr-2">
              <path fill="#012169" d="M0 0h640v480H0z" />
              <path
                fill="#FFF"
                d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
              />
              <path
                fill="#C8102E"
                d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
              />
              <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
              <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
            </svg>
            EN
          </button>
        </div>
      )}
    </div>
  );
}
