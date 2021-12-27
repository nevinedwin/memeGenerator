import React from 'react'
import './App.css'
import Meme from './Components/Meme/Meme'
import Navbar from './Components/Navbar/Navbar'
import data from './Data'

export default function App() {
    return (
        <div className='App-cont'>
            <Navbar />
            <Meme dataSet={data} />
        </div>
    )
}