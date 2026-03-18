import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#111]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Roof"
              width={68}
              height={35}
              className="h-[24px] w-auto"
            />
          </Link>
          <p className="mt-1.5 text-[13px] text-[#555]">
            &copy; 2025 Roof. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            href="/support"
            className="text-[13px] text-[#555] transition-colors hover:text-white/60"
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="text-[13px] text-[#555] transition-colors hover:text-white/60"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[13px] text-[#555] transition-colors hover:text-white/60"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
