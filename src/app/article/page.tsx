'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import { createArticle } from './actions'

// 1. 客戶端錯誤示例
function ClientError() {
  const [count, setCount] = useState(0)

  if (count === 3) {
    throw new Error('客戶端錯誤！') // 會觸發 error.tsx
  }

  return (
    <button onClick={() => setCount(count + 1)} className='mb-8 px-4 py-2 bg-red-500 text-white rounded'>
      客戶端錯誤 - 點擊 {count} 次
    </button>
  )
}

// 2. 服務器端錯誤示例
async function ServerError() {
  // 模擬一個失敗的 API 調用
  const res = await fetch('https://api.example.com/not-exist')
  if (!res.ok) {
    throw new Error('服務器端錯誤！') // 也會觸發 error.tsx
  }

  return <div>這裡不會被顯示</div>
}

export default function ArticlePage() {
  const [state, formAction] = useActionState(createArticle, null)

  return (
    <div className='p-6 space-y-8'>
      <h1 className='text-2xl font-bold mb-4'>錯誤處理示例</h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>1. 客戶端錯誤</h2>
        <p className='text-gray-600 mb-4'>點擊按鈕三次觸發錯誤</p>
        <ClientError />
      </div>

      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>2. 服務器端錯誤</h2>
        <p className='text-gray-600 mb-4'>這個組件會直接觸發錯誤</p>
        {/* @ts-expect-error Async Server Component */}
        <ServerError />
      </div>

      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>3. 表單錯誤（Server Action）</h2>
        <p className='text-gray-600 mb-4'>這個錯誤會被優雅處理，不會觸發 error.tsx</p>
        <form action={formAction}>
          <div className='space-y-4'>
            <div>
              <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
                標題
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
              />
            </div>

            {state?.error && (
              <div className='text-red-600 p-4 bg-red-50 rounded'>
                表單錯誤：{state.error}
                <div className='text-sm text-red-500'>(這個錯誤由 Server Action 處理，不會觸發 error.tsx)</div>
              </div>
            )}

            {state?.success && <div className='text-green-600'>{state.message}</div>}

            <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
              創建文章
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
