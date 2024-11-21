'use client'

import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function ClientParamsDemo() {
  // 在客戶端使用 hooks 獲取參數
  const params = useParams()
  const searchParams = useSearchParams()

  // 從 hooks 獲取參數值
  const category = params.category
  const name = searchParams.get('name')

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Client Component 參數示例</h1>
      
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">從 hooks 獲取參數：</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Category (從 useParams): <span className="text-blue-600">{category}</span></li>
          <li>Name (從 useSearchParams): <span className="text-blue-600">{name}</span></li>
        </ul>
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">
          這是一個 Client Component，參數是通過 hooks 獲取的。
          這種方式的好處是可以響應式地獲取參數變化，
          適合需要在客戶端進行交互的場景。
        </p>
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
