import TableSearch from '@/components/shared/table-search'
import { Button } from '@/components/ui/button'
import { role, teachersData } from '@/lib/data'
import TeachersTable from '@/modules/teachers/components/teachers-table'
import { PlusIcon } from 'lucide-react'

const total = 25

const TeacherListPage = () => {
  return (
    <div className='m-4 mt-0 flex-1 rounded-md bg-white p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='hidden text-lg font-semibold md:block'>All Teachers</h1>
        <div className='flex w-full flex-col items-center gap-4 md:w-auto md:flex-row'>
          <TableSearch />
          <div className='mb-4 flex items-center gap-4 self-end'>
            {role === 'admin' && (
              <div className='mt-4'>
                <Button className='bg-lamaYellow flex h-8 w-8 justify-center rounded-full text-gray-900'>
                  <PlusIcon width={14} height={14} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      {/* <TeachersTable data={ teachersData } /> */}
      <TeachersTable data={teachersData} total={total} />
    </div>
  )
}

export default TeacherListPage
