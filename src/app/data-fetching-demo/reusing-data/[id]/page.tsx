import { cache } from 'react'
import { queries } from '@/lib/db'
import { notFound } from 'next/navigation'

// 使用 React cache 包裝數據庫查詢
// 這確保相同的查詢只會執行一次
export const getSeat = cache(async (id: string) => {
  const seats = await queries.getAllSeats()
  const seat = seats.find((s) => s.id === parseInt(id))
  if (!seat) notFound()
  return seat
})

// 生成靜態路徑參數
export async function generateStaticParams() {
  const seats = await queries.getAllSeats()
  return seats.map((seat) => ({
    id: String(seat.id),
  }))
}

// 生成頁面元數據
export async function generateMetadata({ params }: { params: { id: string } }) {
  const seat = await getSeat(params.id)

  return {
    title: `${seat.branchName} - ${seat.areaName}`,
    description: `查看 ${seat.branchName} ${seat.areaName} 的座位情況`,
  }
}

// 頁面組件
export default async function SeatDetailPage({ params }: { params: { id: string } }) {
  const seat = await getSeat(params.id)

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          {/* 標題區域 */}
          <div className='p-6 bg-blue-50'>
            <h1 className='text-2xl font-bold text-gray-900'>
              {seat.branchName} - {seat.areaName}
            </h1>
            <p className='text-gray-600 mt-2'>{seat.floorName}</p>
          </div>

          {/* 座位信息 */}
          <div className='p-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-gray-50 p-4 rounded-lg'>
                <h3 className='text-sm font-medium text-gray-500'>可用座位</h3>
                <p className='mt-1 text-2xl font-semibold text-green-600'>{seat.freeCount}</p>
              </div>
              <div className='bg-gray-50 p-4 rounded-lg'>
                <h3 className='text-sm font-medium text-gray-500'>總座位數</h3>
                <p className='mt-1 text-2xl font-semibold text-blue-600'>{seat.totalCount}</p>
              </div>
            </div>

            {/* 使用率進度條 */}
            <div className='mt-6'>
              <div className='flex justify-between text-sm text-gray-600 mb-2'>
                <span>使用率</span>
                <span>{Math.round(((seat.totalCount - seat.freeCount) / seat.totalCount) * 100)}%</span>
              </div>
              <div className='h-2 bg-gray-200 rounded-full'>
                <div
                  className={`h-2 rounded-full ${
                    seat.freeCount > seat.totalCount / 2 ? 'bg-green-500' : 'bg-orange-500'
                  }`}
                  style={{
                    width: `${((seat.totalCount - seat.freeCount) / seat.totalCount) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* 更新時間 */}
            <div className='mt-6 text-sm text-gray-500'>最後更新：{new Date(seat.updatedAt).toLocaleString()}</div>
          </div>

          {/* 說明部分 */}
          <div className='p-6 bg-gray-50 mt-6'>
            <h2 className='text-lg font-medium mb-4'>數據重用說明</h2>
            <div className='prose prose-sm'>
              <p>這個頁面展示了如何在多個函數中重用相同的數據查詢：</p>
              <ul className='list-disc list-inside mt-2 space-y-1'>
                <li>使用 React cache 包裝數據庫查詢</li>
                <li>在 generateStaticParams 中生成靜態路徑</li>
                <li>在 generateMetadata 中生成頁面元數據</li>
                <li>在頁面組件中顯示詳細信息</li>
              </ul>
              <p className='mt-4'>通過使用 cache，相同的查詢只會執行一次，提高了性能並減少了數據庫負載。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
