import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Analytics Page Not Found
      </h2>
      <p className="text-gray-600 mb-4">
        Could not find the requested analytics resource
      </p>
      <Link
        href="/dashboard"
        className="text-blue-500 hover:underline"
      >
        Return to Dashboard
      </Link>
    </div>
  )
}
