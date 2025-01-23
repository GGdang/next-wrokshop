import Link from 'next/link'

export default async function CatchAllRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Catch-all Segments 示例</h2>
          <p className='text-gray-500 mb-4'>這個頁面展示了 Catch-all Segments 功能。當前的路徑段是：</p>
          <div className='bg-gray-50 rounded-lg p-4 mb-4'>
            <pre className='text-sm text-gray-600'>{JSON.stringify({ slug }, null, 2)}</pre>
          </div>
          <div className='mt-4 space-y-4'>
            <p className='text-sm text-gray-600'>使用 [...slug] 語法可以捕獲所有路徑段。例如：</p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>/catch-all/a/b/c 將捕獲 [a, b, c]</li>
              <li>/catch-all/x/y 將捕獲 [x, y]</li>
              <li>注意：/catch-all 將返回 404 錯誤</li>
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
