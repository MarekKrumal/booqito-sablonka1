"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function BooqitoWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.textContent = `var sccz_id = '1307/34b95f3c7c9e976164ac208ed9f2c63ba98e22d5';`;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Script
        src="https://app.booqito.com/inc/js/widget.js"
        strategy="afterInteractive"
      />
      <div className="sccz-widget" data-options="id=91" />
    </>
  );
}
