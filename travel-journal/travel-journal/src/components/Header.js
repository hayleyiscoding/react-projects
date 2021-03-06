import worldIcon from "../images/world-icon.png";

export default function Header() {
  return (
    <header className='header text-center container'>
      <a href='{#}' className='header--link flex justify-center align-center'>
        <img src={worldIcon} alt='logo' className='header--icon' />
        <h1 className='header--title'>my travel journal.</h1>
      </a>
    </header>
  );
}
