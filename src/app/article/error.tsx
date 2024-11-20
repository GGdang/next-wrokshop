'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 可以在這裡記錄錯誤到錯誤報告服務
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          發生錯誤了！
        </h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-2">錯誤信息：{error.message}</p>
          {error.digest && (
            <p className="text-sm text-gray-500">
              錯誤編號：{error.digest}
            </p>
          )}
        </div>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          重試
        </button>
      </div>
    </div>
  )
}
