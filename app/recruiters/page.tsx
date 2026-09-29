import type { Metadata } from "next";
import {
  ctaButtonClassName,
  ctaSecondaryButtonClassName,
  Profile,
} from "../profile";

const linkedinUrl = "https://www.linkedin.com/in/anton-kravchenko-303bbb3b2/";
const email = "antkra3@st.amu.edu.pl";

export const metadata: Metadata = {
  title: "Anton Kravchenko",
  description: "Connect with Anton Kravchenko on LinkedIn or by email.",
};

export default function RecruitersPage() {
  return (
    <Profile
      cta={
        <>
          <p className="mt-4 text-gray-1100">
            I&apos;m addicted to making software that people like, so you can:
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className={ctaButtonClassName}
          >
            Write me on LinkedIn
          </a>
          <a href={`mailto:${email}`} className={ctaSecondaryButtonClassName}>
            Email me
          </a>
          </div>
        </>
      }
    />
  );
}
