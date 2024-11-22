'use client'

import { useState } from 'react'

export default function ClientDemo() {
  const [count, setCount] = useState(0)

  return (
    <section className='bg-green-50 p-6 rounded-lg'>
      <h2 className='text-xl font-semibold mb-4'>Client Component</h2>
      <div className='space-y-4'>
        <p>這是一個 Client Component，它：</p>
        <ul className='list-disc pl-5 space-y-2'>
          <li>在客戶端渲染</li>
          <li>可以使用瀏覽器 API</li>
          <li>可以使用 React hooks</li>
          <li>可以添加交互事件</li>
          <li>增加客戶端 bundle 大小</li>
        </ul>

        <div className='mt-6'>
          <p className='mb-2'>計數器示例：</p>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setCount(count - 1)}
              className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
            >
              -
            </button>
            <span className='text-xl font-bold'>{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
