'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10'>
        <div className='max-w-4xl mx-auto flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Link
              href='/template-demo'
              className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
            >
              主頁
            </Link>
            <Link
              href='/template-demo/page1'
              className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
            >
              頁面 1
            </Link>
            <Link
              href='/template-demo/page2'
              className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
            >
              頁面 2
            </Link>
          </div>

          <div className='flex items-center space-x-2'>
            <span className='text-blue-600 font-semibold'>Template 計數器：{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className='px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
              +1
            </button>
          </div>
        </div>
      </div>

      <div className='mt-24'>
        {children}
      </div>
    </div>
  )
}
