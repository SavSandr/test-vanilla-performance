import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {  cards, grayCard, redCard, textCard, title } from '../styles.css';

function App() {

  const grayCards=(Array.from(Array(1000).keys()))
  const redCards=(Array.from(Array(500).keys()))
  const textItems=(Array.from(Array(500).keys()))
  return (
    <>
    <h1 className={`${title}`}>Vanilla</h1>
    <div className={`${cards}`}>
     {
      grayCards.map(item=>(<div key={item} className={`${grayCard}`}>{item}</div>))
     }
     {
      redCards.map(item=>(<div key={item} className={`${redCard}`}>{item}</div>))
     }
     {
      textItems.map(item=>(<div  key={item} className={`${textCard}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas lorem metus, sit amet scelerisque eros suscipit nec.</div>))
     }
    </div>
    </>
  )
}

export default App
