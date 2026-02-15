import Image from "next/image"
import { ExternalLink, Home, MapPin, Calendar, Users, ImageIcon } from "lucide-react"

const listings = [
  {
    id: "1",
    label: "Option A",
    airbnbUrl:
      "https://www.airbnb.co.uk/rooms/820498898519126942?adults=5&check_in=2026-03-22&check_out=2026-03-24",
    listingId: "820498898519126942",
    image: "/images/airbnb-a.jpg",
  },
  {
    id: "2",
    label: "Option B",
    airbnbUrl:
      "https://www.airbnb.co.uk/rooms/728331284962205734?adults=5&check_in=2026-03-22&check_out=2026-03-24",
    listingId: "728331284962205734",
    image: "/images/airbnb-b.jpg",
  },
  {
    id: "3",
    label: "Option C",
    airbnbUrl:
      "https://www.airbnb.co.uk/rooms/771170435233922731?adults=5&check_in=2026-03-22&check_out=2026-03-24",
    listingId: "771170435233922731",
    image: "/images/airbnb-c.jpg",
  },
]

export function AccommodationOptions() {
  return (
    <section className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground">
          Where We Stay
        </p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          Flagstaff Accommodation
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          We need a place for 5 people for 2 nights in Flagstaff (March 22
          &amp; 23). Here are three Airbnb options to choose from &mdash; click
          through to see photos, pricing, and availability.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Flagstaff, AZ
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            Mar 22 &ndash; 24 (2 nights)
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            5 guests
          </span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {listings.map((listing) => (
            <a
              key={listing.id}
              href={listing.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
            >
              {/* Image area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-secondary">
                {listing.image ? (
                  <Image
                    src={listing.image}
                    alt={`${listing.label} — Airbnb listing photo`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-xs">Add image to /public/images/airbnb-{listing.id === "1" ? "a" : listing.id === "2" ? "b" : "c"}.jpg</span>
                  </div>
                )}
                <div className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
                  {listing.label}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-5 py-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Click to view full listing details, photos, reviews, and
                  pricing on Airbnb.
                </p>

                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    View on Airbnb
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
