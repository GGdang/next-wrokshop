import Link from 'next/link'

export default function DataFetchingDemo() {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>數據獲取示例</h2>

          <div className='space-y-4 mb-8'>
            <Link
              href='/data-fetching-demo/basic-fetching-data'
              className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mr-4 inline-block'
            >
              伺服器端數據獲取
            </Link>
            <Link
              href='/data-fetching-demo/client-fetching-data'
              className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mr-4 inline-block'
            >
              客戶端數據獲取
            </Link>

            <Link
              href='/data-fetching-demo/data-fetching-and-caching'
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4 inline-block'
            >
              伺服器端從 db 獲取數據
            </Link>

            <Link
              href='/data-fetching-demo/orm-caching'
              className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-4 inline-block'
            >
              next/unstable_cache 範例
            </Link>

            {/* <Link
              href='/data-fetching-demo/fetching-patterns'
              className='bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 mr-4 inline-block'
            >
              數據獲取模式
            </Link> */}

            <Link
              href='/data-fetching-demo/reusing-data/1'
              className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4 inline-block'
            >
              react/cache 範例
            </Link>

            <Link
              href='/data-fetching-demo/server-actions-and-mutations'
              className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-4 inline-block'
            >
              server actions and mutations 範例
            </Link>
            <Link
              href='/data-fetching-demo/client-actions-and-mutations'
              className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-4 inline-block'
            >
              client actions and mutations 範例
            </Link>
            {/* <Link
              href='/data-fetching-demo/taint-demo'
              className='bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 mr-4 inline-block'
            >
              Taint 示例
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
