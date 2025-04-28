import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpoints } from "../../styles/vars";

const LineItem = styled.div`
  width: 64px;
  height: 7px;
  background-color: ${props => props.$linecolor};

  ${breakpoints.mobileL}{
    width: 40px;
  height: 5px;
  }
`;

const Line = ({ linecolor }) => {
  return <LineItem $linecolor={linecolor}></LineItem>;
};

export default Line;

Line.propTypes = {
    linecolor: PropTypes.string
}
