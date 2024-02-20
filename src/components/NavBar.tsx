import { BrainCircuit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <header className='sticky top-0 z-10 font-bold p-5 grid grid-cols-2 gap-x-8 items-center text-slate-500 backdrop-blur-lg bg-black/5 w-full justify-start'>
            <div className='flex justify-center items-center gap-x-5'>
                <BrainCircuit size={50} />
                <h1 className='text-2xl'>Tech Innovate</h1>
            </div>
            <nav>
                <ul className='grid grid-cols-4 gap-x-8 text-md capitalize justify-start'>
                    <Link href="/">
                        <li>home</li>
                    </Link>
                    <Link href="/services">
                        <li>services</li>
                    </Link>
                    <Link href="/portfolio">
                        <li>portfolio</li>
                    </Link>
                    <Link href="/contact">
                        <li>contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
