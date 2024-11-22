import Link from 'next/link'

export default function Page1() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-8'>頁面 1</h1>

      <div className='space-y-6'>
        <p className='text-gray-600'>
          這是頁面 1。注意觀察：
        </p>

        <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
          <h2 className='text-xl font-semibold'>切換到此頁面時：</h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-600'>
            <li>頂部會出現動畫（Template 重新渲染）</li>
            <li>藍色計數器會重置（Template 中的狀態）</li>
            <li>綠色計數器保持不變（Layout 中的狀態）</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>技術說明：</h2>
          <p className='text-gray-600'>
            Template 在每次導航時都會重新渲染，這讓我們可以實現：
          </p>
          <ul className='list-disc pl-5 mt-2 space-y-2 text-gray-600'>
            <li>頁面切換動畫</li>
            <li>狀態重置</li>
            <li>數據重新獲取</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
