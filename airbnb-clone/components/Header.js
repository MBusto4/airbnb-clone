import React, { useState } from 'react'
import Image from 'next/image'
import {
    SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router"

function Header({ placeholder }) {

    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numOfGuests, setNumOfGuests] = useState(1)
    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numOfGuests

            }
        })
    }

    return (
        <div className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-5 md:px-10'>
            {/* Left */}
            <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'

                />
            </div>

            {/* Middle */}
            <div className='flex items-center md:border-2 md:border-[#FD5B61] rounded-full py-2 md:shadow-xl  '>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder={placeholder || 'Enter a location in ALL lower case!!!'}
                    className='pl-5 bg-transparent outline-none 
                flex-grow text-sm text-gray-600 placeholder-gray-400 text-transform: capitalize ' />
                <SearchIcon
                    className='hidden md:inline-flex h-8 bg-[#FD5B61] text-white rounded-full
                    p-2 cursor-pointer md:mx-2' onClick={search}
                />
            </div>

            {/* Right */}
            <div className='flex space-x-4 items-center justify-end text-[#FD5B61]'>
                <p className='hidden md:inline-flex cursor-pointer'>Become a Host</p>
                <GlobeAltIcon
                    className='h-6 cursor-pointer'
                />
                <div className='flex items-center space-x-2 p-2 rounded-full shadow-xl border-2 border-[#FD5B61]'>
                    <MenuIcon className='h-6 cursor-pointer' />
                    <UserCircleIcon className='h-6 cursor-pointer' />
                </div>
            </div>

            {searchInput &&
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2
                            className='text-2xl pl-2 flex-grow font-semibold'>Number of Guests
                        </h2>
                        <UsersIcon className='h-5' />
                        <input
                            value={numOfGuests}
                            onChange={e => setNumOfGuests(e.target.value)}
                            type='number'
                            min={1}
                            className='w-12 pl-2 text-lg outline-none text-[#FD5B61]'
                        />
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='hover:bg-gray-400 hover:shadow-lg hover:text-white m-1 outline-none flex-grow border-2 rounded-lg border-gray-400 text-gray-500'> Cancel</button>
                        <button onClick={search} className='hover:bg-[#FD5B61] hover:shadow-lg hover:text-white m-1 outline-none flex-grow text-[#FD5B61] border-2 rounded-lg border-[#FD5B61]'>Search</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header
