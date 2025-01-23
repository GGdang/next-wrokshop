'use client'

import { useState } from 'react'
import Link from 'next/link'
export default function MiddlewareDemo() {
  const [headers, setHeaders] = useState<Record<string, string>>({})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testEndpoints = async (endpoint: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/middleware-demo${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer test-token', // 添加認證 token
        },
        body: JSON.stringify({
          message: '測試中間件',
          timestamp: new Date().toISOString(),
        }),
      })

      // 獲取響應頭
      const headers: Record<string, string> = {}
      response.headers.forEach((value, key) => {
        headers[key] = value
      })
      setHeaders(headers)

      // 獲取響應內容
      const data = await response.json()
      setResponse(data)
    } catch (error) {
      console.error('Error:', error)
      setResponse({ error: '請求失敗' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>中間件示例</h2>

          <div className='space-y-4 mb-8'>
            <button
              onClick={() => testEndpoints('')}
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4'
              disabled={loading}
            >
              測試基本請求
            </button>
            <button
              onClick={() => testEndpoints('/protected')}
              className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4'
              disabled={loading}
            >
              測試受保護路由
            </button>
            <button
              onClick={() => testEndpoints('/protected')}
              className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
              disabled={loading}
            >
              <Link href='/middleware-demo/about'>測試 Middleware Redirect (服務端重定向)</Link>
            </button>
          </div>

          {loading && <div className='text-gray-500 mb-4'>載入中...</div>}

          {response && (
            <div className='mt-6'>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>響應內容：</h3>
              <div className='bg-gray-50 rounded-lg p-4'>
                <pre className='whitespace-pre-wrap text-sm text-gray-600'>{JSON.stringify(response, null, 2)}</pre>
              </div>
            </div>
          )}

          <div className='mt-6'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>響應頭信息：</h3>
            <div className='bg-gray-50 rounded-lg p-4'>
              <pre className='whitespace-pre-wrap text-sm text-gray-600'>{JSON.stringify(headers, null, 2)}</pre>
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>中間件功能說明：</h3>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>基本請求處理：展示請求的基本信息和響應頭</li>
              <li>路由保護：某些路徑需要特定條件才能訪問</li>
              <li>請求修改：自動添加時間戳和其他信息</li>
              <li>響應修改：添加自定義響應頭</li>
            </ul>
          </div>

          <div className='mt-8'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>實現說明：</h3>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>middleware.ts 配置了不同路徑的處理邏輯</li>
              <li>可以根據請求路徑執行不同的中間件邏輯</li>
              <li>支持請求攔截、修改和重定向</li>
              <li>可以添加自定義響應頭和其他信息</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
