'use server'

import Link from 'next/link'

async function getData() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    title: 'About Main Page',
    content: '這是 About Main 頁面的內容'
  }
}

export default async function AboutMain() {
  const data = await getData()
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="mb-4">{data.content}</p>
      <Link href="/" className="text-blue-500 hover:underline">
        返回首頁
      </Link>
    </div>
  )
}
