import { Car, Mountain, Palette, Coffee } from "lucide-react"

const highlights = [
  {
    icon: Car,
    label: "Total Driving",
    value: "~380 mi",
    detail: "Round trip via scenic routes",
  },
  {
    icon: Mountain,
    label: "Grand Canyon",
    value: "12 mi Hike",
    detail: "Bright Angel Trail to Plateau Point",
  },
  {
    icon: Palette,
    label: "Cultural Stops",
    value: "5+",
    detail: "Art, history & architecture",
  },
  {
    icon: Coffee,
    label: "Nights in Flagstaff",
    value: "2",
    detail: "March 22 & 23",
  },
]

export function TripOverview() {
  return (
    <section className="border-b border-border bg-card py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground">
          At a Glance
        </p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          Trip Overview
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Three days through the heart of Arizona — an afternoon drive north to
          Flagstaff, a full day at the Grand Canyon, and a scenic cultural
          return through Jerome, Sedona, and ancient cliff dwellings.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-lg border border-border bg-background p-6"
            >
              <h.icon className="h-5 w-5 text-primary" />
              <p className="mt-4 font-serif text-2xl text-foreground">
                {h.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {h.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
