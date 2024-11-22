'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Layout 中的狀態會在頁面切換時保持 */}
      <div className='fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 z-10'>
        <div className='max-w-4xl mx-auto flex items-center justify-end space-x-2'>
          <span className='text-green-600 font-semibold'>Layout 計數器：{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className='px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600'
          >
            +1
          </button>
        </div>
      </div>

      <div className='mb-24'>
        {/* 導航欄在 Layout 中，所以不會重新渲染 */}
        <div className='bg-gray-100 shadow-md p-4 mb-4'>
          <nav className='max-w-4xl mx-auto'>
            <ul className='flex space-x-4'>
              <li>
                <Link
                  href='/template-demo'
                  className='text-blue-500 hover:underline'
                >
                  主頁
                </Link>
              </li>
              <li>
                <Link
                  href='/template-demo/page1'
                  className='text-blue-500 hover:underline'
                >
                  頁面 1
                </Link>
              </li>
              <li>
                <Link
                  href='/template-demo/page2'
                  className='text-blue-500 hover:underline'
                >
                  頁面 2
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='max-w-4xl mx-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}
