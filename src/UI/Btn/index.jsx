import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints, colors, fontWeights, textSizes } from "../../styles/vars";

const Button = styled.button`
  padding: 16px 30px;
  color: #fff;
  background-color: ${colors.accentColor};
  font-size: ${textSizes["20"]};
  ${fontWeights[500]}
  line-height: ${textSizes["24"]};
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  &:hover {
    color: ${colors.orange};
    background-color:${colors.accentColor};
    border: 1px solid ${colors.orange};
  }

  ${breakpoints.laptopL} {
    padding: 9px 16px;
    font-size: ${textSizes["18"]};
  }
`;

const Btn = ({ text }) => {
  return <Button>{text}</Button>;
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Btn;
