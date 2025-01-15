import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-screen p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Next.js 15 功能示例</h1>

        <div className='space-y-8'>
          {/* 1. Server & Client Components */}
          <section>
            <h2 className='text-xl font-bold mb-3'>1. Server & Client Components</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/components-demo' className='text-blue-500 hover:underline'>
                  範例：Server vs Client Components
                </Link>
              </li>
            </ul>
          </section>

          {/* 2. Layout */}
          <section>
            <h2 className='text-xl font-bold mb-3'>2. Layout 系統</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/layout-demo' className='text-blue-500 hover:underline'>
                  範例：共享布局與狀態保持
                </Link>
              </li>
            </ul>
          </section>

          {/* 3. Template */}
          <section>
            <h2 className='text-xl font-bold mb-3'>3. Template 系統</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/template-demo' className='text-blue-500 hover:underline'>
                  範例：模板與導航動畫
                </Link>
              </li>
            </ul>
          </section>

          {/* 4. Loading & Error */}
          <section>
            <h2 className='text-xl font-bold mb-3'>4. Loading & Error 處理</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/loading-error-demo' className='text-blue-500 hover:underline'>
                  範例：加載狀態與錯誤處理
                </Link>
              </li>
            </ul>
          </section>

          {/* 5. Not Found */}
          <section>
            <h2 className='text-xl font-bold mb-3'>5. Not Found 處理</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/not-found-demo' className='text-blue-500 hover:underline'>
                  範例：404 頁面與錯誤處理
                </Link>
              </li>
            </ul>
          </section>

          {/* 6. navigation 功能  */}
          <section>
            <h2 className='text-xl font-bold mb-3'>6. navigation 功能</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/navigation-demo' className='text-blue-500 hover:underline'>
                  範例：導航
                </Link>
              </li>
            </ul>
          </section>

          {/* 7. Route Groups */}
          <section>
            <h2 className='text-xl font-bold mb-3'>7. Route Groups</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/route-groups-demo' className='text-blue-500 hover:underline'>
                  範例：路由分組與組織
                </Link>
              </li>
            </ul>
          </section>

          {/* 8. Dynamic Routes */}
          <section>
            <h2 className='text-xl font-bold mb-3'>8. Dynamic Routes</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/dynamic-routes-demo' className='text-blue-500 hover:underline'>
                  範例：動態路由與參數
                </Link>
              </li>
            </ul>
          </section>

          {/* 9. Parallel Routes */}
          <section>
            <h2 className='text-xl font-bold mb-3'>9. Parallel Routes</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/parallel-routes-demo' className='text-blue-500 hover:underline'>
                  範例：並行路由與複雜布局
                </Link>
              </li>
            </ul>
          </section>

          {/* 10. Intercepting Routes */}
          <section>
            <h2 className='text-xl font-bold mb-3'>10. Intercepting Routes</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/intercepting-routes-demo' className='text-blue-500 hover:underline'>
                  範例：拦截路由與模態對話框
                </Link>
              </li>
            </ul>
          </section>

          {/* 11. api routes  */}
          <section>
            <h2 className='text-xl font-bold mb-3'>11. api routes</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/api-routes-demo' className='text-blue-500 hover:underline'>
                  範例：api routes
                </Link>
              </li>
            </ul>
          </section>

          {/* 12. middleware */}
          <section>
            <h2 className='text-xl font-bold mb-3'>12. middleware</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/middleware-demo' className='text-blue-500 hover:underline'>
                  範例：middleware
                </Link>
              </li>
            </ul>
          </section>

          {/* 13. Data Fetching */}
          <section>
            <h2 className='text-xl font-bold mb-3'>13. Data Fetching</h2>
            <ul className='space-y-2'>
              <li>
                <Link href='/data-fetching-demo' className='text-blue-500 hover:underline'>
                  範例：資料獲取
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
