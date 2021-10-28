import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardData }) {
  return (
    <div className=''>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {exploreData?.map((item) => (
              <SmallCard
                key={item.id}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>


        <section>
          <h2 className='text-4xl font-semibold py-8 '>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardData?.map((item) => (
              <MediumCard
                key={item.id}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />

      </main>
    </div>

  )
}

//server side static rendoring
export async function getStaticProps() {
  //pulling the data from the api
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(
      res => res.json()
    )

  const cardData = await fetch('https://links.papareact.com/zp1')
    .then(
      res => res.json()
    )


  return {
    props: {
      exploreData,
      cardData
    }
  }
}