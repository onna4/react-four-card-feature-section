import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import cardData from "./cardData.js"
import Card from "./components/Card"

function App() {
  const cardDetails = cardData.map(card => {
    return <Card heading={card.heading} paragraph={card.paragraph}
    image={card.image} alt={card.alt} key={card.heading} />
  })


  return (
    <div className="App">
      <Header />
      {cardDetails}
      <Footer />
    </div>
  )
}

export default App
