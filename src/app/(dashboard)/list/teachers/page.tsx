import { role } from '@/lib/data'
import { ArrowUpDownIcon, FilterIcon, PlusIcon } from 'lucide-react'

const TeacherListPage = () => {
  return (
    <div className='m-4 mt-0 flex-1 rounded-md bg-white p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='hidden text-lg font-semibold md:block'>All Teachers</h1>
        <div className='flex w-full flex-col items-center gap-4 md:w-auto md:flex-row'>
          <div>Table Search</div>
          <div className='flex items-center gap-4 self-end'>
            <button className='bg-lamaYellow flex h-8 w-8 items-center justify-center rounded-full'>
              <FilterIcon width={14} height={14} />
            </button>
            <button className='bg-lamaYellow flex h-8 w-8 items-center justify-center rounded-full'>
              <ArrowUpDownIcon width={14} height={14} />
            </button>
            {role === 'admin' && (
              <button className='bg-lamaYellow flex h-8 w-8 items-center justify-center rounded-full'>
                <PlusIcon width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div>TABLE</div>

      {/* Pagination */}
      <div>PAGINATION</div>
    </div>
  )
}

export default TeacherListPage
