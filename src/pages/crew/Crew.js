import React from 'react'
import { Link, useLocation, Route, Routes } from "react-router-dom";

//subpages
import Douglas from './Douglas'
import Mark from './Mark'
import Victor from './Victor'
import Ansari from './Ansari'

const links = [
  {
    number: 1,
    path: '/crew/douglas'
  },
  {
    number: 2,
    path: '/crew/mark'
  },
  {
    number: 3,
    path: '/crew/victor'
  },
  {
    number: 4,
    path: '/crew/ansari'
  }
]

export default function Crew(props) {
  const location = useLocation();
  const data = props.data;
  const isPending = props.isPending;


  return (
    <div className='bg-crewmobile md:bg-crewtablet lg:bg-crewdesktop bg-cover h-[100%] xl:h-[100vh] text-white'>
      <div className='pt-[24%] md:pt-[20%] lg:pt-[16%] flex flex-col items-center md:items-start'>
        <div className='flex gap-3 text-2xl md:ml-12 lg:ml-32'>
          <span className='font-others tracking-widest opacity-50'>02</span>
          <h2 className='font-others tracking-widest'>MEET YOUR CREW</h2>
        </div>

        <div className='lg:absolute left-[24rem] md:ml-auto lg:bottom-10 lg:left-32 md:pr-10 pt-5 md:pt-0'>
          <ul className='flex gap-5 items-center'>
              {links.map((nav) => (
                          <Link key={nav.number} className={location.pathname === nav.path ? 'lg:h-6 lg:w-6 h-3 w-3 rounded-full bg-white': 'lg:h-6 lg:w-6 h-3 w-3 rounded-full bg-slate-500'} to={nav.path} ></Link>
                      ))}
            </ul>
        </div>

        {!isPending && 
          <Routes>
            <Route element={<Douglas data={data.crew[0]} />} path='/douglas' />
            <Route element={<Mark data={data.crew[1]} />} path='/mark' />
            <Route element={<Victor data={data.crew[2]} />} path='/victor' />
            <Route element={<Ansari data={data.crew[3]} />} path='/ansari' />
          </Routes>
        }
      </div>
    </div>
  )
}
