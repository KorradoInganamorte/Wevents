import { montserratBold } from '@/public/fonts'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between pr-[1.5rem] pl-[3rem] py-[1.2rem] border-b border-black mb-[5rem]'>
        <div className='flex items-center'>
            <img className='w-[6.3rem] h-[6.3rem]' src="/images/logo-icon.svg" alt="logo" />
            <h1 className={`${montserratBold.className} text-5xl text-black pl-[1.5rem]`}>WEVENTS</h1>
        </div>

        <div className='text-4xl text-black'>
            <Link className='mr-[3.5rem]' href="#">About</Link>
            <Link className='mr-[3.5rem]' href="#">Events</Link>
            <Link href="#">Contacts</Link>
        </div>

        <button className='btn'>Get Started</button>
    </div>
  )
}

export default Header