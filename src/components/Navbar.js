import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/shared/logo.svg'

const navItems = [
    {
        number: '00',
        text: 'HOME',
        path: '/'
    },
    {
        number: '01',
        text: 'DESTINATION',
        path: '/destination/moon'
    },
    {
        number:'02',
        text: 'CREW',
        path: '/crew'
    },
    {
        number: '03',
        text: 'TECHNOLOGY',
        path: '/technology'
    },
];

export default function Navbar() {
    const location = useLocation()
    const [nav, setNav] = useState(false)

  return (
        <nav className='navbar'>
                <div className='px-20'>
                    <img src={logo} alt="logo" />
                </div>
                <span className='h-[1px] w-[30%] absolute left-52 bg-slate-600 z-10 hidden lg:block'></span>

                <ul className='navlinks'>
                    {navItems.map((nav) => (
                        <Link key={nav.number} className={location.pathname == nav.path ? 'navitem border-b-4 border-white' : 'navitem'} to={nav.path}>
                            <span className='font-bold font-others md:hidden lg:block'>{nav.number}</span>
                            {nav.text}
                        </Link>
                    ))}
                </ul>

                <div className={nav ? 'mobilenav' : 'hidden'}>
                    <svg onClick={() => setNav(false)} className='absolute cursor-pointer top-8 right-8 h-10 w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div className='flex flex-col gap-5 mt-48'>
                        {navItems.map((nav) => (
                                <Link key={nav.number} className={location.pathname == nav.path ? 'navitem h-10 border-r-8 border-white' : 'navitem h-10'} to={nav.path}>
                                    <span className='font-bold font-others'>{nav.number}</span>
                                    {nav.text}
                                </Link>
                            ))}
                     </div>
                </div>

                <svg onClick={() => setNav(true)} className='ml-auto md:hidden block h-12 w-12 mr-10 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
           
        </nav>
  )
}
