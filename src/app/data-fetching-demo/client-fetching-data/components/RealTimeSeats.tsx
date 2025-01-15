'use client'
import { useState, useEffect } from 'react'
interface Seat {
  areaId: number
  areaName: string
  branchName: string
  floorName: string
  freeCount: number
  totalCount: number
}
export function RealTimeSeats() {
  const [activity, setActivity] = useState<Seat[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  // 獲取座位數據的函數
  const fetchSeats = async () => {
    setIsLoading(true)
    try {
      // 使用新的 API 路徑
      const res = await fetch('/api/taipei-data')
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || `HTTP error! status: ${res.status}`)
      }
      const data = await res.json()
      // 如果 API 調用失敗，使用模擬數據
      if (!data || data.error) {
        console.warn('Using mock data due to API error:', data?.error)
        setActivity([])
      } else {
        setActivity(data.result.results)
      }

      setLastUpdated(new Date())
      setError(null)
    } catch (err) {
      console.error('Error fetching seats:', err)
      // 在錯誤時使用模擬數據
      setActivity([])
      setLastUpdated(new Date())
      setError(err instanceof Error ? err.message : '獲取數據時發生錯誤')
    } finally {
      setIsLoading(false)
    }
  }

  // 組件掛載時獲取數據，並每60秒更新一次
  useEffect(() => {
    fetchSeats() // 初始獲取
  }, [])

  if (error) {
    return (
      <div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
        <div className='flex items-center text-red-600'>
          <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
          <span>Error: {error}</span>
        </div>
      </div>
    )
  }

  if (!activity) {
    return (
      <div className='p-4 flex items-center justify-center'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
        <span className='ml-2'>Loading seats data...</span>
      </div>
    )
  }

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        {lastUpdated && <span className='text-sm text-gray-500'>最後更新: {lastUpdated.toLocaleTimeString()}</span>}
        <button
          onClick={fetchSeats}
          disabled={isLoading}
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors relative ${
            isLoading ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <span className='opacity-0'>手動更新</span>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
              </div>
            </>
          ) : (
            '手動更新'
          )}
        </button>
      </div>

      <div
        className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-200 ${
          isLoading ? 'opacity-50' : ''
        }`}
      >
        {activity.map((item) => (
          <div key={item._id} className='p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <h3 className='font-medium'>{item['廠商']}</h3>
            <p className='text-gray-600'>活動名稱：{item['活動名稱']}</p>
            <p className='text-gray-600'>活動類型：{item['活動類型']}</p>
            <p className='text-gray-600'>租用起始日 ：{item['租用起始日']}</p>
            <p className='text-gray-600'>租用結束日：{item['租用結束日']}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
