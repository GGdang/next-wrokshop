'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function ProductPage() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id')

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">商品詳情頁</h1>
      <p className="mb-4">商品 ID: {productId}</p>
      <Link 
        href="/navigation-demo" 
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        返回首頁
      </Link>
    </div>
  )
}
