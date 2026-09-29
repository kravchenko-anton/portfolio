import type { NextConfig } from "next";
import {
  POSTHOG_PROXY_PATH,
  posthogAssetsHost,
  posthogIngestHost,
} from "./posthog-host";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async rewrites() {
    const assetsHost = posthogAssetsHost();
    const ingestHost = posthogIngestHost();

    return [
      {
        source: `${POSTHOG_PROXY_PATH}/static/:path*`,
        destination: `${assetsHost}/static/:path*`,
      },
      {
        source: `${POSTHOG_PROXY_PATH}/:path*`,
        destination: `${ingestHost}/:path*`,
      },
    ];
  },
};

export default nextConfig;
