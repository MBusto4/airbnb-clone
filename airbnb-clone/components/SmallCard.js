import React from 'react'
import Image from 'next/image'

function SmallCard({ img, location, distance }) {
    return (
        <div>
            <div className='relative h-16 w-16'>
                <Image
                    src={img}
                    layout='fill'
                    className='rounded-lg'
                />
            </div>
            <h1>{location}</h1>
            <h2>{distance}</h2>
        </div>
    )
}

export default SmallCard
