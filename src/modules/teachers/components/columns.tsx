import { createRowActions } from '@/components/data-table-components/data-table-actions'
import DataTableColumnHeader from '@/components/data-table-components/data-table-column-header'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { Check, CircleOff } from 'lucide-react'

export type Teacher = {
  id: number
  teacherId: string
  name: string
  email?: string
  phone: string
  subjects: string[]
  classes: string[]
  isActive?: boolean
  address: string
}

export const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='ID'
        className='justify-start pl-2 text-orange-400'
      />
    ),
    cell: ({ row }) => (
      <div className={cn('rounded-lg bg-green-100 p-2 text-center capitalize')}>
        {row.original.id}
      </div>
    )

    // footer: props => {
    //   const totalBalance = props.table.getRowModel()

    //   console.log(totalBalance)

    //   return <div className='pr-2 text-right font-semibold'></div>
    // }
  },
  {
    accessorKey: 'teacherId',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Teacher ID'
        className='justify-start pl-2 text-orange-400'
      />
    )
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Name'
        className='justify-start pl-2 text-orange-400'
      />
    )
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Phone'
        className='justify-start pl-2 text-orange-400'
      />
    )
  },
  {
    accessorKey: 'subjects',
    header: ({ column }) => (
      <DataTableColumnHeader
        // className='hidden md:block'
        column={column}
        title='Subjects'
        className='justify-start pl-2 text-orange-400'
      />
    ),
    cell: ({ row }) => (
      <div className={cn('rounded-lg p-2 capitalize')}>
        {row.original.subjects.map(subjectItem => subjectItem).join(', ')}
      </div>
    )
  },
  {
    accessorKey: 'classes',
    header: ({ column }) => (
      <DataTableColumnHeader
        // className='hidden md:block'
        column={column}
        title='Classes'
        className='justify-start pl-2 text-orange-400'
      />
    ),
    cell: ({ row }) => (
      <div className={cn('rounded-lg p-2 capitalize')}>
        {row.original.classes.map(classItem => classItem).join(', ')}
      </div>
    )
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Address'
        className='justify-start pl-2 text-orange-400'
      />
    )
  },
  {
    accessorKey: 'isActive',
    enableSorting: false,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Active'
        className='justify-center pl-2 text-orange-400'
      />
    ),

    cell: ({ row }) =>
      row.getValue('isActive') ? (
        <div className={cn('flex w-full justify-center')}>
          <Check size={16} className='text-center text-green-500' />
        </div>
      ) : (
        <div className={cn('flex w-full justify-center')}>
          <CircleOff size={16} className='text-red-500' />
        </div>
      )
  },
  createRowActions<Teacher>()
]
