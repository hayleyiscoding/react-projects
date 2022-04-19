import profileImage from "../images/hayley-profile.jpg";
import mailIcon from "../images/mail-icon.png";

export default function Header() {
  return (
    <header className='header text-center'>
      <img src={profileImage} alt='profile' />
      <h1>Hayley Wood</h1>
      <h2>Software Developer</h2>
      <a href='https://hayleyiscoding.com'>https://hayleyiscoding.com</a>
      <button className='btn'>
        <img src={mailIcon} alt='icon' />
        Email
      </button>
    </header>
  );
}
