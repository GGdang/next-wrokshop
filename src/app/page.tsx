import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Image className='dark:invert' src='/next.svg' alt='Next.js logo' width={180} height={38} priority />

        <div className='space-y-6'>
          <div>
            <h2 className='text-xl font-bold mb-2'>基礎路由</h2>
            <ul className='space-y-2'>
              <li className='text-green-500'>
                <Link href='/about'>About</Link>
              </li>
              <li className='text-green-500'>
                <Link href='/about/main'>About main</Link>
              </li>
              <li className='text-green-500'>
                <Link href='/signup'>sign up</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='text-xl font-bold mb-2'>渲染測試頁面</h2>
            <ul className='space-y-2'>
              <li className='text-green-500'>
                <Link href='/about/client-test'>Client Component 測試</Link>
              </li>
              <li className='text-green-500'>
                <Link href='/render-test'>Server vs Client 渲染比較</Link>
              </li>
              <li className='text-green-500'>
                <Link href='/layout-test'>layout + template 渲染比較</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='text-xl font-bold mb-2'>Dashboard 路由</h2>
            <ul className='space-y-2'>
              <li className='text-green-500'>
                <Link href='/dashboard/analytics'>Dashboard Analytics</Link>
              </li>
              <li className='text-green-500'>
                <Link href='/dashboard/settings/password'>Dashboard Settings - Password</Link>
              </li>
              <li className='text-green-500'>
                <Link href='/dashboard/settings/profile'>Dashboard Settings - Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
