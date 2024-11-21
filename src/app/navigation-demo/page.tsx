'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NavigationDemo() {
  const router = useRouter()

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-8">Next.js 導航示例</h1>

      {/* 1. 使用 Link 組件 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Link 組件導航</h2>
        <div className="space-x-4">
          <Link 
            href="/navigation-demo/about" 
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            關於頁面
          </Link>
          <Link 
            href="/navigation-demo/product?id=123" 
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            商品詳情（帶參數）
          </Link>
        </div>
      </section>

      {/* 2. 程序化導航 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. useRouter 程序化導航</h2>
        <div className="space-x-4">
          <button
            onClick={() => router.push('/navigation-demo/dashboard')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            跳轉到儀表板
          </button>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            返回上一頁
          </button>
          <button
            onClick={() => router.refresh()}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            刷新當前頁面
          </button>
        </div>
      </section>

      {/* 3. 動態路由導航 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. 動態路由導航</h2>
        <div className="space-x-4">
          <Link 
            href="/navigation-demo/users/1" 
            className="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            用戶 1 詳情
          </Link>
          <Link 
            href="/navigation-demo/users/2" 
            className="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            用戶 2 詳情
          </Link>
        </div>
      </section>

      {/* 4. 帶狀態的導航 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. 帶狀態的導航</h2>
        <div className="space-x-4">
          <button
            onClick={() => {
              router.push('/navigation-demo/profile', {
                state: { from: 'home', time: new Date().toISOString() }
              })
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            帶狀態跳轉到個人資料
          </button>
        </div>
      </section>

      {/* 5. 替換歷史記錄 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. 替換歷史記錄</h2>
        <div className="space-x-4">
          <button
            onClick={() => router.replace('/navigation-demo/settings')}
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            跳轉到設置（替換歷史）
          </button>
        </div>
      </section>
    </div>
  )
}
