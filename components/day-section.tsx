import Image from "next/image"
import { TimelineStop, type Stop } from "./timeline-stop"

interface DaySectionProps {
  id: string
  dayNumber: number
  date: string
  title: string
  subtitle: string
  headerImage: string
  headerImageAlt: string
  stops: Stop[]
}

export function DaySection({
  id,
  dayNumber,
  date,
  title,
  subtitle,
  headerImage,
  headerImageAlt,
  stops,
}: DaySectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      {/* Day header banner */}
      <div className="relative overflow-hidden">
        <div className="relative h-64 md:h-80">
          <Image
            src={headerImage}
            alt={headerImageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(20,20%,12%)]/60" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-[hsl(30,25%,80%)]">
              Day {dayNumber} — {date}
            </span>
            <h2 className="mt-3 font-serif text-4xl text-[hsl(30,25%,95%)] md:text-5xl text-balance">
              {title}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[hsl(30,20%,75%)]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline content */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-12">
        {stops.map((stop, i) => (
          <TimelineStop
            key={stop.title}
            stop={stop}
            index={i}
            isLast={i === stops.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
