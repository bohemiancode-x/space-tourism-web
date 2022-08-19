import Ansariimg from '../../assets/crew/image-anousheh-ansari.png'

export default function Ansari({data}) {
  return (
    <div>
        <div>
        <div className='flex lg:flex-row flex-col items-center lg:items-start'>
            <div className='md:pl-20 lg:w-3/5 lg:mt-20 flex flex-col items-center lg:block text-center lg:text-start'>
                <h2 className='font-body tracking-widest z-0 opacity-50 text-xl md:text-2xl mt-10'>{data.role.toUpperCase()}</h2>
                <h1 className='font-body tracking-wider text-4xl md:text-5xl lg:text-6xl mt-5'>{data.name.toUpperCase()}</h1>
                <p className='text-lg font-body lg:mt-10 py-5 lg:py-0 text-two md:w-3/5 w-4/5'>{data.bio}</p>
            </div>

            <div className='lg:ml-auto lg:px-20 lg:mb-20'>
                <img className='h-[28rem] mt-20 md:mt-0 md:h-[32rem] lg:h-full' src={Ansariimg} alt={data.role} />
            </div>
        </div>
    </div>
    </div>
  )
}
