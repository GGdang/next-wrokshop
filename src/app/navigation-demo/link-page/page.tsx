import Link from 'next/link'

export default function LinkPage() {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Link 組件示例頁面
          </h2>
          <p className='text-gray-500 mb-4'>
            這個頁面展示了使用 Next.js Link 組件的跳轉效果。Link
            組件是客戶端導航的最佳選擇，它具有以下特點：
          </p>
          <ul className='list-disc pl-5 space-y-2 text-gray-600 mb-6'>
            <li>自動代碼分割</li>
            <li>客戶端導航</li>
            <li>預加載鄰近頁面</li>
            <li>自動處理滾動位置</li>
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
