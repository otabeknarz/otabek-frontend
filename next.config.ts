import type { NextConfig } from "next";

// Polyfill localStorage for SSR
require("./polyfills/localStorage");

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
