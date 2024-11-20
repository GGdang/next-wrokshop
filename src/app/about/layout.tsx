import Link from 'next/link'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  // 這個時間只會在首次加載時設置，之後在路由間切換時保持不變
  const layoutInitTime = new Date().toLocaleTimeString()

  return (
    <section className="p-4">
      {/* 導航欄在路由變化時保持狀態 */}
      <nav className="mb-4 bg-gray-100 p-4 rounded">
        <div className="text-sm text-gray-500 mb-2">
          Layout 初始化時間: {layoutInitTime}
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href='/' className="text-blue-500 hover:underline">
              回到首頁
            </Link>
          </li>
          <li>
            <Link href='/about/main' className="text-blue-500 hover:underline">
              About Main
            </Link>
          </li>
          <li>
            <Link href='/about/client-test' className="text-blue-500 hover:underline">
              Client Test
            </Link>
          </li>
        </ul>
      </nav>

      {/* 子頁面內容 */}
      {children}
    </section>
  )
}
