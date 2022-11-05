import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import Data from './data'

export default function App() {
    const cards = Data.map(item => {
      return <Card 
        key={item.id}
        item={item}
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
