import posthog from "posthog-js";
import {
  POSTHOG_PROXY_PATH,
  posthogProjectToken,
  posthogUiHost,
} from "./posthog-host";

const token = posthogProjectToken();

if (token) {
  posthog.init(token, {
    api_host: POSTHOG_PROXY_PATH,
    ui_host: posthogUiHost(),
    defaults: "2026-05-30",
    person_profiles: "always",
    capture_pageview: "history_change",
    capture_pageleave: true,
    autocapture: true,
    capture_exceptions: true,
    loaded: (client) => {
      client.startSessionRecording();
    },
  });
}
