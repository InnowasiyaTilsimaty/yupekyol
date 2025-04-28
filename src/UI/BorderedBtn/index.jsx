import styled from "styled-components";
import PropTypes from "prop-types";
import {  textSizes, fontWeights, breakpoints } from "../../styles/vars";

const Button = styled.button`
  padding: 16px 40px;
  color: ${props => props.$bordercolor};
  background-color: transparent;
  font-size: ${textSizes["20"]};
  ${fontWeights[500]}
  line-height: ${textSizes["24"]};
  transition: all 0.3s ease-in-out;
  border: 5px solid ${props => props.$bordercolor };
  &:hover {
    color: ${props => props.$hoverbordercolor };
    border: 5px solid ${props => props.$hoverbordercolor};
  }

  ${breakpoints.laptopL} {
    padding: 12px 26px;
    font-size: ${textSizes["18"]};
  }
  ${breakpoints.mobileL}{
    padding: 10px 13px;
    font-size: ${textSizes[14]};
  }
`;

const BorderedBtn = ({ text, bordercolor, hoverbordercolor }) => {
  return (
    <Button $bordercolor={bordercolor} $hoverbordercolor={hoverbordercolor}>
      {text}
    </Button>
  );
};

BorderedBtn.propTypes = {
  text: PropTypes.string.isRequired,
  bordercolor: PropTypes.string,
  hoverbordercolor: PropTypes.string,
};

export default BorderedBtn;
