import React from 'react'
import Image from 'next/image'


function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className='relative py-16 cursor-pointer'>

            <div className='relative h-96 min-w-[300px]'>
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                />
            </div>


            <div className='absolute top-32 left-12 font-semibold'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p>{description}</p>

                <button className='text-sm text-white bg-[#121212] px-4 py-4 rounded-lg mt-5'>{buttonText}</button>
            </div>





        </section>
    )
}

export default LargeCard
