import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import logo from '../assets/logo.svg'
import { Input } from "@/components/ui/input"
import { ModeToggle, NavigationMenu } from '../components'
const Navbar = () => {
  return (
    <div className='flex w-full justify-between py-5 items-center px-10'>
        <div>
            <Link href='/'>
                <Image src={logo} width={100} height={100} alt="" draggable='false'/>
            </Link>
        </div>
        <div>
            <Input type="input" placeholder="Search..." className='w-[800px]'/>
        </div>
        <div>
            <NavigationMenu />
        </div>
        <div>
            <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar