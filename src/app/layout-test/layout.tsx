import Link from 'next/link'

export default function LayoutTestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 這個時間戳只會在首次加載時生成，之後在路由變化時保持不變
  const layoutInitTime = new Date().toLocaleTimeString()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 持久化的側邊欄 */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-4">
        <div className="mb-4 text-sm text-gray-500">
          Layout 初始化時間: {layoutInitTime}
          <br />
          （在路由間切換時不會改變）
        </div>
        
        <nav>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/layout-test" 
                className="block p-2 hover:bg-gray-100 rounded"
              >
                首頁
              </Link>
            </li>
            <li>
              <Link 
                href="/layout-test/page1" 
                className="block p-2 hover:bg-gray-100 rounded"
              >
                頁面 1
              </Link>
            </li>
            <li>
              <Link 
                href="/layout-test/page2" 
                className="block p-2 hover:bg-gray-100 rounded"
              >
                頁面 2
              </Link>
            </li>
            <li>
              <Link 
                href="/" 
                className="block p-2 hover:bg-gray-100 rounded text-blue-500"
              >
                回到主頁
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* 主要內容區域 */}
      <div className="ml-64 p-8">
        {children}
      </div>
    </div>
  )
}
