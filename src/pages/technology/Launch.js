import Launchpt from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import Launchls from '../../assets/technology/image-launch-vehicle-landscape.jpg'

export default function Launch({data}) {
  return (
    <div>
        <div className='flex lg:flex-row flex-col items-center lg:items-start'>
            <div className='lg:pl-60 lg:w-3/5 lg:mt-20 flex flex-col items-center lg:block text-center lg:text-start'>
                <p className='font-others tracking-wide z-0 text-two text-sm md:text-lg mt-10'>THE TERMINOLOGY ...</p>
                <h1 className='font-body tracking-wider text-4xl md:text-4xl lg:text-5xl mt-5'>{data.name.toUpperCase()}</h1>
                <p className='text-lg font-body lg:mt-10 py-5 lg:py-0 text-two w-4/5'>{data.description}</p>
            </div>

            <div className='lg:ml-auto lg:pl-10'>
                <img className='h-[28rem] mt-20 md:mt-0 md:h-[32rem] hidden lg:block lg:h-full' src={Launchpt} alt='img' />
                <img className='mt-0 h-[22rem] w-full lg:hidden' src={Launchls} alt='img' />
            </div>
        </div>
    </div>
  )
}
