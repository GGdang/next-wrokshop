export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* 商店特定的導航欄 */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">商店版面</h1>
          <div className="flex space-x-4 mt-2">
            <a href="/navigation-examples/products" className="hover:text-blue-200">商品列表</a>
            <a href="/navigation-examples/cart" className="hover:text-blue-200">購物車</a>
          </div>
        </div>
      </nav>
      
      {/* 主要內容區域 */}
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  )
}
