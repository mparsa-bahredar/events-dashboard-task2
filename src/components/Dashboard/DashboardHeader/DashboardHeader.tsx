import { cookies } from 'next/headers'
import DashboardHeaderClient from './DashboardHeaderClient'


export default async function DashboardHeader(){

  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  const isLoggedIn = !!token

  async function logoutAction() {
    "use server"
    const cookieStore = await cookies()
    cookieStore.delete('token')
  }


  return (
    <header className='py-4 px-8'>
      <DashboardHeaderClient isLoggedIn={isLoggedIn} logoutAction={logoutAction}/>
    </header>
  )
}

