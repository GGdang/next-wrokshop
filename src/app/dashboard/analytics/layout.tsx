import { Suspense } from 'react'

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold text-gray-800">Analytics Portal</h1>
      </nav>
      <div className="container mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </div>
    </div>
  )
}
