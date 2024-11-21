'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function PostPage() {
  const params = useParams()
  const postId = params.id

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">動態路由示例頁面</h1>
      <p className="mb-4">這是一個使用動態路由的頁面。當前文章 ID: {postId}</p>
      <Link 
        href="/navigation-examples" 
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        返回首頁
      </Link>
    </div>
  )
}
