'use client'

import { useRouter } from 'next/navigation'

export default function RouterDemo() {
  const router = useRouter()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">useRouter 示例頁面</h1>
      <p className="mb-4">這個頁面展示了如何使用 useRouter hook 進行程序化導航。</p>
      <div className="space-x-4">
        <button
          onClick={() => router.push('/navigation-examples')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          返回首頁 (Push)
        </button>
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
