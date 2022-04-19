import twitterIcon from "../images/twitter-icon.png";
import facebookIcon from "../images/facebook-icon.png";
import instagramIcon from "../images/instagram-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import githubIcon from "../images/github-icon.png";

export default function Footer() {
  return (
    <footer className='footer'>
      <ul className='flex justify-around align-center'>
        <li>
          <a href='https://hayleyiscoding.com'>
            <img src={twitterIcon} alt='Twitter' />
          </a>
        </li>
        <li>
          <a href='https://hayleyiscoding.com'>
            {" "}
            <img src={facebookIcon} alt='Facebook' />
          </a>
        </li>
        <li>
          <a href='https://hayleyiscoding.com'>
            <img src={instagramIcon} alt='Instagram' />
          </a>
        </li>
        <li>
          <a href='https://hayleyiscoding.com'>
            {" "}
            <img src={linkedinIcon} alt='LinkedIn' />
          </a>
        </li>
        <li>
          <a href='https://hayleyiscoding.com'>
            <img src={githubIcon} alt='Github' />
          </a>
        </li>
      </ul>
    </footer>
  );
}
