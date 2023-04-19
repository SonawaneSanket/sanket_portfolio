import React from "react";
import { AiFillGithub, AiOutlineArrowUp, AiFillLinkedin } from "react-icons/ai";
import passport from "../Assets/Passport Photo.jpg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={passport} alt="Founder" />

        <h2>Sanket Sonawane</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/sanket-s-sonawane/"
            target={"blank"}
          >
            <AiFillLinkedin></AiFillLinkedin>
          </a>
          <a
            href="https://github.com/SonawaneSanket?tab=repositories"
            target={"blank"}
          >
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
