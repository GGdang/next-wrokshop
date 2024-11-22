import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-xl p-8 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>404 - Not Found Demo</h2>
        <h3 className='text-2xl font-semibold text-gray-600 mb-6'>
          這是 Not Found Demo 的 404 頁面
        </h3>
        <p className='text-gray-500 mb-8'>
          這個頁面會處理 /not-found-demo/* 路徑下所有未定義的頁面
        </p>
        <ul className='text-gray-500 mb-8 text-left list-disc pl-4'>
          <li>當前位置：/not-found-demo/not-found.tsx</li>
          <li>作用範圍：/not-found-demo/* 路徑下所有未定義的頁面</li>
          <li>優先級：高於根目錄的 not-found.tsx</li>
        </ul>
        <div className='space-x-4'>
          <Link
            href='/not-found-demo'
            className='inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
          >
            返回示例
          </Link>
          <Link
            href='/'
            className='inline-block px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600'
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  )
}
