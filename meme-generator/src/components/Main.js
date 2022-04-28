import React from "react";
import memesData from "../memesData.js";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://onlinecowork.com",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  return (
    <main className='main container'>
      <div className='form'>
        <input
          className='form--input_top'
          type='text'
          name='text-top'
          placeholder='Shut up'
        />
        <input
          className='form--input_bottom'
          type='text'
          name='text-top'
          placeholder='and take my money'
        />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image&nbsp; 🖼
        </button>
      </div>
      <img
        className='main--meme_image'
        src={meme.randomImage}
        alt='Meme'
        width='100%'
      />
    </main>
  );
}
