import React from 'react'
import Header from './components/Header'
import TinderCards from './components/TinderCards'
import SwipeButtons from './components/SwipeButtons'

const App = () => {
  return (
    <div>
    {/* Header */}
    <Header />
    {/* TinderCards */}
    <TinderCards />
    {/*SwipeButtons*/}
    <SwipeButtons />
    </div>
  )
}

export default App