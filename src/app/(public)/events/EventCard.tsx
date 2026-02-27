import Image from 'next/image'



const EventCard = ({ item }: { item: { id: number, image: string, title: string, description: string, category: string, startTime: string} }) => {

  return (
    <div className='flex flex-col gap-4 w-[237px] p-2 bg-[#FFFFFF] rounded-xl   dark:bg-gray-600'>
      <div className='relative w-full h-30'>
        <Image src={item.image} alt={item.title} fill unoptimized className='object-cover rounded-lg'/>    
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between w-full'>
            <h3 className='font-medium text-base text-[#262626]   dark:text-[#E4E4E4]'>{item.title}</h3>
            <span className='font-regular text-sm text-[#404040]   dark:text-[#F5F5F5]'>{item.startTime}</span>
          </div>
          <p className='font-regular text-sm text-[#404040]   dark:text-[#F5F5F5]'>{item.description}</p>
        </div>
        <span className='max-w-max py-1 px-2 font-regular text-sm text-[#404040] bg-[#F5F5F5] rounded-[48px]   
        dark:text-[#F5F5F5] dark:bg-gray-500'>
          {item.category}
        </span>
      </div>
    </div>
  )
}

export default EventCard