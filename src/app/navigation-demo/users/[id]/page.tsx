'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function UserPage() {
  const params = useParams()
  const userId = params.id

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">用戶詳情頁</h1>
      <p className="mb-4">用戶 ID: {userId}</p>
      <Link 
        href="/navigation-demo" 
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        返回首頁
      </Link>
    </div>
  )
}
