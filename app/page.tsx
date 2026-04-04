"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Custom Infinity Mirrors Built to Dominate Attention
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Hand-built. Fully custom. Designed to stand out in any room, shop, or garage.
        </p>

        <div className="flex justify-center">
          <Image
            src="/Mirror1.jpg"
            alt="Infinity Mirror"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-6 py-14 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Real Builds. Real Results.
        </h2>

        <div className="flex justify-center">
          <Image
            src="/Mirror8.jpg"
            alt="Custom Mirror"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Request Your Custom Build
        </h2>

        <form
          action="https://formspree.io/f/xqegzdrw"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800"
          />

          <textarea
            name="message"
            placeholder="Describe your custom mirror..."
            className="w-full p-3 rounded bg-gray-800"
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition"
          >
            Get My Custom Quote
          </button>
        </form>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Limited Build Slots Available
        </h2>
        <p className="text-gray-400 mb-6">
          Each mirror is built by hand. Once slots are filled, orders close.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200 transition">
          Reserve Your Spot
        </button>
      </section>

    </main>
  );
}