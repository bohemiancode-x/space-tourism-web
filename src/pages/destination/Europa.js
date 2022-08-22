import React from 'react'
import Europaimage from '../../assets/destination/image-europa.png'

export default function Europa({data}) {
  return (
    <div>
      <div className='flex lg:flex-row flex-col items-center mt-10 lg:mt-0 lg:px-20 lg:gap-20 gap-8'>
        <div>
          <img className='h-[15rem] md:h-[20rem] lg:h-[100%] xl:ml-20' src={Europaimage} alt="europa" />
        </div>

        <div className='text-center lg:text-start lg:px-20 lg:pt-10 lg:w-1/2 w-3/4'>
          <h1 className=' text-7xl lg:text-8xl font-body'>{data.name.toUpperCase()}</h1>
          <p className='font-others text-lg text-two'>{data.description}</p>
          <span className='flex mt-12 h-[1px] w-[100%] opacity-50 bg-slate-600'></span>
          <div className='flex flex-col md:flex-row gap-10 md:gap-20 mt-7 justify-center lg:justify-start'>
            <div>
              <h3 className='font-others tracking-widest text-md md:text-sm text-two'>AVG. DISTANCE</h3>
              <h3 className='font-body text-3xl md:text-xl'>{data.distance.toUpperCase()}</h3>
            </div>

            <div>
              <h3 className='font-others tracking-widest text-md md:text-sm text-two'>EST. TRAVEL TIME</h3>
              <h3 className='font-body text-3xl md:text-xl'>{data.travel.toUpperCase()}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
