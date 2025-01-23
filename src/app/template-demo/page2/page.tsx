export default function Page2() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-8'>頁面 2</h1>

      <div className='space-y-6'>
        <p className='text-gray-600'>這是頁面 2。繼續觀察：</p>

        <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
          <h2 className='text-xl font-semibold'>Template vs Layout：</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold text-blue-600'>Template 特性：</h3>
              <ul className='list-disc pl-5 space-y-1 text-gray-600'>
                <li>每次訪問此頁面時重新渲染</li>
                <li>狀態會重置（藍色計數器）</li>
                <li>適合需要重置的UI元素</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-green-600'>Layout 特性：</h3>
              <ul className='list-disc pl-5 space-y-1 text-gray-600'>
                <li>保持渲染狀態</li>
                <li>維持狀態（綠色計數器）</li>
                <li>適合持久性UI元素</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>使用建議：</h2>
          <div className='space-y-4'>
            <p className='text-gray-600'>根據需求選擇使用 Template 或 Layout：</p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>需要重置狀態時使用 Template</li>
              <li>需要保持狀態時使用 Layout</li>
              <li>需要動畫效果時使用 Template</li>
              <li>需要共享UI時使用 Layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
