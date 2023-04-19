import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../Assets/passport.png";

const HomePage = () => {
  const ClientCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (ClientCount.current.textContent = v.toFixed()),
    });
  };
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 1,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Welcome,
            <br /> I am Sanket Sonawane
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A developer", "A designer"],
              autoStart: true,
              loop: true,

              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:sanket28896@gmail.com"> hire me</a>
            <a href="#work">
              Projects <BsArrowUpRight></BsArrowUpRight>
            </a>
          </div>
          <aside>
            <article>
              <p>
                +
                <motion.span
                  whileInView={animationClientsCount}
                  ref={ClientCount}
                ></motion.span>
              </p>
              <span>Project made</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>sanket28896@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="sanket" />
        <BsChevronDown></BsChevronDown>
      </section>
    </div>
  );
};

export default HomePage;
