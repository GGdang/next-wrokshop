'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LinkClientDemo() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  // 客戶端狀態管理和事件處理
  const handleSelect = (id: number) => {
    setSelectedId(id)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Client Component 中的 Link 示例</h1>
      <p className="mb-4">這個頁面是一個 Client Component，展示了如何在客戶端處理 Link 組件。</p>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">互動式文章列表（客戶端渲染）：</h2>
        <ul className="space-y-2">
          {[1, 2, 3].map(id => (
            <li 
              key={id}
              className={`p-2 rounded ${selectedId === id ? 'bg-blue-100' : ''}`}
              onClick={() => handleSelect(id)}
            >
              <Link 
                href={`/navigation-examples/posts/${id}`}
                className="text-blue-500 hover:underline"
              >
                文章 {id} {selectedId === id ? '(已選擇)' : ''}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Link 
          href="/navigation-examples" 
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          返回首頁
        </Link>
      </div>
    </div>
  )
}
