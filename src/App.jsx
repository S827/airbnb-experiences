import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import TCard from './components/card'
// import Card from './components/tempcard'
import Data from './data'

export default function App() {
    const nn = Data.map(item => {
      return <TCard 
        img={item.coverImg}
        title={item.title} 
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        price={item.price}
      />
    })
  return (
    <div>
      <Navbar />
      <Hero />
      {nn}
    </div>
  )
}
