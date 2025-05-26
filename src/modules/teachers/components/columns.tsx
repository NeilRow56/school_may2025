import { createRowActions } from '@/components/data-table-components/data-table-actions'
import DataTableColumnHeader from '@/components/data-table-components/data-table-column-header'
import { Checkbox } from '@/components/ui/checkbox'
// import { Checkbox } from '@/components/ui/checkbox'
// import MoneyWithCurrency from '@/components/shared/money-with-currency'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { Check, CircleOff, TrendingDown, TrendingUp } from 'lucide-react'

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
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
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
    ),
    footer: props => {
      const totalBalance = props.table
        .getRowModel()
        .rows.reduce((sum, idRow) => sum + idRow.original.id, 0)

      return (
        <div className='border-2 border-orange-400 p-2 text-center'>
          {/* <MoneyWithCurrency amount={totalBalance} /> */}
          ID total {totalBalance}
        </div>
      )
    }
  },
  {
    accessorKey: 'info',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Info'
        className='justify-start pl-2 text-orange-400'
      />
    )
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
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Type'
        className='hidden justify-start pl-2 text-orange-400 lg:table-cell'
      />
    ),
    cell: ({ row }) => {
      const type = row.getValue('type')
      return (
        <div className='justify-center-center hidden w-[100px] items-center lg:table-cell'>
          {type === 'income' ? (
            <TrendingUp size={20} className='mr-2 text-green-500' />
          ) : (
            <TrendingDown size={20} className='mr-2 text-red-500' />
          )}
          <span className='capitalize'> {row.getValue('type')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
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
    enableColumnFilter: false,
    enableSorting: true,
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
