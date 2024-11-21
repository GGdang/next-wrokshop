'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NavigationExamples() {
  const router = useRouter()

  return (
    <div className='p-8 max-w-4xl mx-auto space-y-12'>
      <h1 className='text-3xl font-bold mb-8'>Next.js 官方導航方法示例</h1>

      {/* 1. Link Component */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>1. Link Component</h2>
        <p className='text-gray-600'>客戶端導航的首選方式，自動處理代碼分割和預加載。</p>
        <div className='space-x-4'>
          <Link
            href='/navigation-examples/link-demo'
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            基本導航
          </Link>
          <Link
            href='/navigation-examples/posts/123'
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            動態路由
          </Link>
          <Link
            href='/navigation-examples/search?q=test'
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            帶查詢參數
          </Link>
          <Link
            href='/navigation-examples/replace-demo'
            replace
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            替換歷史
          </Link>
          <Link
            href='/navigation-examples/link-client'
            replace
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            client render
          </Link>
          <Link
            href='/navigation-examples/link-server'
            replace
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            server render
          </Link>
        </div>
      </section>

      {/* 2. useRouter Hook */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>2. useRouter Hook</h2>
        <p className='text-gray-600'>用於程序化導航的 Hook，僅限客戶端組件。</p>
        <div className='space-x-4'>
          <button
            onClick={() => router.push('/navigation-examples/router-demo')}
            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
          >
            程序化導航
          </button>
          <button
            onClick={() => router.back()}
            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
          >
            返回上一頁
          </button>
          <button
            onClick={() => router.refresh()}
            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
          >
            刷新當前頁面
          </button>
          <button
            onClick={() => router.replace('/navigation-examples/router-replace')}
            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
          >
            替換當前頁面
          </button>
        </div>
      </section>

      {/* 3. Redirect Function */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>3. Redirect Function</h2>
        <p className='text-gray-600'>服務端重定向，通常用於身份驗證和授權。</p>
        <div className='space-x-4'>
          <Link
            href='/navigation-examples/server-redirect'
            className='inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'
          >
            測試服務端重定向
          </Link>
        </div>
      </section>

      {/* 4. Native History API */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>4. Native History API</h2>
        <p className='text-gray-600'>瀏覽器原生的歷史 API，用於特殊場景。</p>
        <div className='space-x-4'>
          <button
            onClick={() => window.history.back()}
            className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          >
            返回 (history.back)
          </button>
          <button
            onClick={() => window.history.forward()}
            className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          >
            前進 (history.forward)
          </button>
          <button
            onClick={() => window.history.pushState(null, '', '/navigation-examples/history-demo')}
            className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          >
            Push State
          </button>
          <button
            onClick={() => window.history.replaceState(null, '', '/navigation-examples/history-replace')}
            className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          >
            Replace State
          </button>
        </div>
      </section>

      {/* 5. dynamic router */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>5. dynamic router</h2>
        <p className='text-gray-600'>動態路由，用於特殊場景。</p>
        <div className='space-x-4'>
          <Link
            href='/navigation-examples/dynamic-router/products/123'
            className='inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'
          >
            測試動態路由
          </Link>
          <Link
            href='/navigation-examples/params-demo/electronics?name=test'
            className='inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'
          >
            Server Component 參數
          </Link>
          <Link
            href='/navigation-examples/params-demo/client/electronics?name=test'
            className='inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'
          >
            Client Component 參數
          </Link>
        </div>
      </section>

      {/* 6. Catch-all Segments */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>6. Catch-all Segments</h2>
        <p className='text-gray-600'>使用 [...slug] 捕獲任意數量的路徑段落。</p>
        <div className='space-x-4'>
          <Link
            href='/navigation-examples/catch-all/products'
            className='inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          >
            單段路徑
          </Link>
          <Link
            href='/navigation-examples/catch-all/products/electronics'
            className='inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          >
            雙段路徑
          </Link>
          <Link
            href='/navigation-examples/catch-all/products/electronics/phones'
            className='inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          >
            三段路徑
          </Link>
        </div>
      </section>

      {/* 7. Optional Catch-all Segments */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>7. Optional Catch-all Segments</h2>
        <p className='text-gray-600'>使用 [[...slug]] 捕獲可選的路徑段落。</p>
        <div className='space-x-4'>
          <Link
            href='/navigation-examples/optional-catch-all'
            className='inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600'
          >
            根路徑
          </Link>
          <Link
            href='/navigation-examples/optional-catch-all/products'
            className='inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600'
          >
            單段路徑
          </Link>
          <Link
            href='/navigation-examples/optional-catch-all/products/electronics/phones'
            className='inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600'
          >
            多段路徑
          </Link>
        </div>
      </section>

      {/* 8. User Profile Catch-all */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>8. User Profile [...name]</h2>
        <p className='text-gray-600'>使用 [...name] 處理用戶資料的多層級路徑。</p>
        <div className='space-x-4'>
          <Link
            href='/navigation-examples/user-profile/john'
            className='inline-block px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600'
          >
            基本資料
          </Link>
          <Link
            href='/navigation-examples/user-profile/john/settings'
            className='inline-block px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600'
          >
            用戶設置
          </Link>
          <Link
            href='/navigation-examples/user-profile/john/settings/privacy'
            className='inline-block px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600'
          >
            隱私設置
          </Link>
          <Link
            href='/navigation-examples/user-profile/john/settings/privacy/notifications'
            className='inline-block px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600'
          >
            通知設置
          </Link>
        </div>
      </section>

      {/* 9. Dashboard User Profile */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>9. Dashboard User Profile [[...name]]</h2>
        <p className='text-gray-600'>使用 [[...name]] 處理可選的用戶資料多層級路徑。</p>
        <div className='space-x-4'>
          <Link
            href='/navigation-examples/dashboard/user-profile'
            className='inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600'
          >
            根路徑
          </Link>
          <Link
            href='/navigation-examples/dashboard/user-profile/john'
            className='inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600'
          >
            基本資料
          </Link>
          <Link
            href='/navigation-examples/dashboard/user-profile/john/settings'
            className='inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600'
          >
            用戶設置
          </Link>
          <Link
            href='/navigation-examples/dashboard/user-profile/john/settings/privacy'
            className='inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600'
          >
            隱私設置
          </Link>
        </div>
      </section>

      {/* 10. Shop Route Group */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>10. Shop Route Group (shop)</h2>
        <p className='text-gray-600'>展示 Route Group 功能，使用 (shop) 資料夾組織相關頁面但不影響 URL 結構。</p>
        <div className='space-x-4'>
          <Link
            href='/navigation-examples/products'
            className='inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          >
            商品列表
          </Link>
          <Link
            href='/navigation-examples/cart'
            className='inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          >
            購物車
          </Link>
        </div>
      </section>

      {/* 11. Parallel Routes */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>11. Parallel Routes</h2>
        <p className='text-gray-600'>
          展示如何在同一個頁面同時顯示多個獨立路由內容（儀表板、用戶資料、通知）。
        </p>
        <div className='space-x-4'>
          <Link
            href='/navigation-examples/parallel'
            className='inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600'
          >
            查看儀表板
          </Link>
        </div>
      </section>
    </div>
  )
}
