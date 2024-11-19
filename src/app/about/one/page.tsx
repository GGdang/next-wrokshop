import Link from 'next/link'
/*
    如果要使用 redirect 這個方法的話 不用將該頁面宣告成 'use client'
    https://nextjs.org/docs/app/api-reference/functions/use-router
*/
import { redirect } from 'next/navigation'
export default function AboutOne() {
  // 用於條件後需要去的地方
  redirect('/about')
  return (
    <div>
      <main>
        <h2>About main Page</h2>
        <Link href='/'>Go Home</Link>
      </main>
    </div>
  )
}
