import Link from 'next/link'

export default function Page1() {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-6'>頁面 1</h2>
      <p className='mb-4 text-gray-600'>
        注意觀察：當你在不同頁面間切換時，側邊欄和頂部導航保持不變，只有這個主內容區域會更新。
      </p>

      <div className='space-y-4'>
        <Link
          href='/layout-demo'
          className='block p-4 bg-purple-50 rounded-lg hover:bg-purple-100'
        >
          返回主頁
        </Link>
        <Link
          href='/layout-demo/page2'
          className='block p-4 bg-purple-50 rounded-lg hover:bg-purple-100'
        >
          訪問頁面 2
        </Link>
      </div>
    </div>
  )
}
