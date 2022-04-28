import trollFace from "../images/troll-face-logo.png";

export default function Header() {
  return (
    <div className='header flex align-center container'>
      <div className='header--col_1 flex align-center'>
        <img
          className='header--logo_image'
          src={trollFace}
          alt='Logo'
          width='30px'
        />
        <h1 className='header--logo_text'>Meme Generator</h1>
      </div>
      <div className='header--col_2'>
        <h4>React Course - Project 3</h4>
      </div>
    </div>
  );
}
