/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
  },
};

module.exports = nextConfig;
