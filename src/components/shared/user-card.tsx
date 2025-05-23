import Image from 'next/image'

interface UserCardProps {
  label: string
}

export const UserCard = ({ label }: UserCardProps) => {
  return (
    <div className='odd:bg-lamaPurple even:bg-lamaYellow min-w-[130px] flex-1 rounded-2xl p-4'>
      <div className='flex items-center justify-between'>
        <span className='rounded-full bg-white px-2 py-1 text-[10px] text-green-600'>
          2024/25
        </span>
        <Image src='/more.png' alt='' width={20} height={20} />
      </div>
      <h1 className='my-4 text-2xl font-semibold'>1,234</h1>
      <h2 className='text-sm font-medium text-gray-500 capitalize'>{label}s</h2>
    </div>
  )
}
