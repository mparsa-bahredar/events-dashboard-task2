import React from 'react'
import EventCard from './EventCard'
import { getEvents } from '@/utils/hooks/getEvents'


export default async function events(){

  const events = await getEvents()

  return (
    <div className='flex flex-col gap-4 py-4 px-8'>
      <h1 className='font-semibold text-xl text-[#262626]'>Events :</h1>
      <div className='flex flex-row flex-wrap gap-2'>
      { 
        events.map((item) => {
          return <EventCard item={item} key={item.id}/>
        })
      }
      </div>
    </div>
  )
}

