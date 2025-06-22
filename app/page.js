import Image from "next/image";
import Link from "next/link";
import { EmailSubscription } from "@/components/ui/email-subscription";
import { Meteors } from "@/components/magicui/meteors";

export default function Home() {
  return (
    <div className="relative grid items-center justify-items-center h-screen gap-16 sm:p-20 overflow-hidden">
      <Meteors
        number={30}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <main className="relative z-10 flex flex-col items-start w-full min-w-md max-w-md px-8 pt-22">
        <Image
          className="ms-0.5"
          src="/images/logo/lazuardy.png"
          alt="Lazuardy Logo"
          width={120}
          height={38}
          priority
        />
        <div className="flex flex-col w-full gap-4 text-md mt-6 font-light text-neutral-200">
          <p>
            We&apos;re shaping the future of technology,
            <br />
            and engineering something worth the wait.
          </p>
          <p>Great things take time. Stay close.</p>
          <p className="text-neutral-400 text-sm mt-4">
            Subscribe to our newsletter to stay updated!
          </p>
        </div>
        <div className="flex flex-col w-full mt-6 font-light">
          <EmailSubscription />
          <p className="text-neutral-400 text-right mt-4 ms-0.5 text-sm">
            or mail us to{" "}
            <Link
              href="mailto:contact@lazuardy.group"
              className="underline transition-colors hover:text-white"
            >
              contact [at] lazuardy.group
            </Link>
            .
          </p>
        </div>
      </main>
      <footer className="relative z-10 row-start-4 flex gap-8 items-start w-full min-w-md max-w-md px-8">
        <span className="flex w-full text-xs font-light text-neutral-400">
          &copy; {new Date().getFullYear()} PT Lazuardy Innovation Group
        </span>
        <div className="flex gap-4 text-xs font-light text-neutral-400">
          <Link
            href="/legal/privacy-policy"
            className="underline transition-colors hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/legal/terms-of-service"
            className="underline transition-colors hover:text-white"
          >
            Terms
          </Link>
        </div>
      </footer>
    </div>
  );
}
