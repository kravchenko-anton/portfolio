"use client";

import posthog from "posthog-js"
import type { ComponentProps } from "react"
import { posthogProjectToken } from "../posthog-host"

type Page = "home" | "recruiters";

type CommonProps = Omit<ComponentProps<"a">, "onClick"> & {
  page: Page;
};

type TrackedLinkProps =
  | (CommonProps & {
      event: "conversion";
      goal: "telegram" | "linkedin" | "email";
    })
  | (CommonProps & {
      event: "interaction";
      kind: "project" | "profile" | "school";
      name: string;
    });

function capture(event: string, properties: Record<string, string>) {
  if (!posthogProjectToken()) return;
  posthog.capture(event, properties, { transport: "sendBeacon" });
}

export function TrackedLink(props: TrackedLinkProps) {
  if (props.event === "conversion") {
    const { event, page, goal, ...anchorProps } = props;
    return (
      <a
        {...anchorProps}
        onClick={() => capture(event, { goal, page })}
      />
    );
  }

  const { event, page, kind, name, ...anchorProps } = props;
  return (
    <a
      {...anchorProps}
      onClick={() => capture(event, { kind, target: name, page })}
    />
  );
}
