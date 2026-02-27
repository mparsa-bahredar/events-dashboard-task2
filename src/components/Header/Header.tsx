import { cookies } from 'next/headers'
import HeaderClient from './HeaderClient'


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
    <>
      <HeaderClient isLoggedIn={isLoggedIn} logoutAction={logoutAction}/>
    </>
  )
}