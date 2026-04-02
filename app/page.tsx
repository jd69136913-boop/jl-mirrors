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
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "20px"
        }}
      />

      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Upload your logo. Get a custom mirror built for you.
      </p>

      <img
        src="/mirror1.jpg"
        alt="Mirror Example"
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      <a
        href="#order"
        style={{
          display: "inline-block",
          padding: "15px 30px",
          fontSize: "18px",
          background: "black",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        Get Your Custom Mirror
      </a>

    </main>
  );
}