import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
