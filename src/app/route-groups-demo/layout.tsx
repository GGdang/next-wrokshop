export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl font-bold text-gray-900'>路由群組示例</h1>
          <p className='mt-1 text-sm text-gray-500'>
            展示如何使用路由群組來組織路由並使用不同的布局
          </p>
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          {children}
        </div>
      </main>
    </div>
  )
}
