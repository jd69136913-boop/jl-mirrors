'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-10">
        J&L Custom Infinity Mirrors
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6 max-w-xl">

          <h2 className="text-2xl font-bold">
            Premium Custom Infinity Mirrors
          </h2>

          <p className="text-gray-400">
            Handcrafted LED mirrors with custom designs, colors, and sizes — built to order.
          </p>

          <p className="text-purple-400 font-semibold">
            Get Your Custom Quote in 24 Hours
          </p>

          <p className="text-sm text-gray-500">
            Limited build slots available each week
          </p>

          <div className="text-sm text-gray-400 space-y-1">
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

        {/* RIGHT SIDE - PRO FORM */}
        <form
          action="https://formspree.io/f/xqegzdrw"
          method="POST"
          className="space-y-4 bg-zinc-900/60 backdrop-blur border border-purple-500/30 p-6 rounded-xl shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >

          <h3 className="text-xl font-semibold text-white">
            Get Your Custom Quote
          </h3>

          <p className="text-sm text-gray-400">
            Tell me what you want built. I'll get back to you within 24 hours.
          </p>

          {/* NAME */}
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-purple-500"
          />

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            placeholder="Best Email"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-purple-500"
          />

          {/* SIZE */}
          <select
            name="size"
            className="w-full p-3 bg-black border border-gray-700 rounded text-gray-300"
          >
            <option value="">Select Size</option>
            <option>Small (Desk / Under 24")</option>
            <option>Medium (24" - 36")</option>
            <option>Large (36" - 60")</option>
            <option>Custom / Oversized</option>
          </select>

          {/* BUDGET */}
          <select
            name="budget"
            className="w-full p-3 bg-black border border-gray-700 rounded text-gray-300"
          >
            <option value="">Budget Range</option>
            <option>$100 - $300</option>
            <option>$300 - $700</option>
            <option>$700 - $1500</option>
            <option>$1500+</option>
          </select>

          {/* TIMELINE */}
          <select
            name="timeline"
            className="w-full p-3 bg-black border border-gray-700 rounded text-gray-300"
          >
            <option value="">When do you want it?</option>
            <option>ASAP</option>
            <option>1–2 Weeks</option>
            <option>Flexible</option>
          </select>

          {/* DETAILS */}
          <textarea
            name="details"
            placeholder="Describe your design idea (logo, colors, style, etc.)"
            rows={4}
            className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-purple-500"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 transition p-3 rounded font-semibold"
          >
            Get My Custom Quote →
          </button>

          <p className="text-xs text-gray-500 text-center">
            No spam. Serious custom builds only.
          </p>

        </form>

      </div>

    </div>
  )
}