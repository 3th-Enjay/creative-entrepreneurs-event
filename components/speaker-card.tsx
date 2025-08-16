'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Instagram, Linkedin, Twitter } from 'lucide-react'

export type Speaker = {
  name: string
  role: string
  imageAlt: string
  imageSrc: string
  bio: string
  twitter?: string
  linkedin?: string
  instagram?: string
}

function SocialLink({
  href,
  label,
  children,
}: {
  href?: string
  label: string
  children: React.ReactNode
}) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/10 transition"
    >
      {children}
    </a>
  )
}

export default function SpeakerCard({
  name = "Speaker Name",
  role = "Role",
  imageSrc = "/placeholder.svg?height=400&width=400",
  imageAlt = "Speaker headshot",
  bio = "Short bio describing character and expertise.",
  twitter,
  linkedin,
  instagram,
}: Speaker) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white h-full">
      <CardHeader className="flex items-center justify-center pt-6">
        <div className="relative">
          <Image
            src={imageSrc || "/placeholder.svg?height=400&width=400&query=professional%20headshot"}
            alt={imageAlt}
            width={160}
            height={160}
            className="rounded-full object-cover ring-2 ring-white/20"
          />
          <span className="absolute -bottom-1 -right-1 inline-block h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-[#040C40]"></span>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 text-center px-6 pb-6">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-white/70">{role}</p>
        </div>
        <p className="text-sm leading-relaxed text-white/80">{bio}</p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <SocialLink href={twitter} label={`Connect with ${name} on Twitter`}>
            <Twitter className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={linkedin} label={`Connect with ${name} on LinkedIn`}>
            <Linkedin className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={instagram} label={`Connect with ${name} on Instagram`}>
            <Instagram className="h-4 w-4" />
          </SocialLink>
        </div>
      </CardContent>
    </Card>
  )
}
