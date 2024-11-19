import Link from 'next/link'

async function fetchAnalyticsData() {
  console.log('Fetching analytics data...')
  // 增加延遲到 5 秒
  await new Promise(resolve => setTimeout(resolve, 5000))
  const response = await fetch('https://api.example.com/analytics', {
    // 禁用緩存以確保每次都重新獲取
    cache: 'no-store'
  })
  
  // 模擬數據
  return {
    visitors: Math.floor(Math.random() * 10000),
    pageViews: Math.floor(Math.random() * 50000),
    bounceRate: `${Math.floor(Math.random() * 100)}%`
  }
}

export default async function DashboardAnalytics() {
  const data = await fetchAnalyticsData()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg">
          <h3>Visitors</h3>
          <p className="text-2xl">{data.visitors}</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3>Page Views</h3>
          <p className="text-2xl">{data.pageViews}</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3>Bounce Rate</h3>
          <p className="text-2xl">{data.bounceRate}</p>
        </div>
      </div>
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Go Home
        </Link>
      </div>
    </div>
  )
}
