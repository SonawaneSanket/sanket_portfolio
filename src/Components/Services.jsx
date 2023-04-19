import React from "react";
import { motion } from "framer-motion";
import { AiFillAndroid } from "react-icons/ai";
import { DiJava, DiReact } from "react-icons/di";

const Services = () => {

  const animations={
        whileInView:{
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            x:'-100%',
            opacity:0,
        },
        two:{
            y:'-100%',
            opacity:0,
        },
        three:{
            x:'100%',
            opacity:0,
        }, 
  }  
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div className="serviceBoxOne" whileInView={animations.whileInView}
            initial={animations.one}
        >
          <DiReact></DiReact>
          <span>Web Development</span>
        </motion.div>
        <motion.div className="serviceBoxTwo" whileInView={animations.whileInView}
            initial={animations.two}
        >
          <DiJava></DiJava>
          <span>Java Development</span>
        </motion.div>
        <motion.div className="serviceBoxThree" whileInView={animations.whileInView}
            initial={animations.three}
        >
          <AiFillAndroid></AiFillAndroid>
          <span>Android Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
