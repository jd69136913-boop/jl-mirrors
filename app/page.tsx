"use client";

import { useState } from "react";

export default function Home() {
  const [price, setPrice] = useState(149);
  const [size, setSize] = useState("Small");
  const [color, setColor] = useState("White");

  const updatePrice = (selectedSize: string) => {
    if (selectedSize === "Small") setPrice(149);
    if (selectedSize === "Medium") setPrice(249);
    if (selectedSize === "Large") setPrice(399);
  };

  return (
    <main className="bg-black text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Custom Infinity Mirrors That Turn Heads
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Built by hand. Fully customizable. Designed to stand out.
        </p>

        <button
          onClick={() => document.getElementById("custom")?.scrollIntoView()}
          className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          Start Your Custom Design
        </button>
      </section>

      {/* IMAGE SHOWCASE */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
        <img src="/images/mirror1.jpg" className="rounded-xl" />
        <img src="/images/mirror2.jpg" className="rounded-xl" />
        <img src="/images/mirror3.jpg" className="rounded-xl" />
        <img src="/images/mirror4.jpg" className="rounded-xl" />
      </section>

      {/* TRUST + VALUE */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Why These Sell Fast</h2>
        <div className="space-y-2 text-gray-300">
          <p>✔ Hand-built craftsmanship</p>
          <p>✔ Fully customizable (logos, colors, size)</p>
          <p>✔ Built in Arizona</p>
          <p>✔ One-of-a-kind designs</p>
        </div>
      </section>

      {/* PRICE + URGENCY */}
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Custom Builds Starting at $149
        </h2>
        <p className="text-red-400 font-bold">
          Only 5 build slots available this month
        </p>
      </section>

      {/* CUSTOM BUILDER */}
      <section id="custom" className="py-20 px-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Customize Your Mirror
        </h2>

        <div className="space-y-4">

          {/* SIZE */}
          <select
            onChange={(e) => {
              setSize(e.target.value);
              updatePrice(e.target.value);
            }}
            className="w-full p-3 rounded text-black"
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>

          {/* COLOR */}
          <select
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-3 rounded text-black"
          >
            <option>White</option>
            <option>RGB</option>
            <option>Blue</option>
            <option>Red</option>
          </select>

          {/* FILE UPLOAD */}
          <input
            type="file"
            className="w-full p-3 bg-white text-black rounded"
          />

          {/* PRICE DISPLAY */}
          <div className="text-center text-2xl font-bold">
            ${price}
          </div>

          {/* CTA */}
          <a
            href="https://cash.app/$Jamie6913"
            target="_blank"
            className="block text-center bg-green-500 py-4 rounded-xl font-bold text-lg hover:scale-105 transition"
          >
            Reserve Build Slot ($25 Deposit)
          </a>

          {/* FORM */}
          <form
            action="https://formspree.io/f/xqegzdrw"
            method="POST"
            className="space-y-3"
          >
            <input
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded text-black"
              required
            />
            <input
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded text-black"
              required
            />
            <textarea
              name="details"
              placeholder="Describe your custom mirror (logo, size, etc)"
              className="w-full p-3 rounded text-black"
              required
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded font-bold"
            >
              Submit Custom Request
            </button>
          </form>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Turn Your Space Into a Showpiece
        </h2>
        <p className="text-gray-400 mb-6">
          Custom-built. Limited availability. No mass production.
        </p>

        <a
          href="https://cash.app/$Jamie6913"
          className="bg-white text-black px-6 py-3 rounded-full font-bold"
        >
          Secure Your Spot Now
        </a>
      </section>

    </main>
  );
}