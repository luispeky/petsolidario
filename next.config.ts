import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS === "true" ? "/petsolidario" : "",
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
