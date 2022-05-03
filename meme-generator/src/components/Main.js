import React from "react";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://mbacenterglobal.com/uploads/images/2022/3/1646300677",
  });

  const [allMemesData, setAllMemesData] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemesData(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemesData.length);
    const url = allMemesData[randomNumber].url;
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
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
