import { FormModal } from '@/components/shared/form-modal'

export default function Home() {
  return (
    <div className='mt-4 flex w-full flex-1 items-center justify-center space-y-4'>
      <div className=''>
        <FormModal type='create' />
      </div>
    </div>
  )
}
