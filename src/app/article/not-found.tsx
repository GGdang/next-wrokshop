import Link from 'next/link'

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          文章不存在
        </h2>
        <p className="text-gray-600 mb-4">
          抱歉，您要找的文章不存在。
        </p>
        <div className="space-x-4">
          <Link
            href="/article"
            className="text-blue-500 hover:underline"
          >
            返回文章列表
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/"
            className="text-blue-500 hover:underline"
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  )
}
