'use client'

import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">設置頁面</h1>
      <p className="mb-4">這是一個使用 router.replace 導航到的頁面（無法返回）。</p>
      <Link 
        href="/navigation-demo" 
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        返回首頁
      </Link>
    </div>
  )
}
