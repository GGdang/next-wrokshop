import Link from 'next/link'

export default function RedirectedPage() {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            重定向目標頁面
          </h2>
          <p className='text-gray-500 mb-4'>
            這個頁面是通過服務端重定向到達的。Next.js 的 redirect
            函數具有以下特點：
          </p>
          <ul className='list-disc pl-5 space-y-2 text-gray-600 mb-6'>
            <li>在服務端執行重定向</li>
            <li>可以在頁面加載前進行重定向</li>
            <li>支持相對路徑和絕對路徑</li>
            <li>可以設置重定向類型（永久或臨時）</li>
          </ul>
          <div className='mt-4'>
            <Link
              href='/navigation-demo'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
            >
              返回導航示例
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
