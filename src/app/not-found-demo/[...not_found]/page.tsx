import { notFound } from 'next/navigation'

export default function CatchAllNotFound() {
  // 捕獲所有未定義的路徑並觸發 404
  notFound()
}
