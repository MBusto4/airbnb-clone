import { useRouter } from 'next/dist/client/router'

import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import SearchInfoCard from '../components/SearchInfoCard'

function Search({ londonSearchResults, newYorkSearchResults, bostonSearchResults }) {
    const router = useRouter()

    //getting the query params from the search
    const { location, startDate, endDate, numOfGuests } = router.query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

    const london = 'london'
    const newYork = 'new york'
    const boston = 'boston'

    const toTitleCase = (phrase) => {
        return phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

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
                        {(() => {
                            switch (location) {
                                case london: return (
                                    <div className='flex flex-col'>
                                        {londonSearchResults.map((item) => (
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
                                );
                                case newYork: return (
                                    <div className='flex flex-col'>
                                        {newYorkSearchResults.map((item) => (
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
                                );
                                case boston: return (
                                    <div className='flex flex-col'>
                                        {bostonSearchResults.map((item) => (
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
                                );
                                default: return <h1> No results found... </h1>;
                            }
                        })()}
                    </div>


                    {/* 
                    {
                        (location === london) ? (
                            <div className='flex flex-col'>
                                {londonSearchResults.map((item) => (
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
                        ) : (location === newYork) ? (
                            <div className='flex flex-col'>
                                {newYorkSearchResults.map((item) => (
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
                        ) : (location === boston) ? (
                            <div className='flex flex-col'>
                                {bostonSearchResults.map((item) => (
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
                        ) : (
                            <div> No Search Results Found</div>
                        )} */}


                </section>
            </main>
            <Footer />
        </div>
    )
}


export async function getServerSideProps() {
    //pulling the data from the api
    const londonSearchResults = await fetch('https://jsonkeeper.com/b/P1RJ')
        .then(
            res => res.json()
        )
    const newYorkSearchResults = await fetch('https://jsonkeeper.com/b/YRKI')
        .then(
            res => res.json()
        )
    const bostonSearchResults = await fetch('https://jsonkeeper.com/b/UVUX')
        .then(
            res => res.json()
        )
    return {
        props: {
            londonSearchResults, newYorkSearchResults, bostonSearchResults
        }
    }
}

export default Search