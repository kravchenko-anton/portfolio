import { ctaButtonClassName, Profile } from "./profile";
import { TrackedLink } from "./tracked-link";

const telegramUrl = "https://t.me/AntonKravchenko10";

export default function Home() {
  return (
    <Profile
      page="home"
      cta={
        <>
          <p className="mt-4 text-gray-1100">
            I&apos;m obsessed with helping people, so you can:
          </p>
          <TrackedLink
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            page="home"
            event="conversion"
            goal="telegram"
            className={`mt-6 ${ctaButtonClassName}`}
          >
            Ask me on Telegram
          </TrackedLink>
        </>
      }
    />
  );
}
