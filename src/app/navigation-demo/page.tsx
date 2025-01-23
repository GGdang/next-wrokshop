'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function NavigationDemo() {
  useEffect(() => {
    // 監聽 popstate 事件
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handlePopState = (event: PopStateEvent) => {
      console.log('Location changed:', window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Next.js 導航方式示例</h2>
          <p className='text-gray-500 mb-4'>這個示例展示了 Next.js 中的四種主要導航方式：</p>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
            {/* Link 組件 */}
            <div className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400'>
              <div className='flex flex-col items-start'>
                <h3 className='text-lg font-medium text-gray-900'>Link 組件</h3>
                <p className='mt-1 text-sm text-gray-500'>使用 Next.js 的 Link 組件進行客戶端導航</p>
                <Link
                  href='/navigation-demo/link-page'
                  className='mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
                >
                  查看示例
                </Link>
              </div>
            </div>
            {/* useRouter Hook */}
            <div className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400'>
              <div className='flex flex-col items-start'>
                <h3 className='text-lg font-medium text-gray-900'>useRouter Hook</h3>
                <p className='mt-1 text-sm text-gray-500'>使用 useRouter hook 進行程式化導航</p>
                <Link
                  href='/navigation-demo/router-page'
                  className='mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
                >
                  查看示例
                </Link>
              </div>
            </div>
            {/* redirect 函數 */}
            <div className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400'>
              <div className='flex flex-col items-start'>
                <h3 className='text-lg font-medium text-gray-900'>redirect 函數</h3>
                <p className='mt-1 text-sm text-gray-500'>使用 redirect 函數進行服務端重定向</p>
                <Link
                  href='/navigation-demo/redirect-page'
                  className='mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
                >
                  查看示例
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
