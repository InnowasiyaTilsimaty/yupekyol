import { useState } from "react";
import styled from "styled-components";

import logoShort from "../assets/img/favicon1.png";
import {
  breakpoints,
  colors,
  flex,
  fontWeights,
  textSizes,
} from "../styles/vars";
import Select from "../UI/Select/Select";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate, useLocation  } from "react-router-dom";
const Header = ({delayTime}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const scrollToContacts = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setClick(false);
  };

  const items = [
    { label: "English", value: "en" },
    { label: "Русский", value: "ru" },
    { label: "Türkmen", value: "tm" },
  ];

  const changeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage);
  };

  return (
    <HeaderStyled>
      <div className="headerContainer">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 1,
            delay: delayTime,
          }}
          className="header"
        >
          <div className="headerCol">
            <div className="headerLogo" onClick={() => navigate("/")}>
              <div className="logo">
                <img src={logoShort} alt="logo" />
              </div>
              <div className="logoText">
                <div>Ýüpek Ýol Harytlary</div>
              </div>
            </div>
            <div className="headerNav">
              <ul className={click ? "navbarCol active" : "navbarCol"}>
              {location.pathname !== "/products" && (
                  <li onClick={() => scrollToContacts("aboutUs")}>
                    {t("1")}
                  </li>
                )}
                <li onClick={() => navigate("/products")}>
                {t("2")}
                </li>
                <li onClick={() => scrollToContacts("contacts")}>{t("3")}</li>
                <li>
                  <div>
                    <Select
                      items={items}
                      initialValue={
                        i18n.language === "ru" ? "Русский" : "English"
                      }
                      onEdit={(value) => changeLanguage(value)}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div onClick={handleClick} className={click ? "btn active" : "btn"}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  background-color: #fdeedd;
  .headerContainer {
    max-width: 1400px;
    padding: 15px 10px;
    margin: 0 auto;
  }
  .headerCol {
    ${flex.between}
  }

  .headerLogo {
    position: relative;
    z-index: 11;
    ${flex.flex}
    cursor: pointer;
  }
  .logo {
    width: 70px;
  }
  .logoText {
    font-size: 24px;
    margin-left: 10px;
    font-weight: 600;
    color: #bb9d53;
  }
  .headerNav {
    .navbarCol {
      ${flex.flex}
      li {
        font-size: ${textSizes[22]};
        ${fontWeights[600]}
        line-height: ${textSizes[26]};
        color: #bb9d53;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          color: #8b6c1d;
        }
        &:not(:first-child) {
          margin-left: 100px;
        }
      }
    }
  }
  .btn {
    display: none;
  }
  ${breakpoints.laptopL} {

    .headerNav {
      .navbarCol {
        li {
          font-size: ${textSizes[18]};
          ${fontWeights[600]}
          line-height: ${textSizes[24]};
          &:not(:first-child) {
            margin-left: 40px;
          }
        }
      }
    }
  }
  ${breakpoints.laptop} {

    padding: 20px 10px;
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 10;
.headerContainer{
  padding: 0px;
}
    .headerLogo {
      .logoText {
        font-size: ${textSizes[24]};
        line-height: ${textSizes[28]};
        margin-left: 10px;
      }
    }
    .headerNav {
      .navbarCol {
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        right: 100%;
        transition: all 0.5s ease;
        li {
          font-size: ${textSizes[22]};
          &:not(:first-child) {
            margin-top: 20px;
            margin-left: 0px;
          }
        }
      }
      .navbarCol.active {
        background-color: #fff;
        top: 0%;
        right: 0%;
        transition: all 0.5s ease;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 105vh;
      }
    }
    .btn {
      display: block;
      margin-right: 20px;
      z-index: 11;
      width: 50px;
      cursor: pointer;
    }

    span {
      display: block;
      /* width: 100%; */
      border-radius: 3px;
      height: 6px;
      background: ${colors.orange};
      transition: all 0.3s;
      position: relative;
    }

    span + span {
      margin-top: 7px;
    }

    .active span:nth-child(1) {
      animation: ease 0.7s top forwards;
    }

    .not-active span:nth-child(1) {
      animation: ease 0.7s top-2 forwards;
    }

    .active span:nth-child(2) {
      animation: ease 0.7s scaled forwards;
    }

    .not-active span:nth-child(2) {
      animation: ease 0.7s scaled-2 forwards;
    }

    .active span:nth-child(3) {
      animation: ease 0.7s bottom forwards;
    }

    .not-active span:nth-child(3) {
      animation: ease 0.7s bottom-2 forwards;
    }

    @keyframes top {
      0% {
        top: 0;
        transform: rotate(0);
      }
      50% {
        top: 10px;
        transform: rotate(0);
      }
      100% {
        top: 10px;
        transform: rotate(45deg);
      }
    }

    @keyframes top-2 {
      0% {
        top: 10px;
        transform: rotate(45deg);
      }
      50% {
        top: 10px;
        transform: rotate(0deg);
      }
      100% {
        top: 0;
        transform: rotate(0deg);
      }
    }

    @keyframes bottom {
      0% {
        bottom: 0;
        transform: rotate(0);
      }
      50% {
        bottom: 10px;
        transform: rotate(0);
      }
      100% {
        bottom: 15px;
        transform: rotate(135deg);
      }
    }

    @keyframes bottom-2 {
      0% {
        bottom: 10px;
        transform: rotate(135deg);
      }
      50% {
        bottom: 10px;
        transform: rotate(0);
      }
      100% {
        bottom: 0;
        transform: rotate(0);
      }
    }

    @keyframes scaled {
      50% {
        transform: scale(0);
      }
      100% {
        transform: scale(0);
      }
    }

    @keyframes scaled-2 {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  ${breakpoints.mobileL} {
    padding: 15px 10px;
    .logo {
      img {
        width: 50%;
      }
    }
    .headerLogo {
      .logoText {
        font-size: ${textSizes[16]};
        line-height: ${textSizes[22]};
        margin-left: -20px;
      }
    }
    .btn {
      width: 35px;
    }
    span {
      height: 4px;
    }

    span + span {
      margin-top: 5px;
    }
    @keyframes bottom {
      0% {
        bottom: 0;
        transform: rotate(0);
      }
      50% {
        bottom: 10px;
        transform: rotate(0);
      }
      100% {
        bottom: 8px;
        transform: rotate(135deg);
      }
    }
  }
`;
