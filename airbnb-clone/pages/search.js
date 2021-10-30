import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Search() {
    return (
        <div className=''>
            <Header />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>
                        300+ stays for 5 number of Guests
                    </p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in .....</h1>

                    <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='searchOption'>Cancelation Flexibility</p>
                        <p className='searchOption'>Cancelation Flexibility</p>
                        <p className='searchOption'>Cancelation Flexibility</p>
                        <p className='searchOption'>Cancelation Flexibility</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search