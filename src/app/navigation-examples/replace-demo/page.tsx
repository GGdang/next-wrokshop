'use client'

import Link from 'next/link'

export default function ReplaceDemo() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">替換歷史示例頁面</h1>
      <p className="mb-4">這個頁面是通過替換歷史記錄的方式導航而來，你無法通過瀏覽器的返回按鈕回到上一頁。</p>
      <Link 
        href="/navigation-examples" 
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        返回首頁
      </Link>
    </div>
  )
}
