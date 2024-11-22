'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function HistoryPage() {
  const pathname = usePathname()
  const router = useRouter()

  const handleHistoryNavigation = () => {
    // 使用 History API 進行導航
    window.history.pushState(null, '', '/navigation-demo')
    router.refresh()
  }

  const handleHistoryReplace = () => {
    // 使用 replaceState 替換當前歷史記錄
    window.history.replaceState(null, '', '/navigation-demo')
    router.refresh()
  }

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            History API 示例頁面
          </h2>
          <p className='text-gray-500 mb-4'>
            這個頁面展示了使用瀏覽器原生 History API 的導航效果。History API
            適合在以下場景使用：
          </p>
          <ul className='list-disc pl-5 space-y-2 text-gray-600 mb-6'>
            <li>需要精確控制瀏覽器歷史記錄</li>
            <li>自定義導航行為</li>
            <li>實現複雜的狀態管理</li>
            <li>與其他前端框架集成</li>
          </ul>
          <div className='mt-4 space-x-4'>
            <button
              onClick={handleHistoryNavigation}
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
            >
              使用 pushState 返回
            </button>
            <button
              onClick={handleHistoryReplace}
              className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
            >
              使用 replaceState 返回
            </button>
          </div>
          <p className='mt-4 text-sm text-gray-500'>
            當前路徑: {pathname}
          </p>
        </div>
      </div>
    </div>
  )
}
