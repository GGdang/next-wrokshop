import Link from 'next/link'

export default function InterceptingRoutesDemo() {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>路由攔截示例</h2>
          <p className='text-gray-500 mb-4'>
            這個示例展示了如何使用 Next.js 的路由攔截功能來創建模態框體驗：
          </p>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400'
              >
                <div className='flex flex-col items-start'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    照片 {id}
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    點擊查看大圖（模態框）
                  </p>
                  <Link
                    href={`/intercepting-routes-demo/photos/${id}`}
                    className='mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
                  >
                    查看大圖
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-8'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              實現說明：
            </h3>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>
                使用 (..)photo/[id] 文件夾結構來攔截 /photos/[id] 的訪問
              </li>
              <li>在攔截的路由中使用模態框展示內容</li>
              <li>支持瀏覽器的前進/後退操作</li>
              <li>保持 URL 同步更新</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}