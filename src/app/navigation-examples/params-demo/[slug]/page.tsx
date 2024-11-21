// 這是一個 Server Component（注意沒有 'use client'）
export default async function ServerParamsDemo({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // 在服務器端使用 await 獲取參數
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams

  // 從解析後的參數中獲取值
  const category = resolvedParams.category
  const name = resolvedSearchParams.name

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Server Component 參數示例</h1>
      
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">從 props 獲取參數：</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Category (從 params): <span className="text-blue-600">{category}</span></li>
          <li>Name (從 searchParams): <span className="text-blue-600">{name}</span></li>
        </ul>
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">
          這是一個 Server Component，參數是通過 props 直接傳入的，
          在 Next.js 15 中，params 和 searchParams 都是 Promise，
          需要使用 async/await 來獲取值。
        </p>
      </div>
    </div>
  )
}
