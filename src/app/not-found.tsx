import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          找不到頁面
        </h2>
        <p className="text-gray-600 mb-4">
          抱歉，您請求的頁面不存在。
        </p>
        <Link
          href="/"
          className="text-blue-500 hover:underline"
        >
          返回首頁
        </Link>
      </div>
    </div>
  )
}
