export const POSTHOG_PROXY_PATH = "/relay";

export function posthogProjectToken() {
  return process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
}

const EU_INGEST_HOST = "https://eu.i.posthog.com";

export function posthogIngestHost() {
  return process.env.NEXT_PUBLIC_POSTHOG_HOST ?? EU_INGEST_HOST;
}

export function posthogUsesEu() {
  return posthogIngestHost().includes("eu.i.posthog.com");
}

export function posthogUiHost() {
  return posthogUsesEu() ? "https://eu.posthog.com" : "https://us.posthog.com";
}

export function posthogAssetsHost() {
  return posthogUsesEu()
    ? "https://eu-assets.i.posthog.com"
    : "https://us-assets.i.posthog.com";
}
