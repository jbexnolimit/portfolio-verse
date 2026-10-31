
"use client";

import Link from "next/link";
import {
  PackageCheck,
  User,
  BriefcaseBusiness,
  Mail,
  UserCog,
  FolderKanban,
  type LucideIcon,
} from "lucide-react";
import { navigation, site } from "@/lib/portfolio";
import ThemeToggle from "@/components/ui/theme-toggle";

const navigationIcons: Record<string, LucideIcon> = {
  services: PackageCheck,
  about: User,
  skills: UserCog,
  experience: BriefcaseBusiness,
  projects: FolderKanban,
  contact: Mail,
};

export default function Navbar() {
  const contactEnabled = navigation.some((item) => item.id === "contact");

  return (
    <header className="glass-navbar sticky top-0 z-40 w-full">
      <nav
        aria-label="Main navigation"
        className="container-shell flex min-h-16 w-full min-w-0 items-center justify-between gap-2 py-3 sm:gap-4"
      >
        <Link
          href="#home"
          className="min-w-0 shrink text-sm font-semibold tracking-tight text-[var(--foreground)]"
        >
          <span className="block truncate">{site.name}</span>
        </Link>

        <div className="flex min-w-0 shrink-0 items-center gap-0.5 sm:gap-1 md:gap-5">
          {navigation.map((item) => {
            const Icon = navigationIcons[item.id];

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                aria-label={item.label}
                title={item.label}
                className="navbar-link flex shrink-0 items-center justify-center rounded-lg p-2 text-xs sm:px-2 md:py-2 md:text-sm"
              >
                {Icon ? (
                  <>
                    <span className="hidden md:inline">{item.label}</span>
                    <Icon
                      aria-hidden="true"
                      className="navbar-link-icon md:hidden"
                      size={18}
                      strokeWidth={1.8}
                    />
                  </>
                ) : (
                  <span>{item.label}</span>
                )}
              </Link>
            );
          })}

          {!contactEnabled && (
            <a
              href={`mailto:${site.email}`}
              aria-label="Contact"
              title="Contact"
              className="navbar-link flex shrink-0 items-center justify-center rounded-lg p-2 text-xs sm:px-2 md:py-2 md:text-sm"
            >
              <span className="hidden md:inline">Contact</span>
              <Mail
                aria-hidden="true"
                className="navbar-link-icon md:hidden"
                size={18}
                strokeWidth={1.8}
              />
            </a>
          )}

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
