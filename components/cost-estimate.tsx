"use client"

import { useState } from "react"
import { DollarSign, Car, Ticket, Fuel, Users, Home } from "lucide-react"

type Currency = "USD" | "EUR" | "GBP"

const rates: Record<Currency, { symbol: string; rate: number; label: string }> =
  {
    USD: { symbol: "$", rate: 1, label: "USD" },
    EUR: { symbol: "\u20ac", rate: 0.92, label: "EUR" },
    GBP: { symbol: "\u00a3", rate: 0.79, label: "GBP" },
  }

function convert(usd: number, currency: Currency) {
  const { symbol, rate } = rates[currency]
  const val = Math.round(usd * rate)
  return `${symbol}${val}`
}

function convertRange(low: number, high: number, currency: Currency) {
  return `${convert(low, currency)} \u2013 ${convert(high, currency)}`
}

interface LineItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  totalLow: number
  totalHigh: number
  perPersonLow: number
  perPersonHigh: number
  note: string
}

const lineItems: LineItem[] = [
  {
    icon: Home,
    label: "Airbnb (2 nights, Flagstaff)",
    totalLow: 450,
    totalHigh: 550,
    perPersonLow: 90,
    perPersonHigh: 110,
    note: "Based on the shortlisted Flagstaff listings for 5 guests, 2 nights (Mar 22\u201324). See options above.",
  },
  {
    icon: Car,
    label: "SUV Rental (3 days, Phoenix airport)",
    totalLow: 180,
    totalHigh: 350,
    perPersonLow: 36,
    perPersonHigh: 70,
    note: "Full-size SUV or minivan for 5 + luggage. Prices vary by provider; book early for best rates. Includes taxes & airport fees.",
  },
  {
    icon: Fuel,
    label: "Gas (~380 miles total)",
    totalLow: 55,
    totalHigh: 75,
    perPersonLow: 11,
    perPersonHigh: 15,
    note: "Based on ~22 mpg SUV at ~$3.20\u2013$3.50/gal in Arizona. Flagstaff gas is slightly pricier than Phoenix.",
  },
  {
    icon: Ticket,
    label: "Grand Canyon National Park Entry",
    totalLow: 35,
    totalHigh: 35,
    perPersonLow: 7,
    perPersonHigh: 7,
    note: "Per-vehicle fee, valid for 7 days. Free with an annual America the Beautiful Pass ($80).",
  },
  {
    icon: Ticket,
    label: "Montezuma Castle National Monument",
    totalLow: 50,
    totalHigh: 50,
    perPersonLow: 10,
    perPersonHigh: 10,
    note: "$10 per person entry fee. Free with America the Beautiful Pass. Cashless only (card/mobile).",
  },
]

const totalLow = lineItems.reduce((s, i) => s + i.totalLow, 0)
const totalHigh = lineItems.reduce((s, i) => s + i.totalHigh, 0)
const ppLow = lineItems.reduce((s, i) => s + i.perPersonLow, 0)
const ppHigh = lineItems.reduce((s, i) => s + i.perPersonHigh, 0)

export function CostEstimate() {
  const [currency, setCurrency] = useState<Currency>("USD")

  return (
    <section className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground">
              Budget
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
              Estimated Costs
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Shared expenses for the group of 5, excluding food and personal
              spending. All prices are estimates in USD, converted at approximate
              rates.
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="flex shrink-0 items-center gap-1 rounded-lg border border-border bg-background p-1">
            {(Object.keys(rates) as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  currency === c
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {rates[c].symbol} {rates[c].label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-4">
          {lineItems.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-background p-5 md:p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.note}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-6 pl-14 md:gap-8 md:pl-0 md:text-right">
                  <div>
                    <p className="text-xs text-muted-foreground">Total</p>
                    <p className="font-serif text-xl text-foreground">
                      {item.totalLow === item.totalHigh
                        ? convert(item.totalLow, currency)
                        : convertRange(item.totalLow, item.totalHigh, currency)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Per Person</p>
                    <p className="font-serif text-xl text-primary">
                      {item.perPersonLow === item.perPersonHigh
                        ? convert(item.perPersonLow, currency)
                        : convertRange(
                            item.perPersonLow,
                            item.perPersonHigh,
                            currency
                          )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-8 rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-serif text-xl text-foreground">
                  Estimated Total
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Accommodation + car + gas + park entries for the group
                </p>
              </div>
            </div>
            <div className="flex gap-8 pl-8 md:pl-0 md:text-right">
              <div>
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="font-serif text-2xl text-foreground">
                  {convertRange(totalLow, totalHigh, currency)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Per Person</p>
                <p className="font-serif text-2xl text-primary">
                  {convertRange(ppLow, ppHigh, currency)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
          <Users className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Split 5 ways. Does not include meals, wine/beer tasting, or
            souvenirs. An America the Beautiful annual pass ($80) covers both
            Grand Canyon and Montezuma Castle &mdash; worth it if 2+ people in
            the group buy one. Currency conversions are approximate.
          </p>
        </div>
      </div>
    </section>
  )
}
