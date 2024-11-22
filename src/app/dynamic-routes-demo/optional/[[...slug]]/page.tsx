import Link from 'next/link'

// 模擬從 API 獲取數據的函數
async function fetchOptionalData(slug?: string[]) {
  // 模擬 API 調用延遲
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    path: slug ? slug.join('/') : '根路徑',
    segments: slug || [],
    timestamp: new Date().toISOString(),
    totalSegments: slug?.length || 0,
    isRoot: !slug
  }
}

export default async function OptionalCatchAllRoute({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params

  // 異步獲取數據
  const data = await fetchOptionalData(slug)

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Optional Catch-all Segments 示例</h2>
          <p className='text-gray-500 mb-4'>這個頁面展示了 Optional Catch-all Segments 功能，使用 async/await 異步獲取數據：</p>
          <div className='bg-gray-50 rounded-lg p-4 mb-4'>
            <pre className='text-sm text-gray-600'>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <div className='mt-4 space-y-4'>
            <p className='text-sm text-gray-600'>使用 [[...slug]] 語法可以選擇性地捕獲路徑段。例如：</p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>/optional 將返回 undefined</li>
              <li>/optional/a/b 將捕獲 ['a', 'b']</li>
              <li>與 [...slug] 的區別是：這個語法允許訪問沒有任何路徑段的基本路徑</li>
            </ul>
            <div>
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
