export default function TemplateDemo() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-8'>Template vs Layout 示例</h1>

      <div className='space-y-6'>
        <p className='text-gray-600'>這個示例展示了 Template 和 Layout 在狀態管理和渲染行為上的差異。</p>

        <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
          <h2 className='text-xl font-semibold'>Layout 特點：</h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-600'>
            <li>狀態在頁面切換時會保持</li>
            <li>只在首次加載時渲染一次</li>
            <li>適合放置導航欄、側邊欄等持久性UI</li>
            <li>在此示例中，綠色計數器的值會保持</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
          <h2 className='text-xl font-semibold'>Template 特點：</h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-600'>
            <li>狀態在每次導航時都會重置</li>
            <li>每次頁面切換時都會重新渲染</li>
            <li>適合放置需要動畫效果的UI元素</li>
            <li>在此示例中，藍色計數器的值會重置</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>測試方式：</h2>
          <ol className='list-decimal pl-5 space-y-2 text-gray-600'>
            <li>點擊增加兩個計數器的值</li>
            <li>使用上方導航切換不同頁面</li>
            <li>觀察兩個計數器的值變化</li>
            <li>注意頂部的動畫效果（Template 提供）</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
