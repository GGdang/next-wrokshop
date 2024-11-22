'use client'

import Link from 'next/link'

export default function DynamicRoutesDemo() {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>動態路由示例</h2>
          <div className='grid grid-cols-1 gap-4'>
            <Link
              href='/dynamic-routes-demo/basic/123?name=test&category=demo'
              className='block p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all'
            >
              <h3 className='text-lg font-medium text-gray-900'>基本動態路由</h3>
              <p className='mt-1 text-sm text-gray-500'>使用 [id] 語法 + searchParams</p>
            </Link>

            <Link
              href='/dynamic-routes-demo/catch-all/a/b/c'
              className='block p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all'
            >
              <h3 className='text-lg font-medium text-gray-900'>
                Catch-all Segments
              </h3>
              <p className='mt-1 text-sm text-gray-500'>使用 [...slug] 語法</p>
            </Link>

            <Link
              href='/dynamic-routes-demo/optional'
              className='block p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all'
            >
              <h3 className='text-lg font-medium text-gray-900'>
                Optional Catch-all Segments
              </h3>
              <p className='mt-1 text-sm text-gray-500'>使用 [[...slug]] 語法</p>
            </Link>

            <Link
              href='/dynamic-routes-demo/client-params/test/123?name=user&age=25'
              className='block p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all'
            >
              <h3 className='text-lg font-medium text-gray-900'>
                Client-side Params
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                使用 useParams & useSearchParams
              </p>
            </Link>

            <Link
              href='/parallel-routes-demo?team=engineering&analytics=daily'
              className='block p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all'
            >
              <h3 className='text-lg font-medium text-gray-900'>平行路由</h3>
              <p className='mt-1 text-sm text-gray-500'>
                使用 @folder 實現多個頁面同時顯示
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
