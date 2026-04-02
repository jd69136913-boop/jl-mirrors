import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial",
        color: "white",
        backgroundColor: "black",
        textAlign: "center",
      }}
    >
      {/* 🔥 VIDEO (HARD CONTAINED — NO MORE HUGE VIDEO) */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto 20px auto",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <video
          src="/20260301_012211.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "240px",   // 🔥 LOCKED HEIGHT
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* 🔥 HEADLINE */}
      <h1 style={{ fontSize: "30px", marginBottom: "8px" }}>
        Custom Infinity Mirrors Built For You
      </h1>

      {/* 🔥 URGENCY */}
      <p style={{ color: "#ff4d4d", fontWeight: "bold", marginBottom: "10px" }}>
        ⚠️ Only 3 Build Slots Left This Week
      </p>

      {/* VALUE */}
      <p style={{ color: "#ccc", marginBottom: "20px" }}>
        Upload your logo or idea. We design and build your custom mirror.
      </p>

      {/* 🔥 IMAGE (LOCKED SIZE — NO MORE GIANT IMAGE) */}
      <Image
        src="/mirror3.jpg"
        alt="Infinity Mirror"
        width={500}
        height={400}
        style={{
          width: "100%",
          maxWidth: "280px",
          height: "180px",   // 🔥 LOCK HEIGHT
          objectFit: "cover",
          borderRadius: "12px",
          margin: "0 auto 20px auto",
          display: "block",
        }}
      />

      {/* 🔥 FORM */}
      <form
        action="https://formspree.io/f/xqegzdrw"
        method="POST"
        encType="multipart/form-data"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* 🔥 AUTO REDIRECT TO PAYMENT */}
        <input
          type="hidden"
          name="_redirect"
          value="https://cash.app/$Jamie6913"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />

        <input
          type="file"
          name="file"
          required
          style={{ color: "white" }}
        />

        <select name="size" required style={inputStyle}>
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Custom">Custom</option>
        </select>

        <textarea
          name="notes"
          placeholder="Describe your design..."
          rows={3}
          style={inputStyle}
        />

        {/* 🔥 PRIMARY CTA */}
        <button type="submit" style={submitStyle}>
          Submit Design & Secure Your Spot
        </button>

        {/* 🔥 SECOND CTA */}
        <a
          href="https://cash.app/$Jamie6913"
          target="_blank"
          style={depositStyle}
        >
          Pay $50 Deposit Now
        </a>
      </form>
    </main>
  );
}

/* ================= STYLES ================= */

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  fontSize: "16px",
};

const submitStyle = {
  padding: "14px",
  fontSize: "18px",
  backgroundColor: "#00ff99",
  color: "black",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};

const depositStyle = {
  padding: "14px",
  backgroundColor: "#00cc66",
  color: "black",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
};