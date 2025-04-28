import styled from "styled-components";
import Line from "../UI/Line";
import { breakpoints, colors, flex } from "../styles/vars";
import whatsapp from "../assets/icons/whatsapp.png";
import telegram from "../assets/icons/telegram.png";
import { useTranslation } from "react-i18next";
import locationIcon from "../assets/icons/locationIcon.png";
import footerPhone from "../assets/icons/footerPhone.png";
import footerMail from "../assets/icons/footerMail.png";
import Magnetic from "../common/Magnetic/Magnetic";

const Footer = () => {
    const { t } = useTranslation();
  return (
    <FooterStyled id="contacts">
      <div className="footerContainerMain">
        <div className="footerCol">
          <div className="footerInputMain">
            <div className="footerInputTitle">
              <h3>{t("3")}</h3>
            </div>
            <div className="footerInputLine">
              <Line linecolor={colors.black} />
            </div>
          </div>
          <div className="footerSocialMain">
            <div className="footerSocialLinks">
              <div className="footerAddressMain">
                <div className="footerAddressItemCol">
                  <div className="footerIcon">
                    <img src={locationIcon} alt="locationIcon" />
                  </div>
                  <div className="footerAddressText firstAddress">
                  {t("45")}
                  </div>
                </div>
                <div className="footerAddressItemCol">
                  <div className="footerIcon">
                    <img src={footerPhone} alt="footerPhone" />
                  </div>
                  <div className="footerAddressText">
                    <a href="tel:+99312488512">+993 12 48 85 12</a>
                  </div>
                </div>
                <div className="footerAddressItemCol">
                  <div className="footerIcon">
                    <img src={footerMail} alt="footerMail" />
                  </div>
                  <div className="footerAddressText">
                    <a href="mailto:info.yyh@sanly.tm">
                    info.yyh@sanly.tm
                    </a>
                  </div>
                  <div className="footerAddressText">
                    <a href="mailto:info@yyh.com.tm">
                    info@yyh.com.tm
                    </a>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <Magnetic>
                    <a
                      href="https://wa.me/79265151607"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={whatsapp} alt="whatsapp" />
                    </a>
                  </Magnetic>
                </li>
                <li>
                  <Magnetic>
                    <a 
                    href="https://t.me/+79265151607"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      <img src={telegram} alt="telegram" />
                    </a>
                  </Magnetic>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  .footerCol {
    display: flex;
  }
  .footerInputMain {
    display: none;
  }
  .footerInputTitle {
    h3 {
      font-size: 54px;
    }
  }

  .footerSocialMain {
    width: 100%;
  }
  .footerAddressMain {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    color: #fff;
  }
  .footerSocialLinks {
    background-color: ${colors.black};
    padding: 60px 10px;
    ul {
      margin-top: 20px;
      ${flex.center}
      flex-wrap: wrap;

      li:not(:first-child) {
        margin-left: 50px;
      }
    }
  }
  .footerAddressItemCol {
    ${flex.flex}
    margin-bottom: 15px;
    .footerAddressText {
      max-width: 325px;
      margin-left: 20px;
    }
    .firstAddress {
      margin-left: 34px;
    }
  }

  /* breakpoints */

  ${breakpoints.tablet} {
    .footerCol {
      flex-direction: column;
    }
    .footerSocialMain {
      width: 100%;
    }
  }
  ${breakpoints.mobileL} {
    .footerIcon {
      display: none;
    }
    .footerAddressMain {
      flex-direction: column;
      align-items: baseline;
    }
    .footerAddressItemCol {
      .footerAddressText {
        max-width: none;
        margin-left: 0px;
      }
      .firstAddress {
        margin-left: 0px;
      }
    }
  }
`;
