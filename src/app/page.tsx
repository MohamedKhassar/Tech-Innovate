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
                <div className='backdrop-blur-sm bg-white/5 h-full w-full flex justify-center items-center'>
                    <h1 className='text-5xl font-semibold'>Welcome to Tech Innovate</h1>
                </div>
            </div>
        </div>
    );
};

export default Index;
