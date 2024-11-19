'use client'

import { useState, useEffect } from 'react'

// 模擬客戶端數據獲取
const fetchClientData = () => {
  return new Promise<{ message: string }>(resolve => {
    setTimeout(() => {
      resolve({ message: '這是客戶端獲取的數據' })
    }, 3000)
  })
}

// 1. 普通的客戶端組件 - 使用 useState
function ClientDataComponent() {
  const [data, setData] = useState<{ message: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    fetchClientData()
      .then(result => {
        setData(result)
        setLoading(false)
      })
  }

  return (
    <div className="p-4">
      <button 
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        獲取客戶端數據
      </button>
      {loading && <div className="mt-4">Loading...</div>}
      {data && (
        <div className="mt-4">
          <p>{data.message}</p>
        </div>
      )}
    </div>
  )
}

// 2. 使用 useEffect 的客戶端組件
function ClientDataWithEffect() {
  const [data, setData] = useState<{ message: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchClientData()
      .then(result => {
        setData(result)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading with useEffect...</div>
  }

  return <div className="mt-4">{data?.message}</div>
}

export default function ClientTestPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">1. 點擊加載數據：</h2>
        <ClientDataComponent />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">2. useEffect 自動加載：</h2>
        <ClientDataWithEffect />
      </div>
    </div>
  )
}
