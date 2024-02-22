import { BrainCircuit, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
    const [isDisplay, setIsDisplay] = useState(false)
    return (
        <header className='fixed left-0 top-0 z-10 font-bold lg:p-5 p-4 lg:flex justify-center lg:gap-x-8 items-center text-white lg:text-slate-500 backdrop-blur-lg bg-black/5 lg:justify-between w-full'>
            <div className='lg:hidden float-end' onClick={() => setIsDisplay(!isDisplay)}>
                {isDisplay ? <X /> : <Menu />}
            </div>
            <div className='flex justify-center items-center lg:gap-x-5'>
                <BrainCircuit className='hidden lg:block' />
                <h1 className='text-2xl text-nowrap'>Tech Innovate</h1>
            </div>
            <nav className={`${isDisplay ? "block" : "hidden"} "lg:block hidden"`}>
                <ul className='lg:grid lg:grid-cols-4 lg:gap-x-8 text-md capitalize flex flex-col justify-center items-center gap-6 h-screen'>
                    <Link href="/" onClick={() => setIsDisplay(false)}>
                        <li>home</li>
                    </Link>
                    <Link href="/services" onClick={() => setIsDisplay(false)}>
                        <li>services</li>
                    </Link>
                    <Link href="/portfolio" onClick={() => setIsDisplay(false)}>
                        <li>portfolio</li>
                    </Link>
                    <Link href="/contact" onClick={() => setIsDisplay(false)}>
                        <li>contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
