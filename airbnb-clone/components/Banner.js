import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[750px] 2xl:h-[850px] top-0'>
            <Image
                src='https://links.papareact.com/0fm'
                layout='fill'
                objectFit='cover'
            />

            <div className='absolute text-black top-1/2 text-center w-full'>
                <p className='text-sm sm:text-lg'>Not Sure Where To Go? Perfect.</p>

                <button className='text-purple-500 font-bold my-3 bg-white px-10 py-4 shadow-lg rounded-full
                hover:shadow-2xl active:scale-90 transition duration-150 outline-none'>I'm flexible.</button>
            </div>
        </div>
    )
}

export default Banner
