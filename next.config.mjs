import nextTranslate from "next-translate";

export default {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: true,
  },
  ...nextTranslate(),
};
