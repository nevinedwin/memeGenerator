import React, { useEffect, useState } from 'react'
import './Meme.css'

function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3i7p.jpg"
    })

    const [allMeme, setAllMeme] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    // we can write the above useEffect like this also using async
    // useEffect(async () => {
    //     const res = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await res.json()
    //     setAllMeme(data.data.memes)

    // }, [])


    function getImage() {
        let num = Math.floor(Math.random() * allMeme.length)
        const { url } = allMeme[num]
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
