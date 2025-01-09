'use client'

import { useEffect, useState } from 'react'
import { getSeats, updateSeatCount } from '@/app/api/seats/actions'
import { Seat } from '@/app/api/seats/types'

export default function ClientActionsAndMutationsDemo() {
  const [seats, setSeats] = useState<Seat[]>([])
  const [tempSeats, setTempSeats] = useState<Map<number, number>>(new Map())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [updatingSeats, setUpdatingSeats] = useState<Set<number>>(new Set())

  // 載入座位資料
  const loadSeats = async () => {
    try {
      setLoading(true)
      const result = await getSeats()
      if (!result.success) {
        throw new Error(result.error)
      }
      setSeats(result.data)
      // 清空暫存的修改
      setTempSeats(new Map())
    } catch (err) {
      setError('載入資料時發生錯誤')
      console.error('Error loading seats:', err)
    } finally {
      setLoading(false)
    }
  }

  // 暫存修改的座位數
  const handleTempUpdate = (id: number, newCount: number) => {
    setTempSeats((current) => {
      const newMap = new Map(current)
      newMap.set(id, newCount)
      return newMap
    })
  }

  // 提交修改
  const handleSubmit = async (id: number) => {
    const newCount = tempSeats.get(id)
    if (newCount === undefined) return

    try {
      setUpdatingSeats((current) => new Set(current).add(id))

      const result = await updateSeatCount(id, newCount)

      if (!result.success) {
        throw new Error(result.error)
      }

      // 更新成功後重新載入資料
      await loadSeats()
    } catch (err) {
      setError('更新座位數時發生錯誤')
      console.error('Error updating seat count:', err)
    } finally {
      setUpdatingSeats((current) => {
        const newSet = new Set(current)
        newSet.delete(id)
        return newSet
      })
    }
  }

  // 取消修改
  const handleCancel = (id: number) => {
    setTempSeats((current) => {
      const newMap = new Map(current)
      newMap.delete(id)
      return newMap
    })
  }

  // 初始載入資料
  useEffect(() => {
    loadSeats()
  }, [])

  if (loading && seats.length === 0) {
    return <div className='flex justify-center items-center min-h-screen'>載入中...</div>
  }

  if (error) {
    return (
      <div className='text-red-500 text-center p-4'>
        {error}
        <button
          onClick={() => {
            setError(null)
            loadSeats()
          }}
          className='ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          重試
        </button>
      </div>
    )
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>Client Actions and Mutations Demo</h1>

      {/* 顯示現有座位 */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {seats.map((item) => {
          const tempCount = tempSeats.get(item.id)
          const isModified = tempCount !== undefined
          const displayCount = isModified ? tempCount : item.freeCount
          const isUpdating = updatingSeats.has(item.id)

          return (
            <div key={item.id} className='p-4 bg-white rounded-lg shadow-sm'>
              <h3 className='font-medium'>
                {item.branchName} - {item.areaName}
              </h3>
              <p className='text-gray-600'>樓層：{item.floorName}</p>
              <div className='mt-2 flex items-center gap-2'>
                <span>可用座位：</span>
                <input
                  type='number'
                  className={`w-16 px-2 py-1 border rounded ${isModified ? 'border-yellow-500' : ''}`}
                  value={displayCount}
                  min={0}
                  max={item.totalCount}
                  disabled={isUpdating}
                  onChange={(e) => {
                    const newCount = parseInt(e.target.value)
                    if (!isNaN(newCount) && newCount >= 0 && newCount <= item.totalCount) {
                      handleTempUpdate(item.id, newCount)
                    }
                  }}
                />
                <span>/ {item.totalCount}</span>

                {isModified && !isUpdating && (
                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleSubmit(item.id)}
                      className='px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600'
                      disabled={isUpdating}
                    >
                      確認
                    </button>
                    <button
                      onClick={() => handleCancel(item.id)}
                      className='px-2 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600'
                      disabled={isUpdating}
                    >
                      取消
                    </button>
                  </div>
                )}

                {isUpdating && <span className='text-blue-500 text-sm'>更新中...</span>}
              </div>
              <p className='text-sm text-gray-500 mt-2'>最後更新：{new Date(item.updatedAt).toLocaleString()}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
