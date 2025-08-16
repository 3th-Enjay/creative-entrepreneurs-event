'use client'

import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  brightness: number
  twinkle: number
}

export default function FallingStars({
  density = 0.6,
  maxStarSize = 2.2,
}: {
  density?: number // stars per 1px of width (scaled later)
  maxStarSize?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.max(1, window.devicePixelRatio || 1)
    let stars: Star[] = []

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    function seedStars() {
      const count = Math.max(80, Math.floor(width * density)) // ensure enough stars on small screens
      stars = Array.from({ length: count }).map<Star>(() => ({
        x: rand(0, width),
        y: rand(0, height),
        size: rand(0.8, maxStarSize),
        // SLOWER speeds for a subtle background effect
        speedY: rand(12, 36) / 60,      // was rand(40, 120) / 60
        speedX: rand(-8, 8) / 60,       // was rand(-25, 25) / 60
        brightness: rand(0.65, 1),
        twinkle: rand(0.004, 0.01),
      }))
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.max(1, window.devicePixelRatio || 1)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seedStars()
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // draw stars
      for (let s of stars) {
        // motion and twinkle
        s.y += s.speedY
        s.x += s.speedX
        s.brightness += s.twinkle * (Math.random() > 0.5 ? 1 : -1)
        if (s.brightness < 0.4) s.brightness = 0.4
        if (s.brightness > 1) s.brightness = 1

        // respawn when out of view
        if (s.y - s.size > height) {
          s.y = -s.size
          s.x = Math.random() * width
        }
        if (s.x < -10) s.x = width + 10
        if (s.x > width + 10) s.x = -10

        // subtle trail
        ctx.beginPath()
        ctx.strokeStyle = `rgba(255,255,255,${0.18 * s.brightness})`
        ctx.lineWidth = Math.max(0.4, s.size * 0.5)
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.speedX * 10, s.y - s.speedY * 10)
        ctx.stroke()

        // bright core
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${0.95 * s.brightness})`
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [density, maxStarSize])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10"
    />
  )
}
