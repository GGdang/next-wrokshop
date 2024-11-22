import { delay } from '@/lib/utils'
import Link from 'next/link'

export default async function SlowPage() {
  // 模擬慢加載
  await delay(3000)

  return (
    <div className='p-8 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8'>慢加載頁面</h1>
      <p className='text-gray-600 mb-6'>
        這個頁面故意延遲了 3 秒鐘才加載完成。
        在加載過程中，你應該看到了 loading.tsx 中定義的加載界面。
      </p>

      <Link
        href='/loading-error-demo'
        className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        返回
      </Link>
    </div>
  )
}
