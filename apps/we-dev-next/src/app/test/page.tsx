export default function TestPage() {
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>
        Test Page - We Dev
      </h1>
      <p style={{ color: '#666', fontSize: '18px' }}>
        If you can see this page, the Next.js app is working correctly!
      </p>
      <div style={{ 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        padding: '10px', 
        borderRadius: '5px',
        marginTop: '20px',
        display: 'inline-block'
      }}>
        ✅ Success! The app is running properly.
      </div>
    </div>
  )
}