import Link from 'next/link'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-4">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link href='/' className="text-blue-500 hover:underline">
              回到首頁
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  )
}
