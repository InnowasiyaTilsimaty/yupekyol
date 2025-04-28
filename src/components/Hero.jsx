import styled from "styled-components";
import HeroImg from "../assets/img/heroImg.jpg";
import HeroImg2 from "../assets/img/heroImg2.jpg";
import { useState, useEffect } from "react";
import {
  breakpoints,
  colors,
  flex,
  mainContainer,
  textSizes,
} from "../styles/vars";
import MasketText from "../common/MasketText";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const Hero = () => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);
  const { t } = useTranslation();
  const text = [t("4")];
  useEffect(() => {
    const handleResize = () => {
      setIsAnimationEnabled(window.innerWidth > 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    setIsAnimationEnabled(window.innerWidth > 768);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <HeroStyled>
      <div className="heroContainer">
        <div className="heroCol">
          <div className="headerMotto">
            <div className="headerTitle">
              <h1>
                <MasketText text={text} enterDelay={4.2} backgroundColor="#3a776396" />
              </h1>
            </div>
            <div className="heroText">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  duration: 1,
                  delay: 4.2,
                }}
              >
                <p>
                {t("5")}
                </p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>

    </HeroStyled>

  );
};

export default Hero;



const HeroStyled = styled.section`
  background-image: url(${HeroImg2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .headerMotto {
    max-width: 820px;
  }
  .headerTitle {
    h1 {
      font-size: 58px;
      line-height: 86px;
      margin-bottom: 30px;
      
    }
  }
  .heroText {
    margin-bottom: 50px;
    p {
      color: #fff;
      font-size: ${textSizes[18]};
      background-color: ${colors.accentColor};
      padding: 5px;
      border-radius: 5px;
    }
  }
  .heroContainer {
    ${mainContainer.main}
  }
  .heroCol {
    ${flex.between}
    height: 100vh;
  }
  .headerServices {
    max-width: 500px;
    background-color: ${colors.orange};
    padding: 40px;
  }
  .headerServicesTitle {
    margin-bottom: 30px;
    h3 {
      text-align: center;
      font-size: ${textSizes[32]};
    }
  }
  .serCol {
    ${flex.center}
    max-width: 350px;
  }
  .serImg {
    flex: 1 0 auto;
  }
  .serItemsTitle {
    margin: 0px 0px 30px 20px;
    h4 {
      margin-bottom: 20px;
    }
    span {
      color: #fff;
    }
  }
  ${breakpoints.laptopL} {
    .headerMotto {
      max-width: 650px;
    }
    .headerTitle {
      h1 {
        font-size: 45px;
        line-height: 65px;
        margin-bottom: 25px;
      }
    }
    .heroText {
      margin-bottom: 30px;
    }
  }
  ${breakpoints.laptop} {
    .headerServices {
      max-width: 368px;
      padding: 22px;
    }
    .serImg {
      flex: 0 1 auto;
    }
    .headerServicesTitle {
      margin-bottom: 15px;
      h3 {
        font-size: ${textSizes[26]};
      }
    }
    .serItemsTitle {
      margin: 0px 0px 20px 20px;
      h4 {
        margin-bottom: 15px;
      }
    }
  }
  @media screen and (max-width: 970px) {
    .heroCol {
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
    }
    .headerMotto {
      margin-top: 70px;
    }
    .headerServices {
      margin-top: 40px;
    }
    .headerServiceAnimation {
      opacity: 1;
      transform: none !important;
    }
  }
  ${breakpoints.mobileL} {
    .headerTitle h1 {
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 20px;
    }
    .headerMotto {
      margin-top: 140px;
    }
    .heroText {
      margin-bottom: 30px;
      p {
        font-size: ${textSizes[16]};
        line-height: ${textSizes[22]};
      }
    }
    .serImg {
      display: none;
    }
    .headerServices {
      max-width: none;
      padding: 15px;
    }
  }
`;
