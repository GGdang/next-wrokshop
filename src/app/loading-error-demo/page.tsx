import Link from 'next/link'

export default function LoadingErrorDemo() {
  return (
    <div className='p-8 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8'>Loading & Error 示例</h1>

      <div className='space-y-6'>
        {/* Loading 示例 */}
        <section>
          <h2 className='text-xl font-semibold mb-4'>Loading 示例</h2>
          <p className='text-gray-600 mb-4'>
            Next.js 提供了內置的 loading.tsx 文件來處理加載狀態。當頁面正在加載時，
            會顯示一個優雅的加載界面。
          </p>
          <Link
            href='/loading-error-demo/slow-page'
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            訪問慢加載頁面
          </Link>
        </section>

        {/* Error 示例 */}
        <section>
          <h2 className='text-xl font-semibold mb-4'>Error 示例</h2>
          <p className='text-gray-600 mb-4'>
            Next.js 的 error.tsx 文件可以優雅地處理錯誤情況。
            當頁面出現錯誤時，會顯示一個友好的錯誤界面。
          </p>
          <Link
            href='/loading-error-demo/error-page'
            className='inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          >
            訪問錯誤頁面
          </Link>
        </section>
      </div>
    </div>
  )
}
