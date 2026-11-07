"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/layout/Logo";

type HeaderProps = {
  content: Dictionary["site"];
  navigation: Dictionary["navigation"];
};

function LanguageSwitcher({
  content,
  compact = false,
}: {
  content: Dictionary["site"]["language"];
  compact?: boolean;
}) {
  const noteId = useId();

  return (
    <div className="flex flex-col gap-1">
      <div
        role="group"
        aria-label={content.label}
        aria-describedby={noteId}
        className="flex flex-wrap gap-1"
      >
        {content.options.map((option) => (
          <button
            key={option.code}
            type="button"
            aria-pressed={option.available}
            aria-disabled={option.available ? undefined : true}
            onClick={(event) => {
              // Unavailable languages stay visible so the switcher has a home,
              // but they do not change the page yet.
              if (!option.available) {
                event.preventDefault();
              }
            }}
            className={`min-h-11 rounded-full px-3 text-sm font-semibold ${
              option.available
                ? "bg-grove text-white"
                : "border border-line bg-paper text-muted"
            }`}
          >
            {option.short}
            <span className="sr-only">
              {option.available
                ? `, ${option.name}, selected`
                : `, ${option.name}, coming later`}
            </span>
          </button>
        ))}
      </div>
      <p id={noteId} className={compact ? "sr-only" : "max-w-xs text-xs leading-snug text-muted"}>
        {content.note}
      </p>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header({ content, navigation }: HeaderProps) {
  const pathname = usePathname();
  const menuId = useId();
  // The menu stays open only for the path it was opened on, so a navigation
  // closes it without an effect that sets state.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-3">
          <Link
            href="/"
            className="flex min-h-11 shrink items-center rounded-lg"
            aria-label={content.logoAlt}
          >
            <Logo priority className="h-11 w-auto sm:h-14" />
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden xl:block">
              <LanguageSwitcher content={content.language} compact />
            </div>
            <ButtonLink href={content.donateHref} variant="clay">
              {content.donateLabel}
            </ButtonLink>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink xl:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpenPath(open ? null : pathname)}
            >
              <span className="sr-only">
                {open ? content.menuClose : content.menuOpen}
              </span>
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <nav
          aria-label={content.primaryNavLabel}
          className="hidden flex-wrap gap-x-4 gap-y-2 border-t border-line py-3 xl:flex"
        >
          {navigation.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center text-sm font-semibold ${
                  current ? "text-grove underline decoration-gold underline-offset-4" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open ? (
        <nav
          id={menuId}
          aria-label={content.mobileNavLabel}
          className="border-t border-line bg-paper px-4 py-4 xl:hidden"
        >
          <ul className="flex flex-col">
            {navigation.map((item) => {
              const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className="flex min-h-11 items-center text-base font-semibold text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 border-t border-line pt-4">
            <LanguageSwitcher content={content.language} />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
