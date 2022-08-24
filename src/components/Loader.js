import React, { useEffect } from "react";
import Image from "./Image";
import {motion } from "framer-motion";


// Variants 
const container = {
  show: { 
    transition: { 
      staggerChildren: 0.35 
    }
  }
}

const item = { 
  hidden: { 
    opacity: 0,
    y: 200
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: { 
      ease: [.6, .01, -0.05, 0.95],
      duration: 1.6
    }
  },
  exit: { 
    opacity: 0,
    y: -200,
    transition: { 
      ease: 'easeInOut',
      duration: 0.8
    }
  }
}


const mainItems = { 
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      ease: [.6, .01, -0.05, 0.95],
      duration: 1.6
    }
  }
}


const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className='loader'>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        exit={"exit"}
        className='loader-inner'
        onAnimationComplete={() => setLoading(false)}
        >
        <ImageBlock variants={item} id='image-1' />

        <motion.div 
          variants={mainItems}
          className='transition-image'>
          <motion.img
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt='random alt'
            layoutId="main-image-1"
            // transition={{
            //   ease: [.6, .01, -0.05, 0.9],
            //   duration: 1.6

            // }}
          />
        </motion.div>

        <ImageBlock variants={item} id='image-3' />
        <ImageBlock variants={item} id='image-4' />
        <ImageBlock variants={item} id='image-5' />
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div 
      // animate={{ 
      //   scale: 0.5,
      //   transition: { 
      //     duration: 1
      //   }
      // }}
      variants={variants}
      className={`image-block ${id}`}>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
