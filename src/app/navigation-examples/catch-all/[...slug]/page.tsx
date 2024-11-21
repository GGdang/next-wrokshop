// 這是一個展示 Catch-all Segments 的示例
export default async function CatchAllDemo({ params }: { params: Promise<{ slug: string[] }> }) {
  // 在 Next.js 15 中，params 是一個 Promise
  const resolvedParams = await params
  const slugArray = resolvedParams.slug

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Catch-all Segments 示例</h1>

      <div className='space-y-4 mb-8'>
        <h2 className='text-xl font-semibold'>當前路徑參數：</h2>
        <div className='space-y-2'>
          <p>
            完整路徑：<code className='bg-gray-100 px-2 py-1 rounded'>/catch-all/{slugArray.join('/')}</code>
          </p>
          <p>
            參數數量：<code className='bg-gray-100 px-2 py-1 rounded'>{slugArray.length}</code>
          </p>

          <div className='mt-4'>
            <h3 className='text-lg font-medium mb-2'>路徑段落：</h3>
            <ul className='list-disc pl-5 space-y-2'>
              {slugArray.map((segment, index) => (
                <li key={index}>
                  第 {index + 1} 段：<span className='text-blue-600'>{segment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='p-4 bg-gray-100 rounded'>
        <p className='text-sm text-gray-600'>
          Catch-all Segments ([...slug]) 可以捕獲任意數量的路徑段落。 例如，這個頁面可以匹配：
        </p>
        <ul className='mt-2 list-disc pl-5 text-sm text-gray-600'>
          <li>/catch-all/a</li>
          <li>/catch-all/a/b</li>
          <li>/catch-all/a/b/c</li>
          <li>... 等等</li>
        </ul>
      </div>
    </div>
  )
}
