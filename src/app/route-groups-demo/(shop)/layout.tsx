export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen'>
      {/* 商店專用的導航欄 */}
      <nav className='bg-gradient-to-r from-green-600 to-teal-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='text-white font-bold'>購物中心</div>
            </div>
            <div className='flex space-x-4'>
              <a
                href='/products'
                className='text-white hover:bg-teal-500 px-3 py-2 rounded-md text-sm font-medium'
              >
                商品列表
              </a>
              <a
                href='/cart'
                className='text-white hover:bg-teal-500 px-3 py-2 rounded-md text-sm font-medium'
              >
                購物車
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

      {/* 商店專用的頁尾 */}
      <footer className='bg-gray-800'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-gray-400'>
            <p>全年無休的線上客服支援</p>
            <p className='mt-2 text-sm'>週一至週日 24 小時服務</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
