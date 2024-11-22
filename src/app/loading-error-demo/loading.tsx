export default function Loading() {
  return (
    <div className='p-8 max-w-4xl mx-auto'>
      {/* 標題骨架屏 */}
      <div className='h-8 bg-gray-200 rounded w-1/3 mb-6 animate-pulse'></div>

      {/* 內容骨架屏 */}
      <div className='space-y-4'>
        <div className='h-4 bg-gray-200 rounded w-3/4 animate-pulse'></div>
        <div className='h-4 bg-gray-200 rounded w-2/3 animate-pulse'></div>
        <div className='h-4 bg-gray-200 rounded w-1/2 animate-pulse'></div>
      </div>

      {/* 按鈕骨架屏 */}
      <div className='mt-8 space-y-4'>
        <div className='h-12 bg-gray-200 rounded w-1/4 animate-pulse'></div>
        <div className='h-12 bg-gray-200 rounded w-1/4 animate-pulse'></div>
      </div>
    </div>
  )
}
