'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">查詢參數示例頁面</h1>
      <p className="mb-4">這是一個使用查詢參數的頁面。當前搜索詞: {query}</p>
      <Link 
        href="/navigation-examples" 
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        返回首頁
      </Link>
    </div>
  )
}
