'use client'
import { Moon } from '@/icons/Moon'
import { Sun } from '@/icons/Sun'
import { useTheme } from '@/utils/hooks/useTheme/useTheme'
import Link from 'next/link'


const HeaderClient = ({logoutAction, isLoggedIn,}:{logoutAction: () => void, isLoggedIn: boolean}) => {

    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <div className='py-4 px-8'>
            <div className='flex justify-between items-center py-4 px-8 bg-[#FFFFFF] rounded-xl   dark:bg-gray-600'>
                <div className='flex gap-4'>
                    <Link href="/" className='font-medium text-base text-[#A3A3A3] hover:text-[#404040]
                    dark:text-[#F5F5F5] dark:hover:text-[#E4E4E4]'>
                        Home
                    </Link>
                    <Link href="/events" className='font-medium text-base text-[#A3A3A3] hover:text-[#404040]
                    dark:text-[#F5F5F5] dark:hover:text-[#E4E4E4]'>
                        Events
                    </Link>
                </div>
                <div className='flex items-center gap-8'>
                    {isLoggedIn ? (
                        <div className='flex items-center gap-4'>
                            <Link href="/dashboard" className='font-medium text-base text-[#A3A3A3] hover:text-[#404040]   
                            dark:text-[#F5F5F5] dark:hover:text-[#E4E4E4]'>
                                Dashboard
                            </Link>
                            <button onClick={logoutAction} className='font-medium text-base text-[#A3A3A3] hover:text-[#404040]
                            dark:text-[#F5F5F5] dark:hover:text-[#E4E4E4]'>
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <Link href="/login" className='font-medium text-base text-[#A3A3A3] hover:text-[#404040]
                        dark:text-[#F5F5F5] dark:hover:text-[#E4E4E4]'>
                            Login
                        </Link>
                    )}
                    <button
                    onClick={toggleTheme}
                    className='flex items-center h-8 px-1 rounded-[48px] bg-gray-300 dark:bg-gray-800 transition-colors cursor-pointer'
                    aria-label="Toggle Theme">
                        <div className={`flex items-center justify-center w-6 h-6 rounded-[48px] transition-transform duration-300
                        ${isDark ? 'bg-gray-600' : 'bg-yellow-400'}`}>
                            {isDark ? (<Moon className='w-4 h-4 text-white'/>) : (<Sun className='w-4 h-4 text-yellow-600'/>)}
                        </div>
                    </button>
                </div>
            </div>
        </div>  
    )
}

export default HeaderClient