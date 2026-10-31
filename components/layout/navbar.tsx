"use client";

import Link from "next/link";
import {
  PackageCheck,
  Layers,
  BriefcaseBusiness,
  Send,
  ContactRound,
  type LucideIcon,
} from "lucide-react";
import { navigation, site } from "@/lib/portfolio";
import ThemeToggle from "@/components/ui/theme-toggle";

const navigationIcons: Record<string, LucideIcon> = {
  services: PackageCheck,
  about: ContactRound,
  skills: Layers,
  experience: BriefcaseBusiness,
  contact: Send,
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export default function Navbar() {

  return (
    <header className="glass-navbar sticky top-0 z-40 w-full">
      <nav
        aria-label="Main navigation"
        className="container-shell flex min-h-16 w-full min-w-0 items-center justify-between gap-2 py-3 sm:gap-4"
      >
        <Link
          href="#services"
          aria-label={site.name}
          title={site.name}
          className="shrink-0 text-sm font-semibold tracking-tight text-[var(--foreground)]"
        >
          <span className="md:hidden">{getInitials(site.name)}</span>
          <span className="hidden md:inline">{site.name}</span>
        </Link>

        <div className="flex min-w-0 shrink-0 items-center gap-0.5 sm:gap-2 md:gap-5">
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
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
