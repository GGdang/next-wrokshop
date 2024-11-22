'use client'

import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'

export default function ClientParamsDemo() {
  const params = useParams()
  const searchParams = useSearchParams()

  // 將 searchParams 轉換為普通對象以便顯示
  const searchParamsObj = Object.fromEntries(searchParams.entries())

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Client-side Params 示例
          </h2>
          <p className='text-gray-500 mb-4'>
            這個頁面展示了在客戶端組件中使用 useParams 和 useSearchParams。
          </p>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>路徑參數 (useParams)</h3>
              <div className='bg-gray-50 rounded-lg p-4'>
                <pre className='text-sm text-gray-600'>
                  {JSON.stringify(params, null, 2)}
                </pre>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>查詢參數 (useSearchParams)</h3>
              <div className='bg-gray-50 rounded-lg p-4'>
                <pre className='text-sm text-gray-600'>
                  {JSON.stringify(searchParamsObj, null, 2)}
                </pre>
              </div>
            </div>

            <div className='space-y-4'>
              <p className='text-sm text-gray-600'>示例 URL：</p>
              <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                <li>/client-params/a/b/c?name=test&age=25</li>
                <li>/client-params/products/123?category=electronics</li>
                <li>/client-params/users?sort=desc&page=2</li>
              </ul>
            </div>

            <div className='pt-4'>
              <Link
                href='/dynamic-routes-demo'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
              >
                返回示例列表
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
