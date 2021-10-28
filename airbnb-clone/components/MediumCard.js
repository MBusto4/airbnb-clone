import React from 'react'
import Image from 'next/image'

function MediumCard({ img, title }) {
    return (
        <div>
            <div className='relative h-80 w-80'>
                <Image
                    src={img}
                    layout='fill'
                />
            </div>

        </div>
    )
}

export default MediumCard
