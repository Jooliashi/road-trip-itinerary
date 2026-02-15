"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/hero"
import { DayNav } from "@/components/day-nav"
import { TripOverview } from "@/components/trip-overview"
import { DaySection } from "@/components/day-section"
import { PackingTips } from "@/components/packing-tips"
import { CostEstimate } from "@/components/cost-estimate"
import { AccommodationOptions } from "@/components/accommodation-options"
import type { Stop } from "@/components/timeline-stop"

/* ------------------------------------------------------------------ */
/*  DAY 1 — March 22: Phoenix → Flagstaff via scenic route            */
/* ------------------------------------------------------------------ */
const day1Stops: Stop[] = [
  {
    time: "Early Afternoon",
    title: "Arrive in Phoenix",
    location: "Phoenix Sky Harbor International Airport (PHX)",
    description:
      "Everyone touches down throughout the early afternoon. Pick up your rental car and regroup at the airport. Grab a coffee and snacks for the road \u2014 you\u2019ll be heading north as soon as the last person lands.",
    tags: ["Arrival", "Rental Car"],
    image: "/images/phoenix.jpg",
    imageAlt: "Phoenix skyline at sunset with saguaro cactus silhouettes",
    tip: "Book a full-size SUV or minivan for 5 people plus luggage. The rental car area is connected to the terminals via the PHX Sky Train. Designate one person to pick up the car while others collect bags.",
  },
  {
    time: "~4:00 PM",
    title: "Hit the Road \u2014 I-17 North",
    location: "Interstate 17 Northbound",
    description:
      "Head north on I-17 and watch the landscape shift from sprawling desert suburbs to rugged high-desert terrain. The elevation climbs rapidly \u2014 you\u2019ll gain over 5,000 ft by the time you reach Flagstaff. The late-afternoon light makes the desert glow in warm golden tones.",
    driveInfo: "~145 mi direct \u2022 2 hrs to Flagstaff",
    tags: ["Scenic Drive", "Desert to Mountains"],
    image: "/images/desert-road.jpg",
    imageAlt: "Open Arizona highway stretching through desert landscape",
  },
  {
    time: "~5:15 PM",
    title: "Quick Stretch at Sunset Point Rest Area",
    location: "Sunset Point Rest Area \u2014 I-17 Mile Marker 252",
    description:
      "About halfway up I-17, pull over at this scenic rest stop perched on the edge of the Black Canyon. Stretch your legs, use the restrooms, and enjoy sweeping views of the Agua Fria River Valley. On clear evenings the sunset here is gorgeous \u2014 and it\u2019s perfectly timed for your drive.",
    driveInfo: "~65 mi from Phoenix \u2022 10 min stop",
    tags: ["Rest Stop", "Valley Views", "Sunset"],
    tip: "This is a great spot to take your first group photo. The rest area has clean facilities, picnic tables, and interpretive signs about the local geology.",
  },
  {
    time: "~6:30 PM",
    title: "Check In to Flagstaff",
    location: "Flagstaff, AZ",
    description:
      "Arrive in this charming mountain town as dusk settles over the pines. Check into your hotel and freshen up. Flagstaff sits at 7,000 ft and the historic downtown along Route 66 has great restaurants and breweries. Head out for a welcome dinner at Brix Restaurant & Wine Bar, Coppa Caf\u00e9, or the beloved Criollo Latin Kitchen.",
    tags: ["Check-in", "Downtown Flagstaff", "Dinner"],
    image: "/images/flagstaff.jpg",
    imageAlt: "Historic downtown Flagstaff with Route 66 charm and pine trees",
    tip: "Book lodging in advance \u2014 Flagstaff is a popular base for Grand Canyon visitors in March. The Little America Hotel or the historic Hotel Monte Vista are great picks.",
  },
  {
    time: "8:00 PM",
    title: "Dinner & Downtown Flagstaff Stroll",
    location: "Historic Route 66 District, Flagstaff",
    description:
      "After settling in, walk the historic downtown blocks along Route 66. The neon signs and brick storefronts have an old-school charm. After dinner, grab craft beers at Mother Road Brewing Company or Lumberyard Brewing Company. Early night recommended \u2014 tomorrow is a big Grand Canyon day.",
    tags: ["Dinner", "Route 66", "Craft Beer"],
  },
]

/* ------------------------------------------------------------------ */
/*  DAY 2 — March 23: Grand Canyon South Rim day trip                 */
/* ------------------------------------------------------------------ */
const day2Stops: Stop[] = [
  {
    time: "5:30 AM",
    title: "Early Rise & Fuel Up",
    location: "Flagstaff, AZ",
    description:
      "It\u2019s a big day \u2014 set the alarm early. Grab a quick breakfast at Macy\u2019s European Coffeehouse (opens at 6 AM, a Flagstaff institution since 1980) or pack breakfast the night before. You want to be on the road by 6 AM to start hiking before the crowds.",
    tags: ["Breakfast", "Early Start"],
    tip: "Pack lunch, plenty of water (at least 1 liter per person), salty snacks, and energy bars the night before. The hike is strenuous and there are limited food options below the rim.",
  },
  {
    time: "6:00 AM",
    title: "Drive to Grand Canyon South Rim",
    location: "Highway 180 North to Grand Canyon",
    description:
      "Head north on Highway 180 through Kaibab National Forest. The road is straightforward and lightly trafficked at this hour. You\u2019ll arrive at the South Entrance before the main rush of day-trippers.",
    driveInfo: "~80 mi \u2022 1 hr 20 min",
    tags: ["Drive", "Kaibab Forest"],
  },
  {
    time: "7:30 AM",
    title: "Arrive at the South Rim & First Glimpse",
    location: "Grand Canyon Visitor Center",
    description:
      "Park near the Visitor Center (free parking, but fills by mid-morning). Walk to Mather Point for your first jaw-dropping view of the canyon. Take it in, snap a group photo, then head to the Bright Angel Trailhead near the Bright Angel Lodge \u2014 it\u2019s about a 10-minute walk or short shuttle ride west.",
    tags: ["Viewpoint", "Mather Point", "Visitor Center"],
    image: "/images/grand-canyon.jpg",
    imageAlt: "Grand Canyon South Rim with travelers at viewpoint",
    tip: "Entry is $35/vehicle (valid for 7 days). Arrive early to secure parking \u2014 by 10 AM the main lots can be full and you\u2019d need to use the shuttle from a remote lot.",
  },
  {
    time: "8:00 AM",
    title: "Bright Angel Trail \u2014 Hike to Plateau Point",
    location: "Bright Angel Trailhead, Grand Canyon Village",
    description:
      "The main event and arguably the best day hike on the South Rim. Follow the Bright Angel Trail 4.5 miles down through towering redwall limestone to Havasupai Gardens \u2014 a lush oasis with shade, seasonal water, and restrooms. At Havasupai Gardens, split onto the Plateau Point Trail for the final 1.5 miles. This last stretch is very flat and easy, so if you still have legs at this point it\u2019s not strenuous to add the 3-mile out-and-back. The payoff is enormous: Plateau Point sits on a flat promontory with a direct view 1,300 ft straight down to the Colorado River, and when you look up you\u2019ve got 360\u00b0 canyon walls encompassing you all around. Keep your eyes on the sky \u2014 California condors are regularly spotted here. The descent is deceptively easy; remember you still have the big 3,200 ft ascent back to the rim waiting for you.",
    tags: [
      "Bright Angel Trail",
      "Plateau Point",
      "12 mi Round Trip",
      "Strenuous",
    ],
    image: "/images/bright-angel-trail.jpg",
    imageAlt: "Hikers descending the Bright Angel Trail switchbacks into the Grand Canyon",
    tip: "March is one of the best times for this hike \u2014 cool temps (4\u201310\u00b0C in the canyon) but the upper trail can be icy early morning. Trekking poles and sturdy boots recommended. The NPS rule of thumb: it takes twice as long to hike up as down. Budget ~2.5 hrs down and ~4 hrs up.",
  },
  {
    time: "~2:30 PM",
    title: "Return to the Rim & Late Lunch",
    location: "Bright Angel Lodge / Grand Canyon Village",
    description:
      "After the climb back out, celebrate at the top. The Bright Angel Lodge is right at the trailhead \u2014 the Arizona Room serves steaks and canyon-view comfort food (first-come, first-served). Or grab a casual meal at the Maswik Lodge cafeteria across the way. You\u2019ve earned it.",
    tags: ["Lunch", "Post-Hike", "Canyon Views"],
    tip: "If the Arizona Room has a wait, Maswik Lodge is quicker. Sit outside on the rim walk with your food for the best views.",
  },
  {
    time: "3:30 PM",
    title: "Rim Walk & Desert View Watchtower (Optional)",
    location: "South Rim, Grand Canyon",
    description:
      "If the group has energy, walk a stretch of the paved Rim Trail near the village for different perspectives. For a bigger detour, drive the 25-mile Desert View Drive east to see the historic Desert View Watchtower \u2014 a 70-foot stone tower designed by Mary Colter in 1932 with stunning interior murals and panoramic views. Otherwise, simply relax on the rim benches and soak it in before heading back.",
    driveInfo: "Rim Trail: flat walk \u2022 Desert View: 50 mi round trip, ~1.5 hrs",
    tags: ["Rim Trail", "Desert View Watchtower", "Optional"],
  },
  {
    time: "~5:00 PM",
    title: "Sunset & Drive Back to Flagstaff",
    location: "Highway 180 South to Flagstaff",
    description:
      "Catch the late-afternoon golden light painting the canyon walls before heading back. The drive south on Highway 180 offers glimpses of the San Francisco Peaks. Back in Flagstaff, keep dinner low-key \u2014 you\u2019ll be tired. Coppa Caf\u00e9, Criollo Latin Kitchen, or takeout and an early night are all smart calls.",
    driveInfo: "~80 mi \u2022 1 hr 20 min",
    tags: ["Sunset", "Return Drive", "Dinner"],
  },
]

/* ------------------------------------------------------------------ */
/*  DAY 3 — March 24: Flagstaff → Phoenix via Jerome & Sedona         */
/* ------------------------------------------------------------------ */
const day3Stops: Stop[] = [
  {
    time: "8:30 AM",
    title: "Breakfast & Check Out",
    location: "Flagstaff, AZ",
    description:
      "Enjoy a final Flagstaff morning. Grab pastries and coffee at Late for the Train or a full breakfast at the Toasted Owl. Check out of your hotel and load up the car for the scenic return to Phoenix.",
    tags: ["Breakfast", "Check-out"],
  },
  {
    time: "9:30 AM",
    title: "Drive to Jerome",
    location: "Highway 89A South through Prescott National Forest",
    description:
      "Take the winding Highway 89A south through Prescott National Forest. The road descends from pine forests through dramatic switchbacks with stunning views of the Verde Valley unfolding below. Jerome appears perched on the mountainside like something out of a storybook.",
    driveInfo: "~60 mi \u2022 1 hr 15 min",
    tags: ["Scenic Drive", "Mountain Roads"],
  },
  {
    time: "10:45 AM",
    title: "Explore Jerome \u2014 The Ghost Town That Refused to Die",
    location: "Jerome, AZ",
    description:
      "This former copper mining boomtown (population once 15,000, now ~450) clings to the steep slopes of Cleopatra Hill and has reinvented itself as a thriving artist colony. Walk the historic streets and browse the Jerome Artists Cooperative Gallery for local painting, sculpture, and jewelry. Visit the quirky shops, haunted history exhibits, and stop at Caduceus Cellars or Passion Cellars for Arizona wine tasting.",
    tags: ["Art Galleries", "Wine Tasting", "Ghost Town History", "Shopping"],
    image: "/images/jerome.jpg",
    imageAlt: "Jerome Arizona historic hillside town with art galleries",
    tip: "Park at the large lot near the visitor center and explore on foot. The town is hilly but compact. Wine tasting rooms are typically open 11 AM \u2013 6 PM.",
  },
  {
    time: "12:30 PM",
    title: "Lunch in Jerome or Cottonwood",
    location: "Jerome / Cottonwood, AZ",
    description:
      "Enjoy lunch with a view at The Asylum Restaurant (inside the old Jerome Grand Hotel) for creative American cuisine and panoramic valley views, or drive 10 minutes down to Old Town Cottonwood for a more relaxed vibe and additional wine tasting rooms.",
    tags: ["Lunch", "Valley Views", "Wine Country"],
  },
  {
    time: "2:00 PM",
    title: "Chapel of the Holy Cross & Tlaquepaque Arts Village",
    location: "Sedona, AZ",
    description:
      "On your way through Sedona, make a stop at the Chapel of the Holy Cross \u2014 a striking modernist church built directly into the red rock buttes (designed by Marguerite Brunswig Staude, a student of Frank Lloyd Wright). Then walk through Tlaquepaque Arts & Shopping Village, an enchanting complex designed like a traditional Mexican village with over 45 galleries featuring fine art, sculpture, glass, ceramics, and Native American art.",
    driveInfo: "~30 mi from Jerome \u2022 45 min",
    tags: ["Architecture", "Chapel", "Art Galleries", "Shopping"],
    image: "/images/sedona.jpg",
    imageAlt: "Tlaquepaque Arts Village in Sedona with charming architecture",
    tip: "The Chapel is free and takes 15\u201320 min. Tlaquepaque is free admission; most shops open until 5 PM. Allow about 1\u20131.5 hours for both.",
  },
  {
    time: "3:45 PM",
    title: "Montezuma Castle National Monument",
    location: "Camp Verde, AZ \u2014 Exit 289 off I-17",
    description:
      "A quick detour just off I-17 on your way south. Step back 800 years at this remarkably preserved Sinagua cliff dwelling, built into a limestone alcove 90 feet above the valley floor. A short paved 1/3-mile loop leads to the base \u2014 one of the best-preserved cliff dwellings in North America and one of the first National Monuments (1906).",
    driveInfo: "~25 mi from Sedona \u2022 30 min",
    tags: ["National Monument", "Sinagua Culture", "Ancient History"],
    image: "/images/montezuma.jpg",
    imageAlt: "Montezuma Castle cliff dwelling nestled in limestone cliff",
    tip: "Entry is $10/person (free with National Parks Pass). The visit takes about 30\u201345 minutes. The visitor center has an excellent exhibit on Sinagua culture.",
  },
  {
    time: "4:45 PM",
    title: "Final Drive to Phoenix",
    location: "I-17 South to Phoenix",
    description:
      "Rejoin I-17 south for the final stretch back to Phoenix. Watch the landscape reverse its transformation \u2014 from high desert to the sprawling Sonoran valley floor. The last hour of driving is straightforward interstate through Black Canyon City and the northern suburbs.",
    driveInfo: "~85 mi \u2022 1 hr 20 min",
    tags: ["Return Drive"],
  },
  {
    time: "6:15 PM",
    title: "Arrive in Phoenix",
    location: "Phoenix, AZ",
    description:
      "Touch down back where it all started. If you have time before flights, grab a farewell dinner in downtown Phoenix \u2014 Pizzeria Bianco (nationally famous) or The Arrogant Butcher are excellent choices. Or head straight to PHX Sky Harbor for evening departures.",
    tags: ["Arrival", "Airport", "Farewell Dinner"],
  },
]

export default function ItineraryPage() {
  const [activeDay, setActiveDay] = useState("day-1")

  useEffect(() => {
    const sections = ["day-1", "day-2", "day-3"]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveDay(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Hero />
      <DayNav activeDay={activeDay} onDayChange={setActiveDay} />
      <TripOverview />

      <DaySection
        id="day-1"
        dayNumber={1}
        date="Sunday, March 22"
        title="Phoenix to Flagstaff"
        subtitle="Afternoon arrival, open road north, and a first evening in the mountain town on Route 66"
        headerImage="/images/desert-road.jpg"
        headerImageAlt="Arizona highway through desert landscape"
        stops={day1Stops}
      />

      <DaySection
        id="day-2"
        dayNumber={2}
        date="Monday, March 23"
        title="The Grand Canyon"
        subtitle="Bright Angel Trail to Plateau Point \u2014 a 12-mile hike into the canyon with views down to the Colorado River"
        headerImage="/images/grand-canyon.jpg"
        headerImageAlt="Grand Canyon South Rim panoramic view"
        stops={day2Stops}
      />

      <DaySection
        id="day-3"
        dayNumber={3}
        date="Tuesday, March 24"
        title="Flagstaff to Phoenix"
        subtitle="Jerome's ghost town art scene, Sedona galleries, Montezuma Castle cliff dwellings, and home to Phoenix"
        headerImage="/images/jerome.jpg"
        headerImageAlt="Jerome Arizona hillside town"
        stops={day3Stops}
      />

      <AccommodationOptions />
      <CostEstimate />
      <PackingTips />

      {/* Footer */}
      <footer className="border-t border-border bg-[hsl(20,20%,12%)] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
          <p className="font-serif text-2xl text-[hsl(30,25%,85%)]">
            Arizona Road Trip 2026
          </p>
          <p className="mt-3 text-sm text-[hsl(30,15%,55%)]">
            Phoenix &mdash; Flagstaff &mdash; Grand Canyon (Bright Angel Trail)
            &mdash; Jerome &mdash; Sedona &mdash; Montezuma Castle &mdash;
            Phoenix
          </p>
          <p className="mt-6 text-xs text-[hsl(30,10%,40%)]">
            March 22 &ndash; 24 &middot; 5 Travelers &middot; ~380 miles
          </p>
        </div>
      </footer>
    </main>
  )
}
