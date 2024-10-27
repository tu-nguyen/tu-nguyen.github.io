import React, { useEffect, useRef, useState } from 'react'
import profile from '../assets/images/profile.jpg'
import socials from '../data/socials.json'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'about', href: '#about', current: false },
    { name: 'skills', href: '#skills', current: false },
    { name: 'experience', href: '#experience', current: false },
    // { name: 'education', href: '#education', current: false },
    { name: 'projects', href: '#projects', current: false },
    { name: 'contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const btnRef = useRef(null);
    const [socialTop, setSocialTop] = useState(false);

    const changeSocialTop = e => {
        window.scrollY >= 200 ? setSocialTop(true) : setSocialTop(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeSocialTop);
        return () => {
            window.removeEventListener('scroll', changeSocialTop);
        };
    }, []);
  
    const onClick = () => {
        const openBtn = btnRef.current?.firstChild;
        const hambState = String(openBtn?.dataset.headlessuiState)

        if (!hambState.includes("open")) {
            btnRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
    <Disclosure as="nav" className="sticky top-0 -mt-20 z-50 bg-black">
        <div className='mx-auto max-w-7xl px-3 sm:px-6 sm:lg:px-8'>
            <div className='relative flex h-16 sm:h-20 items-center justify-between'>

                {/* Social dropdown */}
                <Menu as="div" className="absolute right-0 items-center sm:hidden">
                    <div>
                        <MenuButton className="relative flex text-sm text-sky-600 hover:text-sky-700 active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open social menu</span>
                            <img
                            alt=""
                            src={profile}
                            className="h-8 w-8 rounded-full"
                            />
                        </MenuButton>
                    </div>
                    <MenuItems
                    transition
                    className={`absolute right-0 z-10 bg-black text-white ${socialTop ? 'mt-62' : '-mt-72'} w-32 origin-top-right rounded-md bg-neutral-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
                    >
                        {socials.map((item) => (
                            <MenuItem key={item.name}>
                                <a href={item.href} target="_blank">
                                    <div className={`grid grid-cols-2 px-6 py-3 text-sm text-white data-[focus]:bg-gray-100 hover:text-sky-700 active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300 ${item.res ? 'font-bold bg-sky-600 hover:bg-sky-700' : undefined}`}>
                                        <ion-icon name={item.icon} size="small"></ion-icon>
                                        {item.name}
                                    </div>
                                </a>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
                {/* End of social dropdown */}

                {/* hamburg nav */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" ref={btnRef}>
                    
                    <DisclosureButton
                    onClick={onClick}
                    className="group relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                    </DisclosureButton>
                </div>
                {/* end of hamburg nav */}
            
                {/* todo add logo */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <a href='#' className='flex flex-shrink-0 items-center'>
                        <span className="h-8 w-auto text-white hover:text-sky-700 active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300 text-xl font-bold uppercase">&lt;Tu /&gt;</span>
                    </a>
                </div>
                
                {/* nav */}
                <div className="hidden sm:ml-6 sm:block sm:flex-center">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-sky-600' : 'text-white hover:text-sky-700',
                                'rounded-md px-3 py-2 text-sm font-medium uppercase active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300',
                            )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                {/* end of nav */}
            </div>

            {/* hamb nav items */}    
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-sky-600' : 'text-white hover:text-sky-700',
                            'block rounded-md px-3 py-2 text-base font-medium uppercase active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300',
                        )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
            {/* end of hamb nav items */}    
        </div>
    </Disclosure>
    )
}

export default Navbar