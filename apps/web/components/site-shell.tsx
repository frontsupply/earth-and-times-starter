"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationSections, type NavRoute } from "../lib/routes";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="min-h-screen bg-void text-bone">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="site-navigation"
        className="fixed right-5 top-5 z-50 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.22em] text-ash backdrop-blur transition hover:border-white/20 hover:text-bone"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <>
          <button
            aria-label="Close menu"
            className="fixed inset-0 z-30 bg-black/45"
            onClick={() => setOpen(false)}
          />
          <aside
            id="site-navigation"
            className="panel fixed inset-y-4 right-4 z-40 w-[320px] overflow-y-auto rounded-[2rem] p-6"
          >
            <div className="mb-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ash">
                Hidden Navigation
              </div>
              <div className="mt-2 font-display text-3xl text-bone">Earth &amp; Times</div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-ash">
                A living biblical clock and witnessing tool with a scripture-first
                observatory interface.
              </p>
            </div>

            <nav className="space-y-8">
              {navigationSections.map((section) => (
                <div key={section.title}>
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
                    {section.title}
                  </div>
                  <div className="space-y-3">
                    {section.routes.map((route) => (
                      <NavLink
                        key={route.href}
                        pathname={pathname}
                        route={route}
                        onSelect={() => setOpen(false)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </aside>
        </>
      )}

      {children}
    </div>
  );
}

function NavLink({
  pathname,
  route,
  onSelect,
}: {
  pathname: string;
  route: NavRoute;
  onSelect: () => void;
}) {
  const isActive = pathname === route.href || pathname.startsWith(`${route.href}/`);

  return (
    <div className="space-y-2">
      <Link
        href={route.href}
        className={`block rounded-2xl border px-4 py-3 transition ${
          isActive
            ? "border-white/20 bg-white/5 text-bone"
            : "border-white/5 bg-white/[0.02] text-ash hover:border-white/10 hover:text-bone"
        }`}
        onClick={onSelect}
      >
        <div className="font-display text-2xl leading-none">{route.label}</div>
        <div className="mt-2 text-sm leading-6">{route.description}</div>
      </Link>

      {route.children?.length ? (
        <div className="space-y-2 pl-3">
          {route.children.map((child) => {
            const isChildActive =
              pathname === child.href || pathname.startsWith(`${child.href}/`);

            return (
              <Link
                key={child.href}
                href={child.href}
                className={`block border-l pl-4 text-sm leading-6 transition ${
                  isChildActive
                    ? "border-apricot text-bone"
                    : "border-white/10 text-ash hover:border-white/20 hover:text-bone"
                }`}
                onClick={onSelect}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
