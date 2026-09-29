import type { ReactNode } from "react";
import Image from "next/image";
import { TrackedLink } from "./tracked-link";

const linkedinUrl = "https://www.linkedin.com/in/anton-kravchenko-303bbb3b2/";
const githubUrl = "https://github.com/kravchenko-anton";

const projects = [
  {
    href: "https://github.com/kravchenko-anton/booknext",
    title: "booknext",
    description: "Comfortable reading of the books that matter.",
  },
  {
    href: "https://github.com/kravchenko-anton/loopy",
    title: "loopy",
    description: "Run tiny experiments. Predict. Learn what works.",
  },
  {
    href: "https://github.com/kravchenko-anton/bubble",
    title: "bubble",
    description: "Pronunciation scoring and feedback.",
  },
];

function ItemLink({
  href,
  title,
  description,
  page,
}: {
  href: string;
  title: string;
  description: string;
  page: "home" | "recruiters";
}) {
  return (
    <TrackedLink
      href={href}
      target="_blank"
      rel="noreferrer"
      page={page}
      event="interaction"
      kind="project"
      name={title}
      className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-gray-200 sm:py-3"
    >
      <span>{title}</span>
      <span className="text-gray-1100">{description}</span>
    </TrackedLink>
  );
}

export const ctaButtonClassName =
  "inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 font-medium text-white no-underline hover:bg-accent-hover";

export const ctaSecondaryButtonClassName =
  "inline-flex h-12 items-center justify-center rounded-full bg-gray-400 px-5 font-medium text-gray-1200 no-underline hover:bg-gray-500";

export function Profile({
  cta,
  page,
}: {
  cta: ReactNode;
  page: "home" | "recruiters";
}) {
  return (
    <div className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
      <header className="mb-32 flex items-center gap-4">
        <Image
          src="/avatar.jpg"
          alt="Anton Kravchenko"
          width={64}
          height={64}
          loading="eager"
          className="size-16 shrink-0 rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <a
            className="text-medium inline-block font-medium no-underline dark:text-white"
            href="/"
          >
            Anton Kravchenko
          </a>
          <span className="text-medium font-medium leading-none text-gray-1100">
            Computer Engineering Student
          </span>
        </div>
      </header>

      <main>
        <span className="mb-5 block font-medium sm:mb-6 dark:text-white">
          Today
        </span>
        <p className="text-gray-1100">
          I&apos;m a Computer Engineering student at{" "}
          <TrackedLink
            href="https://amu.edu.pl/en"
            target="_blank"
            rel="noreferrer"
            page={page}
            event="interaction"
            kind="school"
            name="adam-mickiewicz-university"
          >
            Adam Mickiewicz University
          </TrackedLink>
          .
        </p>
        <p className="mt-4 text-gray-1100">
          I build with TypeScript, React, Next.js, React Native, NestJS, and
          Spring Boot.
        </p>
        {cta}

        <div className="-mb-3 mt-16 sm:mt-32">
          <span className="mb-5 block font-medium sm:mb-4 dark:text-white">
            Projects
          </span>
          <div className="flex flex-col gap-7 sm:gap-4">
            {projects.map((project) => (
              <ItemLink key={project.href} {...project} page={page} />
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-32">
          <span className="mb-6 block font-medium dark:text-white">More</span>
          <span className="text-gray-1100">
            You can see more of my work on{" "}
            <TrackedLink
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              page={page}
              event="interaction"
              kind="profile"
              name="linkedin"
            >
              LinkedIn
            </TrackedLink>{" "}
            and more of my code on{" "}
            <TrackedLink
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              page={page}
              event="interaction"
              kind="profile"
              name="github"
            >
              GitHub
            </TrackedLink>
            .
          </span>
        </div>
      </main>
    </div>
  );
}
