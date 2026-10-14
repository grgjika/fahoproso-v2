import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages serves /page/index.html at both /page and /page/.
  // Without this, /page/ (the form Google crawls) returns 404.
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;