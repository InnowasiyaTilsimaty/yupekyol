import styled from "styled-components";
import { mainContainer, colors, textSizes } from "../styles/vars";
import { Reavel } from "../common/Reveal";
import serviceImg1 from "../assets/img/ServiceImage1.jpg";
import serviceImg2 from "../assets/img/ServiceImg2.jpg";
import serviceImg4 from "../assets/img/ServiceImg4.jpg";
import serviceImg3 from "../assets/img/ServiceImage3.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    }),
  };
  return (
    <ServicesStyles>
      <div className="servicesContainer">
        <div className="serviceTitleTop">
          <Reavel>
            <span>{t("21")}</span>
          </Reavel>
        </div>
        <div className="servicesCol">
          <motion.div
            className="serviceItem"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={0.4}
          >
            <div className="serviceImg">
              <img src={serviceImg1} alt="serviceImg1" />
            </div>
            <div className="serviceTitle">{t("21")}</div>
            <div className="serviceDesc">{t("22")}</div>
          </motion.div>
          <motion.div
            className="serviceItem"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={0.7}
          >
            <div className="serviceImg">
              <img src={serviceImg4} alt="serviceImg2" />
            </div>
            <div className="serviceTitle">{t("23")}</div>
            <div className="serviceDesc">{t("24")}</div>
          </motion.div>
          <motion.div
            className="serviceItem"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={0.7}
          >
            <div className="serviceImg">
              <img src={serviceImg2} alt="serviceImg2" />
            </div>
            <div className="serviceTitle">{t("231")}</div>
            <div className="serviceDesc">{t("241")}</div>
          </motion.div>
          <motion.div
            className="serviceItem"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={1}
          >
            <div className="serviceImg">
              <img src={serviceImg3} alt="serviceImg3" />
            </div>
            <div className="serviceTitle">{t("25")}</div>
            <div className="serviceDesc">{t("26")}</div>
          </motion.div>
        </div>
      </div>
    </ServicesStyles>
  );
};

export default Services;

const ServicesStyles = styled.div`
  margin-top: 100px;
  .servicesContainer {
    ${mainContainer.main}
  }
  .serviceTitleTop {
    margin-bottom: 15px;
    span {
      color: ${colors.accentColor};
      font-size: ${textSizes[18]};
    }
  }
  .servicesCol {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .serviceItem {
    border-radius: 20px;
    padding: 25px;
    max-width: 315px;
    width: 100%;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    color: #fff;
    text-align: center;
    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    }
  }

  .serviceImg img {
    width: 100%;
    height: 200px;
    border-radius: 15px;
    margin-bottom: 15px;
  }

  .serviceTitle {
    font-size: ${textSizes[16]};
    font-weight: 700;
    color: ${colors.accentColor};
    margin-bottom: 10px;
  }

  .serviceDesc {
    font-size: ${textSizes[14]};
    color: ${colors.textColor};
  }
`;
