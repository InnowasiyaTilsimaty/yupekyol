import styled from "styled-components";
import {
  breakpoints,
  colors,
  fonts,
  mainContainer,
  textSizes,
} from "../styles/vars";
import aboutImg from "../assets/img/about.jpg";
import { motion, useInView } from "framer-motion";
import { Divider } from "antd";
import { Reavel } from "../common/Reveal";
import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();

  const stats = [
    { title: t("18"), value: 10 },
    { title: t("19"), value: 4 },
    { title: t("20"), value: 30 },
  ];
  return (
    <AboutStyles id="aboutUs">
      <div className="aboutContainer">
        <div className="aboutCol">
          <div className="aboutTextSide">
            <div className="aboutSectionName">
              <Reavel>
                <span>{t("6")}</span>
              </Reavel>
            </div>
            <div className="aboutTitle">
              <Reavel>
              <h3>{t("7")}</h3>
              </Reavel>
            </div>
            <div className="aboutText">
              <Reavel>
              <p>{t("8")}<br /><br />
                  <span className="aboutListDot"></span> {t("9")} <br />
                  <span className="aboutListDot"></span> {t("10")} <br />
                  {/* <span className="aboutListDot"></span> {t("11")} <br /> */}
                  <span className="aboutListDot"></span> {t("12")} <br />
                  <span className="aboutListDot"></span> {t("13")} <br /><br />
                  {t("14")} <br />
                  {/* <span className="aboutListDot"></span> {t("15")} <br /> */}
                  <span className="aboutListDot"></span> {t("16")} <br />
                  <span className="aboutListDot"></span> {t("161")} <br />
                  <span className="aboutListDot"></span> {t("17")} <br />
                </p>
              </Reavel>
            </div>
          </div>
          <div className="aboutVideoSide">
            <img src={aboutImg} alt="aboutImg" />
          </div>
        </div>
      </div>
      <div className="aboutBottomMain">
      <motion.div
        className="clientsNumberMain"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="aboutTopCol">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <CountUpItem title={stat.title} value={stat.value} />
              {index !== stats.length - 1 && <Divider type="vertical" />}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
      </div>
    </AboutStyles>
  );
};

export default About;





const CountUpItem = ({ title, value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2500; // 2.5 seconds
      const increment = value / (duration / 16); // Adjust for smooth animation

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          clearInterval(counter);
          setCount(value);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [isInView, value]);

  return (
    <motion.div ref={ref} className="aboutTopItem">
      <motion.div className="aboutTopItemNumber">{count}</motion.div>
      <motion.div className="aboutTopItemTitle">{title}</motion.div>
    </motion.div>
  );
};

const AboutStyles = styled.section`
  .aboutContainer {
    ${mainContainer.small}
    padding: 60px 10px;
  }
  .aboutCol {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .aboutTextSide {
    max-width: 650px;
    margin-right: 30px;
  }

  .aboutSectionName {
    margin-bottom: 15px;
    span {
      color: ${colors.accentColor};
      font-size: ${textSizes[18]};
    }
  }
  .aboutTitle {
    margin-bottom: 20px;
    h3 {
      font-size: 56px;
      line-height: 64px;
      font-weight: 600;
    }
  }
  .aboutText {
    p {
      font-family: ${fonts.opensans};
      font-size: ${textSizes[18]};
      font-weight: 700;
    }
  }

  .aboutVideoSide{
    width: 450px;
  }
  .aboutListDot{
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 5px;
    margin-top: 15px;
    padding-top: 8px;
    background-color: ${colors.additionalColor};
    border-radius: 50%;
    position: relative;
    top: -3px;
  }
  .aboutTopCol {
    margin: 25px 0px;
    display: flex;
    justify-content: space-around;
  }
  .aboutTopItem {
    text-align: center;
  }
  .aboutTopItemNumber {
    color: ${colors.accentColor};
    font-size: 42px;
    font-weight: 800;
    line-height: 50px;
  }
  .aboutTopItemTitle {
    text-transform: uppercase;
    color: #3d3d3d;
    font-size: 28px;
    font-weight: 400;
    line-height: 36.46px;
  }
  .aboutBottomMain{
    ${mainContainer.main}
  }



  ${breakpoints.laptop} {
    .aboutContainer {
      padding: 60px 10px;
    }
    .aboutTextSide {
      max-width: 500px;
      margin-right: 20px;
    }
    .aboutTitle {
      margin-bottom: 15px;
      h3 {
        font-size: 40px;
        line-height: 50px;
      }
    }
    .aboutText {
      p {
        font-size: ${textSizes[16]};
      }
    }
    
  }
  ${breakpoints.tablet} {
    .aboutCol {
      flex-direction: column;
      align-items: center;
    }
    
    .aboutTopCol {
        margin: 20px 0px;
        display: flex;
        gap: 20px;
        flex-direction: column;
    }
    .ant-divider-vertical {
        display: none;
    }
  }
  ${breakpoints.mobileL} {
    .aboutContainer {
      margin-top: 50px;
      padding: 40px 10px;
    }
    .aboutTextSide {
      max-width: none;
      margin-right: 0px;
    }
    .aboutTitle {
      margin-bottom: 10px;
      h3 {
        font-size: 29px;
        line-height: 39px;
      }
    }
    .aboutText {
      p {
        font-size: 15px;
      }
    }
    
  }
`;
