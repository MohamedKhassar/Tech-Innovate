"use client"
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Index = () => {
    useEffect(() => {
        AOS.init({

        });
    }, []);

    return (
        <div>
            <div className='flex justify-center items-center h-screen bg-cover bg-center bg-[url(/assets/img/innovate.jpg)]' data-aos='fade-down'>
                <div className='backdrop-blur-sm bg-black/5 h-full w-full flex justify-center items-center'>
                    <h1 className='text-5xl font-semibold text-white'>Welcome to Tech Innovate</h1>
                </div>
            </div>
            <div className='m-12 grid gap-y-10 justify-center text-white'>
                <h1 className='text-center text-4xl'>🚀 Discover Innovation</h1>
                <p className='w-full'>Dive into a world where imagination becomes reality. At Tech Innovate, we push the boundaries of what's possible with boundless ingenuity.</p>
            </div>
        </div>
    );
};

export default Index;
