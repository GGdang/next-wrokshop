'use client'

import { useState } from 'react'

export default function RouteHandlersDemo() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/echo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      const data = await response.json()
      alert(data.message)
    } catch (error) {
      console.error('Error:', error)
      alert('發生錯誤，請稍後再試')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            路由處理器示例
          </h2>
          <p className='text-gray-500 mb-4'>
            這個示例展示了如何使用 Next.js 的路由處理器來處理 API 請求：
          </p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'
              >
                輸入消息
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='message'
                  id='message'
                  className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              {loading ? '發送中...' : '發送請求'}
            </button>
          </form>

          <div className='mt-8'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              實現說明：
            </h3>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>在 app/api 目錄下創建路由處理器</li>
              <li>支持不同的 HTTP 方法（GET、POST 等）</li>
              <li>可以處理不同格式的請求和響應</li>
              <li>支持中間件和錯誤處理</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
