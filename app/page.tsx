export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial" }}>

      {/* HEADLINE */}
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        Custom Infinity Mirrors Built From Your Logo
      </h1>

      {/* VIDEO */}
      <video
        src="/20260301_012211.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      {/* PRICE ANCHOR */}
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Custom builds typically range from <b>$150 – $400+</b> depending on size and complexity.
      </p>

      {/* DESCRIPTION */}
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Upload your logo and get a one-of-a-kind custom mirror built for you.
      </p>

      {/* IMAGE */}
      <img
        src="/mirror1.jpg"
        alt="Mirror Example"
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      {/* STEP 1 */}
      <h2 style={{ marginTop: "40px" }}>
        Step 1: Submit Your Design
      </h2>

      {/* FORM */}
      <form
        action="https://formspree.io/f/xqegzdrw"
        method="POST"
        encType="multipart/form-data"
        style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}
      >

        <input type="text" name="name" placeholder="Your Name" required style={{ padding: "12px" }} />

        <input type="email" name="email" placeholder="Your Email" required style={{ padding: "12px" }} />

        <input type="file" name="logo" accept="image/*" required />

        <select name="size" required style={{ padding: "12px" }}>
          <option value="">Select Size</option>
          <option value="Small">Small (12-16")</option>
          <option value="Medium">Medium (18-24")</option>
          <option value="Large">Large (24-36")</option>
        </select>

        <textarea name="notes" placeholder="Anything specific you want?" style={{ padding: "12px" }} />

        <button
          type="submit"
          style={{
            padding: "15px",
            fontSize: "18px",
            background: "black",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Submit Design & Continue
        </button>

        <p style={{ fontSize: "14px", color: "gray", textAlign: "center" }}>
          You’ll be prompted to submit your $50 deposit after this step.
        </p>

      </form>

      {/* STEP 2 */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h2>Step 2: Secure Your Build Slot</h2>

        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          🔒 Your build is NOT started until deposit is received.
        </p>

        <a
          href="https://cash.app/$Jamie6913"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "15px 25px",
            background: "green",
            color: "white",
            fontSize: "18px",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Pay $50 Deposit
        </a>
      </div>

    </main>
  );
}