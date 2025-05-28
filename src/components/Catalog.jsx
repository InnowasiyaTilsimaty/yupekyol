import styled from "styled-components";
import {
  breakpoints,
  colors,
  fontWeights,
  mainContainer,
} from "../styles/vars";
import { Tabs, Image } from "antd";
import { useState } from "react";
import butter1 from "../assets/img/01.jpg";
import butter2 from "../assets/img/02.jpg";
import butter3 from "../assets/img/03.jpg";
import butter4 from "../assets/img/04.jpg";
import butter5 from "../assets/img/05.jpg";
import butter6 from "../assets/img/06.jpg";
import butter7 from "../assets/img/07.jpg";
import butter8 from "../assets/img/08.jpg";
// import dent1 from "../assets/img/classes03.jpg";
// import dent2 from "../assets/img/classes04.jpg";
// import dent3 from "../assets/img/classes05.jpg";
// import dent4 from "../assets/img/classes06.jpg";
// import dent5 from "../assets/img/classes07.jpg";
// import dent6 from "../assets/img/classes08.jpg";
// import eni1 from "../assets/img/eni/10.png";
// import eni2 from "../assets/img/eni/13.png";
// import eni3 from "../assets/img/eni/3.png";
// import eni4 from "../assets/img/eni/5.png";
// import eni5 from "../assets/img/eni/7.png";
// import eni6 from "../assets/img/eni/8.png";
// import eni7 from "../assets/img/eni/15.png";
// import eni8 from "../assets/img/eni/18.png";
// import eni9 from "../assets/img/eni/19.png";
// import eni10 from "../assets/img/eni/17.png";
// import eni11 from "../assets/img/eni/21.png";
// import eni12 from "../assets/img/eni/23.png";
// import eni13 from "../assets/img/eni/25.png";
// import eni14 from "../assets/img/eni/27.png";
// import eni15 from "../assets/img/eni/29.png";
// import eni16 from "../assets/img/eni/31.png";
// import eni17 from "../assets/img/eni/33.png";
// import chevron1 from "../assets/img/chevron/7.png"
// import chevron2 from "../assets/img/chevron/8.png"
// import chevron3 from "../assets/img/chevron/10.png"
// import chevron4 from "../assets/img/chevron/5.png"
// import chevron5 from "../assets/img/chevron/12.png"
// import chevron6 from "../assets/img/chevron/11.png"
// import box1 from "../assets/img/tara1.jpg";
// import box2 from "../assets/img/tara2.jpg";
import cert1 from "../assets/img/class1.jpg";
import cert2 from "../assets/img/class2.jpg";
import cert3 from "../assets/img/class3.jpg";
import cert4 from "../assets/img/class4.jpg";
import cert5 from "../assets/img/class5.jpg";
import cert6 from "../assets/img/class6.jpg";
import { useTranslation } from "react-i18next";

const Catalog = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const { t } = useTranslation();
  const handlePreviewVisibleChange = (visible) => {
    setPreviewVisible(visible);
    document.body.style.overflow = visible ? "hidden" : "auto";
  };

  const catalogData = {
    butter: [
      {
        key: 1,
        image: butter5,
        title: t("32"),
        desc: t("33"),
      },
      {
        key: 2,
        image: butter2,
        title: t("32"),
        desc: t("34"),
      },
      {
        key: 3,
        image: butter3,
        title: t("32"),
        desc: t("35"),
      },
      {
        key: 4,
        image: butter4,
        title: t("32"),
        desc: t("36"),
      },

      {
        key: 5,
        image: butter1,
        title: t("37"),
        desc: t("38"),
      },
      {
        key: 6,
        image: butter6,
        title: t("37"),
        desc: t("39"),
      },
      {
        key: 7,
        image: butter7,
        title: t("37"),
        desc: t("40"),
      },
      {
        key: 8,
        image: butter8,
        title: t("37"),
        desc: t("41"),
      },
    ],
  };
  return (
    <Client id="catalog">
      <div className="clientContainer">
        <div className="clientTitleSmall">
          <h4>{t("27")}</h4>
        </div>
        <div className="clientTitleMain">
          <h3>{t("27")}</h3>
        </div>
        <div className="catalogTabMain">
          <Tabs defaultActiveKey="butter" type="card" centered>
            <Tabs.TabPane tab="Butter President" key="butter">
              <div className="catalogGrid">
                {catalogData.butter.map((item) => (
                  <div className="catalogItem" key={item.key}>
                    <img src={item.image} alt={item.title} />
                    <span className="brandName">{item.brand}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </Tabs.TabPane>
            {/* <Tabs.TabPane tab="CV Dent" key="svdent">
              <div className="catalogGrid">
                {catalogData.svdent.map((item) => (
                  <div className="catalogItem" key={item.key}>
                    <img src={item.image} alt={item.title} />
                    <span className="brandName">{item.brand}</span>
                    <h4>{item.title}</h4>
                  </div>
                ))}
              </div>
            </Tabs.TabPane>
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
            <Tabs.TabPane tab="Package" key="package">
              <div className="catalogGrid">
                {catalogData.package.map((item) => (
                  <div className="catalogItem" key={item.key}>
                    <img src={item.image} alt={item.title} />
                    <span className="brandName">{item.brand}</span>
                    <h4>{item.title}</h4>
                  </div>
                ))}
              </div>
            </Tabs.TabPane> */}
          </Tabs>
        </div>
      </div>
      <div className="sertificatesMain">
        <div className="clientTitleSmall">
          <h4>{t("43")}</h4>
        </div>
        <div className="clientTitleMain">
          <h3>{t("44")}</h3>
        </div>
        <div className="sertificateGallery">
          <Image.PreviewGroup
            preview={{
              visible: previewVisible,
              onVisibleChange: handlePreviewVisibleChange,
            }}
          >
            <div className="certificateGrid">
              <Image width={200} src={cert1} />
              <Image width={200} src={cert2} />
              <Image width={200} src={cert3} />
              <Image width={200} src={cert4} />
              <Image width={200} src={cert5} />
              <Image width={200} src={cert6} />
            </div>
          </Image.PreviewGroup>
        </div>
      </div>
    </Client>
  );
};

export default Catalog;

const Client = styled.section`
  padding-top: 50px;
  margin-bottom: 100px;
  .clientContainer {
    ${mainContainer.small}
  }
  .clientTitleSmall {
    margin: 30px 0px;
    h4 {
      color: ${colors.accentColor};
      ${fontWeights[600]}
      text-transform: uppercase;
      text-align: center;
    }
  }
  .clientTitleMain {
    h3 {
      text-align: center;
      font-size: 55px;
    }
  }
  .catalogTabMain {
    margin-top: 40px;
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
  .sertificatesMain {
    padding-top: 30px;
  }
  .sertificateGallery {
    ${mainContainer.main}
    margin-top: 30px;
    .certificateGrid {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
  }

  ${breakpoints.tablet} {
    .clientTitleMain {
      h3 {
        font-size: 40px;
      }
    }
    .clientTitleSmall {
      margin: 50px 0px 30px 0px;
    }
  }
  ${breakpoints.mobileL} {
    .clientTitleMain {
      h3 {
        font-size: 30px;
      }
    }
    .clientTitleSmall {
      margin: 30px 0px 22px 0px;
    }
  }
`;
