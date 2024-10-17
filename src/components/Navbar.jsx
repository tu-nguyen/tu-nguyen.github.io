import React, { useCallback, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const navigation = [
  // { name: 'Tu', href: '#', current: true },
  { name: 'about', href: '#about', current: false },
  { name: 'experience', href: '#experience', current: false },
  { name: 'projects', href: '#projects', current: false },
  { name: 'contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const btnRef = useRef(null);

  const test = ({ isActive }) => {
    isActive ? 'a' : 'b'
  }

  const onClick = () => {
    const openBtn = btnRef.current?.firstChild;
    const hambState = String(openBtn?.dataset.headlessuiState)

    if (!hambState.includes("open")) {
      btnRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Disclosure as="nav" className="sticky top-0 -mt-16 sm:-mt-20 z-50 bg-black">
      <div className='mx-auto max-w-7xl px-3 sm:px-6 sm:lg:px-8'>
        <div className='relative flex h-16 sm:h-20 items-center justify-between'>
          
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" ref={btnRef}>
            {/* hamburg */}
            <DisclosureButton
              onClick={onClick}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-sky-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* todo add logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <a href='#' className='flex flex-shrink-0 items-center'>
              <span className="h-8 w-auto text-xl font-bold uppercase">Tu</span>
            </a>
          </div>

          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium uppercase',
                  )}
                >
                  {item.name}
                </a>
              ))}

              <a href='../Tu Nguyen Resume.pdf' target="_blank" className='text-sky-600 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white uppercase'>
                Resume
              </a>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium uppercase',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}

            <DisclosureButton
              as="a"
              href='../Tu Nguyen Resume.pdf'
              target="_blank"
              className='text-sky-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium uppercase'
            >
              Resume
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}

export default Navbar