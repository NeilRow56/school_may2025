import { Menu } from '@/components/menu'
import { Navbar } from '@/components/navbar'
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
      <div className='w-[14%] md:w-[8%] lg:w-[18%]'>
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
      <div className='lg:[w-82%] w-[86%] overflow-scroll bg-[#F7F8FA] md:w-[92%]'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
