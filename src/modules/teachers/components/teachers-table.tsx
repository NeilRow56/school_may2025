'use client'

import { DataTable } from '@/components/data-table-components/data-table'
import { columns } from './columns'

type TeachTableProps = {
  data: {
    teacherId: string
    name: string
  }[]
}
function TeachersTable({ data }: TeachTableProps) {
  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        onRowDelete={() => {}}
        onRowEdit={() => {}}
      />
    </>
  )
}

export default TeachersTable
