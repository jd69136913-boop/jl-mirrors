"use client"

import { useMemo, useState, useEffect } from "react"

export default function Home() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [glowColor, setGlowColor] = useState("0,255,255") 
  const [time, setTime] = useState(0)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const depthLayers = useMemo(() => Array.from({ length: 10 }, (_, i) => i), [])
  useEffect(() => {
  let frame: number

  const animate = () => {
    setTime((t) => t + 0.03)
    frame = requestAnimationFrame(animate)
  }

  animate()

  return () => cancelAnimationFrame(frame)
}, [])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            {/* LEFT SIDE */}
            <div className="max-w-xl">
              <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Handbuilt • Custom Designed • LED Lit
              </p>

              <h1 className="mb-5 text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
                Custom LED Infinity Mirrors That Actually Look Premium
              </h1>

              <p className="mb-6 max-w-lg text-base leading-7 text-gray-300 sm:text-lg">
                Turn your logo, artwork, brand, garage theme, sports design, or personal image
                into a custom infinity mirror with real depth, glow, and a finished look that
                stands out.
              </p>

              <div className="mb-7 grid gap-3 text-sm text-gray-200">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Built to order for garages, businesses, gifts, game rooms, bars, and custom decor.
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Real handcrafted presentation with LED glow and visual depth — not cheap mass-produced wall junk.
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Start with a live preview below, then move into your custom build.
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#preview"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
                >
                  Start Your Custom Build
                </a>

                <a
                  href="#gallery"
                  className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View Recent Builds
                </a>
              </div>
            </div>

            {/* RIGHT SIDE HERO IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px]">
                <div
                  className="absolute -inset-4 rounded-[34px]"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0,255,180,0.16), rgba(0,0,0,0) 72%)",
                    filter: "blur(20px)",
                  }}
                />
                <img
                  src="/images/mirror.jpg"
                  alt="Featured custom infinity mirror"
                  className="relative z-10 w-full rounded-[28px] border border-white/10 bg-zinc-900 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7">
            <h2 className="text-3xl font-bold md:text-4xl">Recent Builds</h2>
            <p className="mt-2 text-gray-400">
              Real custom work. Real depth. Real visual impact.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <img
              src="/images/mirror1.jpg"
              alt="Featured custom infinity mirror"
              className="h-64 w-full rounded-2xl border border-white/10 bg-zinc-900 object-cover"
            />
            <img
              src="/images/mirror2.jpg"
              alt="Custom infinity mirror sample 2"
              className="h-64 w-full rounded-2xl border border-white/10 bg-zinc-900 object-cover"
            />
            <img
              src="/images/mirror3.jpg"
              alt="Custom infinity mirror sample 3"
              className="h-64 w-full rounded-2xl border border-white/10 bg-zinc-900 object-cover"
            />
            <img
              src="/images/mirror4.jpg"
              alt="Custom infinity mirror sample 4"
              className="h-64 w-full rounded-2xl border border-white/10 bg-zinc-900 object-cover"
            />
          </div>
        </div>
      </section>

      {/* SALES POINTS */}
      <section className="px-6 py-10 md:px-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Built To Be Seen. Built To Be Remembered.
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-gray-400">
              These are not flat printed signs and not cheap plastic decor. Every custom infinity
              mirror is built to create depth, glow, and a finished look that gets attention.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold">Built Around Your Design</h3>
              <p className="text-gray-400">
                Logos, names, memorial pieces, garage signs, sports themes, automotive designs,
                business branding, and one-off custom concepts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold">Made To Stand Out</h3>
              <p className="text-gray-400">
                The goal is not just decoration. The goal is a piece with visual depth, glow,
                contrast, and presence when somebody walks into the room.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold">Real Custom Work</h3>
              <p className="text-gray-400">
                Every build is treated like a real project. That means stronger presentation,
                cleaner detail, and a more premium finished result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW / UPLOAD */}
      <section id="preview" className="px-6 py-10 pb-20 md:px-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold md:text-4xl">Preview Your Custom Mirror</h2>
              <p className="mt-2 max-w-3xl text-gray-400">
                Upload your image and get a live concept preview of how your custom infinity mirror could look.
              </p>
            </div>

            <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              {/* LEFT */}
              <div className="max-w-xl">
                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Upload your design
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mb-6 block w-full text-sm text-white file:mr-4 file:rounded-xl file:border-0 file:bg-cyan-400 file:px-4 file:py-3 file:font-semibold file:text-black"
                />

                <div className="space-y-4 text-sm text-gray-300">
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    Best results: logos, bold artwork, strong contrast images, or clean designs.
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    Great for garages, shops, business walls, gifts, bars, game rooms, and personal builds.
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    PNG files with transparent backgrounds usually look best in the live preview.
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                  <h3 className="mb-2 text-xl font-bold">Not a cheap off-the-shelf piece</h3>
                  <p className="text-gray-300">
                    This is custom-built visual decor made to feel personal, bold, and high impact.
                    If you want something generic, this is not it.
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex justify-center lg:justify-end">
                <MirrorPreview
  previewUrl={previewUrl}
  depthLayers={depthLayers}
  glowColor={glowColor}
/>
              </div>
            </div>

            {/* CTA BLOCK */}
            <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-7">
              <h3 className="mb-2 text-2xl font-bold">
                Turn Your Design Into a Real Infinity Mirror
              </h3>

              <p className="mb-4 max-w-3xl text-gray-300">
                Upload your design, see a live preview, and start your custom build.
                Most orders are fully custom and built to stand out — not mass produced.
              </p>

              <p className="mb-5 font-semibold text-cyan-300">
                Most custom builds range from $150 – $600 depending on size and detail.
              </p>

             <button className="rounded-xl bg-white px-6 py-3.5 font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] transition hover:scale-[1.03]">
  Start Your Custom Build
</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function MirrorPreview({
  previewUrl,
  depthLayers,
  glowColor,
}: {
  previewUrl: string | null
  depthLayers: number[]
  glowColor: string
}) {
  return (
    <div className="relative w-[220px] h-[220px] flex items-center justify-center">

      {/* RADIAL LIGHT */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,255,255,0.1) 0%, rgba(0,0,0,0.9) 75%)",
        }}
      />

      {/* OUTER FRAME */}
      <div className="absolute inset-0 rounded-2xl border border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.2)]" />

      {/* INNER FRAME */}
      <div className="absolute inset-4 rounded-xl border border-cyan-400/20 bg-black/30" />

      {/* CONTENT */}
      {previewUrl ? (
        <>
          {/* FRONT IMAGE */}
          <img
            src={previewUrl}
            className="absolute w-[180px] h-[180px] object-contain"
            style={{
              zIndex: 50,
              filter: "brightness(1.2) contrast(1.2)",
            }}
          />

          {/* DEPTH LAYERS */}
          {depthLayers.map((i) => {
            const scale = 1 - i * 0.07
            const opacity = 1 - i * 0.09
            const blur = i * 0.8

            return (
              <img
                key={i}
                src={previewUrl}
                className="absolute w-[180px] h-[180px] object-contain pointer-events-none"
                style={{
                  transform: `
                    scale(${scale})
                    translateZ(${-i * 20}px)
                  `,
                  opacity: opacity,
                  filter: `
                    blur(${blur}px)
                    brightness(${1 - i * 0.05})
                  `,
                }}
              />
            )
          })}

          {/* GLASS OVERLAY */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              boxShadow: "inset 0 0 25px rgba(255,255,255,0.08)",
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-gray-400">
          Upload a design to generate your preview.
        </div>
      )}
    </div>
  )
}