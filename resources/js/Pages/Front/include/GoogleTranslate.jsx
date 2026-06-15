import { useEffect } from "react";
import "../../Front/include/GoogleTranslate.css";

export default function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "hi",
          includedLanguages: "en,hi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Remove Google top banner & body shift
    const interval = setInterval(() => {
      const banner = document.querySelector(".goog-te-banner-frame");
      if (banner) {
        banner.style.display = "none";
      }
      document.body.style.top = "0px";
    }, 100);

    // ✅ Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return <div id="google_translate_element"></div>;
}