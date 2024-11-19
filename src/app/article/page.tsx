import Link from 'next/link'

export default function ArticleList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">文章列表</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/article/1" className="text-blue-500 hover:underline">
            文章 1
          </Link>
        </li>
        <li>
          <Link href="/article/2" className="text-blue-500 hover:underline">
            文章 2
          </Link>
        </li>
        <li>
          <Link href="/article/not-exist" className="text-blue-500 hover:underline">
            不存在的文章（測試 not-found）
          </Link>
        </li>
      </ul>
    </div>
  )
}
