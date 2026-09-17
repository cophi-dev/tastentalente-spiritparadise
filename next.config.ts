import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";
const repo = "tastentalente-spiritparadise";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}` : "",
};

export default nextConfig;
