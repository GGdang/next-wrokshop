import Link from 'next/link'

export default function RouteGroupsDemo() {
  return (
    <div className='space-y-8'>
      <div className='prose'>
        <h2>路由群組功能介紹</h2>
        <p>路由群組（Route Groups）是 Next.js 的一個強大功能，它允許我們：</p>
        <ul>
          <li>在不影響 URL 結構的情況下組織路由</li>
          <li>將相關的頁面和功能分組管理</li>
          <li>為不同的群組使用獨立的布局</li>
          <li>方便團隊協作和代碼維護</li>
        </ul>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg font-medium text-gray-900'>行銷頁面群組</h3>
            <div className='mt-3 text-sm text-gray-500'>使用紫色系布局的行銷相關頁面</div>
            <div className='mt-5'>
              <Link
                href='/route-groups-demo/about'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700'
              >
                查看關於我們
              </Link>
            </div>
          </div>
        </div>

        <div className='bg-white overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg font-medium text-gray-900'>商店頁面群組</h3>
            <div className='mt-3 text-sm text-gray-500'>使用綠色系布局的商店相關頁面</div>
            <div className='mt-5'>
              <Link
                href='/route-groups-demo/products'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700'
              >
                瀏覽商品列表
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='prose'>
        <h3>實作說明</h3>
        <p>我們使用資料夾名稱中的括號來建立路由群組。例如 (marketing) 和 (shop)。 這些括號不會出現在實際的 URL 中。</p>
        <pre className='bg-gray-50 p-4 rounded-lg'>
          {`app/
  (marketing)/
    about/
      page.tsx    # 網址：/about
    layout.tsx    # 行銷頁面的布局
  (shop)/
    products/
      page.tsx    # 網址：/products
    layout.tsx    # 商店頁面的布局
  layout.tsx      # 根布局`}
        </pre>
        <p>透過這種方式，我們可以：</p>
        <ul>
          <li>保持乾淨的 URL 結構（不會出現群組名稱）</li>
          <li>為不同類型的頁面使用專屬布局</li>
          <li>方便地管理相關的頁面和組件</li>
        </ul>
      </div>
    </div>
  )
}
