"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import LanguageDropdown from "./LanguageDropdown";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/about" },
  {
    name: "Etkinliklerimiz",
    href: "#",
    children: [
      { name: "Etkinlikler", href: "/events" },
      { name: "ULGAN", href: "/ulgan" },
      { name: "Solution Challenge", href: "/solution-challenge" },
    ],
  },
  { name: "Ekibimiz", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "SSS", href: "/faqs" },
  { name: "İletişim", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobil menüde hangi item’ın açık olduğunu tutan state
  const [openMenuItem, setOpenMenuItem] = useState<string | null>(null);

  const toggleMenuItem = (itemName: string) => {
    setOpenMenuItem((prev) => (prev === itemName ? null : itemName));
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isHomePage
          ? scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      )}
    >
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/gdgc-logo.png"
                alt="GDGC IUC Logo"
                width={35}
                height={15}
                priority
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-xl font-bold transition-colors duration-300",
                    isHomePage && !scrolled ? "text-gray-800" : "text-gray-900"
                  )}
                >
                  GDGC IUC
                </span>
                <span
                  className={cn(
                    "text-sm transition-colors duration-300",
                    isHomePage && !scrolled ? "text-gray-700" : "text-gray-600"
                  )}
                >
                  İstanbul Üniversitesi-Cerrahpaşa
                </span>
              </div>
            </Link>
            <div className="hidden xl:ml-10 xl:flex xl:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <div>
                      <button
                        className={cn(
                          "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md group transition-colors duration-300",
                          isHomePage && !scrolled
                            ? "text-gray-800 hover:text-blue-500"
                            : "text-gray-900 hover:text-blue-600"
                        )}
                      >
                        {item.name}
                        <svg
                          className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative bg-white p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={cn(
                                  "block px-4 py-3 text-sm rounded-md transition-colors",
                                  pathname === child.href
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-50"
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300",
                        pathname === item.href
                          ? isHomePage && !scrolled
                            ? "text-blue-500 bg-white/10"
                            : "text-blue-600 bg-blue-50"
                          : isHomePage && !scrolled
                          ? "text-gray-800 hover:text-blue-500"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden xl:flex xl:items-center xl:space-x-4">
		  	<LanguageDropdown />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300",
                isHomePage && !scrolled
                  ? "text-gray-800 hover:text-blue-500"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              )}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "xl:hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="space-y-1">
                {/* 
                  Dropdown butonuna ikon ekliyoruz.
                  openMenuItem === item.name ise ikon dönüyor (rotate-180).
                */}
                <button
                  onClick={() => toggleMenuItem(item.name)}
                  className="flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item.name}
                  <svg
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      openMenuItem === item.name ? "rotate-180" : ""
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Eğer açık olan menü bu item ise çocuk elemanları göster */}
                {openMenuItem === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          "block px-3 py-2 text-base font-medium rounded-md",
                          pathname === child.href
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md",
                  pathname === item.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            )
          )}
          <div className="pt-4">
		  	<LanguageDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}
