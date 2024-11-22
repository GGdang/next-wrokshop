export default function ParallelRoutesLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}) {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>平行路由示例</h2>
          <p className='text-gray-500 mb-4'>
            這個示例展示了如何使用平行路由同時顯示多個頁面內容
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Team Slot */}
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Team Slot (@team)</h3>
              {team}
            </div>

            {/* Analytics Slot */}
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Analytics Slot (@analytics)</h3>
              {analytics}
            </div>
          </div>

          {/* Default Slot */}
          <div className='mt-4'>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Default Slot</h3>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
