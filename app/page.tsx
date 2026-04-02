import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        padding: "30px",
        maxWidth: "700px",
        margin: "0 auto",
        fontFamily: "Arial",
        color: "white",
        backgroundColor: "black",
      }}
    >
      {/* 🔥 VIDEO (FIXED SIZE) */}
      <video
        src="/20260301_012211.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          maxHeight: "320px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />

      {/* HEADLINE */}
      <h1 style={{ fontSize: "36px", marginBottom: "8px" }}>
        Custom Infinity Mirrors
      </h1>

      <p style={{ marginBottom: "20px", color: "#ccc" }}>
        Upload your logo. We build it custom. Limited slots available.
      </p>

      {/* 🔥 IMAGE (CONTROLLED SIZE) */}
      <Image
        src="/mirror3.jpg"
        alt="Infinity Mirror Example"
        width={800}
        height={600}
        style={{
          width: "100%",
          maxWidth: "350px",
          height: "auto",
          borderRadius: "12px",
          margin: "10px auto 20px auto",
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
          gap: "15px",
        }}
      >
        {/* AUTO REDIRECT */}
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
          <option value="12x12">12x12</option>
          <option value="18x18">18x18</option>
          <option value="24x24">24x24</option>
          <option value="Custom">Custom</option>
        </select>

        <textarea
          name="notes"
          placeholder="Anything specific you want?"
          rows={3}
          style={inputStyle}
        />

        {/* 🔥 PRIMARY CTA */}
        <button type="submit" style={submitStyle}>
          Submit Design & Pay Deposit
        </button>

        {/* 🔥 STRONG SECOND CTA */}
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
  cursor: "pointer",
  fontWeight: "bold",
};

const depositStyle = {
  textAlign: "center" as const,
  padding: "14px",
  backgroundColor: "#00cc66",
  color: "black",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
};