import { createRowActions } from '@/components/data-table-components/data-table-actions'
import DataTableColumnHeader from '@/components/data-table-components/data-table-column-header'
import { ColumnDef } from '@tanstack/react-table'

export type Teacher = {
  teacherId: string
  name: string
}

export const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    )
  },
  {
    accessorKey: 'teacherId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Teacher ID' />
    )
  },
  createRowActions<Teacher>()
]
