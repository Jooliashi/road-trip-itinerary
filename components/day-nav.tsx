"use client"

import { cn } from "@/lib/utils"

const days = [
  { id: "day-1", label: "Day 1", date: "Mar 22", title: "Phoenix to Flagstaff" },
  { id: "day-2", label: "Day 2", date: "Mar 23", title: "Grand Canyon" },
  { id: "day-3", label: "Day 3", date: "Mar 24", title: "Flagstaff to Phoenix" },
]

export function DayNav({
  activeDay,
  onDayChange,
}: {
  activeDay: string
  onDayChange: (id: string) => void
}) {
  return (
    <nav
      aria-label="Trip days navigation"
      className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-0 md:px-12">
        <p className="hidden font-serif text-lg text-foreground md:block">
          AZ Road Trip
        </p>
        <div className="flex w-full justify-center gap-1 md:w-auto md:justify-end md:gap-2">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => {
                onDayChange(day.id)
                document.getElementById(day.id)?.scrollIntoView({ behavior: "smooth" })
              }}
              className={cn(
                "flex flex-col items-center px-5 py-4 transition-colors",
                "border-b-2 text-sm font-sans",
                activeDay === day.id
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="text-xs uppercase tracking-wider">{day.label}</span>
              <span className="text-xs text-muted-foreground">{day.date}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
