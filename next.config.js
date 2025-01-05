// import type { NextConfig } from "next";
// import nextConfig from "./next.config";

// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  output: "standalone",
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
