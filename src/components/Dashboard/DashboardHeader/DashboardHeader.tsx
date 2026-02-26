import Link from 'next/link'
import React from 'react'

const DashboardHeader = () => {

  return (
    <header className='py-4 px-8'>
      <div className='flex justify-start gap-4 py-4 px-8 bg-[#FFFFFF] rounded-xl'>
        <Link href={'/'} className='font-medium text-base text-[#A3A3A3]   hover:text-[#404040] active:text-[#404040]'>
          Home
        </Link>
      </div>
    </header>
  )
}

export default DashboardHeader