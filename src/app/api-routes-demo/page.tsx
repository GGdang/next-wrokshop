import Link from 'next/link'

export default function ApiRoutesDemo() {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>API Routes 示範</h1>
      <div className='space-y-4'>
        <div>
          <h2 className='text-xl font-bold mb-2'>範例列表</h2>
          <ul className='space-y-2'>
            <li>
              <Link href='/api-routes-demo/taipei-data' className='text-blue-500 hover:underline'>
                台北市開放資料 API 範例
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
