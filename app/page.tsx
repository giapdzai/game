'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Navbar from './components/Navbar'
import Team from './pages/team'
import Game from './pages/game'
import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init({

    });
  }, []);
  const controls = useAnimation();
  const [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPageYOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  useEffect(() => {
    const targetElement = document.getElementById("target-element-id");


    const targetPosition = targetElement ? targetElement.offsetTop : 0;
    const windowHeight = window.innerHeight;

    if (pageYOffset > targetPosition - windowHeight) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: '-100%', opacity: 0 });
    }
  }, [pageYOffset, controls]);

  return (
    <main className='px-10'>
      <section className='mx-auto max-w-[1300px] mb-[30px]'>
        <Navbar />
      </section>

      <section className='mx-auto max-w-[1400px] relative mb-[100px]'>
        <Image src={'/assets/game/hand.jpg'} width={500} height={500} className='w-full h-[700px]' alt='' />
        <div className="absolute p-4 max-w-[750px] bottom-24 left-12">
          <motion.div
            initial={{ x: '20%', opacity: 0 }}
            animate={controls}
            transition={{ duration: 1.3 }}
          >
            <p className="lg:text-6xl md:text-3xl sm:text-2xl mb-2 font-bold">VIDEO GAME</p>
            <p className="lg:text-xl sm:text-xs mb-2">Today is modern gaming industry is a multi-billion dollar business,
              with new technologies constantly pushing the boundaries of what is possible.
            </p>
          </motion.div>

          <motion.button whileHover={{ scale: 1.1 }}
            className="border-2 border-slate-100 hover:bg-slate-900 hover:bg-opacity-60 duration-150 w-[200px] mt-[50px] font-bold py-2 px-4"
          >
            VIEW MORE
          </motion.button>
        </div>
      </section>

      <section className='mb-[100px]'>
        <div className="grid lg:grid-cols-3  gap-4 mx-auto max-w-screen-xl">
          <div className="flex flex-col justify-end" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
            <p>CREATION</p>
            <h1 className='font-bold text-3xl py-5 leading-snug'>THE STORY BEHIND THE CREATION OF THE VIDEO GAME</h1>
            <p className='leading-loose text-[#cacaca]'>Once upon a time, there was a young game developer named Mark who had a passion for creating video games. He spent countless hours tinkering with code, designing levels, and coming up with new ideas for games.</p>
          </div>
          <div className='col-span-2 grid md:grid-cols-2 sm:grid-cols-1'>
            <div className="relative group p-2">
              <Image src={'/assets/banner/banner2.jpg'} data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500" width={500} height={500} alt='' className='w-full h-[430px] border-2 border-slate-100'></Image>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 duration-500"></div>
            </div>
            <div className="relative group p-2">
              <Image src={'/assets/banner/banner3.jpg'} data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="1500" width={500} height={500} alt='' className='w-full h-[430px] border-2 border-slate-100'></Image>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 duration-500"></div>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <Game />
    </main>
  )
}
