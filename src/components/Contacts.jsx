import { useRef } from "react";
import styled from "styled-components";

import phoneIcon from "../assets/icons/phone.png";
import messageIcon from "../assets/icons/message.png";
import {
  breakpoints,
  colors,
  flex,
  fontWeights,
  mainContainer,
  textSizes,
} from "../styles/vars";
import { useInView } from "framer-motion";

const Contacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <ContactStyled id="contacts">
      <div className="contactsBannerOne"></div>
      <div
        className="contactsMidMain"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="contactsMidCol">
          <div className="contMidItemAddress">
            <h4>Company Address</h4>
            <div>Address: Turkmenistan, Ashgabat Kemine 178/3 street.</div>
          </div>
          <div className="contMidItemPhone">
            <div className="contMidItemPhoneCol">
              <div className="contMidItemPhoneIcon">
                <img src={phoneIcon} alt="phoneIcon" />
              </div>
              <div className="contMidItemPhoneText">
                <div>Company Phones</div>
                <a href="tel:+99365716993">+993 65716993</a>
              </div>
            </div>
          </div>
          <div className="contMidItemMessage">
            <div className="contMidItemPhoneCol">
              <div className="contMidItemMessageIcon">
                <img src={messageIcon} alt="messageIcon" />
              </div>
              <div className="contMidItemPhoneText">
                <div>Emails</div>
                <a href="mailto:sales@guseynovsolutions.com">
                  sales@guseynovsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactsBannerTwo"></div>
    </ContactStyled>
  );
};

export default Contacts;

const ContactStyled = styled.section`
  position: relative;
 
  .contactsMidMain {
    ${mainContainer.small}
  }
  .contactsMidCol {
    margin-top: -64px;
    ${flex.between}
  }
  .contMidItemPhoneCol {
    ${flex.center}
  }
  .contMidItemPhoneIcon {
    background-color: ${colors.green};
    padding: 10px;
  }
  .contMidItemMessageIcon {
    background-color: ${colors.orange};
    padding: 10px;
  }
  .contMidItemAddress {
    z-index: 2;
    background-color: ${colors.white};
    padding: 50px;
    width: 490px;
    height: 280px;
    ${flex.col}
    justify-content: center;
    -webkit-box-shadow: 0px 0px 18px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 18px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 18px 3px rgba(0, 0, 0, 0.75);
    h4 {
      ${fontWeights[400]}
      margin-bottom: 15px;
    }
    div {
      font-size: ${textSizes[32]};
      ${fontWeights[500]}
    }
  }
  .contMidItemPhoneText {
    margin-left: 15px;
    div {
      text-transform: uppercase;
      ${fontWeights[400]}
      margin-bottom: 10px;
    }
    a {
      font-size: ${textSizes[20]};
      ${fontWeights[600]}
    }
  }
  ${breakpoints.laptopL} {
    .contMidItemAddress {
      padding: 30px;
      width: 360px;
      height: 245px;
      h4 {
        ${fontWeights[400]}
        margin-bottom: 15px;
      }
      div {
        font-size: ${textSizes[24]};
        ${fontWeights[500]}
      }
    }
  }
  ${breakpoints.laptop}{
    .contactsMidMain{
      display: none;
    }
  }
  ${breakpoints.mobileL}{
    .contactsBannerOne {

    height: 180px;
  }
  .contactsBannerTwo {

    height: 180px;
    margin-top: 0px;
  }
  }
`;
