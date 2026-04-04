export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Custom Infinity Mirrors Built to Dominate Your Space
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Hand-built in Arizona. Fully customizable. No two are the same.
        </p>

        <a
          href="#order"
          className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Start Your Custom Build
        </a>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">
          Real Builds. Real Results.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/mirror1.jpg" className="rounded-xl w-full" />
          <img src="/images/mirror2.jpg" className="rounded-xl w-full" />
          <img src="/images/mirror3.jpg" className="rounded-xl w-full" />
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="px-6 py-14 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Not Just a Mirror — It’s a Statement Piece
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          <div>🔥 Custom designs for cars, shops, brands</div>
          <div>⚡ Built by hand — no cheap mass production</div>
          <div>💡 LED infinity depth effect that stands out instantly</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-14 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Simple Pricing
        </h2>

        <div className="bg-gray-900 p-8 rounded-xl max-w-xl mx-auto">
          <p className="text-2xl font-semibold">$150 – $600+</p>
          <p className="text-gray-400 mt-2">
            Depends on size, design, and lighting upgrades
          </p>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">
          Start Your Custom Order
        </h2>

        <form
          action="https://formspree.io/f/xqegzdrw"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800"
            required
          />

          <textarea
            name="details"
            placeholder="Describe your custom mirror..."
            className="w-full p-3 rounded bg-gray-800"
            rows="4"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200"
          >
            Submit Request
          </button>
        </form>
      </section>

    </main>
  );
}