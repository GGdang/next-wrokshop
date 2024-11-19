'use server'

import Link from 'next/link'

async function getData() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    title: 'About Page',
    content: '這是關於我們的頁面'
  }
}

export default async function About() {
  const data = await getData()
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="mb-4">{data.content}</p>
      <div className="space-x-4">
        <Link href="/" className="text-blue-500 hover:underline">
          返回首頁
        </Link>
        <Link href="/about/main" className="text-blue-500 hover:underline">
          前往 About Main
        </Link>
      </div>
    </div>
  )
}
