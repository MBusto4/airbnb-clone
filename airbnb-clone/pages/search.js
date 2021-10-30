import { useRouter } from 'next/dist/client/router'

import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import SearchInfoCard from '../components/SearchInfoCard'

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

                    <div className='flex flex-col'>
                        {searchResults.map((item) => (

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
                        ))}
                    </div>

                </section>
            </main>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    //pulling the data from the api
    const searchResults = await fetch('https://jsonkeeper.com/b/P1RJ')
        .then(
            res => res.json()
        )
    return {
        props: {
            searchResults
        }
    }
}

export default Search