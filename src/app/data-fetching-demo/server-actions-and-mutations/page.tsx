import { createSeat } from './actions'
import { queries } from '@/lib/db'

export default async function ServerActionsAndMutationsDemo() {
  const seats = await queries.getAllSeats()
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>Server Actions and Mutations Demo</h1>

      {/* 新增座位表單 */}
      <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>新增座位</h2>
        <form
          action={async (formData) => {
            'use server'

            const data = {
              branch_name: formData.get('branchName')?.toString() || '',
              area_name: formData.get('areaName')?.toString() || '',
              floor_name: formData.get('floorName')?.toString() || '',
              total_count: parseInt(formData.get('totalCount')?.toString() || '0'),
              free_count: parseInt(formData.get('freeCount')?.toString() || '0'),
              area_id: seats[seats.length - 1].areaId + 1,
            }

            const result = await createSeat(data)
            if (!result.success) {
              throw new Error(result.error)
            }
          }}
          className='space-y-4 max-w-md bg-white p-6 rounded-lg shadow-sm'
        >
          <div>
            <label htmlFor='branchName' className='block text-sm font-medium text-gray-700 mb-1'>
              分館名稱
            </label>
            <input
              type='text'
              id='branchName'
              name='branchName'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor='areaName' className='block text-sm font-medium text-gray-700 mb-1'>
              區域名稱
            </label>
            <input
              type='text'
              id='areaName'
              name='areaName'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor='floorName' className='block text-sm font-medium text-gray-700 mb-1'>
              樓層
            </label>
            <input
              type='text'
              id='floorName'
              name='floorName'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor='totalCount' className='block text-sm font-medium text-gray-700 mb-1'>
              總座位數
            </label>
            <input
              type='number'
              id='totalCount'
              name='totalCount'
              min='1'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor='freeCount' className='block text-sm font-medium text-gray-700 mb-1'>
              可用座位數
            </label>
            <input
              type='number'
              id='freeCount'
              name='freeCount'
              min='0'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            新增座位
          </button>
        </form>
      </div>

      {/* 顯示現有座位 */}
      <div>
        <h2 className='text-xl font-semibold mb-4'>現有座位</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {seats.map((item) => (
            <div key={item.id} className='p-4 bg-white rounded-lg shadow-sm'>
              <h3 className='font-medium'>
                {item.branchName} - {item.areaName}
              </h3>
              <p className='text-gray-600'>樓層：{item.floorName}</p>
              <p className='mt-2'>
                可用座位：
                <span className={`font-medium ${item.freeCount > 5 ? 'text-green-600' : 'text-orange-600'}`}>
                  {item.freeCount}
                </span>{' '}
                / {item.totalCount}
              </p>
              <p className='text-sm text-gray-500 mt-2'>最後更新：{new Date(item.updatedAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
