import { BsInstagram, BsLinkedin, BsGithub, BsSpotify } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div>
        <h3>Contact</h3>
        <div className='icons'>
          <a href='https://www.instagram.com/julialotta/' target='_blank'>
            <BsInstagram />
          </a>
          <a
            href='https://www.linkedin.com/in/julialottatinglof/'
            target='_blank'
          >
            <BsLinkedin />
          </a>
          <a href='mailto:julialottatinglof@gmail.com' target='_blank'>
            <AiOutlineMail />
          </a>
          <a href='https://github.com/julialotta' target='_blank'>
            <BsGithub />
          </a>
          <a
            href='https://open.spotify.com/artist/0DUdFRHNgttxt3gqOEW1ak?si=aPsJhNN0Qea61PFLSgfHVQ'
            target='_blank'
          >
            <BsSpotify />
          </a>
        </div>
        <p>&copy; 2022 Julia-Lotta Tinglöf</p>
      </div>
    </footer>
  );
}

export default Footer;
