export default function Thankyou() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px"
    }}>
      <div>
        <h1 style={{ marginBottom: "15px" }}>
          Request Received
        </h1>

        <p style={{ marginBottom: "20px", color: "#aaa" }}>
          I'm reviewing your design now. You'll hear from me shortly.
        </p>

        <a
          href="tel:9287135667"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "#fff",
            color: "#000",
            textDecoration: "none",
            marginBottom: "20px"
          }}
        >
          Call / Text Now
        </a>

        <p style={{ fontSize: "12px", color: "#666" }}>
          Typical turnaround: 2–5 days
        </p>
      </div>
    </div>
  );
}