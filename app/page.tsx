export default function Page() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Custom Infinity Mirrors Built to Dominate Your Space
        </h1>
        <p className="text-gray-400 mb-6">
          Hand-built in Arizona. Fully customizable. No two are the same.
        </p>
      </section>

      {/* IMAGE SECTION */}
      <section className="px-6 py-14 bg-black">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Real Builds. Real Results.
          </h2>
          <p className="text-gray-400 mt-2">
            Every piece is built by hand — no shortcuts.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-[#0c0c0c] p-4 rounded-2xl border border-gray-800">
            <img
              src="/images/mirror.jpg"
              className="w-full h-auto object-contain bg-black rounded-xl"
            />
            <p className="text-sm text-gray-400 mt-3 text-center">
              Custom Highland infinity mirror
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="bg-[#0c0c0c] p-3 rounded-xl border border-gray-800">
            <img src="/images/mirror1.jpg" className="w-full h-64 object-contain bg-black rounded-lg" />
          </div>

          <div className="bg-[#0c0c0c] p-3 rounded-xl border border-gray-800">
            <img src="/images/mirror2.jpg" className="w-full h-64 object-contain bg-black rounded-lg" />
          </div>

          <div className="bg-[#0c0c0c] p-3 rounded-xl border border-gray-800">
            <img src="/images/mirror3.jpg" className="w-full h-64 object-contain bg-black rounded-lg" />
          </div>

          <div className="bg-[#0c0c0c] p-3 rounded-xl border border-gray-800">
            <img src="/images/mirror4.jpg" className="w-full h-64 object-contain bg-black rounded-lg" />
          </div>

          <div className="bg-[#0c0c0c] p-3 rounded-xl border border-gray-800">
            <img src="/images/mirror5.jpg" className="w-full h-64 object-contain bg-black rounded-lg" />
          </div>

          <div className="bg-[#0c0c0c] p-3 rounded-xl border border-gray-800">
            <img src="/images/mirror6.jpg" className="w-full h-64 object-contain bg-black rounded-lg" />
          </div>

        </div>

      </section>

    </main>
  );
}