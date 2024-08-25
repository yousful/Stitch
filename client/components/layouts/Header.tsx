import { headerLinks } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Button } from '../ui/button'

function Header() {
  return (
    <nav className='w-full h-[84px] bg-accent flex justify-center items-center'>
        <section className='max-w-[1440px] w-full flex justify-between items-center'>
           

           
            <Image width={140} height={140} alt='logo-sticth' src={'/assets/images/stitch-logo.svg'} />
            <div className='flex gap-8 items-center font-medium '>
                {headerLinks.map((link, idx)=> <Link className='hover:border-b-primary hover:border-b-2' key={idx} href={link.url}>{link.label}</Link>)}
            </div>
            <div className='flex gap-2 items-center'>
            <FiShoppingCart className='text-primary' size={24} />
            <Button className='bg-primary text-white rounded-3xl'>Register</Button>
            <Button className='bg-accent text-primary rounded-3xl border-primary border'>Login</Button>
            </div>
            
        </section>
         
    </nav>
  )
}

export default Header