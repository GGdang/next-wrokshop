export const dynamic = 'force-dynamic'

import { unstable_cache } from 'next/cache'
import { queries } from '@/lib/db'
const getCachedSeats = unstable_cache(
  async () => {
    return await queries.getAllSeats()
  },
  ['library-seats'], // 緩存鍵
  {
    revalidate: 10, // 10 秒後重新驗證
  }
)

// const getCachedSeats = async () => {
//   return await queries.getAllSeats()
// }

export default async function OrmCachingDemo() {
  const seats = await getCachedSeats()

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>ORM 緩存示例</h1>

      {/* 說明部分 */}
      <div className='bg-blue-50 p-6 rounded-lg mb-8'>
        <h2 className='text-xl font-semibold mb-4'>緩存機制說明</h2>
        <ul className='list-disc list-inside space-y-2 text-gray-700'>
          <li>使用 Next.js 的 unstable_cache API 緩存數據庫查詢結果</li>
          <li>緩存時間設置為 30 秒</li>
          <li>使用 'seats' 標籤，可通過 revalidateTag 手動使緩存失效</li>
          <li>適用於不經常變化的數據</li>
          <li>可以提高頁面載入速度並減少數據庫負載</li>
        </ul>
      </div>

      {/* 座位數據顯示 */}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {seats.map((seat) => (
          <div key={seat.id} className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className='flex justify-between items-start mb-4'>
              <div>
                <h3 className='font-medium text-lg'>
                  {seat.branchName} - {seat.areaName}
                </h3>
                <p className='text-gray-600'>{seat.floorName}</p>
              </div>
              <span className='px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full'>已緩存</span>
            </div>

            <div className='mt-4'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600'>可用座位</span>
                <span className='font-medium'>
                  {seat.freeCount} / {seat.totalCount}
                </span>
              </div>

              <div className='mt-2 bg-gray-200 rounded-full h-2'>
                <div
                  className={`h-2 rounded-full ${
                    seat.freeCount / seat.totalCount > 0.5 ? 'bg-green-500' : 'bg-orange-500'
                  }`}
                  style={{
                    width: `${(seat.freeCount / seat.totalCount) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className='mt-4 text-xs text-gray-500'>
              數據更新時間：
              {new Date(seat.updatedAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
