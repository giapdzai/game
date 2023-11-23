'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSwitcher = () => {
    const images = [
        '/assets/game/hand.jpg',
        '/assets/game/reddit.jpg',
        '/assets/game/robot.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const getVisibleImages = () => {
        const indexes = [
            (currentIndex + images.length - 1) % images.length,
            currentIndex,
            (currentIndex + 1) % images.length,
        ];
        return indexes.map(index => images[index]);
    };


    // kjhafih
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const [imageUrl, setImageUrl] = useState('/assets/game/robot.jpg');
    const [activeButton, setActiveButton] = useState('youtube');
    const showImage = (platform: string) => {
        setActiveButton(platform);
        switch (platform) {
            case 'youtube':
                setImageUrl('/assets/game/robot.jpg');
                break;
            case 'steam':
                setImageUrl('/assets/game/hand.jpg');
                break;
            case 'reddit':
                setImageUrl('/assets/game/reddit.jpg');
                break;
            default:
                setImageUrl('');
                break;
        }
    };

    return (
        <>
            <div className='mx-auto max-w-screen-xl mb-[150px]'>
                <div className=''>
                    <button onClick={() => showImage('youtube')} className={`w-[150px] border-2 border-slate-100 p-4  ${activeButton === 'youtube' ? 'bg-slate-100 bg-opacity-40' : ''}`}>YouTube</button>
                    <button onClick={() => showImage('steam')} className={`w-[150px] border-2 border-slate-100 p-4 ${activeButton === 'steam' ? 'bg-slate-100 bg-opacity-40' : ''}`}>Steam</button>
                    <button onClick={() => showImage('reddit')} className={`w-[150px] border-2 border-slate-100 p-4 ${activeButton === 'reddit' ? 'bg-slate-100 bg-opacity-40' : ''}`}>Reddit</button>
                </div>
                <div className='w-full border-2 border-slate-100'>
                    {imageUrl && <Image src={imageUrl} className='w-full h-[550px] p-5' width={500} height={550} alt='...'></Image>}
                </div>
            </div>

            <div className='mb-[100px] max-w-screen-xl mx-auto flex flex-col justify-center items-center relative' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
                <div className='hidden sm:flex flex-col justify-center items-center'>
                    <h2 className="text-4xl font-bold">COMING SOON</h2>
                    <Image src={'/assets/game/gamer.png'} className="w-full max-w-md mx-auto " width={500} height={300} alt='' />
                </div>
                <div className="text-center mb-4 absolute w-full flex flex-wrap justify-around">
                    <div className="my-2">
                        <p className='lg:text-6xl md:text-3xl sm:text-2xl font-bold'>{currentTime.getDate()}</p>
                        <p className='lg:text-2xl sm:text-xs'>DAY</p>
                    </div>
                    <div className="my-2">
                        <p className='lg:text-6xl md:text-3xl sm:text-2xl font-bold'>{currentTime.getHours()}</p>
                        <p className='lg:text-2xl sm:text-xs'>HOURS</p>
                    </div>
                    <div className="my-2">
                        <p className='lg:text-6xl md:text-3xl sm:text-2xl font-bold'>{currentTime.getMinutes()}</p>
                        <p className='lg:text-2xl sm:text-xs'>MINUTES</p>
                    </div>
                    <div className="my-2">
                        <p className='lg:text-6xl md:text-3xl sm:text-2xl font-bold'>{currentTime.getSeconds()}</p>
                        <p className='lg:text-2xl sm:text-xs'>SECONDS</p>
                    </div>
                </div>

            </div>


            <div className="flex items-center justify-center overflow-hidden mx-auto max-w-[1400px] mb-[100px]">
                <button className="p-2 m-2 bg-gray-200 rounded shadow" onClick={goToPrevious}>
                    <Image src={'/assets/previous.png'} width={50} height={50} alt=''></Image>
                </button>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {getVisibleImages().map((src, index) => (
                        <div key={index} className="transition-transform duration-700">
                            <Image src={src} width={450} height={400} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
                <button className="p-2 m-2 bg-gray-200 rounded shadow" onClick={goToNext}>
                    <Image src={'/assets/next.png'} width={50} height={50} alt=''></Image>
                </button>
            </div>

            <footer className="mb-10 font-bold text-3xl mx-auto max-w-[1400px] border-2 border-slate-100">
                <div className="flex flex-col items-center my-14">
                    <div className="mb-14 flex">
                        <h2 className="text-2xl font-semibold flex justify-center items-center">VIDEO</h2>
                        <div className="flex justify-center px-5">
                            <Image src="/assets/navbar/game.png" className='invert text-white ml-5 mr-5 ' alt="Logo" width={70} height={70} />
                        </div>
                        <h2 className="text-2xl font-semibold flex justify-center items-center">GAME</h2>
                    </div>
                    <ul className="flex space-x-4 text-lg">
                        <li>HOME</li>
                        <li>TEAM</li>
                        <li>GAME</li>
                        <li>RELEASE</li>
                    </ul>
                    <div className="flex space-x-4 my-10">
                        <ul className='flex'>
                            <li><Image src={'/assets/team/youtube.png'} className='invert text-white' width={30} height={30} alt=''></Image></li>
                            <li><Image src={'/assets/team/twitch.png'} className='invert text-white ml-4 mr-4' width={30} height={30} alt=''></Image></li>
                            <li><Image src={'/assets/team/discord.png'} className='invert text-white' width={30} height={30} alt=''></Image></li>
                        </ul>
                    </div>
                    <p className="text-sm text-center">
                        © Copyright 2030 Mobirise - All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    );
};

export default ImageSwitcher;
