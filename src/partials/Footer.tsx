import React from "react";
import logo from "./logo.svg";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="icons">
        <BsInstagram />
        <BsLinkedin />
        <AiOutlineMail />
        <BsGithub />
        <FaAppStoreIos />
      </div>
      <p>&copy; 2022 Julia-Lotta Tinglöf</p>
    </footer>
  );
}

export default Footer;
