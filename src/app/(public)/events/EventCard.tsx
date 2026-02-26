import Image from 'next/image'
import React from 'react'

const EventCard = ({ item }: { item: { id: number, image: string, title: string, description: string, category: string } }) => {


  return (
    <div className='flex flex-col gap-2 w-50 p-2 bg-[#FFFFFF] rounded-xl'>
      <div className='relative w-full h-30'>
        <Image src={item.image} alt={item.title} fill unoptimized className='object-cover rounded-lg'/>    
      </div>
      <div className=''>
        <h3 className='font-medium text-sm text-[#262626]'>{item.title}</h3>
        <p className='font-regular text-sm text-[#404040]'>{item.description}</p>
        <span className='font-regular text-sm text-[#404040]'>{item.category}</span>
      </div>
    </div>
  )
}

export default EventCard