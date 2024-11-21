export default function ParallelLayout({
  children,
  profile,
  notifications,
}: {
  children: React.ReactNode
  profile: React.ReactNode
  notifications: React.ReactNode
}) {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* 頂部導航欄 */}
      <nav className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex items-center'>
              <span className='text-xl font-bold text-gray-800'>儀表板</span>
            </div>
          </div>
        </div>
      </nav>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-12 gap-6'>
          {/* 主要內容區域 */}
          <div className='col-span-12 lg:col-span-6'>
            <div className='bg-white shadow rounded-lg'>{children}</div>
          </div>
          {/* 用戶資料區域 */}
          <div className='col-span-12 lg:col-span-3'>
            <div className='bg-white shadow rounded-lg'>{profile}</div>
          </div>
          {/* 通知區域 */}
          <div className='col-span-12 lg:col-span-3'>
            <div className='bg-white shadow rounded-lg'>{notifications}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
