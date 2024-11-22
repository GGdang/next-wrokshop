export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen'>
      {/* 頂部導航 */}
      <nav className='bg-purple-600 text-white p-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-xl font-bold'>Layout 示例</h1>
          <p className='text-sm opacity-80'>layout.tsx 會在路由切換時保持狀態</p>
        </div>
      </nav>

      {/* 側邊欄和主內容的布局 */}
      <div className='max-w-4xl mx-auto grid grid-cols-12 gap-4 p-4'>
        {/* 側邊欄 */}
        <aside className='col-span-3 space-y-2'>
          <div className='p-4 bg-gray-100 rounded'>側邊欄項目 1</div>
          <div className='p-4 bg-gray-100 rounded'>側邊欄項目 2</div>
          <div className='p-4 bg-gray-100 rounded'>側邊欄項目 3</div>
        </aside>

        {/* 主內容區域 */}
        <main className='col-span-9 bg-white rounded-lg shadow'>
          {children}
        </main>
      </div>
    </div>
  )
}
