import Image from "next/image"
import { cn } from "@/lib/utils"
import { Clock, MapPin, Car } from "lucide-react"

export interface Stop {
  time: string
  title: string
  location: string
  description: string
  image?: string
  imageAlt?: string
  tags?: string[]
  driveInfo?: string
  tip?: string
}

export function TimelineStop({
  stop,
  index,
  isLast,
}: {
  stop: Stop
  index: number
  isLast: boolean
}) {
  return (
    <div className="relative flex gap-6 pb-12 md:gap-10">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-sans font-semibold text-primary">
          {index + 1}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-border" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-muted-foreground">
            <Clock className="h-3 w-3" />
            {stop.time}
          </span>
          {stop.driveInfo && (
            <span className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground">
              <Car className="h-3 w-3" />
              {stop.driveInfo}
            </span>
          )}
        </div>

        <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
          {stop.title}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {stop.location}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground">
          {stop.description}
        </p>

        {stop.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {stop.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-sans text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {stop.tip && (
          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Tip:</span> {stop.tip}
            </p>
          </div>
        )}

        {stop.image && (
          <div className="mt-6 overflow-hidden rounded-lg">
            <div className="relative aspect-[16/9]">
              <Image
                src={stop.image}
                alt={stop.imageAlt || stop.title}
                fill
                className={cn("object-cover")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
