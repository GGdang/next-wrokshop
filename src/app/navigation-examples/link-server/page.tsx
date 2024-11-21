// 這是一個 Server Component（注意沒有 'use client' 指令）
import Link from 'next/link'

// 模擬從數據庫獲取數據
async function getData() {
  return {
    posts: [
      { id: 1, title: '文章 1' },
      { id: 2, title: '文章 2' },
      { id: 3, title: '文章 3' },
    ]
  }
}

export default async function LinkServerDemo() {
  // 在服務器端獲取數據
  const { posts } = await getData()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Server Component 中的 Link 示例</h1>
      <p className="mb-4">這個頁面是一個 Server Component，展示了如何在服務器端渲染 Link 組件。</p>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">文章列表（服務器端渲染）：</h2>
        <ul className="space-y-2">
          {posts.map(post => (
            <li key={post.id}>
              <Link 
                href={`/navigation-examples/posts/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Link 
          href="/navigation-examples" 
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          返回首頁
        </Link>
      </div>
    </div>
  )
}
