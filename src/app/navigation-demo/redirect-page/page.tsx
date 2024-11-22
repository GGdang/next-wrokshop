import { redirect } from 'next/navigation'

export default function RedirectPage() {
  // 在服務端重定向到目標頁面
  redirect('/navigation-demo/redirected')
}
