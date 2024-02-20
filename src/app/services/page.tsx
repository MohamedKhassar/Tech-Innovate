"use client"
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface Data {
    id: number
    title: string,
    description: string,
    image: string,
    display: boolean

}
const page = () => {



    const data: Data[] = [
        {
            id: 1,
            title: "Artificial Intelligence and Machine Learning",
            description: "Revolutionizing how machines learn and interact with the world.",
            image: "/assets/img/ai.png",
            display: false
        },
        {
            id: 2,
            title: "IoT and Connected Devices",
            description: "Creating intelligent, interconnected ecosystems to enhance everyday life.",
            image: "/assets/img/iot.jpg",
            display: false
        },
        {
            id: 3,
            title: "Blockchain and Cryptocurrencies",
            description: "Redefining standards of security and trust in financial transactions and beyond.",
            image: "/assets/img/blockchain.jpg",
            display: false
        },
        {
            id: 4,
            title: "Biotechnology and Healthcare",
            description: "Pioneering groundbreaking medical solutions for a healthier, more resilient future.",
            image: "/assets/img/Biotechnology.jpeg",
            display: false
        }
    ]

    return (
        <div className='text-black grid grid-cols-1 justify-center items-center h-screen' >
            <h1 className='text-4xl text-center'>🌐 Areas of Expertise</h1>
            <div className='flex gap-x-8 w-full justify-center items-center'>
                {data.map(item =>
                    <div key={item.id} className='flex flex-col w-56 h-fit justify-center' >
                        <Image className='h-44 w-64 object-cover rounded-t-md' height={900} width={900} src={item.image} alt={`${item.title}-image`} onMouseEnter={() => item.display = true} onMouseLeave={() => item.display = false} />
                        <div className="bg-slate-600 rounded-b-md z-0">
                            <div className='p-4 grid gap-y-6'>
                                <h1 className='text-white'>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default page