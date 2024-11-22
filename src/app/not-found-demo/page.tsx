import Link from 'next/link'

export default function NotFoundDemo() {
  return (
    <div className='max-w-4xl mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-8'>Not Found 示例</h1>

      <div className='space-y-6'>
        <p className='text-gray-600'>
          Next.js 提供了內置的 not-found.tsx 文件來處理 404 錯誤。 當訪問不存在的頁面時，會顯示一個友好的錯誤頁面。
        </p>

        <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
          <h2 className='text-xl font-semibold'>使用場景：</h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-600'>
            <li>訪問不存在的 URL</li>
            <li>通過 notFound() 函數主動觸發</li>
            <li>數據不存在時的錯誤處理</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
          <h2 className='text-xl font-semibold'>實現方式：</h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-600'>
            <li>在目錄下創建 not-found.tsx</li>
            <li>使用 [...param] 捕獲所有未定義的路徑</li>
            <li>在捕獲的路徑中調用 notFound()</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <p className='font-semibold'>試試這些路徑：</p>
          <div className='space-x-4'>
            <Link
              href='/not-found-demo/any-undefined-path'
              className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
              訪問未定義的路徑
            </Link>
            <Link
              href='/not-found-demo/trigger'
              className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
              主動觸發 404
            </Link>
            <Link
              href='/not-found-demo/demo'
              className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
