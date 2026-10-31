import Link from "next/link";
import { site } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="#home"
          className="w-fit text-sm font-semibold text-zinc-300 transition hover:text-white"
        >
          {site.name}
          <span className="text-violet-400">.</span>
        </Link>

        <p className="text-sm text-zinc-500">
          © {site.name}. All rights reserved.
        </p>

        {site.socials.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {site.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                {social.platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
