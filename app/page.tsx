<section className="px-6 py-14 bg-black">

  {/* HEADER */}
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-white">
      Real Builds. Real Results.
    </h2>
    <p className="text-gray-400 mt-2">
      Every piece is built by hand — no shortcuts.
    </p>
  </div>

  {/* HERO IMAGE */}
  <div className="max-w-5xl mx-auto mb-12">
    <div className="bg-[#0c0c0c] p-4 rounded-2xl border border-gray-800 shadow-xl">
      <img
        src="/images/mirror.jpg"
        className="w-full h-auto rounded-xl object-contain bg-black"
      />
      <p className="text-sm text-gray-400 mt-3 text-center">
        Custom Highland infinity mirror — deep layered effect with branding
      </p>
    </div>
  </div>

  {/* IMAGE GRID */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {[
      { src: "/images/mirror1.jpg", label: "Deep infinity effect" },
      { src: "/images/mirror2.jpg", label: "RGB lighting styles" },
      { src: "/images/mirror3.jpg", label: "Custom logo work" },
      { src: "/images/mirror4.jpg", label: "High depth infinity effect" },
      { src: "/images/mirror5.jpg", label: "Precision engraving detail" },
      { src: "/images/mirror6.jpg", label: "Custom creative builds" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#0c0c0c] p-3 rounded-xl border border-gray-800 hover:border-green-500 transition"
      >
        <img
          src={item.src}
          className="w-full h-64 object-contain bg-black rounded-lg"
        />
        <p className="text-xs text-gray-400 mt-2 text-center">
          {item.label}
        </p>
      </div>
    ))}

  </div>

</section>