export default function PhotoPage({ params }: { params: { id: string } }) {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            照片 {params.id} 詳情頁
          </h2>
          <div className='aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg'>
            <div className='flex items-center justify-center'>
              <p className='text-gray-500'>照片 {params.id} 的完整頁面</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
