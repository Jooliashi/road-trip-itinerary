import Image from "next/image"
import { MapPin, Calendar, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      <Image
        src="/images/hero-canyon.jpg"
        alt="Grand Canyon at golden hour with dramatic layered rock formations"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,20%,12%)] via-[hsl(20,20%,12%)]/40 to-transparent" />

      <div className="relative z-10 w-full px-6 pb-16 pt-32 md:px-12 lg:px-20">
        <p className="mb-4 text-sm font-sans uppercase tracking-[0.3em] text-[hsl(30,25%,85%)]">
          Road Trip Itinerary
        </p>
        <h1 className="font-serif text-5xl leading-tight text-[hsl(30,25%,95%)] md:text-7xl lg:text-8xl text-balance">
          Phoenix to the
          <br />
          Grand Canyon
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[hsl(30,20%,78%)]">
          A 3-day cultural road trip through Arizona{"'"}s most breathtaking
          landscapes — from Sonoran desert to red rock country to the rim of the
          canyon itself.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-8 text-[hsl(30,25%,85%)]">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-sans">March 22 – 24, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="text-sm font-sans">5 Travelers</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-sans">
              Phoenix — Flagstaff — Grand Canyon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
