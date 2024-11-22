export default async function TeamSlot({
  searchParams,
}: {
  searchParams: Promise<{ team?: string }>
}) {
  const { team } = await searchParams

  const teamInfo = {
    engineering: {
      name: '工程團隊',
      members: ['Alex', 'Bob', 'Charlie'],
      currentProject: '新功能開發',
    },
    design: {
      name: '設計團隊',
      members: ['Diana', 'Eve', 'Frank'],
      currentProject: 'UI 改進',
    },
    product: {
      name: '產品團隊',
      members: ['Grace', 'Henry', 'Ivy'],
      currentProject: '市場調研',
    },
  }[team || 'engineering']

  return (
    <div className='space-y-4'>
      <div>
        <h4 className='font-medium text-gray-900'>團隊名稱</h4>
        <p className='text-gray-600'>{teamInfo.name}</p>
      </div>
      
      <div>
        <h4 className='font-medium text-gray-900'>團隊成員</h4>
        <ul className='list-disc pl-5 text-gray-600'>
          {teamInfo.members.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className='font-medium text-gray-900'>當前項目</h4>
        <p className='text-gray-600'>{teamInfo.currentProject}</p>
      </div>
    </div>
  )
}
