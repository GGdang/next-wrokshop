'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">儀表板</h1>
      <p className="mb-4">這是一個使用 router.push 導航到的頁面。</p>
      <div className="space-x-4">
        <Link 
          href="/navigation-demo" 
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          返回首頁
        </Link>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          返回上一頁
        </button>
      </div>
    </div>
  )
}
