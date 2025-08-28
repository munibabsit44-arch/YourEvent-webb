import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
