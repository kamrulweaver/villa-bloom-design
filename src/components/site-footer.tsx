import { Facebook, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logo from "@/assets/seaweed-logo.png";


export function SiteFooter() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <img
            src={logo}
            alt="Seaweed Luxury Villa"
            width={220}
            height={68}
            loading="lazy"
            className="h-14 w-auto"
          />

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            A six-bedroom oceanfront villa on Jamaica&apos;s south coast, part of the Jakes
            collection of Treasure Beach villas.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            {[
              ["Villa Features", "#villa"],
              ["Photos", "#gallery"],
              ["Experiences", "#experiences"],
              ["Rates & Booking", "#rates"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-secondary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
              <span>
                Jakes Hotel Villa &amp; Spa
                <br />
                Calabash Bay, Treasure Beach
                <br />
                St. Elizabeth, Jamaica W.I.
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
              <a href="tel:+18775262428" className="hover:text-secondary">
                1-877-526-2428
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
              <a href="mailto:reservations@seaweedvilla.com" className="hover:text-secondary">
                reservations@seaweedvilla.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Stay in touch
          </h3>
          <p className="mt-5 text-sm text-primary-foreground/75">
            Seasonal rates, availability and island news — a few times a year.
          </p>
          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:border-secondary focus:outline-none"
            />
            <button type="submit" className="btn-base btn-primary shrink-0">
              Sign up
            </button>
          </form>
          <div className="mt-6 flex gap-3">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-secondary hover:text-secondary"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-secondary hover:text-secondary"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Seaweed Luxury Villa. All rights reserved.</p>
          <p>Privacy Policy · A Jakes Villa Collection property</p>
        </div>
      </div>
    </footer>
  );
}
