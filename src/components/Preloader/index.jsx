import { useEffect, useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import { opacity, slideUp } from "./anim";
import styled from "styled-components";
import { colors } from "../../styles/vars";
import NewLoader from "./NewLoader";

const words = ["Innovate", "Create", "Inspire"];
const fullText = "Welcome to";
export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 400
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  const typewriterContainerVariants = {
    initial: { opacity: 1, y: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const typewriterLetterVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const loaderVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <PreloaderStyles>
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="introduction"
      >
        {dimension.width > 0 && (
          <>
            <motion.p variants={opacity} initial="initial" animate="enter">
            <AnimatePresence mode="wait">
              {showTypewriter && (
                <motion.div
                  className="typewriter"
                  variants={typewriterContainerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onAnimationComplete={() => {
                    setTimeout(() => {
                      setShowTypewriter(false);
                      setTimeout(() => {
                        setShowLoader(true); 
                      }, 600); 
                    }, 500);
                  }}
                >
                  {fullText.split("").map((letter, index) => (
                    <motion.span key={index} variants={typewriterLetterVariants}>
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Smoothly fading in NewLoader */}
            <AnimatePresence>
              {showLoader && (
                <motion.div
                  className="loader-container"
                  variants={loaderVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <NewLoader />
                </motion.div>
              )}
            </AnimatePresence>
            
            </motion.p>
            <svg>
              <motion.path
                variants={curve}
                initial="initial"
                exit="exit"
              ></motion.path>
            </svg>
          </>
        )}
      </motion.div>
    </PreloaderStyles>
  );
}

const PreloaderStyles = styled.div`
  .introduction {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 99;
    background-color: ${colors.lightBlue};
    svg {
      position: absolute;
      top: 0;
      width: 100%;
      height: calc(100% + 300px);
      path {
        fill: #383838;
      }
    }
    p {
      display: flex;
      color: ${colors.green};
      font-size: 42px;
      align-items: center;
      position: absolute;
      z-index: 1;
     
    }
  }
`;
