import React from "react";
import logo from "./logo.svg";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";
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
        </div>
        <p>&copy; 2022 Julia-Lotta Tinglöf</p>
      </div>
      <p>&copy; 2022 Julia-Lotta Tinglöf</p>
    </footer>
  );
}

export default Footer;
