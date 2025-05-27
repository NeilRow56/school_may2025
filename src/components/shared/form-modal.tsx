'use client'

import { PlusIcon, Trash2Icon, Upload } from 'lucide-react'

interface FormModalProps {
  //   table:
  //     | 'teacher'
  //     | 'student'
  //     | 'parent'
  //     | 'subject'
  //     | 'class'
  //     | 'lesson'
  //     | 'exam'
  //     | 'assignment'
  //     | 'result'
  //     | 'attendance'
  //     | 'event'
  //     | 'announcement'
  type: 'create' | 'update' | 'delete'
  //   data?: any
  //   id?: number
}

export const FormModal = ({ type }: FormModalProps) => {
  const size = type === 'create' ? 'w-8 h-8' : 'w-9 h-9'
  const bgColor =
    type === 'create'
      ? 'bg-lamaYellow'
      : type === 'update'
        ? 'bg-lamaSky'
        : 'bg-red-500'
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        <div className=''>
          {type === 'create' ? (
            <PlusIcon className='bg-lamaYellow h-9 w-9 rounded-full' />
          ) : type === 'update' ? (
            <Upload className='bg-lamaSky border-lamaSky h-9 w-9 rounded-full border-6' />
          ) : (
            <Trash2Icon className='h-9 w-9 rounded-full border-6 border-red-500 bg-red-500 text-white' />
          )}
        </div>
      </button>
    </>
  )
}
