"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["GDGC IUC'ye Hoş Geldiniz"],
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
