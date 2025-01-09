import Link from 'next/link'

export default function ServerActionsDemo() {
  // 方法 1：直接在組件中定義 Server Action
  async function updateUser(formData: FormData) {
    'use server'

    // 這裡的代碼在服務器上執行
    const name = formData.get('name')
    const email = formData.get('email')

    console.log('Updating user on server:', { name, email })
    // 可以直接訪問數據庫或其他服務器資源
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Server Actions Demo</h1>
      <Link
        className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4 inline-block'
        href='/server-actions-demo/actions'
      >
        Actions 範例
      </Link>
      <Link
        className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4 inline-block'
        href='/server-actions-demo/client-actions'
      >
        Client Actions 範例
      </Link>
      <Link
        className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4 inline-block'
        href='/server-actions-demo/props-actions'
      >
        Props Actions 範例
      </Link>
      <Link
        className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4 inline-block'
        href='/server-actions-demo/form-behavior'
      >
        Form Behavior 範例
      </Link>
    </div>
  )
}
