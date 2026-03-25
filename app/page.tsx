'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      
      <h1 className="text-3xl font-bold mb-6">
        TEST DEPLOY WORKING
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div>

          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold">
              Custom Infinity Mirrors Built for Your Space
            </h2>

            <p className="text-gray-400">
              Handcrafted LED mirrors with custom designs, colors, and sizes.
            </p>

            <p className="text-purple-400 font-semibold">
              Get Your Custom Quote in 24 Hours
            </p>
          </div>

          <div className="text-center text-sm text-gray-500 mb-6 space-y-1">
            <p>✔ Built in Arizona</p>
            <p>✔ Custom sizes & designs</p>
            <p>✔ LED color control included</p>
          </div>

          <div className="h-40 flex items-center justify-center border border-purple-500">
            LOGO AREA
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <form
            action="https://formspree.io/f/xqegzdrw"
            method="POST"
            className="space-y-3"
          >

            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 bg-black border border-gray-700"
            />

            <input
              name="email"
              type="email"
              placeholder="Best Email to Reach You"
              required
              className="w-full p-2 bg-black border border-gray-700"
            />

            <textarea
              name="details"
              placeholder="Size, design idea, colors, etc."
              className="w-full p-2 bg-black border border-gray-700"
            />

            <button className="w-full bg-purple-600 p-3">
              Request My Custom Mirror
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}