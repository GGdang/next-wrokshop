'use client'

import Link from 'next/link'

export default function RouterReplace() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Router Replace 示例頁面</h1>
      <p className="mb-4">這個頁面是通過 router.replace() 方法導航而來的，返回按鈕將不會顯示上一頁。</p>
      <Link 
        href="/navigation-examples" 
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        返回首頁
      </Link>
    </div>
  )
}
