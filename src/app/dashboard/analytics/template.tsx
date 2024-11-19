export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="analytics-template">
      <div className="bg-blue-50 p-2 text-sm text-blue-600 text-center">
        Analytics data is updated every 5 minutes
      </div>
      {children}
    </div>
  )
}
