import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bath,
  BedDouble,
  ChefHat,
  Leaf,
  Quote,
  Star,
  Users,
  Waves,
  Wind,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import heroVilla from "@/assets/hero-villa.jpg";
import pool from "@/assets/pool.jpg";
import bedroom from "@/assets/bedroom.jpg";
import dining from "@/assets/dining.jpg";
import spa from "@/assets/spa.jpg";
import yoga from "@/assets/yoga.jpg";
import coast from "@/assets/coast.jpg";
import play from "@/assets/play.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seaweed Luxury Villa | Private Oceanfront Villa in Treasure Beach" },
      {
        name: "description",
        content:
          "Six bedrooms, 270° ocean views, infinity pool, spa and full staff on Jamaica's south coast. Rent the whole property or a single villa.",
      },
      {
        property: "og:title",
        content: "Seaweed Luxury Villa | Private Oceanfront Villa in Treasure Beach",
      },
      {
        property: "og:description",
        content:
          "Six bedrooms, 270° ocean views, infinity pool, spa and full staff on Jamaica's south coast. Rent the whole property or a single villa.",
      },
    ],
  }),
  component: Home,
});

const FEATURES = [
  {
    icon: BedDouble,
    title: "Six bedrooms, two villas",
    body: "A four-bedroom main villa and a two-bedroom sister villa on an acre and a half — take one, or take both.",
  },
  {
    icon: Waves,
    title: "Two-level infinity pool",
    body: "Mosaic and shellwork edges spilling toward 270 degrees of Caribbean Sea, with a hot tub alongside.",
  },
  {
    icon: ChefHat,
    title: "Private chef & full staff",
    body: "Housekeeping, a chef and a host from the Jakes family of hotels, looking after every day of your stay.",
  },
  {
    icon: Bath,
    title: "Spa, gym & steam shower",
    body: "Treatments on the veranda, a private gym above the ocean and outdoor showers under the sky.",
  },
  {
    icon: Wind,
    title: "Yoga deck & fitness",
    body: "Sunrise practice on an open-air deck, plus mountain bikes, kayaks and snorkelling gear for guests.",
  },
  {
    icon: Leaf,
    title: "Built with an eco-conscience",
    body: "Solar hot water, wind-generated power, reclaimed lumber, rainwater harvesting and local materials.",
  },
];

const STAYS = [
  {
    image: bedroom,
    name: "The Main Villa",
    meta: "4 bedrooms · sleeps 8–10",
    price: "from $1,450 / night",
    body: "Four ensuite bedrooms across two levels, a great room open to the sea, games room and full kitchen.",
  },
  {
    image: pool,
    name: "The Sister Villa",
    meta: "2 bedrooms · sleeps 4",
    price: "from $780 / night",
    body: "A self-contained two-bedroom house with its own veranda, ideal for a couple or a small family.",
  },
  {
    image: heroVilla,
    name: "The Whole Property",
    meta: "6 bedrooms · sleeps up to 14",
    price: "from $2,050 / night",
    body: "Both villas, the acre-and-a-half of gardens, the pool, the bar and the full staff — exclusively yours.",
  },
];

const EXPERIENCES = [
  { image: play, title: "Play", body: "Kayaks, snorkelling, boogie boards and seven mountain bikes." },
  { image: dining, title: "Eat", body: "Island menus by your chef, from breakfast to candlelit dinner." },
  { image: spa, title: "Spa", body: "Massage and treatments beside the hot tub and outdoor shower." },
  { image: yoga, title: "Yoga", body: "Sunrise sessions on the deck, with the sea for a soundtrack." },
];

const GALLERY = [
  { src: pool, alt: "Infinity pool overlooking the Caribbean Sea", span: "lg:col-span-2 lg:row-span-2" },
  { src: bedroom, alt: "Guest bedroom with louvered doors open to the ocean", span: "" },
  { src: dining, alt: "Outdoor dining table set at sunset", span: "" },
  { src: yoga, alt: "Yoga deck above the sea at sunrise", span: "" },
  { src: spa, alt: "Outdoor hot tub surrounded by tropical planting", span: "" },
];

const REVIEWS = [
  {
    quote:
      "We took the whole property for a family week. The staff made it feel like a small private hotel — and the view from the pool never got old.",
    name: "Robert F.",
    detail: "Whole property · 8 guests",
  },
  {
    quote:
      "Beautifully made, genuinely eco-minded and impeccably run. Breakfast on the veranda with the sea below is the memory everyone kept.",
    name: "Jenna D.",
    detail: "Main villa · 6 guests",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroVilla}
            alt="Seaweed Luxury Villa lit at dusk above its infinity pool"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/55 to-primary/85"
            aria-hidden="true"
          />
          <div className="shell relative flex min-h-[620px] flex-col justify-center py-24 md:min-h-[720px] lg:py-32">
            <p className="eyebrow text-secondary">Treasure Beach · Jamaica</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
              A private oceanfront villa, and the whole Caribbean in front of it.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Six bedrooms across two houses, a two-level infinity pool and 270 degrees of sea — with
              a chef, housekeeper and host from Jakes looking after every day.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="btn-base btn-primary">
                Check availability <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#gallery" className="btn-base btn-outline-light">
                View the villa
              </a>
            </div>
          </div>

          {/* Trust strip */}
          <div className="shell relative pb-14">
            <div className="grid gap-px overflow-hidden rounded-xl bg-border shadow-lift sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["270°", "Ocean views"],
                ["6", "Ensuite bedrooms"],
                ["1.5", "Acres, private"],
                ["4.9", "Guest rating"],
              ].map(([value, label]) => (
                <div key={label} className="bg-card px-6 py-7 text-center">
                  <p className="font-display text-3xl text-primary">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section id="villa" className="bg-background py-20 lg:py-28">
          <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <img
                src={coast}
                alt="Aerial view of the Treasure Beach coastline"
                width={1600}
                height={1000}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
              />
              <div className="relative z-10 mx-auto -mt-10 w-[88%] rounded-2xl bg-card p-6 shadow-lift md:mr-0 md:ml-auto md:w-2/3">
                <p className="font-display text-xl text-primary">
                  “Painted in turquoises and sea greens to echo the water it looks over.”
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Island Art Jamaica · Interiors
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">The property</p>
              <h2 className="mt-4 text-3xl leading-tight text-primary sm:text-4xl">
                The newest villa in the Jakes collection, on Jamaica&apos;s quiet south coast
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Seaweed sits on an acre and a half above the water in Calabash Bay, ten minutes from
                Jakes proper. Two buildings — a four-bedroom main villa and a two-bedroom sister
                villa — share the gardens, the pool and the staff. Hire the whole property, or just
                one house.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Inside, dark woods and organic furnishings made locally by Island Art Jamaica meet
                Jakes&apos; signature mosaic tiles, shell adornments and coloured bottles set into the
                walls.
              </p>
              <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  ["Sleeps", "Up to 14"],
                  ["Minimum stay", "3 nights"],
                  ["Staff", "Chef & host"],
                ].map(([k, v]) => (
                  <div key={k} className="border-l-2 border-secondary pl-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-1 font-display text-lg text-primary">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-sand py-20 lg:py-28">
          <div className="shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Villa features</p>
              <h2 className="mt-4 text-3xl leading-tight text-primary sm:text-4xl">
                Everything a private villa should be, and a few things it rarely is
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-soft"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surf">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAYS / RATES */}
        <section id="rates" className="bg-background py-20 lg:py-28">
          <div className="shell">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Ways to stay</p>
                <h2 className="mt-4 text-3xl leading-tight text-primary sm:text-4xl">
                  Choose one villa, or take the whole property
                </h2>
              </div>
              <p className="text-sm text-muted-foreground md:max-w-xs">
                Rates vary by season and include daily housekeeping and a host. Chef service and
                groceries are billed separately.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {STAYS.map((stay) => (
                <article
                  key={stay.name}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                >
                  <img
                    src={stay.image}
                    alt={stay.name}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean">
                      {stay.meta}
                    </p>
                    <h3 className="mt-3 text-2xl text-primary">{stay.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {stay.body}
                    </p>
                    <p className="mt-6 font-display text-lg text-primary">{stay.price}</p>
                    <a href="#booking" className="btn-base btn-solid mt-5 w-full">
                      Enquire
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCES */}
        <section id="experiences" className="bg-primary py-20 text-primary-foreground lg:py-28">
          <div className="shell">
            <div className="max-w-2xl">
              <p className="eyebrow text-secondary">The days here</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                Stay, play, eat, unwind — all within the gate
              </h2>
              <p className="mt-5 leading-relaxed text-primary-foreground/75">
                Treasure Beach is a fishing community, not a resort strip. Most guests find they
                never need to leave the property — but when they do, the coast is theirs to explore.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {EXPERIENCES.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-2xl bg-primary-foreground/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl text-primary-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-background py-20 lg:py-28">
          <div className="shell">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Photos</p>
                <h2 className="mt-4 text-3xl leading-tight text-primary sm:text-4xl">
                  A look around the villa
                </h2>
              </div>
              <a href="#booking" className="btn-base btn-outline-dark self-start md:self-auto">
                See the full gallery
              </a>
            </div>

            <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY.map((img) => (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className={`h-full w-full rounded-xl object-cover ${img.span}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ECO */}
        <section className="bg-sand py-20 lg:py-28">
          <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">Eco-conscience</p>
              <h2 className="mt-4 text-3xl leading-tight text-primary sm:text-4xl">
                Designed to sit lightly on this coastline
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Seaweed was architecturally designed to be sympathetic to its natural environment —
                pioneering a standard of luxury living with an eco-conscience on Jamaica&apos;s south
                coast.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Solar hot water",
                  "Wind-generated power",
                  "LED and day lighting",
                  "Reclaimed lumber",
                  "Natural river stone",
                  "Rainwater harvesting",
                  "Grey water to irrigation",
                  "Local adaptive planting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-primary">
                    <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={spa}
              alt="Outdoor spa area built from local stone and timber"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
        </section>

        {/* REVIEWS */}
        <section className="bg-background py-20 lg:py-28">
          <div className="shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Guest reviews</p>
              <h2 className="mt-4 text-3xl leading-tight text-primary sm:text-4xl">
                What guests say when they get home
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {REVIEWS.map((r) => (
                <figure
                  key={r.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft"
                >
                  <Quote className="h-7 w-7 text-secondary" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-primary">
                    {r.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <div>
                      <p className="font-semibold text-primary">{r.name}</p>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {r.detail}
                      </p>
                    </div>
                    <span className="flex gap-1" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING CTA */}
        <section id="booking" className="relative isolate overflow-hidden">
          <img
            src={pool}
            alt=""
            aria-hidden="true"
            width={1200}
            height={900}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
          <div className="shell relative grid gap-12 py-20 text-primary-foreground lg:grid-cols-2 lg:py-28">
            <div>
              <p className="eyebrow text-secondary">Enquire</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                Tell us your dates and we&apos;ll do the rest
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/75">
                Our reservations team replies within one business day with availability, a full rate
                breakdown and suggestions for transfers, chef menus and island days.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-secondary" aria-hidden="true" /> Up to 14 guests
                </span>
                <a href="tel:+18775262428" className="font-semibold text-secondary">
                  1-877-526-2428
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl bg-card p-7 text-foreground shadow-lift sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name" type="text" />
                <Field id="email" label="Email" type="email" />
                <Field id="arrive" label="Arrival" type="date" />
                <Field id="depart" label="Departure" type="date" />
                <Field id="guests" label="Guests" type="number" />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="villa-choice"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    Villa
                  </label>
                  <select
                    id="villa-choice"
                    className="h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:border-ocean focus:outline-none"
                  >
                    <option>Whole property</option>
                    <option>Main villa (4 bed)</option>
                    <option>Sister villa (2 bed)</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Anything we should know?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-base btn-solid mt-6 w-full">
                Request availability <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                No payment required to enquire.
              </p>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Field({ id, label, type }: { id: string; label: string; type: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:border-ocean focus:outline-none"
      />
    </div>
  );
}
