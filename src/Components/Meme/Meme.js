import React, { useState } from 'react'
import './Meme.css'

function Meme(props) {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3i7p.jpg"
    })


    function getImage() {
        const memeData = props.dataSet.data.memes
        let num = Math.floor(Math.random() * memeData.length)
        const { url } = memeData[num]
        setMeme((prev) => {
            return (
                {
                    ...prev,
                    randomImage: url
                }
            )
        })

    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevData => {
            return (
                {
                    ...prevData,
                    [name]: value

                }
            )
        })
    }



    return (
        <main className='meme-cont'>
            <div className='form'>
                <input className='form-inp' type="text" placeholder='TopText' name='topText' onChange={handleChange} value={meme.topText} />
                <input type="text" className='form-inp' placeholder='Bottom text' name='bottomText' onChange={handleChange} value={meme.bottomText} />
                <button onClick={getImage} className='form-button'>Get a new image</button>
            </div>
            <div className='img-con'>
                <img src={meme.randomImage} alt="" className='imageMeme' />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}


export default Meme
