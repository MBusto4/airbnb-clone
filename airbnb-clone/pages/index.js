import Head from 'next/head'
import Banner from '../components/Banner'
import DiscoverThings from '../components/DiscoverThings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, liveAnywhereData, discoverData }) {
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
          <h2 className='text-4xl font-semibold pb-5 text-center md:text-left'>Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {exploreData?.map((item) => (
              <div className='sm:mx-auto'>

                <SmallCard
                  key={item.id}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                  customCardImg='https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?im_q=medq&im_w=240'
                  customCardTitle='Philadelphia'
                />
              </div>
            ))}
          </div>
        </section>


        <section>
          <h2 className='text-4xl font-semibold py-8 text-center md:text-left '>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {liveAnywhereData?.map((item) => (
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

        <section>
          <h2 className='text-4xl font-semibold py-8 text-center md:text-left '>Discover things to do</h2>
          <div className='flex sm:overflow-scroll sm:space-x-2 sm:scrollbar-hide p-3 -ml-3'>
            {discoverData?.map((item) => (
              <div className='mx-auto'>
                <DiscoverThings
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  des={item.des}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>

  )
}

//server side static rendoring
export async function getStaticProps() {
  //pulling the data from the api
  const exploreData = await fetch('https://jsonkeeper.com/b/31WF')
    .then(
      res => res.json()
    )

  const liveAnywhereData = await fetch('https://links.papareact.com/zp1')
    .then(
      res => res.json()
    )

  const discoverData = await fetch('https://jsonkeeper.com/b/D7LA')
    .then(
      res => res.json()
    )



  return {
    props: {
      exploreData,
      liveAnywhereData,
      discoverData
    }
  }
}