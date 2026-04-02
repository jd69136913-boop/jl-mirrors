import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial",
        color: "white",
        backgroundColor: "black",
      }}
    >
      {/* VIDEO */}
      <video
        src="/20260301_012211.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      />

      {/* HEADLINE */}
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        Custom Infinity Mirrors
      </h1>

      <p style={{ marginBottom: "30px", color: "#ccc" }}>
        Upload your logo or design. We build it custom for you.
      </p>

      {/* 🔥 IMAGE (FIXED SIZE — NO MORE HUGE IMAGE) */}
      <Image
        src="/mirror3.jpg"
        alt="Infinity Mirror Example"
        width={800}
        height={600}
        style={{
          width: "100%",
          maxWidth: "450px",
          height: "auto",
          borderRadius: "12px",
          margin: "20px auto",
          display: "block",
        }}
      />

      {/* FORM */}
      <form
        action="https://formspree.io/f/xqegzdrw"
        method="POST"
        encType="multipart/form-data"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {/* 🔥 AUTO REDIRECT AFTER SUBMIT */}
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
          <option value="Small (12x12)">Small (12x12)</option>
          <option value="Medium (18x18)">Medium (18x18)</option>
          <option value="Large (24x24)">Large (24x24)</option>
          <option value="Custom">Custom Size</option>
        </select>

        <textarea
          name="notes"
          placeholder="Anything specific you want?"
          rows={4}
          style={inputStyle}
        />

        {/* 🔥 MAIN BUTTON */}
        <button type="submit" style={submitStyle}>
          Submit Design & Pay Deposit
        </button>

        {/* 🔥 SECOND DEPOSIT BUTTON */}
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