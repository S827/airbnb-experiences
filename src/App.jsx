import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import TCard from './components/card'
import Data from './data'

export default function App() {
    const cards = Data.map(item => {
      return <TCard 
        key={item.id}
        img={item.coverImg}
        title={item.title} 
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        price={item.price}
        openSpots={item.openSpots}
      />
    })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards} 
      </section>
    </div>
  )
}
