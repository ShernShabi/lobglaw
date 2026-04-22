import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** Allow `next/image` optimization for files under `public/images/` and the root-level logo. */
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
      {
        pathname: "/chess-logo.png",
        search: "",
      },
    ],
    /** `quality` on `<Image />` must be listed here (default is only 75). */
    qualities: [75, 85],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
