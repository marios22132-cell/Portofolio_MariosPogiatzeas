import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root so Turbopack doesn't walk up past this app looking for a lockfile.
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
