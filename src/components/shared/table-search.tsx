import { Search } from 'lucide-react'

const TableSearch = () => {
  return (
    <div className='flex w-full items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:w-auto'>
      <Search />
      <input
        type='text'
        placeholder='Search...'
        className='w-[200px] bg-transparent p-2 outline-none'
      />
    </div>
  )
}

export default TableSearch
