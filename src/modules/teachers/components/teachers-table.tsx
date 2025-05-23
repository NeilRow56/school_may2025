'use client'

import { DataTable } from '@/components/data-table-components/data-table'
import { Teacher, columns } from './columns'

type TeachTableProps = {
  data: {
    id: number
    teacherId: string
    name: string
    email?: string
    phone: string
    subjects: string[]
    classes: string[]
    isActive: boolean
    address: string
  }[]
  total: number
}
function TeachersTable({ data }: TeachTableProps) {
  const handleRowDelete = (item: Teacher) => {
    console.log('<Delete', item)
  }

  const handleRowEdit = (item: Teacher) => {
    console.log('Edit', item)
  }

  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        total={10} // Entered manually at this stage as data not from database
        filter_column='name'
        onRowDelete={handleRowDelete}
        onRowEdit={handleRowEdit}
      />
    </>
  )
}

export default TeachersTable
