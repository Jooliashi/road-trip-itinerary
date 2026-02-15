import { Thermometer, Camera, Sun, Shirt } from "lucide-react"

const tips = [
  {
    icon: Thermometer,
    title: "March Weather",
    items: [
      "Phoenix: 21\u201329\u00b0C (warm, sunny)",
      "Flagstaff: 2\u201313\u00b0C (chilly, possible snow)",
      "Grand Canyon rim: \u22121 to 10\u00b0C (cold, windy at rim)",
      "Inner canyon (Plateau Point): 4\u201315\u00b0C (warmer below the rim)",
    ],
  },
  {
    icon: Shirt,
    title: "What to Pack",
    items: [
      "Layers \u2014 temperature swings from desert to mountains",
      "Warm jacket for Flagstaff & the Grand Canyon rim",
      "Sturdy hiking boots (broken in!) for Bright Angel Trail",
      "Trekking poles recommended \u2014 the 3,200 ft climb out is tough on knees",
    ],
  },
  {
    icon: Sun,
    title: "Essentials",
    items: [
      "Sunscreen & sunglasses (desert sun is intense)",
      "1L+ water bottle per person \u2014 critical for the hike",
      "High-energy snacks & packed lunch for the trail",
      "National Park pass ($35/vehicle or $80 annual)",
    ],
  },
  {
    icon: Camera,
    title: "Photo Ops",
    items: [
      "Golden hour at the Canyon rim (sunset ~6:30 PM)",
      "Sedona red rocks from Highway 179",
      "Jerome overlook of Verde Valley",
    ],
  },
]

export function PackingTips() {
  return (
    <section className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground">
          Before You Go
        </p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          Good to Know
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-lg border border-border bg-background p-6"
            >
              <div className="flex items-center gap-3">
                <tip.icon className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl text-foreground">
                  {tip.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {tip.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
