import { AttendanceChart } from '@/components/attendance-chart'
import { CountChart } from '@/components/count-chart'
import { FinanceChart } from '@/components/finance-chart'
import { UserCard } from '@/components/shared/user-card'

const AdminPage = () => {
  return (
    <div className='flex flex-col gap-4 p-4 md:flex-row'>
      {/* LEFT */}
      <div className='flex w-full flex-col gap-8 lg:w-2/3'>
        {/* USER CARDS */}
        <div className='flex flex-wrap justify-between gap-4'>
          <UserCard label='student' />
          <UserCard label='teacher' />
          <UserCard label='parent' />
          <UserCard label='staff' />
        </div>
        <div className='flex flex-wrap justify-between gap-4'>USER CARDS</div>
        {/* MIDDLE CHARTS */}
        <div className='flex flex-col gap-4 lg:flex-row'>
          {/* COUNT CHART */}
          <div className='h-[450px] w-full lg:w-1/3'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className='h-[450px] w-full lg:w-2/3'>
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className='h-[500px] w-full'>
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className='flex w-full flex-col gap-8 bg-red-50 lg:w-1/3'>
        EVENT CALENDAR ANNOUNCEMENTS
      </div>
    </div>
  )
}

export default AdminPage
