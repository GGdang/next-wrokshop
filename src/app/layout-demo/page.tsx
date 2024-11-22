import Link from 'next/link'

export default function LayoutDemo() {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-6'>Layout 示例頁面</h2>
      <p className='mb-4 text-gray-600'>
        Layout 是一個在多個頁面之間共享的 UI。在路由切換時會保持狀態，不會重新渲染。
      </p>

      <div className='space-y-4'>
        <Link
          href='/layout-demo/page1'
          className='block p-4 bg-purple-50 rounded-lg hover:bg-purple-100'
        >
          訪問頁面 1
        </Link>
        <Link
          href='/layout-demo/page2'
          className='block p-4 bg-purple-50 rounded-lg hover:bg-purple-100'
        >
          訪問頁面 2
        </Link>
      </div>
    </div>
  )
}
