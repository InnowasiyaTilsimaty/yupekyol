import Header from "../components/Header";
import Footer from "../components/Footer"
import styled from "styled-components";
import { motion } from "framer-motion";
import oilImage from "../assets/img/oilSection.webp";
import cvDentImage from "../assets/img/CVDentSection.webp";
import packagesImage from "../assets/img/PackagesSection.webp";
import { breakpoints, mainContainer, textSizes, colors } from "../styles/vars";
import eni1 from "../assets/img/eni/10.png";
import eni2 from "../assets/img/eni/13.png";
import eni3 from "../assets/img/eni/3.png";
import eni4 from "../assets/img/eni/5.png";
import eni5 from "../assets/img/eni/7.png";
import eni6 from "../assets/img/eni/8.png";
import eni7 from "../assets/img/eni/15.png";
import eni8 from "../assets/img/eni/18.png";
import eni9 from "../assets/img/eni/19.png";
import eni10 from "../assets/img/eni/17.png";
import eni11 from "../assets/img/eni/21.png";
import eni12 from "../assets/img/eni/23.png";
import eni13 from "../assets/img/eni/25.png";
import eni14 from "../assets/img/eni/27.png";
import eni15 from "../assets/img/eni/29.png";
import eni16 from "../assets/img/eni/31.png";
import eni17 from "../assets/img/eni/33.png";
import chevron1 from "../assets/img/chevron/7.png";
import chevron2 from "../assets/img/chevron/8.png";
import chevron3 from "../assets/img/chevron/10.png";
import chevron4 from "../assets/img/chevron/5.png";
import chevron5 from "../assets/img/chevron/12.png";
import chevron6 from "../assets/img/chevron/11.png";
import dent1 from "../assets/img/classes03.jpg";
import dent2 from "../assets/img/classes04.jpg";
import dent3 from "../assets/img/classes05.jpg";
import dent4 from "../assets/img/classes06.jpg";
import dent5 from "../assets/img/classes07.jpg";
import dent6 from "../assets/img/classes08.jpg";
import box1 from "../assets/img/tara1.jpg";
import box2 from "../assets/img/tara2.jpg";
import box3 from "../assets/img/tara3.webp";
import box4 from "../assets/img/tara4.webp";
import { Divider, Tabs } from "antd";
import { useTranslation } from "react-i18next";
const OtherProducts = () => {
    const { t } = useTranslation();
  const catalogData = {
    oilChevron: [
      { key: 1, image: chevron1, title: "TX Hav Energy 5w-30" },
      { key: 2, image: chevron2, title: "TX Hav Ultra 5w-40" },
      { key: 3, image: chevron3, title: "TX Hav Extra 10w-40" },
      { key: 4, image: chevron4, title: "TX Delo Gold Ultra E 15w-40" },
      { key: 5, image: chevron5, title: "TX Hav Energy 0w-20" },
      { key: 6, image: chevron6, title: "TX Hav Energy 0w-30" },
    ],
    oilEni: [
      {
        key: 1,
        image: eni1,
        title: "ENI i-Sint 5W-30",
      },
      {
        key: 2,
        image: eni1,
        title: "ENI i-Sint 5W-40",
      },
      {
        key: 3,
        image: eni2,
        title: "ENI i-Sint Professional 10W-40",
      },
      {
        key: 4,
        image: eni3,
        title: "ENI i-Sigma Performance E7 15W-40",
      },
      {
        key: 5,
        image: eni4,
        title: "ENI i-Base Professional L 20W-50",
      },
      {
        key: 6,
        image: eni5,
        title: "ENI ATF Multi",
      },
      {
        key: 7,
        image: eni6,
        title: "ENI ROTRA ATF III",
      },
      {
        key: 8,
        image: eni7,
        title: "ENI i-Sigma",
      },
      {
        key: 9,
        image: eni8,
        title: "ENI OSO 46 SE",
      },
      {
        key: 10,
        image: eni9,
        title: "ENI OSO 46 SE",
      },
      {
        key: 11,
        image: eni10,
        title: "ENI Spezial SE",
      },
      {
        key: 12,
        image: eni11,
        title: "ENI LC 2 SE",
      },
      {
        key: 13,
        image: eni12,
        title: "ENI Redy Flexi",
      },
      {
        key: 14,
        image: eni13,
        title: "ENI Spezial Flexi",
      },
      {
        key: 15,
        image: eni14,
        title: "ENI Rotra MP 80w-90",
      },
      {
        key: 16,
        image: eni15,
        title: "ENI Rotra CVT",
      },
      {
        key: 17,
        image: eni16,
        title: "ENI i-Sigma 15w-40",
      },
      {
        key: 18,
        image: eni16,
        title: "ENI Extra FS",
      },
      {
        key: 18,
        image: eni17,
        title: "ENI i-Sint Professional 5w-40",
      },
    ],
  };
  const catalogCVDent = {
    svdent: [
      { key: 1, image: dent1, title: "Toothbrush CV DENT® AURUM 24K" },
      { key: 2, image: dent2, title: "Toothbrush CV DENT® DOT PRO" },
      { key: 3, image: dent3, title: "Toothbrush CV DENT® IN-BRUSH" },
      { key: 4, image: dent4, title: "Toothbrush CV DENT® ORAL CARE+" },
      { key: 5, image: dent5, title: "Toothbrush CV DENT® ORAL PRO" },
      { key: 6, image: dent6, title: "Toothbrush CV DENT® WHITE PLUS" },
    ],
  };
  const catalogPackages = {
     package: [
      {
        key: 1,
        image: box1,
        title: t("42"),
      },
      {
        key: 2,
        image: box2,
        title: t("42"),
      },
      {
        key: 3,
        image: box3,
        title: t("422"),
      },
      {
        key: 4,
        image: box4,
        title: t("422"),
      },
    ],
  };
  return (
    <>
      <Header delayTime={0.5} />
      <OtherProductStyles>
        <div className="productsOilMain">
          <div className="heroContainer">
            <div className="heroCol">
              <motion.div
                className="headerMotto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  duration: 1,
                  delay: 0.5,
                }}
              >
                <div className="headerTitle">
                  <h1>
                  {t("46")}
                  </h1>
                </div>
                <div className="heroText">
                  <div>
                    <p>
                    {t("47")}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="headerImage"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  duration: 1,
                  delay: 0.7,
                }}
              >
                <img src={oilImage} alt="oilImage" />
              </motion.div>
            </div>
            <motion.div
              className="catalogTabMain"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1,
                delay: 0.8,
              }}
            >
              <Tabs defaultActiveKey="Enioil" type="card" centered>
                <Tabs.TabPane tab="ENI Oil" key="Enioil">
                  <div className="catalogGrid">
                    {catalogData.oilEni.map((item) => (
                      <div className="catalogItem" key={item.key}>
                        <img src={item.image} alt={item.title} />
                        <span className="brandName">{item.brand}</span>
                        <h4>{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Chevron Oil" key="oil">
                  <div className="catalogGrid">
                    {catalogData.oilChevron.map((item) => (
                      <div className="catalogItem" key={item.key}>
                        <img src={item.image} alt={item.title} />
                        <span className="brandName">{item.brand}</span>
                        <h4>{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </Tabs.TabPane>
              </Tabs>
            </motion.div>
            <Divider />
            <div className="CVdentMain">
              <div className="heroCol">
                <motion.div
                  className="headerImage"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    duration: 1,
                    delay: 0.7,
                  }}
                >
                  <img src={cvDentImage} alt="oilImage" />
                </motion.div>
                <motion.div
                  className="headerMotto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    duration: 1,
                    delay: 0.5,
                  }}
                >
                  <div className="headerTitle">
                    <h1> {t("48")}</h1>
                  </div>
                  <div className="heroText">
                    <div>
                      <p>
                      {t("49")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="catalogTabMain">
                <Tabs defaultActiveKey="cvDent" type="card" centered>
                  <Tabs.TabPane tab="CV Dent" key="cvDent">
                    <div className="catalogGrid">
                      {catalogCVDent.svdent.map((item) => (
                        <div className="catalogItem" key={item.key}>
                          <img src={item.image} alt={item.title} />
                          <span className="brandName">{item.brand}</span>
                          <h4>{item.title}</h4>
                        </div>
                      ))}
                    </div>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
            <Divider />
            <div className="CVdentMain">
              <div className="heroCol">
                <motion.div
                  className="headerMotto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    duration: 1,
                    delay: 0.5,
                  }}
                >
                  <div className="headerTitle">
                    <h1>
                    {t("50")}
                    </h1>
                  </div>
                  <div className="heroText">
                    <div>
                      <p>
                      {t("51")}
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="headerImage"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    duration: 1,
                    delay: 0.7,
                  }}
                >
                  <img src={packagesImage} alt="packagesImage" />
                </motion.div>
              </div>
              <motion.div
                className="catalogTabMain"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  duration: 1,
                  delay: 0.8,
                }}
              >
                <Tabs defaultActiveKey="Packages" type="card" centered>
                  <Tabs.TabPane tab="Packages" key="Packages">
                    <div className="catalogGrid">
                      {catalogPackages.package.map((item) => (
                        <div className="catalogItem" key={item.key}>
                          <img src={item.image} alt={item.title} />
                          <span className="brandName">{item.brand}</span>
                          <h4>{item.title}</h4>
                        </div>
                      ))}
                    </div>
                  </Tabs.TabPane>
                </Tabs>
              </motion.div>
            </div>
          </div>
        </div>
      </OtherProductStyles>
      <Footer/>
    </>
  );
};

export default OtherProducts;

const OtherProductStyles = styled.div`
  .heroContainer {
    ${mainContainer.main}
  }
  .heroCol {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 40px;
  }
  .headerImage {
    max-width: 500px;
    width: 100%;
    img {
      border-radius: 12px;
    }
  }
  .headerMotto {
    max-width: 600px;
  }
  .headerTitle {
    h1 {
      font-size: 35px;
      line-height: 48px;
      margin-bottom: 20px;
    }
  }
  .heroText {
    margin-bottom: 10px;
    p {
      font-size: ${textSizes[20]};
      padding: 5px;
      border-radius: 5px;
    }
  }
  .catalogTabMain {
    margin-top: 30px;
    padding-bottom: 30px;
  }
  .catalogGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }

  .catalogItem {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }

  .catalogItem img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  .brandName {
    display: block;
    color: ${colors.accentColor};
    font-weight: 500;
    margin-bottom: 5px;
  }

  .catalogItem h4 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .catalogItem p {
    font-size: 14px;
    color: #666;
  }
  .CVdentMain {
    margin-top: 30px;
  }
  ${breakpoints.laptopL} {
    .heroCol {
      padding-top: 160px;
      flex-direction: column;
    }
  }
  ${breakpoints.mobileL} {
    .heroCol {
      padding-top: 120px;
      flex-direction: column;
    }
    .headerTitle h1 {
      font-size: 30px;
      line-height: 42px;
      margin-bottom: 10px;
    }
  }
`;
