export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto"></div>
        <h2 className="mt-4 text-xl font-semibold text-gray-900">Loading We Dev...</h2>
        <p className="mt-2 text-gray-600">Please wait while we prepare your experience</p>
      </div>
    </div>
  )
}