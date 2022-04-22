import React from "react";
import logo from "./logo.svg";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div>
        <h3>Kontakt</h3>
        <form className="form" action="">
          <label htmlFor="name">Namn</label>
          <input id="name" type="text" />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" />
          <label htmlFor="message">Meddelande</label>
          <textarea name="message" id="message"></textarea>
        </form>
        <div className="icons">
          <BsInstagram />
          <BsLinkedin />
          <AiOutlineMail />
          <BsGithub />
          <FaAppStoreIos />
        </div>
        <p>&copy; 2022 Julia-Lotta Tinglöf</p>
      </div>
    </footer>
  );
}

export default Footer;
