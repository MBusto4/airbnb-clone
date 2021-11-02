import { useRouter } from 'next/dist/client/router'

import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import SearchInfoCard from '../components/SearchInfoCard'
import Map from '../components/Map'

function Search({ searchResults }) {
    const router = useRouter()

    //getting the query params from the search
    const { location, startDate, endDate, numOfGuests } = router.query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div className=''>
            <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>
                        300+ - {range} - stays for {numOfGuests} Guests
                    </p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6 text-transform: capitalize'>Stays in {location}</h1>

                    <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='searchOption'>Cancelation Flexibility</p>
                        <p className='searchOption'>Type of Place</p>
                        <p className='searchOption'>Price</p>
                        <p className='searchOption'>Rooms and Beds</p>
                        <p className='searchOption'>More Filters</p>
                    </div>

                    <div>
                        <div className='flex flex-col'>
                            {
                                searchResults?.map((item) => (
                                    <SearchInfoCard
                                        key={item.img}
                                        img={item.img}
                                        location={item.location}
                                        title={item.title}
                                        description={item.description}
                                        star={item.star}
                                        price={item.price}
                                        total={item.total}
                                        long={item.long}
                                        lat={item.lat}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

const cityToKeyMap = {
    'new york': 'BBA0',
    'boston': '2DYY',
    'london': 'P1RJ'
}

export async function getServerSideProps(context) {

    const { params, req, res, response } = context

    console.log('req here', req.__NEXT_INIT_QUERY)

    const { location } = req.__NEXT_INIT_QUERY

    console.log('location', location)

    //pulling the data from the api
    const searchResults = await fetch(`https://jsonkeeper.com/b/${cityToKeyMap[location]}`)
        .then(
            res => res.json()
        )
    return {
        props: { searchResults }
    }
}

export default Search