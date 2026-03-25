'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-8">
        J&L Custom Infinity Mirrors
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6 max-w-xl">

          <h2 className="text-2xl font-bold">
            Premium Custom Infinity Mirrors
          </h2>

          <p className="text-gray-400">
            Handcrafted LED mirrors with custom designs, colors, and sizes — built to order.
          </p>

          <p className="text-xs text-gray-600">
  Limited build slots available each week
</p>
<p className="text-purple-400 font-semibold">
  Get Your Custom Quote in 24 Hours
</p>

<p className="text-sm text-gray-500">
  Projects typically start at $150+ depending on size and design
</p>

<p className="text-xs text-gray-600">
  Limited build slots available each week
</p>

<div className="text-sm text-gray-500 space-y-1 mt-2">
  <p>✔ Built in Arizona</p>
  <p>✔ Custom sizes & designs</p>
  <p>✔ LED color control included</p>
</div>
          {/* IMAGE */}
          <div className="mt-6 relative rounded-xl overflow-hidden border border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.6)]">

            <img
              src="/mirror.jpg"
              alt="Custom Infinity Mirror"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6">
              <p className="text-lg font-semibold text-white">
                Custom LED Infinity Mirror
              </p>
              <p className="text-sm text-gray-300">
                Built by hand • Made in Arizona
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          action="https://formspree.io/f/xqegzdrw"
          method="POST"
          className="space-y-5 bg-zinc-900/60 backdrop-blur-md p-6 rounded-xl border border-zinc-700 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
        >

          <h2 className="text-xl font-semibold text-white">
            Request a Custom Build
          </h2>

          <p className="text-sm text-gray-400">
            Tell me what you want — I’ll get back to you within 24 hours.
          </p>

          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 bg-black/60 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 bg-black/60 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
          />

          <textarea
            name="details"
            placeholder="Describe your mirror (size, colors, logo, idea, etc.)"
            rows={4}
            className="w-full p-3 bg-black/60 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 transition p-4 rounded-lg font-semibold tracking-wide shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            Get My Custom Quote →
          </button>

          <p className="text-xs text-gray-500 text-center">
            No spam. Just a custom quote.
          </p>

        </form>

      </div>

    </div>
  )
}