import React from 'react'
import EventCard from '../(public)/events/EventCard';
import { getEvents } from '@/utils/hooks/getEvents';

export default async function Dashboard(){

  const events = await getEvents()

  return ( 
    <div className='flex flex-row flex-wrap gap-2 mt-8 px-8'>
      { 
        events.map((item) => {
          return <EventCard item={item} key={item.id}/>
        })
      }
    </div>
  )
}

