import React, { useState, useEffect } from "react";
import {motion} from 'framer-motion'

const banner = { 
  animate: { 
    transition: { 
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
}

const letterAnimation = {
  initial: { 
    y: 400
  },
  animate: { 
    y: 0,
    transition: { 
      ease: [.6, .01, -0.05, 0.95],
      duration: 1
    }
  }
}

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => { 
      setPlayMarquee(true);
    }, 1000)

  }, []);
  return (
    <motion.div 
      variants={banner}
      className="banner">
      <BannerRowTop title={"brand"} />
      <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
      <BannerRowBottom title={"studio"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span 
    variants={disabled? null: banner}
    initial={"initial"}
    animate={"animate"}
    className="row-title">
    {[...title].map((letter) => (
      <motion.span 
        variants={letterAnimation}
        className="row-letter">{letter}</motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div 
        initial={{
          opacity: 0,
          y: 80
        }}
        animate={{opacity: 1, y: 0}}
        transition={{ 
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4
        }}
        className="row-col">
        <motion.span 
          variants={letterAnimation}
          className="row-message">
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </motion.span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div 

        initial={{ 
          scale: 0,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          ease: [.6, .01, -0.05, 0.95],
          duration: 1.2,
          delay: 1
        }}
        className="scroll"
        
        >
        <motion.span 
          initial={{ opacity: 0}} 
          animate={{opacity:1}} 
          transition={{
            ease: 'easeInOut', 
            duration: 1, 
            delay: 0.5} }
          >scroll</motion.span >
        <motion.span 
          initial={{ opacity: 0}} 
          animate={{opacity:1}} 
          transition={{
            ease: 'easeInOut', 
            duration: 1, 
            delay: 1.5} }
          >down</motion.span >

      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled/>
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled/>
        <AnimatedLetters title={title} disabled/>
      </div>
    </div>
  );
};

export default Banner;
