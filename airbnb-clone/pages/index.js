import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
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
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
      </main>

      <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        {cardData?.map((item) => (
          <MediumCard
            key={item.id}
            img={item.img}
            titel={item.title}
          />
        ))}
      </section>

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