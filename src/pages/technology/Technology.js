import { Link, useLocation, Route, Routes } from "react-router-dom";

//subpages
import Launch from './Launch'
import Spacecapsule from './Spacecapsule'
import Spaceport from './Spaceport'

const links = [
  {
    number: 1,
    path: '/technology/launch'
  },
  {
    number: 2,
    path: '/technology/spaceport'
  },
  {
    number: 3,
    path: '/technology/spacecapsule'
  }
]


export default function Technology(props) {
  const data = props.data;
  const isPending = props.isPending;
  const location = useLocation();


  return (
    <div className='bg-technologymobile md:bg-technologytablet lg:bg-technologydesktop bg-cover h-[100%] xl:h-[100vh] text-white'>
        <div className='pt-[24%] md:pt-[20%] flex flex-col items-center lg:items-start'>
        <div className='flex gap-3 text-2xl md:ml-12 lg:ml-32'>
          <span className='font-others tracking-widest opacity-50'>03</span>
          <h2 className='font-others tracking-widest'>SPACE LAUNCH 101</h2>
        </div>

        <div className='lg:absolute left-[24rem] lg:bottom-40 lg:left-32 lg:pr-10 xl:bottom-80 pt-5'>
          <ul className='flex flex-row lg:flex-col gap-8 items-center'>
              {links.map((nav) => (
                          <Link key={nav.number} className={location.pathname === nav.path ? 'splinks bg-white text-black': 'splinks'} to={nav.path} >{nav.number}</Link>
                      ))}
            </ul>
        </div>

        {!isPending && 
          <Routes>
            <Route element={<Launch data={data.technology[0]} />} path='/launch' />
            <Route element={<Spaceport data={data.technology[1]} />} path='/spaceport' />
            <Route element={<Spacecapsule data={data.technology[2]} />} path='/spacecapsule' />
          </Routes>
        }
      </div>
    </div>
  )
}
