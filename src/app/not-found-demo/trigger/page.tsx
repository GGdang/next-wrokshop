import { notFound } from 'next/navigation'

export default function TriggerNotFound() {
  // 主動觸發 404 錯誤
  notFound()
}
