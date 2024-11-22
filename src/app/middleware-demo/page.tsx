'use client'

import { useState, useEffect } from 'react'

export default function MiddlewareDemo() {
  const [headers, setHeaders] = useState<Record<string, string>>({})

  useEffect(() => {
    // 發送請求以觸發中間件
    fetch('/api/echo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: '測試中間件' }),
    }).then(async (response) => {
      // 獲取響應頭
      const headers: Record<string, string> = {}
      response.headers.forEach((value, key) => {
        headers[key] = value
      })
      setHeaders(headers)
    })
  }, [])

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            中間件示例
          </h2>
          <p className='text-gray-500 mb-4'>
            這個示例展示了如何使用 Next.js 的中間件來處理請求：
          </p>

          <div className='mt-6'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              響應頭信息：
            </h3>
            <div className='bg-gray-50 rounded-lg p-4'>
              <pre className='whitespace-pre-wrap text-sm text-gray-600'>
                {JSON.stringify(headers, null, 2)}
              </pre>
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              中間件功能說明：
            </h3>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>攔截和修改請求</li>
              <li>添加自定義響應頭</li>
              <li>記錄請求信息</li>
              <li>根據條件重定向</li>
            </ul>
          </div>

          <div className='mt-8'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              實現說明：
            </h3>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>在項目根目錄創建 middleware.ts</li>
              <li>配置需要執行中間件的路徑</li>
              <li>在中間件中處理請求和響應</li>
              <li>支持異步操作和複雜邏輯</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
