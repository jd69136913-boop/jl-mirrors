export default function ThankYou() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>

      <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>
        Design Received
      </h1>

      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Your custom design has been submitted successfully.
      </p>

      <p style={{ marginBottom: '30px' }}>
        Complete your deposit below to start your build.
      </p>

      <a
        href="https://buy.stripe.com/dRm7sN7QdaTQ3pSaDQ8Ra00"
        style={{
          backgroundColor: '#00ff99',
          color: 'black',
          padding: '14px 24px',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}
      >
        Pay $50 Deposit
      </a>

    </main>
  )
}