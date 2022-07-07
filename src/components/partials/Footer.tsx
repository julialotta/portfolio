import { BsInstagram, BsLinkedin, BsGithub, BsSpotify } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FadeInWhenVisible } from "../../animations/FadeInWhenVisible";

function Footer() {
  return (
    <FadeInWhenVisible>
      <footer
        style={{
          backgroundImage: `src('cvimg/JL.png')`,
        }}
      >
        <div>
          <h3>Contact & Links</h3>
          <div className='icons'>
            <a
              href='https://www.instagram.com/julialotta/'
              target='_blank'
              rel='noreferrer'
            >
              <BsInstagram />
            </a>
            <a
              href='https://www.linkedin.com/in/julialottatinglof/'
              target='_blank'
              rel='noreferrer'
            >
              <BsLinkedin />
            </a>
            <a
              href='mailto:julialottatinglof@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineMail />
            </a>
            <a
              href='https://github.com/julialotta'
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub />
            </a>
            <a
              href='https://open.spotify.com/artist/0DUdFRHNgttxt3gqOEW1ak?si=aPsJhNN0Qea61PFLSgfHVQ'
              target='_blank'
              rel='noreferrer'
            >
              <BsSpotify />
            </a>
          </div>
          <p>&copy; 2022 Julia-Lotta Tinglöf</p>
        </div>
      </footer>
    </FadeInWhenVisible>
  );
}

export default Footer;
