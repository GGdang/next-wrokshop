'use client'

import { useRouter } from 'next/navigation'

export default function RouterPage() {
  const router = useRouter()

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            useRouter Hook 示例頁面
          </h2>
          <p className='text-gray-500 mb-4'>
            這個頁面展示了使用 Next.js useRouter hook 的跳轉效果。useRouter
            適合在以下場景使用：
          </p>
          <ul className='list-disc pl-5 space-y-2 text-gray-600 mb-6'>
            <li>需要程式化控制導航</li>
            <li>表單提交後的跳轉</li>
            <li>複雜的導航邏輯</li>
            <li>條件式跳轉</li>
          </ul>
          <div className='mt-4 space-x-4'>
            <button
              onClick={() => router.back()}
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
            >
              返回上一頁
            </button>
            <button
              onClick={() => router.push('/navigation-demo')}
              className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
            >
              返回導航示例
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
