import React from 'react'
import "./App.css"
// import {Article, Brand, CTA, Feature, Navbar} from "./components" 
// we can do this but we will import all these inside the container folder

import { Blog, Features, Footer, Header, Possibilities, WhatGPT3 } from './containers'
import { CTA, Brand, Navbar } from './components'

const App = () => {
  return (
    <div className='App' >
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibilities/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App