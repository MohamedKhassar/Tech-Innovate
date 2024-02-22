// "use client"
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home",
    description: "Generated by create next app",
};

const Index = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen bg-cover bg-center bg-[url(/assets/img/innovate.jpg)]' data-aos='fade-down'>
                <div className='backdrop-blur-sm bg-black/5 h-full w-full flex justify-center items-center'>
                    <h1 className='lg:text-5xl text-3xl font-semibold text-white text-center'>Welcome to Tech Innovate</h1>
                </div>
            </div>
            <div className='m-12 grid gap-y-10 justify-center text-white'>
                <h1 className='text-center lg:text-4xl text-[1.65rem] text-nowrap'>🚀 Discover Innovation</h1>
                <p className='w-full text-justify'>Embark on a journey into a realm where imagination transcends into reality. At Tech Innovate, we are catalysts of progress, constantly challenging the confines of possibility through unyielding creativity. Our ethos is steeped in the belief that innovation knows no bounds. Within our ecosystem, we foster an environment where audacious ideas flourish and groundbreaking solutions emerge. From Artificial Intelligence and Machine Learning, reshaping the landscape of cognition, to IoT and Connected Devices, crafting intelligent networks that elevate everyday experiences, our expertise spans the forefront of technological evolution. Delve into the world of Blockchain and Cryptocurrencies, where we redefine the standards of security and trust, revolutionizing financial transactions and beyond. Moreover, in the realm of Biotechnology and Healthcare, we pioneer transformation medical advancements, nurturing a healthier, more resilient future for all. Join us in our unwavering pursuit of innovation; together, we transcend limitations and shape a future limited only by the scope of our imagination.</p>
            </div>
        </div>
    );
};

export default Index;
