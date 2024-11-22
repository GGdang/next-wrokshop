import Link from 'next/link'

export default function Page2() {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-6'>頁面 2</h2>
      <p className='mb-4 text-gray-600'>
        這是另一個頁面。Layout 組件在頁面切換時保持了狀態，提供了更好的用戶體驗。
      </p>

      <div className='space-y-4'>
        <Link
          href='/layout-demo'
          className='block p-4 bg-purple-50 rounded-lg hover:bg-purple-100'
        >
          返回主頁
        </Link>
        <Link
          href='/layout-demo/page1'
          className='block p-4 bg-purple-50 rounded-lg hover:bg-purple-100'
        >
          訪問頁面 1
        </Link>
      </div>
    </div>
  )
}
