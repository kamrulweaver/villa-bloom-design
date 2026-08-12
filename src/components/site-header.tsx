import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/seaweed-logo.png.asset.json";

const NAV = [
  { label: "Villa Features", href: "#villa" },
  { label: "Photos", href: "#gallery" },
  { label: "Experiences", href: "#experiences" },
  { label: "Rates", href: "#rates" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="Seaweed Luxury Villa home">
          <img
            src={logo.url}
            alt="Seaweed Luxury Villa"
            width={220}
            height={68}
            className="h-11 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-primary/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+18775262428"
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4 text-ocean" aria-hidden="true" />
            1-877-526-2428
          </a>
          <a href="#booking" className="btn-base btn-primary">
            Check Availability
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>


      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-semibold text-primary hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="btn-base btn-primary mt-3 w-full"
            >
              Check Availability
            </a>
            <a
              href="tel:+18775262428"
              className="mt-2 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4 text-ocean" aria-hidden="true" /> 1-877-526-2428
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
