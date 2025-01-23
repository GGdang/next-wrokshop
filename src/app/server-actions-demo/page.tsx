import Link from 'next/link'

export default function ServerActionsDemo() {
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
