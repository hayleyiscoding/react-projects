import React from "react";
import memesData from "../memesData.js";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function handleChange(event) {
    event.preventDefault();
    return setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <main className='main container'>
      <div className='form'>
        <input
          className='form--input_top'
          type='text'
          name='topText'
          placeholder='Shut up'
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className='form--input_bottom'
          type='text'
          name='bottomText'
          placeholder='and take my money'
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image&nbsp; 🖼
        </button>
      </div>
      <div className='meme'>
        {meme.randomImage && (
          <img src={meme.randomImage} className='meme--image' alt='meme' />
        )}
        {meme.randomImage && <h2 className='meme--text top'>{meme.topText}</h2>}
        {meme.randomImage && (
          <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        )}
      </div>
    </main>
  );
}
