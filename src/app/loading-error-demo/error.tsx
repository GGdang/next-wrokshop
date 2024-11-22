'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // 可以在這裡記錄錯誤到錯誤報告服務
    console.error(error)
  }, [error])

  return (
    <div className='p-8 max-w-4xl mx-auto text-center'>
      <div className='bg-red-50 p-6 rounded-lg'>
        <h2 className='text-2xl font-bold text-red-600 mb-4'>
          糟糕！出現了一些問題
        </h2>
        <p className='text-gray-600 mb-6'>{error.message}</p>
        <button
          onClick={reset}
          className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
        >
          重試
        </button>
      </div>
    </div>
  )
}
