// 強制頁面動態渲染，確保每次都獲取最新的座位數據
export const dynamic = 'force-dynamic'

import { queries } from '@/lib/db'
import { Prisma } from '@prisma/client'

// 錯誤提示組件
function ErrorMessage({ message }: { message: string }) {
  return (
    <div className='p-4 bg-red-50 border border-red-200 rounded-lg mb-6'>
      <div className='flex items-center text-red-600'>
        <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
            clipRule='evenodd'
          />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  )
}

// 空數據提示組件
function EmptyState({ message }: { message: string }) {
  return (
    <div className='p-8 text-center bg-gray-50 rounded-lg'>
      <svg
        className='mx-auto h-12 w-12 text-gray-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
        />
      </svg>
      <h3 className='mt-2 text-sm font-medium text-gray-900'>{message}</h3>
    </div>
  )
}

export default async function DataFetchingAndCaching() {
  let librarySeats = []
  let availableSeats = []
  let dbError = null

  // 獲取數據庫數據
  try {
    ;[librarySeats, availableSeats] = await Promise.all([queries.getAllSeats(), queries.getAvailableSeats(5)])
  } catch (error) {
    console.error('Database Error:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // 處理已知的 Prisma 錯誤
      switch (error.code) {
        case 'P1001': // 無法連接到數據庫
          dbError = '無法連接到數據庫，請檢查數據庫連接'
          break
        case 'P1002': // 數據庫認證錯誤
          dbError = '數據庫認證失敗，請檢查認證信息'
          break
        case 'P2021': // 表不存在
          dbError = '數據表不存在，請確保數據庫結構正確'
          break
        default:
          dbError = '數據庫操作出錯，請稍後再試'
      }
    } else if (error instanceof Prisma.PrismaClientValidationError) {
      dbError = '數據驗證錯誤，請檢查數據格式'
    } else {
      dbError = '發生未知錯誤，請稍後再試'
    }
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-6'>圖書館座位資訊</h1>

      {/* 顯示數據庫錯誤 */}
      {dbError && <ErrorMessage message={dbError} />}

      {/* 本地數據庫的座位信息 */}
      <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>所有座位</h2>
        {librarySeats.length > 0 ? (
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {librarySeats.map((seat) => (
              <div key={seat.id} className='p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='font-medium'>
                  {seat.branchName} - {seat.areaName}
                </h3>
                <p className='text-gray-600'>樓層：{seat.floorName}</p>
                <p className='mt-2'>
                  可用座位：<span className='font-medium'>{seat.freeCount}</span> / {seat.totalCount}
                </p>
              </div>
            ))}
          </div>
        ) : !dbError ? (
          <EmptyState message='目前沒有座位資訊' />
        ) : null}
      </div>

      {/* 顯示有充足空位的區域 */}
      <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>充足座位區域 (≥5個空位)</h2>
        {availableSeats.length > 0 ? (
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {availableSeats.map((seat) => (
              <div
                key={seat.id}
                className='p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-green-50'
              >
                <h3 className='font-medium'>
                  {seat.branchName} - {seat.areaName}
                </h3>
                <p className='text-gray-600'>樓層：{seat.floorName}</p>
                <p className='mt-2'>
                  可用座位：<span className='font-medium text-green-600'>{seat.freeCount}</span> / {seat.totalCount}
                </p>
              </div>
            ))}
          </div>
        ) : !dbError ? (
          <EmptyState message='目前沒有充足座位的區域' />
        ) : null}
      </div>
    </div>
  )
}
