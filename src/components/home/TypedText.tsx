"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedText() {
  const el = useRef(null);
  const t = useTranslations("HomeHeroSection")
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t('welcome')],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
}
