'use client'

import Link from 'next/link'

export default function LinkDemo() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Link 組件示例頁面</h1>
      <p className="mb-4">這是使用 Link 組件導航到的頁面。Link 組件是 Next.js 中最常用的導航方式。</p>
      <Link 
        href="/navigation-examples" 
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        返回首頁
      </Link>
    </div>
  )
}
