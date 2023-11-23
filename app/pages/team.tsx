'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

export default function Team() {
    const images = [
        '/assets/game/hand.jpg',
        '/assets/game/reddit.jpg',
        '/assets/game/robot.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    const getVisibleImages = () => {
        const indexes = [
            (currentIndex + images.length - 1) % images.length,
            currentIndex,
            (currentIndex + 1) % images.length,
        ];
        return indexes.map(index => images[index]);
    };


    const card = [
        {
            id: 1,
            name: 'GALACTIC QUEST',
            image: 'glactic.jpg',
            date: 'November 02. 2030',
            data_aos: 'fade-down',
            data_aos_easing: 'linear',
            data_aos_duration: '1500'
        },
        {
            id: 2,
            name: 'KINGDOMS OF THE REALM',
            image: 'KINGDOMS.jpg',
            date: 'November 05. 2030',
            data_aos: 'fade-up',
            data_aos_easing: 'linear',
            data_aos_duration: '1500'
        },
        {
            id: 3,
            name: 'ESCAPE FROM THE ISLAND',
            image: 'ESCAPE.jpg',
            date: 'November 09. 2030',
            data_aos: 'fade-down',
            data_aos_easing: 'linear',
            data_aos_duration: '1500'
        },
        {
            id: 4,
            name: 'CYBERNETIC REVOLUTION',
            image: 'CYBERNETIC.jpg',
            date: 'November 02. 2030',
            data_aos: 'fade-up',
            data_aos_easing: 'linear',
            data_aos_duration: '1500'
        },
        {
            id: 5,
            name: 'THE LAST HOPE',
            image: 'THELAST.jpg',
            date: 'November 17. 2030',
            data_aos: 'fade-down',
            data_aos_easing: 'linear',
            data_aos_duration: '1500'
        },
        {
            id: 6,
            name: 'MAGICAL KINGDOM',
            image: 'MAGICAL.jpg',
            date: 'November 25. 2030',
            data_aos: 'fade-up',
            data_aos_easing: 'linear',
            data_aos_duration: '1500'
        }
    ]
    const cardTeam = [
        {
            id: 1,
            name: 'Juan Lindsey',
            job: 'Developer',
            image: '1.jpg',
            data_aos: 'fade-right',
            data_aos_easing: 'linear',
            data_aos_duration: '1500'
        },
        {
            id: 2,
            name: 'Juan Lindsey',
            job: 'Developer',
            image: '2.jpg',
            data_aos: 'zoom-in',
            data_aos_easing: 'linear',
            data_aos_duration: '1500'
        },
        {
            id: 3,
            name: 'Juan Lindsey',
            job: 'Developer',
            image: '3.jpg',
            data_aos: 'fade-left',
            data_aos_easing: 'linear',
            data_aos_duration: '1500'
        }
    ]
    return (
        <>
            <section className=''>
                <div className=" mx-auto max-w-screen-xl mb-[150px]">
                    <div className="col-span-3 text-end">
                        <p>CREATING</p>
                        <h1 className='font-bold text-3xl py-5 leading-snug'>OUR TEAM OF GAME <br />DEVELOPMENT GENIUSES</h1>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto'>
                        {cardTeam.map((card) => (
                            <div key={card.id} >
                                <motion.div
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{
                                        scale: 0.95,
                                        transition: { duration: 1 },
                                    }}
                                    whileTap={{ scale: 2 }}
                                    whileInView={{ opacity: 1 }}
                                >
                                    <Image src={`/assets/team/${card.image}`} data-aos={`${card.data_aos}`} data-aos-easing={`${card.data_aos_easing}`} data-aos-duration={`${card.data_aos_duration}`} width={500} height={500} alt=''></Image>
                                </motion.div>
                                <div className="py-4">
                                    <div className="font-bold text-2xl mt-3 mb-2">{card.name}</div>
                                    <p className="text-[#cacaca]">
                                        {card.job}
                                    </p>
                                </div>
                                <div className="pb-2 flex">
                                    <Image src={'/assets/team/youtube.png'} className='invert text-white' width={30} height={30} alt=''></Image>
                                    <Image src={'/assets/team/twitch.png'} className='invert text-white ml-2 mr-2' width={30} height={30} alt=''></Image>
                                    <Image src={'/assets/team/discord.png'} className='invert text-white' width={30} height={30} alt=''></Image>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mx-auto max-w-screen-xl mb-[150px]'>
                    {card.map((card) => (
                        <div key={card.id} className="flex flex-col mx-auto max-w-sm rounded overflow-hidden shadow-lg" data-aos={`${card.data_aos}`} data-aos-easing={`${card.data_aos_easing}`} data-aos-duration={`${card.data_aos_duration}`}>
                            <div className="overflow-hidden h-[240px]">
                                <Image
                                    src={`/assets/team/${card.image}`}
                                    width={500}
                                    height={500}
                                    className='w-[190px] h-[240px] transition-transform duration-300 transform hover:scale-110'
                                    alt={card.name}
                                />
                            </div>
                            <div className="flex-grow py-4">
                                <div className="font-bold text-lg mt-3 mb-2 break-words">{card.name}</div>
                                <Link href={''}>
                                    <p className="text-[#cacaca] hover:text-gray-500">{card.date}</p>
                                </Link>
                            </div>
                            <div className="pb-2 flex justify-between text-[#cacaca] hover:text-gray-500">
                                <Link href={''}>MORE</Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-20 mx-auto max-w-screen-xl px-5 mb-[150px]'>
                    <div className='px-5'>
                        <div className='border-2 border-slate-100'>
                            <div className='flex pt-4 ml-16'>
                                <Image src={'/assets/team/games.png'} className='invert text-white mr-3' width={50} height={50} alt=''></Image>
                                <Image src={'/assets/team/keyboard.png'} className='invert text-white' width={50} height={50} alt=''></Image>
                            </div>
                            <div className='flex justify-center items-center py-5'>
                                <Image src={'/assets/team/one_common.jpg'} width={500} height={700} alt='...'></Image>
                            </div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <p>COMMON GAME</p>
                        <h1 className='font-bold text-2xl w-2/3 my-7'>ONE COMMON THEME IN VIDEO GAMES</h1>
                        <p className='leading-loose text-[#cacaca] w-3/4'>Concept of a hero is journey. This is a storyline that follows a protagonist on a journey of growth and development, often involving overcoming obstacles and facing challenges.</p>
                        <button className="border-2 border-slate-100 hover:bg-slate-100 hover:bg-opacity-40 duration-150 w-[200px] mt-[50px] font-bold py-2 px-4">
                            VIEW MORE
                        </button>
                    </div>
                </div>

                <div className='relative mx-auto overflow-hidden z-0  mb-[150px]' style={{ backgroundImage: "url('/assets/team/robot.jpg')", backgroundAttachment: 'fixed', backgroundSize: 'fill', height: '500px', WebkitBackgroundSize: '100% 750px' }}>
                    <div className='absolute '>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-40 z-50 h-[500px] border-2 border-slate-100 overflow-hidden'>
                            <div style={{ transform: 'rotate(25deg) translateY(-50px) translateX(-140px)' }} className='hidden md:flex'>
                                <Image src={'/assets/team/chrono1.jpg'} className='h-[700px] w-[700px]' width={700} height={700} alt=''></Image>
                            </div>
                            <div className=' text-end md:mr-28 mr-12 leading-loose mt-24'>
                                <p>BLOCKBUSTER</p>
                                <h1 className='font-bold text-3xl py-4'>CHRONO CRUSADER</h1>
                                <p className='text-[#cacaca]'>Chrono Crusader is a thrilling action-adventure video game set in a mystical world where time itself is in danger. You play as a skilled time traveler and crusader who is tasked with protecting the timeline from a dark force that seeks to disrupt the balance of the universe.</p>
                                <button className="border-2 border-slate-100 hover:bg-slate-300 hover:bg-opacity-40 duration-150 w-[200px] mt-[50px] font-bold py-2 px-4">
                                    DOWNLOAD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-auto  max-w-screen-xl  mb-[150px] grid sm:grid-cols-1 md:grid-cols-2'>
                    <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500">
                        <Image src={'/assets/team/girl.jpg'} width={500} height={600} alt=''></Image>
                    </div>
                    <div className='sm:px-10'>
                        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <p>WORKS</p>
                            <h1 className='font-bold text-3xl py-5'>THE MOST POPULAR FORMS OF ENTERTAINMENT</h1>
                            <p className='text-[#cacaca]'>With millions of people all over the world playing them on a regular basis. But have you ever stopped to think about who actually makes these games? The answer is video game developers.</p>

                        </div>
                        <div className='grid md;grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
                            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                                <h1 className='font-bold text-3xl py-5'>DEVELOPERS</h1>
                                <p className='text-[#cacaca]'>They are responsible for everything from designing the game mechanics and levels to creating the characters and writing the storylines.</p>
                            </div>
                            <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                                <h1 className='font-bold text-3xl py-5'>ASPECTS</h1>
                                <p className='text-[#cacaca]'>Developers use a variety of programming languages to create the game mechanics, physics, and other technical elements that make the game work.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center overflow-hidden mx-auto max-w-screen-xl mb-[100px]">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-4">
                        {getVisibleImages().map((src, index) => (
                            <div key={index} className="transition-transform duration-700">
                                <Image src={src} width={450} height={400} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </div>

                </div>
            </section >
        </>
    )
}
