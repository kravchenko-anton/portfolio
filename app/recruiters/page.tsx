import type { Metadata } from "next";
import {
  ctaButtonClassName,
  ctaSecondaryButtonClassName,
  Profile,
} from "../profile";
import { TrackedLink } from "../tracked-link";

const linkedinUrl = "https://www.linkedin.com/in/anton-kravchenko-303bbb3b2/";
const email = "antkra3@st.amu.edu.pl";

export const metadata: Metadata = {
  title: "Anton Kravchenko",
  description: "Connect with Anton Kravchenko on LinkedIn or by email.",
};

export default function RecruitersPage() {
  return (
    <Profile
      page="recruiters"
      cta={
        <>
          <p className="mt-4 text-gray-1100">
            I&apos;m addicted to making software that people like, so you can:
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              page="recruiters"
              event="conversion"
              goal="linkedin"
              className={ctaButtonClassName}
            >
              Write me on LinkedIn
            </TrackedLink>
            <TrackedLink
              href={`mailto:${email}`}
              page="recruiters"
              event="conversion"
              goal="email"
              className={ctaSecondaryButtonClassName}
            >
              Email me
            </TrackedLink>
          </div>
        </>
      }
    />
  );
}
