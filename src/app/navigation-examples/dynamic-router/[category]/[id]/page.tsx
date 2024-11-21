'use client'

import { useParams, useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DynamicRouterDemo() {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  
  // 從 URL 參數中獲取值
  const category = params.category
  const id = params.id
  const sort = searchParams.get('sort')
  const filter = searchParams.get('filter')

  // 模擬不同分類的數據
  const items = {
    products: ['手機', '電腦', '相機'],
    articles: ['新聞', '評論', '教程'],
    users: ['管理員', '編輯', '訪客']
  }

  // 根據分類獲取相關項目
  const relatedItems = items[category as keyof typeof items] || []

  // 程序化導航示例
  const handleNavigate = (newId: string) => {
    router.push(`/navigation-examples/dynamic-router/${category}/${newId}?sort=${sort}&filter=${filter}`)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">動態路由示例</h1>
      
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">當前路由參數：</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>分類 (category): <span className="text-blue-600">{category}</span></li>
          <li>ID: <span className="text-blue-600">{id}</span></li>
          <li>排序方式 (sort): <span className="text-blue-600">{sort || '未指定'}</span></li>
          <li>篩選條件 (filter): <span className="text-blue-600">{filter || '未指定'}</span></li>
        </ul>
      </div>

      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">相關 {category}：</h2>
        <div className="space-x-4">
          {relatedItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(String(index + 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">導航示例：</h2>
        <div className="space-x-4">
          {/* 使用 Link 組件導航 */}
          <Link
            href={`/navigation-examples/dynamic-router/products/1?sort=price&filter=new`}
            className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            查看商品
          </Link>
          <Link
            href={`/navigation-examples/dynamic-router/articles/1?sort=date&filter=featured`}
            className="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            查看文章
          </Link>
          <Link
            href={`/navigation-examples/dynamic-router/users/1?sort=role&filter=active`}
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            查看用戶
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <Link 
          href="/navigation-examples" 
          className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          返回首頁
        </Link>
      </div>
    </div>
  )
}
