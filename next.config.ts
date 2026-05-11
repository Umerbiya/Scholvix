import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["firebase", "@firebase/firestore", "@firebase/auth"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "www.ivywise.com",
      },
      {
        protocol: "https",
        hostname: "d3d0lqu00lnqvz.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "accommodationforstudents.com",
      },
      {
        protocol: "https",
        hostname: "ethz.ch",
      },
      {
        protocol: "https",
        hostname: "obuchenievkitae.ru",
      },
      {
        protocol: "https",
        hostname: "www.obuchenievkitae.ru",
      },
      {
        protocol: "https",
        hostname: "www.tsinghua.edu.cn",
      },
      {
        protocol: "https",
        hostname: "www.timeshighereducation.com",
      },
    ],
  },
};

export default nextConfig;
