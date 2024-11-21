export default async function OptionalCatchAllDemo({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const resolvedParams = await params
  const slugArray = resolvedParams.slug || [] // 使用空數組作為默認值

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Optional Catch-all Segments 示例</h1>
      
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">當前路徑參數：</h2>
        <div className="space-y-2">
          <p>完整路徑：
            <code className="bg-gray-100 px-2 py-1 rounded">
              /optional-catch-all{slugArray.length > 0 ? '/' + slugArray.join('/') : ''}
            </code>
          </p>
          <p>參數數量：<code className="bg-gray-100 px-2 py-1 rounded">{slugArray.length}</code></p>
          
          {slugArray.length > 0 ? (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">路徑段落：</h3>
              <ul className="list-disc pl-5 space-y-2">
                {slugArray.map((segment, index) => (
                  <li key={index}>
                    第 {index + 1} 段：<span className="text-blue-600">{segment}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mt-4 text-gray-600">沒有路徑段落（根路徑）</p>
          )}
        </div>
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">
          Optional Catch-all Segments ([[...slug]]) 可以捕獲零個或多個路徑段落。
          注意兩個中括號，這表示路徑段落是可選的。
        </p>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
          <li>/optional-catch-all（無段落，合法）</li>
          <li>/optional-catch-all/a（一個段落）</li>
          <li>/optional-catch-all/a/b（多個段落）</li>
        </ul>
      </div>
    </div>
  )
}
