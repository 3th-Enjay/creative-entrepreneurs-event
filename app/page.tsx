import type React from "react"
import { Playfair_Display } from "next/font/google"
import FallingStars from "@/components/falling-stars"
import SpeakerCard, { type Speaker } from "@/components/speaker-card"
import {
  MessageCircle,
  Briefcase,
  Compass,
  FlaskConical,
  Banknote,
  Cpu,
  Rocket,
  GraduationCap,
  MapPin,
} from "lucide-react"
import Image from "next/image"

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
})

const speakers: Speaker[] = [
  {
    name: "Kenneth Eze",
    role: "President, Enugu State Young Farmers Association (ENSYFA)",
    imageAlt: "Professional headshot of Kenneth Eze",
    imageSrc: "/images/kenneth-eze.jpeg",
    bio: "Visionary agricultural advocate empowering youths across 17 LGAs with practical farming skills and innovative strategies for sustainable agriculture.",
    twitter: "https://twitter.com/KennethEze",
    linkedin: "https://www.linkedin.com/in/kenneth-eze",
    instagram: "https://www.facebook.com/kenneth.eze",
  },
  {
    name: "Sophia Owuatu",
    role: "ED, Tomorrow's Leaders Today Initiative & Founder, ATRIUM Hub",
    imageAlt: "Professional headshot of Sophia Owuatu",
    imageSrc: "/images/sophia-owuatu.jpeg",
    bio: "Law graduate, certified social project manager, and business developer passionate about education transformation and youth empowerment across Africa.",
    twitter: "https://x.com/sophia_onwuatu",
    linkedin: "https://www.linkedin.com/in/sophia-onwuatu-1a395b1b3",
    instagram: "https://www.instagram.com/p/DJIBwTDNm_o/",
  },
  {
    name: "Rev Prince Ugochukwu Okparaocha",
    role: "CEO, Fountain of Life Educational & School Management Consult",
    imageAlt: "Professional headshot of Rev Prince Ugochukwu Okparaocha",
    imageSrc: "/images/rev-prince.png",
    bio: "Dynamic educational consultant committed to raising standards in schools and empowering educators for excellence across Nigeria.",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Adanma Chinyere Otuonye",
    role: "Founder & CEO, Sparks Ventures Hub",
    imageAlt: "Professional headshot of Adanma Chinyere Otuonye",
    imageSrc: "/images/adanma-otuonye.jpeg",
    bio: "Innovation leader and digitalisation specialist who has trained 10,000+ women on digital skills and supported 100+ businesses access $5M in grants.",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "PAG Chijioke Innocent Ilegbune",
    role: "Chief of Staff, Hon Commissioner for Agriculture, Enugu State",
    imageAlt: "Professional headshot of PAG Chijioke Innocent Ilegbune",
    imageSrc: "/images/chijioke-innocent.jpeg",
    bio: "Healthcare executive and distinguished Rotary leader with over 20 years experience, currently serving in agricultural development for Enugu State.",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Solomon Okeke",
    role: "Founder, Impactfield Global Youth Initiative & FELM Institute",
    imageAlt: "Professional headshot of Solomon Okeke",
    imageSrc: "/images/solomon-okeke.jpeg",
    bio: "Prolific writer of 12 books, visionary leader, and entrepreneur building world-class enterprises while empowering African youth through strategic leadership.",
    twitter: "https://www.tiktok.com/@drchiedozieokeke",
    linkedin: "https://www.linkedin.com/in/solomon-okeke-922bb8149",
    instagram: "https://www.facebook.com/okeke.solomon.372",
  },
  {
    name: "Nwatu Nj Nelson",
    role: "Digital Entrepreneur & Innovation Strategist",
    imageAlt: "Professional headshot of Nwatu Nj Nelson",
    imageSrc: "/images/nelson-nwatu.jpeg",
    bio: "Dynamic digital entrepreneur and strategic thinker passionate about leveraging technology and innovation to create scalable solutions and drive meaningful impact in the entrepreneurial ecosystem.",
    twitter: "https://x.com/enjay4l",
    linkedin: "https://www.linkedin.com/in/nelson-nwatu-nj/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Pastor Fabian Ejilaka",
    role: "Lead Pastor & Summit Convener",
    imageAlt: "Professional headshot of Pastor Fabian Ejilaka",
    imageSrc: "/images/pastor-fabian.jpeg",
    bio: "Visionary leader passionate about entrepreneurship and kingdom impact, bringing together thought leaders to shape the next generation.",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
]

// Replace with your real WhatsApp invite link
const WHATSAPP_INVITE_URL = "https://chat.whatsapp.com/Bxqtc772sFuL2qrxJhL2Ga?mode=ac_t"

export const metadata = {
  title: "Creative Entrepreneurs — The Voice of Restoration International Ministry",
  description:
    "An engaging event by The Voice of Restoration International Ministry. Explore speakers, features, and join the WhatsApp community.",
}

export default function Page() {
  return (
    <div
      className={[
        "min-h-[100dvh] text-white relative overflow-hidden",
        // font var
        display.variable,
      ].join(" ")}
      style={{ fontFamily: "var(--font-display), ui-sans-serif, system-ui" as any }}
    >
      {/* Layer 1: Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        // Deep night sky gradient backdrop
        style={{
          background: "radial-gradient(ellipse at 20% 0%, #0b1b6a 0%, #090f2e 45%, #070b1f 100%)",
        }}
      />

      {/* Layer 2: Noise overlay (operational) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: "url('/textures/noise.png')",
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Layer 3: Falling stars (visible) */}
      <FallingStars density={0.7} maxStarSize={2.4} />

      {/* Content layer */}
      <div className="relative z-20">
        <header className="pt-8 pb-4">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Glass container with gradient from purple to blue */}
            <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md p-5 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/80">
                  Presented by The Voice of Restoration International Ministry
                </div>
                {/* Church Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src="/images/church-logo.png"
                      alt="The Voice of Restoration International Ministry Logo"
                      width={160}
                      height={160}
                      className="rounded-lg object-contain shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
                  </div>
                </div>
                <h1
                  className="text-3xl sm:text-5xl font-extrabold tracking-tight"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.35)" }}
                >
                  Creative Entrepreneurs
                </h1>
                <p
                  className="max-w-xl text-white/85 text-sm sm:text-base"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.45)" }}
                >
                  A summit geared towards provoking innovative thinkers who can take bold steps, carving a niche for
                  themselves, shaping national economy and impacting kingdom authority on earth as we approach the end
                  of this age.
                </p>

                {/* Event Date, Time, and Venue */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                    <span className="text-sm font-medium">📅 August 30th</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                    <span className="text-sm font-medium">🕒 3:00 PM</span>
                  </div>
                </div>

                {/* Venue Information */}
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 max-w-md">
                  <MapPin className="h-4 w-4 text-white/80 flex-shrink-0" />
                  <span className="text-sm font-medium text-center">
                    19 Ikwuano Close, Military Zone, Ifoh Layout, Abakpa Nike, Enugu, Nigeria
                  </span>
                </div>

                {/* WhatsApp CTA (unchanged) */}
                <div className="pt-2">
                  <a
                    href={WHATSAPP_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Click to join the WhatsApp group"
                    className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    <span
                      className="absolute inset-0 -z-10 rounded-full bg-emerald-400/30 blur-md opacity-70 group-hover:opacity-90 transition"
                      aria-hidden="true"
                    />
                    <span
                      className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-300/20 animate-ping"
                      aria-hidden="true"
                    />
                    <MessageCircle className="h-5 w-5" />
                    <span>Click Me to Join WhatsApp Group</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Inspirational Quote Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">A Word on Entrepreneurship</h2>
                <p className="text-white/70 text-sm">From Pastor Fabian</p>
              </div>
              <blockquote className="text-white/90 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  Entrepreneurship is more than just starting a business; it's about seeing potential where others see
                  limits.
                </p>
                <p>
                  It's the remarkable ability to take what is scarce—sometimes even what seems like nothing—and turn it
                  into something valuable, something that can grow and benefit not just you but the world around you.
                </p>
                <p>
                  A true entrepreneur isn't satisfied with what already exists. They look for the gaps, the unmet needs,
                  and the overlooked problems in the market. Where others see a challenge, they see an opportunity to
                  create something new.
                </p>
                <p>
                  God, in His infinite wisdom, took what didn't exist and spoke the world into being. In the same way,
                  an entrepreneur brings ideas to life by crafting solutions.
                </p>
                <p>
                  Entrepreneurs look at a seed and envision a forest. They understand that growth takes time, effort,
                  and a deep sense of belief in their vision. It's not just about making money; it's about creating
                  value where there was none.
                </p>
                <p>
                  Entrepreneurs see the world not as it is, but as what it could be. They are constantly asking, "What
                  can I do better? Where is there a need that hasn't been addressed? How can I improve on what's already
                  out there?"
                </p>
                <p className="font-semibold">
                  In the end, an entrepreneur's role is to serve—to serve the market, to serve people, and ultimately,
                  to serve a higher purpose. They create solutions not just to make a profit but to make a difference.
                  That's what sets them apart.
                </p>
                <p className="italic">
                  So, when you think about entrepreneurship, think of it as the art of creating something better for the
                  betterment of all.
                </p>
              </blockquote>
              <div className="mt-6 text-center">
                <cite className="text-white/80 font-medium">— Pastor Fabian</cite>
              </div>
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-center">About This Summit</h3>
                <p className="text-white/85 text-center leading-relaxed">
                  This summit is geared towards provoking innovative thinkers who can take bold steps, carving a niche
                  for themselves, shaping national economy and impacting kingdom authority on earth as we approach the
                  end of this age. It's an opportunity to gain new skills, knowledge and build an enhanced network with
                  other successful entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <main>
          {/* Speakers FIRST for visibility */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Speakers</h2>
                <p className="text-white/70 text-sm sm:text-base mt-1">
                  Meet the professionals, experts, and thought leaders from business, tech, government, and
                  entrepreneurship sharing their expertise.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {speakers.map((sp) => (
                <SpeakerCard key={sp.name} {...sp} />
              ))}
            </div>
          </section>

          {/* Feature highlights SECOND */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">What You&apos;ll Gain</h2>
            <p className="text-center text-white/70 mt-2 text-sm sm:text-base">
              Practical knowledge, visionary leadership, and the tools to build and scale with confidence.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <FeatureCard
                icon={<Briefcase className="h-5 w-5" />}
                title="Business Knowledge"
                desc="Real-world strategies for operations, marketing, and sustainable growth."
              />
              <FeatureCard
                icon={<Compass className="h-5 w-5" />}
                title="Visionary Leadership Skills"
                desc="Lead with clarity, character, and a compelling vision that inspires action."
              />
              <FeatureCard
                icon={<FlaskConical className="h-5 w-5" />}
                title="Business Incubation"
                desc="Support structures, mentorship, and peer accountability to ship faster."
              />
              <FeatureCard
                icon={<Banknote className="h-5 w-5" />}
                title="Access to Financial Grants"
                desc="Navigate opportunities, applications, and readiness for funding."
              />
              <FeatureCard
                icon={<Cpu className="h-5 w-5" />}
                title="Tech Knowledge"
                desc="Turn modern tools into leverage for product, content, and workflow."
              />
              <FeatureCard
                icon={<Rocket className="h-5 w-5" />}
                title="Startup Entrepreneurship"
                desc="From idea validation to go-to-market and early traction."
              />
              <FeatureCard
                icon={<GraduationCap className="h-5 w-5" />}
                title="Effective School Management"
                desc="Leadership, curriculum planning, and systems that empower learning."
              />
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-black/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
              <p>© {new Date().getFullYear()} Creative Entrepreneurs. All rights reserved.</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="mailto:tvoriministries@gmail.com" className="hover:text-white transition-colors">
                  tvoriministries@gmail.com
                </a>
                <span className="hidden sm:block">•</span>
                <span className="text-xs">The Voice of Restoration International Ministry</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 text-white backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20">
          {icon}
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
          <p className="text-xs sm:text-sm text-white/75 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  )
}
