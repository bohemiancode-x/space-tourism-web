import React from 'react'
import { Link, useLocation, Route, Routes } from "react-router-dom";

//subpages
import Mars from './Mars'
import Moon from './Moon'
import Europa from './Europa'
import Titan from './Titan'

export default function Destination(props) {
  const data = props.data;
  const isPending = props.isPending;
  const location = useLocation();

  //console.log(data);
  const destinations = [
    {
      text: 'MOON',
      path: '/destination/moon'
    },
    {
      text: 'MARS',
      path: '/destination/mars'
    },
    {
      text: 'EUROPA',
      path: '/destination/europa'
    },
    {
      text: 'TITAN',
      path: '/destination/titan'
    }
  ];
  

  return (
    <div className='bg-destinationmobile md:bg-destinationtablet lg:bg-destinationdesktop bg-cover h-[100%] xl:h-[100vh] text-white'>
        <div className='pt-[20%] md:pt-[18%] flex flex-col items-center lg:items-start lg:flex-row'>
          <div className='flex gap-3 text-2xl lg:ml-32'>
            <span className='font-others tracking-widest opacity-50'>01</span>
            <h3 className='font-others tracking-widest'>PICK YOUR DESTINATION</h3>
          </div>

          <ul className='flex lg:gap-0 h-16 lg:w-3/5 lg:ml-auto lg:mt-16 items-center'>
            {destinations.map((nav) => (
                        <Link key={nav.text} className={location.pathname === nav.path ? 'navitem border-b-4 border-white' : 'navitem'} to={nav.path}>
                            {nav.text}
                        </Link>
                    ))}
          </ul>


        </div>
        
        {!isPending && 
          <Routes>
            <Route element={<Moon data={data.destinations[0]} />} path='/moon' />
            <Route element={<Mars data={data.destinations[1]} />} path='/mars' />
            <Route element={<Europa data={data.destinations[2]} />} path='/europa' />
            <Route element={<Titan data={data.destinations[3]} />} path='/titan' />
          </Routes>
        }
    </div>
  )
}
