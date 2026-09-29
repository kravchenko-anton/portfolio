import { ctaButtonClassName, Profile } from "./profile"

const telegramUrl = "https://t.me/AntonKravchenko10";

export default function Home() {
  return (
    <Profile
      cta={
        <>
          <p className="mt-4 text-gray-1100">
            I&apos;m obsessed with helping people, so you can:
          </p>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className={`mt-6 ${ctaButtonClassName}`}
          >
            Ask me on Telegram
          </a>
        </>
      }
    />
  );
}
