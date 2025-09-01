export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8fafc',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: '#1e293b',
          margin: 0
        }}>
          We Dev
        </h1>
        <p style={{ 
          color: '#64748b', 
          margin: '10px 0 0 0'
        }}>
          AI Development Platform
        </p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '20px'
          }}>
            Welcome to We Dev
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto 30px auto',
            lineHeight: '1.6'
          }}>
            Advanced AI-powered development platform for building the future of software.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Get Started
            </button>
            <button style={{
              backgroundColor: 'white',
              color: '#3b82f6',
              padding: '12px 24px',
              border: '2px solid #3b82f6',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Learn More
            </button>
          </div>
        </section>

        {/* Status Section */}
        <section style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '20px'
          }}>
            System Status
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#10b981',
              borderRadius: '50%'
            }}></div>
            <span style={{ color: '#1e293b', fontWeight: '500' }}>
              All systems operational
            </span>
          </div>
          <p style={{
            color: '#64748b',
            fontSize: '0.9rem',
            marginTop: '5px'
          }}>
            Last updated: {new Date().toLocaleString()}
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '40px 20px',
        color: '#64748b',
        marginTop: '40px'
      }}>
        <p>&copy; 2024 We Dev. All rights reserved.</p>
      </footer>
    </div>
  )
}