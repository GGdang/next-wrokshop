// 這是一個 Server Component
import ClientDemo from './client-demo'

export default function ComponentsDemo() {
  return (
    <div className='max-w-4xl mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-8'>Server vs Client Components</h1>
      
      <div className='space-y-8'>
        {/* Server Component 示例 */}
        <section className='bg-blue-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Server Component</h2>
          <div className='space-y-4'>
            <p>這是一個 Server Component，它：</p>
            <ul className='list-disc pl-5 space-y-2'>
              <li>在服務器端渲染</li>
              <li>減少客戶端 JavaScript 大小</li>
              <li>可以直接訪問後端資源</li>
              <li>不能使用 useState、useEffect 等 hooks</li>
              <li>不能使用 onClick 等瀏覽器 API</li>
            </ul>
          </div>
        </section>

        {/* Client Component */}
        <ClientDemo />
      </div>
    </div>
  )
}
