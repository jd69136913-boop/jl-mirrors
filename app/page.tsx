export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial" }}>

      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        Custom Infinity Mirrors Built From Your Logo
      </h1>

      <video
        src="/20260301_012211.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Upload your logo and get a one-of-a-kind custom mirror built for you.
      </p>

      <img
        src="/mirror1.jpg"
        alt="Mirror Example"
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      {/* ORDER FORM */}
      <form
        action="https://formspree.io/f/xqegzdrw"
        method="POST"
        encType="multipart/form-data"
        style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "30px" }}
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
          Submit Order Request
        </button>

      </form>

    </main>
  );
}