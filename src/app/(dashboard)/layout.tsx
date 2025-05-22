import { Menu } from '@/components/menu'
import Image from 'next/image'
import Link from 'next/link'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex h-screen'>
      {/* Left */}
      <div className='w-[14%] bg-blue-50 md:w-[8%] lg:w-[16%]'>
        <Link
          className='flex w-full items-center justify-center gap-2 p-4 lg:justify-start'
          href='/'
        >
          <Image src='/logo.png' alt='logo' width={32} height={32} />
          <span className='hidden lg:block'>WpAccPac</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className='lg:[w-84%] w-[86%] bg-green-50 md:w-[92%]'>Right</div>
      {children}
    </div>
  )
}
