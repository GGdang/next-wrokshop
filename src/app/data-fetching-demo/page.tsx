export default function DataFetchingDemo() {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>中間件示例</h2>

          <div className='space-y-4 mb-8'>
            <button onClick={() => {}} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4'>
              基本請求與暫存
            </button>
            <button onClick={() => {}} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4'>
              伺服器 actions 與 mutations
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
