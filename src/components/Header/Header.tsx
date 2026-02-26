import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export default async function Header() {

  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  const isLoggedIn = !!token

  async function logoutAction() {
    "use server"
    const cookieStore = await cookies()
    cookieStore.delete('token')
  }

  return (
    <div className='py-4 px-8'>
      <div className='flex justify-between py-4 px-8 bg-white rounded-xl'>
        <div className='flex gap-4'>
          <Link href="/" className='font-medium text-base text-[#A3A3A3] hover:text-[#404040]'>
            Home
          </Link>
          <Link href="/events" className='font-medium text-base text-[#A3A3A3] hover:text-[#404040]'>
            Events
          </Link>
        </div>

        {isLoggedIn ? (
            <div className='flex gap-2'>
                <Link href="/dashboard" className='font-medium text-base text-[#A3A3A3] hover:text-[#404040]'>
                    Dashboard
                </Link>
                <h3 onClick={logoutAction} className='font-medium text-base text-[#A3A3A3] hover:text-[#404040] cursor-pointer'>
                    Log Out
                </h3>
            </div>
        ) : (
          <Link href="/login" className='font-medium text-base text-[#A3A3A3] hover:text-[#404040]'>
            Login
          </Link>
        )}
      </div>
    </div>
  )
}