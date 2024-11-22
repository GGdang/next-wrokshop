import Link from 'next/link'

// 模擬從 API 獲取數據的函數
async function fetchDataById(id: string) {
  // 模擬 API 調用延遲
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    id,
    timestamp: new Date().toISOString(),
    details: `ID ${id} 的詳細信息`,
  }
}

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BasicDynamicRoute({ params, searchParams }: Props) {
  const { id } = await params
  const searchParamsData = await searchParams

  // 異步獲取數據
  const data = await fetchDataById(id)

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>基本動態路由示例</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>路徑參數</h3>
              <div className='bg-gray-50 rounded-lg p-4'>
                <pre className='text-sm text-gray-600'>{JSON.stringify({ id }, null, 2)}</pre>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>查詢參數</h3>
              <div className='bg-gray-50 rounded-lg p-4'>
                <pre className='text-sm text-gray-600'>{JSON.stringify(searchParamsData, null, 2)}</pre>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>數據</h3>
              <div className='bg-gray-50 rounded-lg p-4'>
                <pre className='text-sm text-gray-600'>{JSON.stringify({ id, data }, null, 2)}</pre>
              </div>
            </div>

            <div className='space-y-4'>
              <p className='text-sm text-gray-600'>示例 URL：</p>
              <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                <li>/basic/123?name=test</li>
                <li>/basic/456?category=electronics&sort=desc</li>
                <li>/basic/789?tags=new&tags=featured</li>
              </ul>
            </div>

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
