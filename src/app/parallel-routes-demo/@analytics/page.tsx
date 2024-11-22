export default async function AnalyticsSlot({
  searchParams,
}: {
  searchParams: Promise<{ analytics?: string }>
}) {
  const { analytics } = await searchParams

  const analyticsData = {
    daily: {
      period: '每日',
      visitors: 1234,
      pageViews: 5678,
      bounceRate: '23%',
    },
    weekly: {
      period: '每週',
      visitors: 8765,
      pageViews: 43210,
      bounceRate: '25%',
    },
    monthly: {
      period: '每月',
      visitors: 98765,
      pageViews: 456789,
      bounceRate: '28%',
    },
  }[analytics || 'daily']

  return (
    <div className='space-y-4'>
      <div>
        <h4 className='font-medium text-gray-900'>分析週期</h4>
        <p className='text-gray-600'>{analyticsData.period}報告</p>
      </div>

      <div>
        <h4 className='font-medium text-gray-900'>訪客數</h4>
        <p className='text-gray-600'>{analyticsData.visitors.toLocaleString()}</p>
      </div>

      <div>
        <h4 className='font-medium text-gray-900'>頁面瀏覽量</h4>
        <p className='text-gray-600'>{analyticsData.pageViews.toLocaleString()}</p>
      </div>

      <div>
        <h4 className='font-medium text-gray-900'>跳出率</h4>
        <p className='text-gray-600'>{analyticsData.bounceRate}</p>
      </div>
    </div>
  )
}
