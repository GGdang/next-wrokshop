import Link from 'next/link'

export default function ParallelRoutesPage() {
  return (
    <div>
      <p className='text-gray-600 mb-4'>
        這是默認插槽的內容。您可以通過點擊下面的連結來切換 Team 和 Analytics 的內容：
      </p>
      <div className='space-y-2'>
        <Link
          href='/parallel-routes-demo?team=engineering&analytics=daily'
          className='block text-indigo-600 hover:text-indigo-800'
        >
          查看工程團隊和每日分析
        </Link>
        <Link
          href='/parallel-routes-demo?team=design&analytics=weekly'
          className='block text-indigo-600 hover:text-indigo-800'
        >
          查看設計團隊和每週分析
        </Link>
        <Link
          href='/parallel-routes-demo?team=product&analytics=monthly'
          className='block text-indigo-600 hover:text-indigo-800'
        >
          查看產品團隊和每月分析
        </Link>
      </div>
      <div className='mt-4'>
        <Link
          href='/dynamic-routes-demo'
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
        >
          返回示例列表
        </Link>
      </div>
    </div>
  )
}
