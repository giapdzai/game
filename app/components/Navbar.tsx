'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [

    getItem('', 'sub4', <MenuOutlined style={{ fontSize: '24px' }} className='invert' />, [
        getItem('HOME', '1'),
        getItem('TEAM', '2'),
        getItem('GAME', '3'),
        getItem('RELEASE', '4'),
    ]),

];

export default function Navbar() {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <>
            {/* desktop */}
            <nav className=' p-5 flex sm:justify-between xs:justify-between '>
                <div className="flex-none w-14 h-14 ">
                    <Link href={'/'}>
                        <Image src={'/assets/navbar/game.png'} className='invert' width={50} height={50} alt=''></Image>
                    </Link>
                </div>
                <div className="grow h-14 justify-center items-center hidden md:flex">
                    <ul className='flex space-x-10 text-xl'>
                        <li>
                            <Link href={'/'}>HOME</Link>
                        </li>
                        <li>
                            <Link href={''}>TEAM</Link>
                        </li>
                        <li>
                            <Link href={''}>GAME</Link>
                        </li>
                        <li>
                            <Link href={''}>RELEASE</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-none w-14 h-14 mt-[15px] hidden md:flex">
                    <Image src={'/assets/navbar/menu.png'} className='invert' width={30} height={30} alt=''></Image>
                </div>
                <Menu
                    onClick={onClick}
                    style={{ width: 200 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                    className='bg-[#000000] text-white font-bold md:hidden lg:hidden'
                />
            </nav>
        </>
    )
}


