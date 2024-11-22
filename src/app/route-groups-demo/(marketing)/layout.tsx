export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen'>
      {/* 行銷專用的導航欄 */}
      <nav className='bg-gradient-to-r from-purple-600 to-indigo-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='text-white font-bold'>行銷專區</div>
            </div>
            <div className='flex space-x-4'>
              <a
                href='/about'
                className='text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium'
              >
                關於我們
              </a>
              <a
                href='/blog'
                className='text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium'
              >
                部落格
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          {children}
        </div>
      </main>

      {/* 行銷專用的頁尾 */}
      <footer className='bg-gray-800'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-gray-400'>
            <p>訂閱我們的電子報，獲取最新優惠資訊</p>
            <p className='mt-2 text-sm'>每週更新，精選內容</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
