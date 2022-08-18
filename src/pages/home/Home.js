import homebg from '../../assets/home/background-home-desktop.jpg'


export default function home() {
  return (
    <div className='lg:bg-homedesktop md:bg-hometablet bg-homemobile bg-cover h-[100vh] text-white'>
        <div className='lg:pt-[30%] md:pt-[25%] p-32 flex flex-col lg:flex-row items-center'>
            <div className='flex flex-col lg:gap-5 gap-5 items-center'>
                <h3 className='font-others tracking-widest lg:text-4xl text-xl text-two'>SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className='font-body md:text-[10rem] text-8xl'>SPACE</h1>
                <p className='text-two tracking-wide font-others lg:text-2xl text-xl text-center lg:text-start sm:leading-10 md:leading-7'>
                    Let's face it; if you want to go to space, you might as well <br className='hidden md:block'/> genuinely go to outer space and not hover kind of on the <br className='hidden md:block'/> edge of it. Well sit back, and relax because we'll give you a <br className='hidden md:block' /> truly out of this world experience!
                </p>
            </div>
            <button className='lg:ml-auto md:mt-20 text-black bg-white lg:w-[19rem] lg:h-[19rem] w-[16rem] h-[16rem] text-4xl font-body rounded-full mt-32'>EXPLORE</button>
        </div>
    </div>
  )
}
