import { Announcements } from '@/components/announcements'
import BigCalendar from '@/components/big-calendar'
import { EventCalendar } from '@/components/event-calendar'

const StudentPage = () => {
  return (
    <div className='flex flex-col gap-4 p-4 xl:flex-row'>
      {/* LEFT */}
      <div className='w-full xl:w-2/3'>
        <div className='h-full rounded-md bg-white p-4'>
          <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className='flex w-full flex-col gap-8 xl:w-1/3'>
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}

export default StudentPage
